var parseURL = require('url-parse');

var inst = [];

var log = function (err, info) {
    if (err) {
        console.error('Affiliate: ', info)
    } else {
        console.log('Affiliate: ', info);
    }
};

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
        if (config.log) log(false, 'Traversing DOM...');
        var nodes = [].slice.call(nodeSet.getElementsByTagName('a'));
        if (config.log) log(false, nodes);
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
        if (node.dataset && node.dataset.modified === 'true') return;
        var originalURL = url.href;
        if (config.log) log(false, 'Discovered URL: ' + url.href);
        url.set('query', Object.assign(url.query, tag.query));
        if (typeof tag.modifyPath === 'function') {
            try {
                url.set('pathname', tag.modifyPath(url.pathname));
            } catch (e) {log(true, e);}
        }
        if (typeof tag.modifyHost === 'function') {
            try {
                url.set('host', tag.modifyHost(url.host));
            } catch (e) {log(true, e);}
        }
        var urlRaw = url.href;
        for (var i in tag.replace) {
            urlRaw = urlRaw.replace(tag.replace[i].from, tag.replace[i].to);
        }
        node.setAttribute('href', urlRaw);
        if (node.dataset) {
            node.dataset.originalHref = originalURL;
            node.dataset.modified = 'true';
        }
    };

    if (extendedMode) {
        this.observer = new MutationObserver(function(mutations) {
            log(false, 'DOM Mutation');
            for (var i in mutations) {
                if (mutations[i].attributeName && mutations[i].attributeName !== 'href') continue;
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
            log(true, 'Browser does not support MutationObserver.');
        }
    }.bind(this);

    this.detach = function () {
        if (extendedMode) {
            log(false, 'Observer disconnected.');
            this.observer.disconnect();
        } else if (config.log) {
            log(true, 'Nothing to detach.');
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
        if (nodes[i].dataset && nodes[i].dataset.modified === 'true') {
            nodes[i].setAttribute('href', nodes[i].dataset.originalHref);
            delete nodes[i].dataset.originalHref;
            delete nodes[i].dataset.modified;
        }
    };
};