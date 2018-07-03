const parseURL = require('url-parse');
const Docile = require('docile');
const log = require('./log');

// Check for MutationObserver
const canObserve = !(typeof window.MutationObserver === 'undefined');

class Affiliate {
    constructor(config) {
        config = {...{
            tags: []
        }, ...config};
    
        let hosts = [];
        for (let i in config.tags) {
            config.tags[i] = {...{
                hosts: [],
                query: {},
                replace: []
            }, ...config.tags[i]};
            hosts = hosts.concat(config.tags[i].hosts);
        }
    
        this.log = config.log ? log : () => {};

        this.log(false, 'New Instance', config);

        if (canObserve) {
            this.observer = new window.MutationObserver((mutations) => {
                this.log(false, 'DOM Mutation');
                for (let i in mutations) {
                    if (mutations[i].type === 'attributes') {
                        if (mutations[i].attributeName !== 'href') continue;
                        let href = mutations[i].target.getAttribute('href');
                        let linkData = Docile.get(mutations[i].target) || {};
                        if (linkData.to && linkData.to === href) continue;
                    }
                    this.traverseNodes(mutations[i].target);
                }
            });
        }

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
            if (!nodes[o] || !nodes[o].getAttribute('href')) return;
            let url = parseURL(nodes[o].getAttribute('href') || '', true);
            if (this.state.hosts.indexOf(url.host) === -1) continue;
            for (let i in this.state.config.tags) {
                if (this.state.config.tags[i].hosts.indexOf(url.host) >= 0) {
                    this.modifyURL(url, nodes[o], this.state.config.tags[i]);
                }
            }
        }
    }

    modifyURL(url, node, tag) {
        // Check if URL is already modified.
        let linkData = Docile.get(node) || {};
        if (linkData.to && linkData.to === url.href) return;

        // Preserve the original URL.
        let originalURL = url.href;

        this.log(false, 'Discovered URL: ' + url.href);

        // Change query variables.
        url.set('query', {...url.query, ...tag.query});

        // Run the modification functions.
        if (typeof tag.modifyPath === 'function') {
            try {
                url.set('pathname', tag.modifyPath(url.pathname));
            } catch (e) {
                log(true, e);
            }
        }
        if (typeof tag.modifyHost === 'function') {
            try {
                url.set('host', tag.modifyHost(url.host));
            } catch (e) {
                log(true, e);
            }
        }

        // Replace certain parts of the url
        let urlRaw = url.href;
        for (let i in tag.replace) {
            urlRaw = urlRaw.replace(tag.replace[i].from, tag.replace[i].to);
        }

        // Update the href tag
        node.setAttribute('href', urlRaw);
        Docile.set(node, {
            href: originalURL,
            to: urlRaw
        });
    }

    attach() {
        if (this.state.attached) return;

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.state.attached = true;
            this.traverseNodes(document.body);
        } else {
            return window.addEventListener('DOMContentLoaded', this.attach.bind(this));
        }

        if (canObserve) {
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
        if (!canObserve) return;
        this.state.attached = false;
        this.observer.disconnect();
        this.log(false, 'Observer disconnected.');
    }
}

module.exports = Affiliate;