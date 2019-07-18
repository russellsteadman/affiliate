// url-parse parses and modifies urls
const parseURL = require('url-parse');
// docile stores data relative to DOM elements
const Docile = require('docile');
// log safely implements console.log for older browsers
const log = require('./log');

// Check for MutationObserver
const canObserve = !(typeof window.MutationObserver === 'undefined');

class Affiliate {
    constructor(config) {
        // Extend the configuration
        config = {
            tags: [],
            ...config,
        };
    
        // Make a list of all matching hosts
        let hosts = [];

        for (let i in config.tags) {
            // Convert a single host to an array
            if (typeof config.tags[i].hosts === 'string') config.tags[i].hosts = [config.tags[i].hosts];

            // Extend proper tag configuration
            config.tags[i] = {...{
                hosts: [],
                query: {},
                replace: []
            }, ...config.tags[i]};

            // Append hosts to full list
            hosts = hosts.concat(config.tags[i].hosts);
        }
    
        // Set logging function
        this.log = config.log ? log : () => {};

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
                        if (mutations[i].attributeName !== 'href') continue;

                        let href = mutations[i].target.getAttribute('href');
                        let linkData = Docile.get(mutations[i].target) || {};

                        // Skip links without a modified href
                        if (linkData.is && linkData.is === href) continue;
                    }

                    // Only calls on first mutation
                    if (!emitted) {
                        this.log(false, 'DOM Mutation');
                        emitted = true;
                    }

                    // Scan the node and subnodes if there are any
                    this.traverseNodes(mutations[i].target);
                }
            });
        }

        // Set internal state
        this.state = {
            attached: false,
            config,
            hosts
        };
    }

    traverseNodes(nodeSet) {
        // Default to searching everything
        if (!nodeSet) nodeSet = document.body;

        this.log(false, 'Traversing DOM...');

        // Reduce link collection to array
        let collection = nodeSet.getElementsByTagName('a');
        let nodes = [];
        for (let i in collection) {
            if (collection.hasOwnProperty(i)) nodes[i] = collection[i];
        }

        // If the nodeSet is a single link, turn to array
        if (nodeSet.nodeName.toLowerCase() === 'a') nodes = [nodeSet];

        // Go through each link
        for (let o in nodes) {
            // Check if it is actually linking
            if (!nodes[o] || !nodes[o].getAttribute('href')) continue;

            // Parse the URL via url-parse
            let url = parseURL(nodes[o].getAttribute('href') || '', true);

            // Only modify hosts provided.
            if (this.state.hosts.indexOf(url.host) === -1) continue;
            for (let i in this.state.config.tags) {
                if (this.state.config.tags[i].hosts.indexOf(url.host) >= 0) {
                    this.modifyURL(url, nodes[o], this.state.config.tags[i]);
                }
            }
        }
    }

    modifyURL(url, node, tag) {
        // Check if URL is already modified
        let linkData = Docile.get(node) || {};
        if (linkData.is && linkData.is === url.href) return;

        // Preserve the original URL
        let originalURL = url.href;

        this.log(false, 'Discovered URL: ' + url.href);

        // Change query variables
        url.set('query', {...url.query, ...tag.query});

        // Run the modification function
        if (typeof tag.modify === 'function') {
            try {
                let returnedURL = tag.modify(url);
                url = parseURL(returnedURL.href || returnedURL, true);
            } catch (e) {
                log(true, e);
            }
        }

        // Replace certain parts of the url
        url = url.href;
        for (let i in tag.replace) {
            url = url.replace(tag.replace[i].from, tag.replace[i].to);
        }

        // Update the href tag and save the url to the DOM node
        node.setAttribute('href', url);
        Docile.set(node, {
            was: originalURL,
            is: url
        });
    }

    attach() {
        // Cannot attach twice
        if (this.state.attached) return;

        // Get readyState, or the loading state of the DOM
        let { readyState } = document;

        if (readyState === 'complete' || readyState === 'interactive' || readyState === 'loaded') {
            // Set attached to true
            this.state.attached = true;

            // Run through the entire body tag
            this.traverseNodes();
        } else {
            // Wait until the DOM loads
            return window.addEventListener('DOMContentLoaded', this.attach.bind(this));
        }

        if (canObserve) {
            // Attach the observer
            this.observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
                attributeFilter: ['href']
            });
        } else {
            this.log(false, 'Browser does not support MutationObserver.');
        }
    }

    detach() {
        // Detach the mutation observer
        if (!canObserve) return;
        this.state.attached = false;
        this.observer.disconnect();
        this.log(false, 'Observer disconnected.');
    }
}

module.exports = Affiliate;