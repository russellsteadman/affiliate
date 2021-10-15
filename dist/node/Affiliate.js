"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const features_1 = require("./shared/features");
const log_1 = __importDefault(require("./shared/log"));
const nodeTools_1 = require("./shared/nodeTools");
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
            var _a, _b;
            // Check if URL is already modified
            const linkData = (0, nodeTools_1.getNodeData)(node);
            if (linkData.is && linkData.is === url.href)
                return;
            // Preserve the original URL
            const originalURL = url.href;
            this.log(false, 'Discovered URL: ' + url.href);
            // Change query variables
            if (tag.query) {
                Object.keys((_a = tag.query) !== null && _a !== void 0 ? _a : {}).forEach((key) => {
                    if (typeof tag.query === 'object')
                        url.searchParams.set(key, tag.query[key]);
                });
            }
            // Run the modification function
            if (typeof tag.modify === 'function') {
                try {
                    let returnedURL = tag.modify(url);
                    if (typeof returnedURL === 'object')
                        returnedURL = returnedURL.href;
                    url = new URL(returnedURL, window === null || window === void 0 ? void 0 : window.location.origin);
                }
                catch (e) {
                    (0, log_1.default)(true, e);
                }
            }
            // Replace certain parts of the url
            let modifiedUrl = url.href;
            (_b = tag.replace) === null || _b === void 0 ? void 0 : _b.forEach((replacement) => {
                modifiedUrl = modifiedUrl.replace(replacement.from, replacement.to);
            });
            // Update the href tag and save the url to the DOM node
            node.href = modifiedUrl;
            (0, nodeTools_1.setNodeData)(node, {
                was: originalURL,
                is: url.href,
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
                return this;
            // Get readyState, or the loading state of the DOM
            const { readyState } = document;
            if (readyState === 'complete' || readyState === 'interactive') {
                // Set attached to true
                this.state.attached = true;
                // Run through the entire body tag
                this.traverse();
                if (features_1.hasMutationObserver && this.observer) {
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
                window.addEventListener('DOMContentLoaded', this.attach);
            }
            return this;
        };
        /**
         * Detach the mutation observer
         *
         * @function
         */
        this.detach = () => {
            if (!features_1.hasMutationObserver || !this.observer)
                return this;
            this.state.attached = false;
            this.observer.disconnect();
            this.log(false, 'Observer disconnected.');
            return this;
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
        this.log = config.log ? log_1.default : () => undefined;
        this.log(false, 'New Instance', config);
        // Check is MutationObserver is supported
        if (features_1.hasMutationObserver) {
            // Initialize MutationObserver
            this.observer = new window.MutationObserver((mutations) => {
                // This function is called for every DOM mutation
                // Has a mutation been logged
                let emitted = false;
                mutations.forEach((mutation) => {
                    // If the attributes of the link have been modified
                    if (mutation.type === 'attributes') {
                        // Skip links without an href
                        if (mutation.attributeName !== 'href')
                            return;
                        const href = mutation.target.href;
                        const linkData = (0, nodeTools_1.getNodeData)(mutation.target);
                        // Skip links without a modified href
                        if (linkData.is && linkData.is === href)
                            return;
                    }
                    // Only calls on first mutation
                    if (!emitted) {
                        this.log(false, 'DOM Mutation', mutation);
                        emitted = true;
                    }
                    // Scan the node and subnodes if there are any
                    this.traverse(mutation.target);
                });
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
        if (typeof nodeSet !== 'object' ||
            typeof nodeSet.getElementsByTagName !== 'function')
            return this;
        if (!features_1.hasURL) {
            this.log(true, 'This browser needs a URL polyfill.');
            return this;
        }
        this.log(false, 'Traversing DOM...');
        // Reduce link collection to array
        const collection = nodeSet.getElementsByTagName('a');
        let nodes = Object.values(collection);
        // If the nodeSet is a single link, turn to array
        if (nodeSet.nodeName.toLowerCase() === 'a')
            nodes = [nodeSet];
        this.log(false, `Found ${nodes.length + 1} nodes...`);
        // Go through each link
        nodes.forEach((node) => {
            var _a;
            // Check if it is actually linking
            if (!node || !('href' in node))
                return;
            // Parse the URL natively
            const url = new URL((_a = node.href) !== null && _a !== void 0 ? _a : '', window === null || window === void 0 ? void 0 : window.location.origin);
            // Only modify hosts provided.
            if (this.state.hosts.indexOf(url.host) === -1)
                return;
            this.state.config.tags.forEach((tag) => {
                if (tag.hosts.indexOf(url.host) !== -1) {
                    this.modifyURL(url, node, tag);
                }
            });
        });
        return this;
    }
}
exports.default = Affiliate;
//# sourceMappingURL=Affiliate.js.map