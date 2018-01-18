var parseURL = require('url-parse');

var inst = [];
var linkStore = {};

var getLink = function (node) {
    return linkStore[node.dataset.affId] || {};
};

var setLink = function (node, href, to) {
    var id = '';
    for (var o = 0; o < 3; o += 1) {
        id += Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
    }
    if (node.dataset.affId) id = node.dataset.affId;
    node.dataset.affId = id;
    linkStore[id] = {
        href: href,
        to: to
    };
};

var log = console.log.bind(window, 'Affiliate: ');
var error = console.error.bind(window, 'Affiliate: ');

var Affiliate = function (config) {
    config = Object.assign({
        log: false,
        tags: []
    }, config);

    var hosts = [];
    for (var i in config.tags) {
        config.tags[i] = Object.assign({
            hosts: [],
            query: {},
            replace: []
        }, config.tags[i]);
        hosts = hosts.concat(config.tags[i].hosts);
    }

    var extendedMode = true;
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    if (typeof MutationObserver === 'undefined') extendedMode = false;

    var traverseNodes = function (nodeSet) {
        if (config.log) log('Traversing DOM...');
        var nodes = [].slice.call(nodeSet.getElementsByTagName('a'));
        if (nodeSet.nodeName.toLowerCase() === 'a') nodes = [nodeSet];
        if (config.log) log(nodes);
        for (var i in nodes) checkURL(nodes[i]);
    };

    var checkURL = function (node) {
        if (!node || !node.getAttribute('href')) return;
        var url = parseURL(node.getAttribute('href') || '', true);
        if (hosts.indexOf(url.host) === -1) return;
        for (var i in config.tags) {
            if (config.tags[i].hosts.indexOf(url.host) !== -1) {
                modifyURL(url, node, config.tags[i]);
            }
        }
    };

    var modifyURL = function (url, node, tag) {
        if (getLink(node).to === url.href) return;
        var originalURL = url.href;
        if (config.log) log('Discovered URL: ' + url.href);
        url.set('query', Object.assign(url.query, tag.query));
        if (typeof tag.modifyPath === 'function') {
            try {
                url.set('pathname', tag.modifyPath(url.pathname));
            } catch (e) {error(e);}
        }
        if (typeof tag.modifyHost === 'function') {
            try {
                url.set('host', tag.modifyHost(url.host));
            } catch (e) {error(e);}
        }
        var urlRaw = url.href;
        for (var i in tag.replace) {
            urlRaw = urlRaw.replace(tag.replace[i].from, tag.replace[i].to);
        }
        node.setAttribute('href', urlRaw);
        setLink(node, originalURL, urlRaw);
    };

    if (extendedMode) {
        this.observer = new MutationObserver(function(mutations) {
            if (config.log) log('DOM Mutation', mutations);
            for (var i in mutations) {
                if (mutations[i].type === 'attributes') {
                    if (mutations[i].attributeName !== 'href') continue;
                    var href = mutations[i].target.getAttribute('href');
                    var old = getLink(mutations[i].target).to;
                    if (old && old === href) continue;
                }
                traverseNodes(mutations[i].target);
            }
        });
    }

    this.attach = function () {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            traverseNodes(document.body);
        } else {
            return document.addEventListener('DOMContentLoaded', this.attach);
        }
        if (extendedMode) {
            this.observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true
            });
        } else if (config.log) {
            error('Browser does not support MutationObserver.');
        }
    }.bind(this);

    this.detach = function () {
        if (extendedMode) {
            if (config.log) log('Observer disconnected.');
            this.observer.disconnect();
        } else if (config.log) {
            error('Nothing to detach.');
        }
    }.bind(this);
};

module.exports = function (config) {
    var aff = new Affiliate(config);
    inst.push(aff);
    return aff;
};

module.exports.instances = function () {
    return [].concat(inst);
};

module.exports.detachAll = function () {
    for (var i in inst) {
        inst[i].detach();
    }
};

module.exports.revert = function () {
    for (var i in inst) {
        inst[i].detach();
    }
    var nodes = [].slice.call(document.body.getElementsByTagName('a'));
    for (var i in nodes) {
        if (nodes[i].dataset.affId) {
            nodes[i].setAttribute('href', getLink(nodes[i]).href);
            delete nodes[i].dataset.affId;
        }
    };
};