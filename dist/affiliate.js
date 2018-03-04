window.Affiliate=function(d){function a(f){if(e[f])return e[f].exports;var g=e[f]={i:f,l:!1,exports:{}};d[f].call(g.exports,g,g.exports,a);g.l=!0;return g.exports}var e={};a.m=d;a.c=e;a.d=function(f,g,h){a.o(f,g)||Object.defineProperty(f,g,{configurable:!1,enumerable:!0,get:h})};a.n=function(f){var g=f&&f.__esModule?function(){return f["default"]}:function(){return f};a.d(g,"a",g);return g};a.o=function(a,g){return Object.prototype.hasOwnProperty.call(a,g)};a.p="";return a(a.s=0)}([function(d,a,e){var f=
e(1),g=e(5),h=[],m=function(){var a={},g;for(g in arguments)for(var f in arguments[g])a[f]=arguments[g][f];return a},p=function(a){if(console&&console.log&&console.error){var g=Array.prototype.slice.call(arguments,1),f=a?console.error:console.log;f=Function.prototype.bind.call(f,console);f.apply(console,["[Affiliate] "].concat(g))}},k=function(a){a=m({log:!1,tags:[]},a);var h=[];for(b in a.tags)a.tags[b]=m({hosts:[],query:{},replace:[]},a.tags[b]),h=h.concat(a.tags[b].hosts);var e=!0,c=!1;var b=window.MutationObserver||
window.WebKitMutationObserver||window.MozMutationObserver;"undefined"===typeof b&&(e=!1);var n=function(b){a.log&&p(!1,"Traversing DOM...");var c=b.getElementsByTagName("a"),n=[];for(e in c)c.hasOwnProperty(e)&&(n[e]=c[e]);"a"===b.nodeName.toLowerCase()&&(n=[b]);a.log&&p(!1,n);for(var u in n)if(b=void 0,(c=n[u])&&c.getAttribute("href")){var e=f(c.getAttribute("href")||"",!0);if(-1!==h.indexOf(e.host))for(b in a.tags)if(0<=a.tags[b].hosts.indexOf(e.host)){var w=void 0,d=e,t=c,k=a.tags[b],r=g.get(t)||
{};if(!r.to||r.to!==d.href){r=d.href;a.log&&p(!1,"Discovered URL: "+d.href);d.set("query",m(d.query,k.query));if("function"===typeof k.modifyPath)try{d.set("pathname",k.modifyPath(d.pathname))}catch(x){p(!0,x)}if("function"===typeof k.modifyHost)try{d.set("host",k.modifyHost(d.host))}catch(x){p(!0,x)}d=d.href;for(w in k.replace)d=d.replace(k.replace[w].from,k.replace[w].to);t.setAttribute("href",d);g.set(t,{href:r,to:d})}}}};e&&(this.observer=new b(function(b){a.log&&p(!1,"DOM Mutation",b);for(var c in b){if("attributes"===
b[c].type){if("href"!==b[c].attributeName)continue;var f=b[c].target.getAttribute("href"),e=g.get(b[c].target)||{};if(e.to&&e.to===f)continue}n(b[c].target)}}));var u=this;this.attach=function(){if(!c){if("complete"===document.readyState||"interactive"===document.readyState)c=!0,n(document.body);else return window.addEventListener("DOMContentLoaded",this.attach);e?u.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0}):a.log&&p(!1,"Browser does not support MutationObserver.")}};
this.detach=function(){e&&(c=!1,u.observer.disconnect(),a.log&&p(!1,"Observer disconnected."))}},l=function(a){a=new k(a);h.push(a);return a};l.instances=function(){return[].concat(h)};l.detachAll=function(){for(var a in h)h[a].detach()};l.revert=function(){l.detachAll();var a=[].slice.call(document.body.getElementsByTagName("a")),f;for(f in a){var e=g.get(a[f]);e&&e.href&&(a[f].setAttribute("href",e.href),g.set(a[f],{}))}};d.exports=l},function(d,a,e){(function(a){function f(c){c=c||a.location||
{};var b={},n=typeof c,f;if("blob:"===c.protocol)b=new m(unescape(c.pathname),{});else if("string"===n)for(f in b=new m(c,{}),v)delete b[f];else if("object"===n){for(f in c)f in v||(b[f]=c[f]);void 0===b.slashes&&(b.slashes=t.test(c.href))}return b}function h(c){c=l.exec(c);return{protocol:c[1]?c[1].toLowerCase():"",slashes:!!c[2],rest:c[3]}}function m(c,b,a){if(!(this instanceof m))return new m(c,b,a);var n=r.slice();var g=typeof b;var e=0;"object"!==g&&"string"!==g&&(a=b,b=null);a&&"function"!==
typeof a&&(a=k.parse);b=f(b);var d=h(c||"");g=!d.protocol&&!d.slashes;this.slashes=d.slashes||g&&b.slashes;this.protocol=d.protocol||b.protocol||"";c=d.rest;for(d.slashes||(n[2]=[/(.*)/,"pathname"]);e<n.length;e++){d=n[e];var q=d[0];var l=d[1];if(q!==q)this[l]=c;else if("string"===typeof q)~(q=c.indexOf(q))&&("number"===typeof d[2]?(this[l]=c.slice(0,q),c=c.slice(q+d[2])):(this[l]=c.slice(q),c=c.slice(0,q)));else if(q=q.exec(c))this[l]=q[1],c=c.slice(0,q.index);this[l]=this[l]||(g&&d[3]?b[l]||"":
"");d[4]&&(this[l]=this[l].toLowerCase())}a&&(this.query=a(this.query));if(g&&b.slashes&&"/"!==this.pathname.charAt(0)&&(""!==this.pathname||""!==b.pathname)){c=this.pathname;b=(b.pathname||"/").split("/").slice(0,-1).concat(c.split("/"));c=b.length;a=b[c-1];n=!1;for(e=0;c--;)"."===b[c]?b.splice(c,1):".."===b[c]?(b.splice(c,1),e++):e&&(0===c&&(n=!0),b.splice(c,1),e--);n&&b.unshift("");"."!==a&&".."!==a||b.push("");this.pathname=b.join("/")}p(this.port,this.protocol)||(this.host=this.hostname,this.port=
"");this.username=this.password="";this.auth&&(d=this.auth.split(":"),this.username=d[0]||"",this.password=d[1]||"");this.origin=this.protocol&&this.host&&"file:"!==this.protocol?this.protocol+"//"+this.host:"null";this.href=this.toString()}var p=e(3),k=e(4),l=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,t=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,r=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],v={hash:1,query:1};m.prototype=
{set:function(c,b,a){switch(c){case "query":"string"===typeof b&&b.length&&(b=(a||k.parse)(b));this[c]=b;break;case "port":this[c]=b;p(b,this.protocol)?b&&(this.host=this.hostname+":"+b):(this.host=this.hostname,this[c]="");break;case "hostname":this[c]=b;this.port&&(b+=":"+this.port);this.host=b;break;case "host":this[c]=b;/:\d+$/.test(b)?(b=b.split(":"),this.port=b.pop(),this.hostname=b.join(":")):(this.hostname=b,this.port="");break;case "protocol":this.protocol=b.toLowerCase();this.slashes=!a;
break;case "pathname":case "hash":b?(a="pathname"===c?"/":"#",this[c]=b.charAt(0)!==a?a+b:b):this[c]=b;break;default:this[c]=b}for(c=0;c<r.length;c++)b=r[c],b[4]&&(this[b[1]]=this[b[1]].toLowerCase());this.origin=this.protocol&&this.host&&"file:"!==this.protocol?this.protocol+"//"+this.host:"null";this.href=this.toString();return this},toString:function(a){a&&"function"===typeof a||(a=k.stringify);var b=this.protocol;b&&":"!==b.charAt(b.length-1)&&(b+=":");b+=this.slashes?"//":"";this.username&&(b+=
this.username,this.password&&(b+=":"+this.password),b+="@");b+=this.host+this.pathname;(a="object"===typeof this.query?a(this.query):this.query)&&(b+="?"!==a.charAt(0)?"?"+a:a);this.hash&&(b+=this.hash);return b}};m.extractProtocol=h;m.location=f;m.qs=k;d.exports=m}).call(a,e(2))},function(d,a){a=function(){return this}();try{a=a||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(a=window)}d.exports=a},function(d,a,e){d.exports=function(a,d){d=d.split(":")[0];a=+a;if(!a)return!1;
switch(d){case "http":case "ws":return 80!==a;case "https":case "wss":return 443!==a;case "ftp":return 21!==a;case "gopher":return 70!==a;case "file":return!1}return 0!==a}},function(d,a,e){var f=Object.prototype.hasOwnProperty;a.stringify=function(a,d){d=d||"";var e=[];"string"!==typeof d&&(d="?");for(var g in a)f.call(a,g)&&e.push(encodeURIComponent(g)+"="+encodeURIComponent(a[g]));return e.length?d+e.join("&"):""};a.parse=function(a){for(var d=/([^=?&]+)=?([^&]*)/g,e={},f;f=d.exec(a);e[decodeURIComponent(f[1].replace(/\+/g,
" "))]=decodeURIComponent(f[2].replace(/\+/g," ")));return e}},function(d,a,e){d.exports=e(6)},function(d,a){var e=0<=["loaded","interactive","complete"].indexOf(document.readyState),f=Function.prototype.bind,g=Array.prototype.slice,h=function(b,a){if(f&&b.bind===f)return f.apply(b,g.call(arguments,1));var c=g.call(arguments,2);return function(){return b.apply(a,c.concat(g.call(arguments)))}},m=function(){if(console&&console.error){var b=Array.prototype.slice.call(arguments);Function.prototype.bind.call(console.error,
console).apply(console,["[Docile] "].concat(b))}},p=function(b){var a=b.getAttribute("data-docile-id");a||(a=Math.random().toString(36).substr(2),b.setAttribute("data-docile-id",a));return a},k=function(b){if(!e)return m("DOM not loaded. Learn more: https://goo.gl/EsYspK"),null;if("object"===typeof b||"string"===typeof b&&(b=document.getElementById(b)))return b;m("Unable to resolve node.")},l=function(b,a){try{document.head.setAttribute("data-docile-store",JSON.stringify({store:b,linkStore:a}))}catch(u){m("Data could not be saved.")}},
t=function(b,a,c){b.linkStore[this.id]=b.linkStore[this.id]||{};if("string"===typeof a){c=k(c);if(!c)return;b.linkStore[this.id][a]=p(c)}else if("object"===typeof a)for(var d in a)this.set(d,a[d]);l(b.store,b.linkStore);return this},r=function(b,a){b.linkStore[this.id]=b.linkStore[this.id]||{};if(a)return"string"!==typeof a?m("Link name must be a string."):document.querySelector('[data-docile-id="'+b.linkStore[this.id][a]+'"]');a={};for(var c in b.linkStore[this.id])a[c]=document.querySelector('[data-docile-id="'+
b.linkStore[this.id][c]+'"]');return a},v=function(b,a){if(a)return b.get(this.get(a));a=this.get();for(var c in a)a[c]=b.get(a[c]);return a};a={};a.get=h(function(b){if(b=k(b))return b=p(b),this.store[b]},a);a.set=h(function(b,a){if(b=k(b))return b=p(b),this.store[b]=a,l(this.store,this.linkStore),this},a);a.link=h(function(b){if(b=k(b)){b=p(b);var a={};a.id=b;a.set=h(t,a,this);a.get=h(r,a,this);a.getData=h(v,a,this);return a}},a);var c=function(){var a={store:{},linkStore:{}};document.head.getAttribute("data-docile-store")||
document.head.setAttribute("data-docile-store",'{"store":{},"linkStore":{}}');try{a=JSON.parse(document.head.getAttribute("data-docile-store"))}catch(n){m("Data could not be resumed.")}return a}();a.store=c.store||{};a.linkStore=c.linkStore||{};window.addEventListener("DOMContentLoaded",function(){e=!0});d.exports=a}]);
