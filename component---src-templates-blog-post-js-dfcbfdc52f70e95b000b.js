(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+c4W":function(t,e,n){var r=n("711d"),o=n("4/ic"),a=n("9ggG"),i=n("9Nap");t.exports=function(t){return a(t)?r(i(t)):o(t)}},"03A+":function(t,e,n){var r=n("JTzB"),o=n("ExA7"),a=Object.prototype,i=a.hasOwnProperty,c=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&i.call(t,"callee")&&!c.call(t,"callee")};t.exports=u},"0Cz8":function(t,e,n){var r=n("Xi7e"),o=n("ebwN"),a=n("e4Nc"),i=200;t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var c=n.__data__;if(!o||c.length<i-1)return c.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(c)}return n.set(t,e),this.size=n.size,this}},"0ycA":function(t,e){t.exports=function(){return[]}},"1hJj":function(t,e,n){var r=n("e4Nc"),o=n("ftKO"),a=n("3A9y");function i(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},"3A9y":function(t,e){t.exports=function(t){return this.__data__.has(t)}},"3WF5":function(t,e,n){var r=n("eUgh"),o=n("ut/Y"),a=n("l9OW"),i=n("Z0cm");t.exports=function(t,e){return(i(t)?r:a)(t,o(e,3))}},"4/ic":function(t,e,n){var r=n("ZWtO");t.exports=function(t){return function(e){return r(e,t)}}},"4sDh":function(t,e,n){var r=n("4uTw"),o=n("03A+"),a=n("Z0cm"),i=n("wJg7"),c=n("shjB"),u=n("9Nap");t.exports=function(t,e,n){for(var l=-1,s=(e=r(e,t)).length,f=!1;++l<s;){var p=u(e[l]);if(!(f=null!=t&&n(t,p)))break;t=t[p]}return f||++l!=s?f:!!(s=null==t?0:t.length)&&c(s)&&i(p,s)&&(a(t)||o(t))}},"6sVZ":function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},"711d":function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},"77Zs":function(t,e,n){var r=n("Xi7e");t.exports=function(){this.__data__=new r,this.size=0}},"7GkX":function(t,e,n){var r=n("b80T"),o=n("A90E"),a=n("MMmD");t.exports=function(t){return a(t)?r(t):o(t)}},"7fqy":function(t,e,n){n("JHok"),t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},A90E:function(t,e,n){var r=n("6sVZ"),o=n("V6Ve"),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}},B8du:function(t,e){t.exports=function(){return!1}},CH3K:function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},CMye:function(t,e,n){var r=n("GoyQ");t.exports=function(t){return t==t&&!r(t)}},DSRE:function(t,e,n){(function(t){var r=n("Kz5y"),o=n("B8du"),a=e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===a?r.Buffer:void 0,u=(c?c.isBuffer:void 0)||o;t.exports=u}).call(this,n("YuTi")(t))},EYWl:function(t,e,n){"use strict";n("E5k/");var r=n("c/e4"),o=n("q1tI"),a=n.n(o),i=n("TJpk"),c=n.n(i),u=n("Wbzz"),l="3236765318";function s(t){var e=t.meta,n=t.image,o=t.title,i=t.description,s=t.slug,f=t.lang,p=void 0===f?"en":f;return a.a.createElement(u.StaticQuery,{query:l,render:function(t){var r=t.site.siteMetadata,u=i||r.description,l=n?r.siteUrl+"/"+n:null,f=""+r.siteUrl+s;return a.a.createElement(c.a,Object.assign({htmlAttributes:{lang:p}},o?{titleTemplate:"%s — "+r.title,title:o}:{title:r.title+" — A blog by Sergey Todyshev"},{meta:[{name:"description",content:u},{property:"og:url",content:f},{property:"og:title",content:o||r.title},{property:"og:description",content:u},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.social.twitter},{name:"twitter:title",content:o||r.title},{name:"twitter:description",content:u}].concat(l?[{property:"og:image",content:l},{name:"twitter:image",content:l}]:[]).concat(e)}))},data:r})}s.defaultProps={meta:[],title:"",slug:""},e.a=s},GDhZ:function(t,e,n){var r=n("wF/u"),o=n("mwIZ"),a=n("hgQt"),i=n("9ggG"),c=n("CMye"),u=n("IOzZ"),l=n("9Nap"),s=1,f=2;t.exports=function(t,e){return i(t)&&c(e)?u(l(t),e):function(n){var i=o(n,t);return void 0===i&&i===e?a(n,t):r(e,i,s|f)}}},HDyB:function(t,e,n){n("pJf4");var r=n("nmnc"),o=n("JHRd"),a=n("ljhN"),i=n("or5M"),c=n("7fqy"),u=n("rEGp"),l=1,s=2,f="[object Boolean]",p="[object Date]",b="[object Error]",m="[object Map]",d="[object Number]",v="[object RegExp]",y="[object Set]",h="[object String]",g="[object Symbol]",j="[object ArrayBuffer]",x="[object DataView]",w=r?r.prototype:void 0,E=w?w.valueOf:void 0;t.exports=function(t,e,n,r,w,k,O){switch(n){case x:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j:return!(t.byteLength!=e.byteLength||!k(new o(t),new o(e)));case f:case p:case d:return a(+t,+e);case b:return t.name==e.name&&t.message==e.message;case v:case h:return t==e+"";case m:var _=c;case y:var A=r&l;if(_||(_=u),t.size!=e.size&&!A)return!1;var S=O.get(t);if(S)return S==e;r|=s,O.set(t,e);var z=i(_(t),_(e),r,w,k,O);return O.delete(t),z;case g:if(E)return E.call(t)==E.call(e)}return!1}},HOxn:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Promise");t.exports=r},IOzZ:function(t,e){t.exports=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}},JC6p:function(t,e,n){var r=n("cq/+"),o=n("7GkX");t.exports=function(t,e){return t&&r(t,e,o)}},JHRd:function(t,e,n){var r=n("Kz5y").Uint8Array;t.exports=r},JLKy:function(t,e,n){"use strict";n("E5k/");var r=n("q1tI"),o=n.n(r);e.a=function(t){var e=t.children,n=t.style,r=void 0===n?{}:n;return o.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},r)},e)}},JTzB:function(t,e,n){var r=n("NykK"),o=n("ExA7"),a="[object Arguments]";t.exports=function(t){return o(t)&&r(t)==a}},Juji:function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},L6NH:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));n("pJf4"),n("q8oJ"),n("8npG"),n("YbXK"),n("cFtU"),n("rzGZ"),n("m210"),n("4DPX"),n("n0hJ");function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){var e=Math.round(t/5);return e>5?new Array(Math.round(e/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(e||1).fill("☕️").join("")+" "+t+" min read"}function i(t,e){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var o=[e,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=t).toLocaleDateString.apply(n,r(o))}},L8xA:function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},LXxW:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a}},MMmD:function(t,e,n){var r=n("lSCD"),o=n("shjB");t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},MvSz:function(t,e,n){n("4DPX");var r=n("LXxW"),o=n("0ycA"),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,c=i?function(t){return null==t?[]:(t=Object(t),r(i(t),(function(e){return a.call(t,e)})))}:o;t.exports=c},O7RO:function(t,e,n){var r=n("CMye"),o=n("7GkX");t.exports=function(t){for(var e=o(t),n=e.length;n--;){var a=e[n],i=t[a];e[n]=[a,i,r(i)]}return e}},"Of+w":function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"WeakMap");t.exports=r},QoRX:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},QqLw:function(t,e,n){var r=n("tadb"),o=n("ebwN"),a=n("HOxn"),i=n("yGk4"),c=n("Of+w"),u=n("NykK"),l=n("3Fdi"),s=l(r),f=l(o),p=l(a),b=l(i),m=l(c),d=u;(r&&"[object DataView]"!=d(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=d(new o)||a&&"[object Promise]"!=d(a.resolve())||i&&"[object Set]"!=d(new i)||c&&"[object WeakMap]"!=d(new c))&&(d=function(t){var e=u(t),n="[object Object]"==e?t.constructor:void 0,r=n?l(n):"";if(r)switch(r){case s:return"[object DataView]";case f:return"[object Map]";case p:return"[object Promise]";case b:return"[object Set]";case m:return"[object WeakMap]"}return e}),t.exports=d},SKAX:function(t,e,n){var r=n("JC6p"),o=n("lQqw")(r);t.exports=o},"UNi/":function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},V6Ve:function(t,e,n){n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var r=n("kekF")(Object.keys,Object);t.exports=r},VaNO:function(t,e){t.exports=function(t){return this.__data__.has(t)}},"Y++M":function(t,e,n){"use strict";var r=n("DFzH"),o=n("dTG6"),a=n("kiRH");t.exports=function(t){for(var e=r(this),n=a(e.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),u=i>2?arguments[2]:void 0,l=void 0===u?n:o(u,n);l>c;)e[c++]=t;return e}},YuTi:function(t,e,n){n("R48M"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},ZCpW:function(t,e,n){var r=n("lm/5"),o=n("O7RO"),a=n("IOzZ");t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},b80T:function(t,e,n){var r=n("UNi/"),o=n("03A+"),a=n("Z0cm"),i=n("DSRE"),c=n("wJg7"),u=n("c6wG"),l=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),s=!n&&o(t),f=!n&&!s&&i(t),p=!n&&!s&&!f&&u(t),b=n||s||f||p,m=b?r(t.length,String):[],d=m.length;for(var v in t)!e&&!l.call(t,v)||b&&("length"==v||f&&("offset"==v||"parent"==v)||p&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||c(v,d))||m.push(v);return m}},"c/e4":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"tsvbits","author":"Sergey Todyshev","description":"Personal blog by Sergey Todyshev","siteUrl":"https://tsvbits.com","social":{"twitter":"@todysh"}}}}}')},c6wG:function(t,e,n){var r=n("dD9F"),o=n("sEf8"),a=n("mdPL"),i=a&&a.isTypedArray,c=i?o(i):r;t.exports=c},"cq/+":function(t,e,n){var r=n("mc0g")();t.exports=r},dD9F:function(t,e,n){var r=n("NykK"),o=n("shjB"),a=n("ExA7"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[r(t)]}},e5cp:function(t,e,n){var r=n("fmRc"),o=n("or5M"),a=n("HDyB"),i=n("seXi"),c=n("QqLw"),u=n("Z0cm"),l=n("DSRE"),s=n("c6wG"),f=1,p="[object Arguments]",b="[object Array]",m="[object Object]",d=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,y,h){var g=u(t),j=u(e),x=g?b:c(t),w=j?b:c(e),E=(x=x==p?m:x)==m,k=(w=w==p?m:w)==m,O=x==w;if(O&&l(t)){if(!l(e))return!1;g=!0,E=!1}if(O&&!E)return h||(h=new r),g||s(t)?o(t,e,n,v,y,h):a(t,e,x,n,v,y,h);if(!(n&f)){var _=E&&d.call(t,"__wrapped__"),A=k&&d.call(e,"__wrapped__");if(_||A){var S=_?t.value():t,z=A?e.value():e;return h||(h=new r),y(S,z,n,v,h)}}return!!O&&(h||(h=new r),i(t,e,n,v,y,h))}},"fR/l":function(t,e,n){var r=n("CH3K"),o=n("Z0cm");t.exports=function(t,e,n){var a=e(t);return o(t)?a:r(a,n(t))}},fmRc:function(t,e,n){var r=n("Xi7e"),o=n("77Zs"),a=n("L8xA"),i=n("gCq4"),c=n("VaNO"),u=n("0Cz8");function l(t){var e=this.__data__=new r(t);this.size=e.size}l.prototype.clear=o,l.prototype.delete=a,l.prototype.get=i,l.prototype.has=c,l.prototype.set=u,t.exports=l},ftKO:function(t,e){var n="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,n),this}},gCq4:function(t,e){t.exports=function(t){return this.__data__.get(t)}},hgQt:function(t,e,n){var r=n("Juji"),o=n("4sDh");t.exports=function(t,e){return null!=t&&o(t,e,r)}},k7Sn:function(t,e){e.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},kekF:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},l9OW:function(t,e,n){var r=n("SKAX"),o=n("MMmD");t.exports=function(t,e){var n=-1,a=o(t)?Array(t.length):[];return r(t,(function(t,r,o){a[++n]=e(t,r,o)})),a}},lQqw:function(t,e,n){var r=n("MMmD");t.exports=function(t,e){return function(n,o){if(null==n)return n;if(!r(n))return t(n,o);for(var a=n.length,i=e?a:-1,c=Object(n);(e?i--:++i<a)&&!1!==o(c[i],i,c););return n}}},"lm/5":function(t,e,n){var r=n("fmRc"),o=n("wF/u"),a=1,i=2;t.exports=function(t,e,n,c){var u=n.length,l=u,s=!c;if(null==t)return!l;for(t=Object(t);u--;){var f=n[u];if(s&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1}for(;++u<l;){var p=(f=n[u])[0],b=t[p],m=f[1];if(s&&f[2]){if(void 0===b&&!(p in t))return!1}else{var d=new r;if(c)var v=c(b,m,p,t,e,d);if(!(void 0===v?o(m,b,a|i,c,d):v))return!1}}return!0}},mc0g:function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),c=i.length;c--;){var u=i[t?c:++o];if(!1===n(a[u],u,a))break}return e}}},mdPL:function(t,e,n){(function(t){var r=n("WFqU"),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o&&r.process,c=function(){try{var t=a&&a.require&&a.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(e){}}();t.exports=c}).call(this,n("YuTi")(t))},n0hJ:function(t,e,n){var r=n("P8UN");r(r.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},or5M:function(t,e,n){var r=n("1hJj"),o=n("QoRX"),a=n("xYSL"),i=1,c=2;t.exports=function(t,e,n,u,l,s){var f=n&i,p=t.length,b=e.length;if(p!=b&&!(f&&b>p))return!1;var m=s.get(t);if(m&&s.get(e))return m==e;var d=-1,v=!0,y=n&c?new r:void 0;for(s.set(t,e),s.set(e,t);++d<p;){var h=t[d],g=e[d];if(u)var j=f?u(g,h,d,e,t,s):u(h,g,d,t,e,s);if(void 0!==j){if(j)continue;v=!1;break}if(y){if(!o(e,(function(t,e){if(!a(y,e)&&(h===t||l(h,t,n,u,s)))return y.push(e)}))){v=!1;break}}else if(h!==g&&!l(h,g,n,u,s)){v=!1;break}}return s.delete(t),s.delete(e),v}},qZTm:function(t,e,n){var r=n("fR/l"),o=n("MvSz"),a=n("7GkX");t.exports=function(t){return r(t,a,o)}},rEGp:function(t,e,n){n("JHok"),t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},sEf8:function(t,e){t.exports=function(t){return function(e){return t(e)}}},seXi:function(t,e,n){var r=n("qZTm"),o=1,a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,i,c,u){var l=n&o,s=r(t),f=s.length;if(f!=r(e).length&&!l)return!1;for(var p=f;p--;){var b=s[p];if(!(l?b in e:a.call(e,b)))return!1}var m=u.get(t);if(m&&u.get(e))return m==e;var d=!0;u.set(t,e),u.set(e,t);for(var v=l;++p<f;){var y=t[b=s[p]],h=e[b];if(i)var g=l?i(h,y,b,e,t,u):i(y,h,b,t,e,u);if(!(void 0===g?y===h||c(y,h,n,i,u):g)){d=!1;break}v||(v="constructor"==b)}if(d&&!v){var j=t.constructor,x=e.constructor;j!=x&&"constructor"in t&&"constructor"in e&&!("function"==typeof j&&j instanceof j&&"function"==typeof x&&x instanceof x)&&(d=!1)}return u.delete(t),u.delete(e),d}},shjB:function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},tadb:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"DataView");t.exports=r},"ut/Y":function(t,e,n){var r=n("ZCpW"),o=n("GDhZ"),a=n("zZ0H"),i=n("Z0cm"),c=n("+c4W");t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?i(t)?o(t[0],t[1]):r(t):c(t)}},"vPK/":function(t,e,n){},"wF/u":function(t,e,n){var r=n("e5cp"),o=n("ExA7");t.exports=function t(e,n,a,i,c){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,a,i,t,c))}},wJg7:function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?n:e)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<e}},xYSL:function(t,e){t.exports=function(t,e){return t.has(e)}},yGk4:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Set");t.exports=r},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return j}));n("E5k/"),n("zGcK"),n("klQ5"),n("sC2a");var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("mwIZ"),c=n.n(i),u=n("3WF5"),l=n.n(u),s=(n("vPK/"),n("7oih")),f=n("EYWl"),p=n("JLKy"),b=n("L6NH"),m=n("p3AD"),d=n("k7Sn"),v=function(t){return d.supportedLanguages[t].replace(/ /g," ")};function y(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var h=function(t){function e(){return t.apply(this,arguments)||this}return y(e,t),e.prototype.render=function(){var t=this.props,e=t.translations,n=t.lang,r=t.languageLink,i=t.editUrl,c=e.filter((function(t){return"ru"!==t})),u=-1!==e.indexOf("ru");return o.a.createElement("div",{className:"translations"},o.a.createElement(p.a,{style:{fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif'}},e.length>0&&o.a.createElement("span",null,u&&o.a.createElement("span",null,"Originally written in:"," ","en"===n?o.a.createElement("b",null,v("en")):o.a.createElement(a.Link,{to:r("en")},"English")," • ","ru"===n?o.a.createElement("b",null,"Русский (авторский перевод)"):o.a.createElement(a.Link,{to:r("ru")},"Русский (авторский перевод)"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("span",null,"Translated by readers into: "),c.map((function(t,e){return o.a.createElement(o.a.Fragment,{key:t},t===n?o.a.createElement("b",null,v(t)):o.a.createElement(a.Link,{to:r(t)},v(t)),e===c.length-1?"":" • ")}))),"en"!==n&&o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("br",null),"ru"!==n&&o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Link,{to:r("en")},"Read the original")," • ",o.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),o.a.createElement(a.Link,{to:"/"+n},"View all translated posts")," ")))},e}(o.a.Component),g=function(t){function e(){return t.apply(this,arguments)||this}return y(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=c()(this.props,"data.site.siteMetadata").siteTitle,r=this.props.pageContext,i=r.previous,u=r.next,p=r.slug,d=r.translations,y=r.translatedLinks,g=t.fields.langKey,j=t.html;y.forEach((function(t){var e="/"+g+t;j=j.replace(new RegExp('"'+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"',"g"),'"'+e+'"')})),(d=d.slice()).sort((function(t,e){return v(t)<v(e)?-1:1})),function(t){switch(t){case"ru":case"bg":Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,"s85H",7));break;case"uk":Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,"s85H",7)),Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"e/YJ",7));break;case"vi":Promise.all([n.e(0),n.e(18)]).then(n.t.bind(null,"Vjog",7)),Promise.all([n.e(0),n.e(17)]).then(n.t.bind(null,"Pf5Y",7));break;case"fa":Promise.all([n.e(0),n.e(16)]).then(n.t.bind(null,"BiVN",7));break;case"ar":Promise.all([n.e(0),n.e(15)]).then(n.t.bind(null,"xpFW",7))}}(g);var x=function(t,e){var n=t.replace(e+"/","");return function(t){return"en"===t?n:""+t+n}}(p,g),w=x("en"),E="https://github.com/tsvbits/tsvbits.com/edit/dev/src/pages/"+w.slice(1,w.length-1)+"/index"+("en"===g?"":"."+g)+".md",k="https://mobile.twitter.com/search?q="+encodeURIComponent("https://tsvbits.com"+w);return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(f.a,{lang:g,title:t.frontmatter.title,description:t.frontmatter.spoiler,slug:t.fields.slug}),o.a.createElement("main",null,o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",{style:{color:"var(--textTitle)"}},t.frontmatter.title),o.a.createElement("div",{className:"tags"},l()(t.frontmatter.title.tags,(function(t,e){return o.a.createElement("span",{key:e},t)}))),o.a.createElement("p",{style:Object.assign(Object.assign({},Object(m.b)(-.2)),{},{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-.8)})},Object(b.a)(t.frontmatter.date,g)," • "+Object(b.b)(t.timeToRead)),d.length>0&&o.a.createElement(h,{translations:d,editUrl:E,languageLink:x,lang:g})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:j}}),o.a.createElement("footer",null,o.a.createElement("p",null,o.a.createElement("a",{href:k,target:"_blank",rel:"noopener noreferrer"},"Discuss on Twitter")," • ",o.a.createElement("a",{href:E,target:"_blank",rel:"noopener noreferrer"},"Edit on GitHub"))))),o.a.createElement("aside",null,o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(m.a)(.25)}},o.a.createElement(a.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},"tsvbits")),o.a.createElement("nav",null,o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,i&&o.a.createElement(a.Link,{to:i.fields.slug,rel:"prev",style:{marginRight:20}},"← ",i.frontmatter.title)),o.a.createElement("li",null,u&&o.a.createElement(a.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →"))))))},e}(o.a.Component),j=(e.default=g,"1123297852")},zZ0H:function(t,e){t.exports=function(t){return t}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-dfcbfdc52f70e95b000b.js.map