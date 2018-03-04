var parseURL = require('url-parse');
var Docile = require('docile');

var instanceList = [];

var assign = function () {
    var combo = {};

    for (var i in arguments) {
        for (var o in arguments[i]) {
            combo[o] = arguments[i][o];
        }
    }

    return combo;
};

var log = function (isError) {
    if (typeof console === 'object') {
        var args = Array.prototype.slice.call(arguments, 1);
        var logFunc = isError ? console.error : console.log;
        logFunc = Function.prototype.bind.call(logFunc, console);
        logFunc.apply(console, ['[Affiliate] '].concat(args));
    }
};

var Affiliate = function (config) {
    config = assign({
        log: false,
        tags: []
    }, config);

    var hosts = [];
    for (var i in config.tags) {
        config.tags[i] = assign({
            hosts: [],
            query: {},
            replace: []
        }, config.tags[i]);
        hosts = hosts.concat(config.tags[i].hosts);
    }

    var extendedMode = true;
    var attached = false;
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    if (typeof MutationObserver === 'undefined') extendedMode = false;

    var traverseNodes = function (nodeSet) {
        if (config.log) log(false, 'Traversing DOM...');
        var collection = nodeSet.getElementsByTagName('a');
        var nodes = [];
        for (var i in collection) {
            if (collection.hasOwnProperty(i)) nodes[i] = collection[i];
        }
        if (nodeSet.nodeName.toLowerCase() === 'a') nodes = [nodeSet];
        if (config.log) log(false, nodes);
        for (var o in nodes) checkURL(nodes[o]);
    };

    var checkURL = function (node) {
        if (!node || !node.getAttribute('href')) return;
        var url = parseURL(node.getAttribute('href') || '', true);
        if (hosts.indexOf(url.host) === -1) return;
        for (var i in config.tags) {
            if (config.tags[i].hosts.indexOf(url.host) >= 0) {
                modifyURL(url, node, config.tags[i]);
            }
        }
    };

    var modifyURL = function (url, node, tag) {
        // Check if URL is already modified.
        var linkData = Docile.get(node) || {};
        if (linkData.to && linkData.to === url.href) return;

        // Preserve the original URL.
        var originalURL = url.href;

        if (config.log) log(false, 'Discovered URL: ' + url.href);

        // Change query variables.
        url.set('query', assign(url.query, tag.query));

        // Run the modification functions.
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

        // Replace certain parts of the url
        var urlRaw = url.href;
        for (var i in tag.replace) {
            urlRaw = urlRaw.replace(tag.replace[i].from, tag.replace[i].to);
        }

        // Update the href tag
        node.setAttribute('href', urlRaw);
        Docile.set(node, {
            href: originalURL,
            to: urlRaw
        });
    };

    if (extendedMode) {
        this.observer = new MutationObserver(function(mutations) {
            if (config.log) log(false, 'DOM Mutation', mutations);
            for (var i in mutations) {
                if (mutations[i].type === 'attributes') {
                    if (mutations[i].attributeName !== 'href') continue;
                    var href = mutations[i].target.getAttribute('href');
                    var linkData = Docile.get(mutations[i].target) || {};
                    if (linkData.to && linkData.to === href) continue;
                }
                traverseNodes(mutations[i].target);
            }
        });
    }

    var self = this;

    this.attach = function () {
        if (attached) return;
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            attached = true;
            traverseNodes(document.body);
        } else {
            return window.addEventListener('DOMContentLoaded', this.attach);
        }
        if (extendedMode) {
            self.observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true
            });
        } else if (config.log) {
            log(false, 'Browser does not support MutationObserver.');
        }
    };

    this.detach = function () {
        if (!extendedMode) return;
        attached = false;
        self.observer.disconnect();
        if (config.log) log(false, 'Observer disconnected.');
    };
};

var out = function (config) {
    var Instance = new Affiliate(config);
    instanceList.push(Instance);
    return Instance;
};

out.instances = function () {
    return [].concat(instanceList);
};

out.detachAll = function () {
    for (var i in instanceList) {
        instanceList[i].detach();
    }
};

out.revert = function () {
    out.detachAll();
    var nodes = [].slice.call(document.body.getElementsByTagName('a'));
    for (var i in nodes) {
        var linkData = Docile.get(nodes[i]);
        if (linkData && linkData.href) {
            nodes[i].setAttribute('href', linkData.href);
            Docile.set(nodes[i], {});
        }
    }
};

module.exports = out;