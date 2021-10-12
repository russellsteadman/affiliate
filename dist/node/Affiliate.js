"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_parse_1 = __importDefault(require("url-parse"));
const log_1 = __importDefault(require("./shared/log"));
const nodeTools_1 = require("./shared/nodeTools");
// Check for MutationObserver
const canObserve = typeof window === 'object' &&
    !(typeof window.MutationObserver === 'undefined');
/**
 * @class Manages stateful affiliation
 */
class Affiliate {
    constructor(config) {
        var _a;
        this.state = {
            attached: false,
            config: {
                tags: [],
            },
            hosts: [],
        };
        this.observer = undefined;
        /**
         * Modify the URL of a matching link while preserving the original link state
         *
         * @private
         * @function
         * @param {string} url Original url string
         * @param {object} node Anchor link node
         * @param {object} tag Matching configuration tag
         */
        this.modifyURL = (url, node, tag) => {
            var _a;
            // Check if URL is already modified
            let linkData = (0, nodeTools_1.getNodeData)(node);
            if (linkData.is && linkData.is === url.href)
                return;
            // Preserve the original URL
            let originalURL = url.href;
            this.log(false, 'Discovered URL: ' + url.href);
            // Change query variables
            url.set('query', Object.assign(Object.assign({}, url.query), tag.query));
            // Run the modification function
            if (typeof tag.modify === 'function') {
                try {
                    let returnedURL = tag.modify(url);
                    if (typeof returnedURL === 'object')
                        returnedURL = returnedURL.href;
                    url = (0, url_parse_1.default)(returnedURL, true);
                }
                catch (e) {
                    (0, log_1.default)(true, e);
                }
            }
            // Replace certain parts of the url
            let modifiedUrl = url.href;
            (_a = tag.replace) === null || _a === void 0 ? void 0 : _a.forEach((replacement) => {
                modifiedUrl = modifiedUrl.replace(replacement.from, replacement.to);
            });
            // Update the href tag and save the url to the DOM node
            node.href = modifiedUrl;
            (0, nodeTools_1.setNodeData)(node, {
                was: originalURL,
                is: url,
            });
        };
        /**
         * Attach the mutation observer
         *
         * @function
         */
        this.attach = () => {
            // Cannot attach twice, cannot attach for node
            if (this.state.attached || typeof document === 'undefined')
                return;
            // Get readyState, or the loading state of the DOM
            let { readyState } = document;
            if (readyState === 'complete' || readyState === 'interactive') {
                // Set attached to true
                this.state.attached = true;
                // Run through the entire body tag
                this.traverse();
                if (canObserve && this.observer) {
                    // Attach the observer
                    this.observer.observe(document.body, {
                        childList: true,
                        subtree: true,
                        attributes: true,
                        characterData: true,
                        attributeFilter: ['href'],
                    });
                }
                else {
                    this.log(false, 'Browser does not support MutationObserver.');
                }
            }
            else {
                // Wait until the DOM loads
                return window.addEventListener('DOMContentLoaded', this.attach);
            }
        };
        /**
         * Detach the mutation observer
         *
         * @function
         */
        this.detach = () => {
            if (!canObserve || !this.observer)
                return;
            this.state.attached = false;
            this.observer.disconnect();
            this.log(false, 'Observer disconnected.');
        };
        // Extend the configuration
        config = config !== null && config !== void 0 ? config : {};
        config.tags = (_a = config.tags) !== null && _a !== void 0 ? _a : [];
        config.tags.map((tag, i) => {
            if (!config || !config.tags)
                return;
            // Convert a single host to an array
            if (typeof tag.hosts === 'string')
                tag.hosts = [tag.hosts];
            // Extend proper tag configuration
            config.tags[i] = Object.assign({ query: {}, replace: [] }, tag);
            // Append hosts to full list
            this.state.hosts = [
                ...this.state.hosts,
                ...config.tags[i].hosts,
            ];
        });
        // Set logging function
        this.log = config.log ? log_1.default : () => { };
        this.log(false, 'New Instance', config);
        // Check is MutationObserver is supported
        if (canObserve) {
            // Initialize MutationObserver
            this.observer = new window.MutationObserver((mutations) => {
                // This function is called for every DOM mutation
                // Has a mutation been logged
                let emitted = false;
                for (let i in mutations) {
                    // If the attributes of the link have been modified
                    if (mutations[i].type === 'attributes') {
                        // Skip links without an href
                        if (mutations[i].attributeName !== 'href')
                            continue;
                        let href = mutations[i].target.href;
                        let linkData = (0, nodeTools_1.getNodeData)(mutations[i].target);
                        // Skip links without a modified href
                        if (linkData.is && linkData.is === href)
                            continue;
                    }
                    // Only calls on first mutation
                    if (!emitted) {
                        this.log(false, 'DOM Mutation', mutations[i]);
                        emitted = true;
                    }
                    // Scan the node and subnodes if there are any
                    this.traverse(mutations[i].target);
                }
            });
        }
        // Set internal state
        this.state.config = config;
    }
    /**
     * Manual function to search the DOM for unaffiliated links
     *
     * @function
     * @param {object=} nodeSet The node to traverse for links (default: document.body)
     */
    traverse(nodeSet = document.body) {
        var _a;
        if (typeof nodeSet !== 'object' ||
            typeof nodeSet.getElementsByTagName !== 'function')
            return;
        this.log(false, 'Traversing DOM...');
        // Reduce link collection to array
        let collection = nodeSet.getElementsByTagName('a');
        let nodes = Object.values(collection);
        // If the nodeSet is a single link, turn to array
        if (nodeSet.nodeName.toLowerCase() === 'a')
            nodes = [nodeSet];
        // Go through each link
        for (let o in nodes) {
            // Check if it is actually linking
            if (!nodes[o] || 'href' in nodes[o])
                continue;
            // Parse the URL via url-parse
            let url = (0, url_parse_1.default)((_a = nodes[o].href) !== null && _a !== void 0 ? _a : '', true);
            // Only modify hosts provided.
            if (this.state.hosts.indexOf(url.host) === -1)
                continue;
            for (let i in this.state.config.tags) {
                if (this.state.config.tags[i].hosts.indexOf(url.host) !== -1) {
                    this.modifyURL(url, nodes[o], this.state.config.tags[i]);
                }
            }
        }
    }
}
exports.default = Affiliate;
//# sourceMappingURL=Affiliate.js.map