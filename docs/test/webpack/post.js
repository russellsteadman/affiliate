(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Affiliate = __webpack_require__(1);

window.Affiliate = Affiliate;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}([function(t,e,o){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){if("object"===("undefined"==typeof console?"undefined":r(console))){var e=Array.prototype.slice.call(arguments,1),o=t?console.error:console.info;(o=Function.prototype.bind.call(o,console)).apply(console,["[Affiliate] "].concat(e))}}},function(t,e){t.exports=__webpack_require__(3)},function(t,e){t.exports=__webpack_require__(5)},function(t,e,o){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}();var i=o(2),a=o(1),s=o(0),c=!(void 0===window.MutationObserver),f=function(){function t(e){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=r({tags:[]},e);var n=[];for(var i in e.tags)e.tags[i]=r({hosts:[],query:{},replace:[]},e.tags[i]),n=n.concat(e.tags[i].hosts);this.log=e.log?s:function(){},this.log(!1,"New Instance",e),c&&(this.observer=new window.MutationObserver(function(t){for(var e in o.log(!1,"DOM Mutation"),t){if("attributes"===t[e].type){if("href"!==t[e].attributeName)continue;var r=t[e].target.getAttribute("href"),n=a.get(t[e].target)||{};if(n.to&&n.to===r)continue}o.traverseNodes(t[e].target)}})),this.state={attached:!1,config:e,hosts:n}}return n(t,[{key:"traverseNodes",value:function(t){t||(t=document.body),this.log(!1,"Traversing DOM...");var e=t.getElementsByTagName("a"),o=[];for(var r in e)e.hasOwnProperty(r)&&(o[r]=e[r]);for(var n in"a"===t.nodeName.toLowerCase()&&(o=[t]),o){if(!o[n]||!o[n].getAttribute("href"))return;var a=i(o[n].getAttribute("href")||"",!0);if(-1!==this.state.hosts.indexOf(a.host))for(var s in this.state.config.tags)this.state.config.tags[s].hosts.indexOf(a.host)>=0&&this.modifyURL(a,o[n],this.state.config.tags[s])}}},{key:"modifyURL",value:function(t,e,o){var n=a.get(e)||{};if(!n.to||n.to!==t.href){var i=t.href;if(this.log(!1,"Discovered URL: "+t.href),t.set("query",r({},t.query,o.query)),"function"==typeof o.modifyPath)try{t.set("pathname",o.modifyPath(t.pathname))}catch(t){s(!0,t)}if("function"==typeof o.modifyHost)try{t.set("host",o.modifyHost(t.host))}catch(t){s(!0,t)}var c=t.href;for(var f in o.replace)c=c.replace(o.replace[f].from,o.replace[f].to);e.setAttribute("href",c),a.set(e,{href:i,to:c})}}},{key:"attach",value:function(){if(!this.state.attached){if("complete"!==document.readyState&&"interactive"!==document.readyState)return window.addEventListener("DOMContentLoaded",this.attach.bind(this));this.state.attached=!0,this.traverseNodes(document.body),c?this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeFilter:["href"]}):this.log(!1,"Browser does not support MutationObserver.")}}},{key:"detach",value:function(){c&&(this.state.attached=!1,this.observer.disconnect(),this.log(!1,"Observer disconnected."))}}]),t}();t.exports=f},function(t,e,o){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function t(e,o){if("object"===(void 0===e?"undefined":r(e)))for(var n in e)e[n]=t(e[n],o);else if("string"==typeof e)for(var i in e=e.split(o))e[i]=e[i].trim();return e};t.exports=function(){var t=document.getElementById("aff-js");if("object"===(void 0===t?"undefined":r(t))&&null!==t){var e=t.getAttribute("data-aff");if("string"==typeof e){var o=n(n(n(n(e,"!"),":"),","),"="),i=[];for(var a in o){var s={hosts:[],query:{}};for(var c in o[a][0])s.hosts.push(o[a][0][c][0]);for(var f in o[a][1])s.query[o[a][1][f][0]]=o[a][1][f][1];i.push(s)}return{tags:i}}}}},function(t,e){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,e,o){"use strict";(function(e){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=o(1),i=o(4),a=o(3),s=o(0);e.instanceList=e.instanceList||[];var c=function(t){var o=new a(t);return e.instanceList.push(o),o};c.instances=function(){return[].concat(e.instanceList)},c.detachAll=function(){for(var t in e.instanceList)e.instanceList[t].detach()},c.revert=function(){c.detachAll();var t=[].slice.call(document.body.getElementsByTagName("a"));for(var e in t){var o=n.get(t[e]);o&&o.href&&(t[e].setAttribute("href",o.href),n.set(t[e],{}))}};try{var f=i();if("object"===(void 0===f?"undefined":r(f))){var u=c(f);s(!1,u),c.automatic=u,u.attach()}}catch(t){s(!0,t)}t.exports=c}).call(this,o(5))}]);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/** @module docile */
module.exports = __webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var domReady = ['loaded', 'interactive', 'complete'].indexOf(document.readyState) >= 0;

var attrId = 'data-docile-id';
var attrStore = 'data-docile-store';

var nativeBind = Function.prototype.bind;
var slice = Array.prototype.slice;

var bindTo = function (func, context) {
    if (nativeBind && func.bind === nativeBind) {
        return nativeBind.apply(func, slice.call(arguments, 1));
    }
    var args = slice.call(arguments, 2);
    return function () {
        return func.apply(context, args.concat(slice.call(arguments)));
    };
};

var error = function () {
    if (typeof console === 'object') {
        var args = Array.prototype.slice.call(arguments);
        var logFunc = Function.prototype.bind.call(console.error, console);
        logFunc.apply(console, ['[Docile] '].concat(args));
    }
};

var createId = function (node) {
    var id = node.getAttribute(attrId);
    if (!id) {
        id = Math.random().toString(36).substr(2);
        node.setAttribute(attrId, id);
        return id;
    }
    return id;
};

var findNode = function (node) {
    if (!domReady) {
        error('DOM not loaded. Learn more: https://goo.gl/EsYspK');
        return null;
    }
    if (typeof node === 'object') {
        return node;
    } else if (typeof node === 'string') {
        node = document.getElementById(node);
        if (node) return node;
    }
    error('Unable to resolve node.');
};

var findById = function (id) {
    return document.querySelector('[' + attrId + '="' + id + '"]');
};

var revive = function () {
    var data = {store:{},linkStore:{}};
    if (!document.head.getAttribute(attrStore)) document.head.setAttribute(attrStore, '{"store":{},"linkStore":{}}');
    try {
        data = JSON.parse(document.head.getAttribute(attrStore));
    } catch (e) {
        error('Data could not be resumed.');
    }
    return data;
};

var persist = function (storeData, linkStoreData) {
    try {
        document.head.setAttribute(attrStore, JSON.stringify({store: storeData, linkStore: linkStoreData}));
    } catch (e) {
        error('Data could not be saved.');
    }
};

var set = function (node, data) {
    node = findNode(node);
    if (!node) return;
    var id = createId(node);
    this.store[id] = data;
    persist(this.store, this.linkStore);
    return this;
};

var get = function (node) {
    node = findNode(node);
    if (!node) return;
    var id = createId(node);
    return this.store[id];
};

var setLink = function (main, alias, node) {
    main.linkStore[this.id] = main.linkStore[this.id] || {};
    if (typeof alias === 'string') {
        node = findNode(node);
        if (!node) return;
        main.linkStore[this.id][alias] = createId(node);
    } else if (typeof alias === 'object') {
        for (var i in alias) {
            this.set(i, alias[i]);
        }
    }
    persist(main.store, main.linkStore);
    return this;
};

var getLink = function (main, alias) {
    main.linkStore[this.id] = main.linkStore[this.id] || {};
    if (alias) {
        if (typeof alias !== 'string') return error('Link name must be a string.');
        return findById(main.linkStore[this.id][alias]);
    } else {
        var links = {};
        for (var i in main.linkStore[this.id]) {
            links[i] = findById(main.linkStore[this.id][i]);
        }
        return links;
    }
};

var getLinkData = function (main, alias) {
    if (alias) {
        return main.get(this.get(alias));
    } else {
        var listLinks = this.get();
        for (var i in listLinks) {
            listLinks[i] = main.get(listLinks[i]);
        }
        return listLinks;
    }
};

var link = function (node) {
    node = findNode(node);
    if (!node) return;
    var id = createId(node);
    var DocileLink = new Object();
    DocileLink.id = id;
    DocileLink.set = bindTo(setLink, DocileLink, this);
    DocileLink.get = bindTo(getLink, DocileLink, this);
    DocileLink.getData = bindTo(getLinkData, DocileLink, this);
    return DocileLink;
};

/**
 * Stores data about DOM nodes.
 * @property {function} set - Set data
 * @property {function} get - Get data
 * @property {function} link - Links nodes
 */
var Docile = new Object();
/**
 * @param {(string|Object)} node - The DOM node or node id
 */
Docile.get = bindTo(get, Docile);
/**
 * @param {(string|Object)} node - The DOM node or node id
 * @param {*} data - The data to be stored
 */
Docile.set = bindTo(set, Docile);
/**
 * @param {(string|Object)} node - The DOM node for accessing a link
 */
Docile.link = bindTo(link, Docile);

var initialData = revive();
Docile.store = initialData.store || {};
Docile.linkStore = initialData.linkStore || {};

window.addEventListener('DOMContentLoaded', function () {
    domReady = true;
});

module.exports = Docile;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(7)
  , qs = __webpack_require__(8)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ })
/******/ ]);
});