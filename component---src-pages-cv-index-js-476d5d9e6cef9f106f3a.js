(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+YAX":function(e,t,r){var n=r("2nzh"),a=r("1PpB"),o=r("BI4e"),i=r("cqv3");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},"1PpB":function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"2nzh":function(e,t,r){var n=r("DUyk");e.exports=function(e){if(Array.isArray(e))return n(e)}},"6R51":function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}}},"8jRI":function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function i(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var o=i(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(e)}r["%C2"]="�";for(var l=Object.keys(r),c=0;c<l.length;c++){var s=l[c];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},"8yz6":function(e,t,r){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},ATiB:function(e){e.exports=JSON.parse('{"basics":{"name":"Sergey Todyshev","label":"Programmer, simplifier, optimizer","summary":"I\'m a software engineer with 18 years of professional experience. I have expert knowledge in C#, TypeScript and many other languages I use to develop amazing products. I am proactive doer, simplifier and optimizer. Efficiency, readability and simplicity matters for me.","picture":"https://avatars3.githubusercontent.com/u/190322?s=460&u=b87d4e8a9c8b452b1b96f1a6dc615865909e901f&v=4","email":"stodyshev@gmail.com","phone":"+79132017700","website":"https://tsvbits.com","profiles":[{"username":"sergeyt","url":"https://github.com/sergeyt"},{"username":"sergeytodyshev","url":"https://www.linkedin.com/in/sergeytodyshev"}]},"skills":[{"name":"Frontend Development","level":"master","keywords":["HTML","CSS","JavaScript","TypeScript","ReactJS"]},{"name":"Backend Development","level":"master","keywords":["C#","Java","JavaScript","TypeScript"]}],"work":[{"position":"Senior Fullstack Developer","company":"Turing","website":"https://turing.com","summary":"Making language tools to help people communicate better","startDate":"2020-10-01"},{"position":"TechLead","company":"GrapeCity","website":"https://www.grapecity.com","summary":"Making web components and tools for developers","startDate":"2018-10-01","endDate":"2020-10-01"},{"position":"TechLead","company":"Xored","website":"https://www.xored.com","summary":"Development of Spirent Velocity. Leading dev team of 10+ engineers","startDate":"2018-10-01","endDate":"2020-10-01"},{"position":"Fullstack Developer","company":"DataWorks","website":"https://www.dataworks.co","summary":"Development of ActiveReports award winning reporting platform","startDate":"2007-06-01","endDate":"2016-01-01"}],"education":[{"institution":"Institute of Automation and Electrometry","website":"https://www.iae.nsk.su","area":"Applied Mathematics","studyType":"PhD","startDate":"2004-09-01","endDate":"2007-09-01"},{"institution":"Novosibirsk State University","website":"https://www.nsu.ru","area":"Computers, Systems, Networks","studyType":"Specialist","startDate":"1999-09-01","endDate":"2004-07-01","gpa":"4.0"}],"languages":[{"language":"English","fluency":"Advanced B2/C1"},{"language":"Russian","fluency":"Native Speaker"}],"interests":[{"name":"Table Tennis","keywords":["Sport","Health"]},{"name":"Travelling","keywords":["Education"]}],"references":[{"name":"Scott Willeke","email":"scott@willeke.com"},{"name":"Oleg Zaimkin","email":"oleg.zaimkin@grapecity.com"},{"name":"Yuriy Kashnikov","email":"yuriy.kashnikov@protonmail.com"}]}')},BI4e:function(e,t,r){var n=r("DUyk");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},DUyk:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},HsiO:function(e,t,r){var n=r("Z6+o"),a=r("6R51"),o=r("BI4e"),i=r("UlM4");e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()}},JwsL:function(e,t,r){"use strict";var n=r("9Hrx"),a=r("q1tI"),o=r.n(a),i=r("p3AD");function l(){return o.a.createElement("div",{className:"license"},"© Copyright 1981 Sergey Todyshev. All Rights Reserved")}function c(){return o.a.createElement("div",null,o.a.createElement("div",{style:{float:"right"}},o.a.createElement("a",{href:"/tags"},"tags")," •"," ",o.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),o.a.createElement("a",{href:"https://mobile.twitter.com/todysh",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",o.a.createElement("a",{href:"https://github.com/sergeyt",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",o.a.createElement("a",{href:"https://www.linkedin.com/in/sergeytodyshev",target:"_blank",rel:"noopener noreferrer"},"linkedin"),"• ",o.a.createElement("a",{href:"/resume/"},"resume"),o.a.createElement("span",{style:{fontSize:"smaller",marginLeft:100}},"icons by ",o.a.createElement("a",{href:"https://simpleicons.org/"},"simple icons")))}var s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement("footer",{style:{marginTop:Object(i.a)(2.5),paddingTop:Object(i.a)(1)}},o.a.createElement(c,null),o.a.createElement(l,null))},t}(o.a.Component);t.a=s},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("q1tI"),a=r.n(n),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.a.createContext&&a.a.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function s(e){return function(t){return a.a.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.a.createElement(t.tag,l({key:r},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var r,n=e.attr,o=e.size,i=e.title,s=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&a.a.createElement("title",null,i),e.children)};return void 0!==i?a.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},UlM4:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"Z6+o":function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},ZFOp:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},c0go:function(e,t,r){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],l=e[i];(a?-1!==t.indexOf(i):t(i,l,e))&&(r[i]=l)}return r}},cqv3:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"cr+I":function(e,t,r){"use strict";var n=r("HsiO"),a=r("+YAX");function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=r("ZFOp"),c=r("8jRI"),s=r("8yz6"),u=r("c0go");function m(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(e,t){return t.encode?t.strict?l(e):encodeURIComponent(e):e}function p(e,t){return t.decode?c(e):e}function y(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){var t=(e=y(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){m((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&p(r,e).includes(e.arrayFormatSeparator);r=o?p(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return p(t,e)})):null===r?r:p(r,e);n[t]=i};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var i,l=o(e.split("&"));try{for(l.s();!(i=l.n()).done;){var c=i.value;if(""!==c){var u=s(t.decode?c.replace(/\+/g," "):c,"="),f=n(u,2),y=f[0],d=f[1];d=void 0===d?null:["comma","separator"].includes(t.arrayFormat)?d:p(d,t),r(p(y,t),d,a)}}}catch(x){l.e(x)}finally{l.f()}for(var h=0,v=Object.keys(a);h<v.length;h++){var b=v[h],E=a[b];if("object"==typeof E&&null!==E)for(var w=0,k=Object.keys(E);w<k.length;w++){var O=k[w];E[O]=g(E[O],t)}else a[b]=g(E,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((function(e,t){var r=a[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))}t.extract=d,t.parse=h,t.stringify=function(e,t){if(!e)return"";m((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[f(t,e),"[",o,"]"].join("")]:[[f(t,e),"[",f(o,e),"]=",f(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[f(t,e),"[]"].join("")]:[[f(t,e),"[]=",f(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,n){return null==n||0===n.length?r:0===r.length?[[f(t,e),"=",f(n,e)].join("")]:[[r,f(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[f(t,e)]:[[f(t,e),"=",f(n,e)].join("")])}}}}(t),o={},i=0,l=Object.keys(e);i<l.length;i++){var c=l[i];r(c)||(o[c]=e[c])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var a=e[r];return void 0===a?"":null===a?f(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):f(r,t)+"="+f(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),a=n(r,2),o=a[0],i=a[1];return Object.assign({url:o.split("?")[0]||"",query:h(d(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:p(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign({encode:!0,strict:!0},r);var n=y(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),i=Object.assign(o,e.query),l=t.stringify(i,r);l&&(l="?".concat(l));var c=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c="#".concat(f(e.fragmentIdentifier,r))),"".concat(n).concat(l).concat(c)},t.pick=function(e,r,n){n=Object.assign({parseFragmentIdentifier:!0},n);var a=t.parseUrl(e,n),o=a.url,i=a.query,l=a.fragmentIdentifier;return t.stringifyUrl({url:o,query:u(i,r),fragmentIdentifier:l},n)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},mh08:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("cr+I"),i=r.n(o),l=r("VtrM"),c=r("7oih"),s=r("JwsL");var u=r("FqMR");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,l=e.title,c=void 0===l?"GitHub":l,s=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["color","size","title"]);return a.a.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:n,viewBox:"0 0 24 24",ref:t},s),a.a.createElement("title",null,c),a.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))}));function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var y=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,l=e.title,c=void 0===l?"LinkedIn":l,s=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["color","size","title"]);return a.a.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:n,viewBox:"0 0 24 24",ref:t},s),a.a.createElement("title",null,c),a.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))})),d=r("ExVU"),g=r("ma3e");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b="1rem",E=function(e){var t={marginRight:4},r=e.url.toLowerCase();return r.indexOf("github")>=0?a.a.createElement(f,{size:20,style:t}):r.indexOf("linkedin")>=0?a.a.createElement(y,{size:20,style:t}):null},w=function(e){var t=e.items,r=e.title,n=void 0===r?"WORK EXPERIENCE":r;return S(t)?null:a.a.createElement("div",{style:{marginTop:b}},a.a.createElement("h3",{style:{marginBottom:b}},n),t.map((function(e,r){return a.a.createElement("div",{key:r,style:{position:"relative"}},1===t.length?null:a.a.createElement(O,{isLast:r===t.length-1}),a.a.createElement("h3",{style:{marginBottom:0}},e.position),a.a.createElement("h5",{style:{margin:"2px 0",display:"flex",justifyContent:"space-between"}},a.a.createElement("a",{href:e.website,target:"_blank"},e.company||e.organization),a.a.createElement(x,{startDate:e.startDate,endDate:e.endDate})),a.a.createElement("p",null,e.summary))})))},k=function(e){var t=e.education;return S(t)?null:a.a.createElement("div",{style:{marginTop:b}},a.a.createElement("h3",{style:{marginBottom:b}},"EDUCATION"),t.map((function(e,r){return a.a.createElement("div",{key:r,style:{position:"relative"}},1===t.length?null:a.a.createElement(O,{isLast:r===t.length-1}),a.a.createElement("h3",{style:{marginBottom:0}},e.institution),a.a.createElement("h5",{style:{margin:"2px 0",display:"flex",justifyContent:"space-between"}},a.a.createElement("a",{href:e.website,target:"_blank"},e.website),a.a.createElement(x,{startDate:e.startDate,endDate:e.endDate})),a.a.createElement("p",null,e.area))})))},O=function(e){var t=e.isLast;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{position:"absolute",width:24,height:24,border:"1px solid var(--textLink)",borderRadius:"100%",left:-30,top:3,padding:6}},a.a.createElement("div",{style:{width:10,height:10,backgroundColor:"var(--textLink)",borderRadius:"100%"}})),t?null:a.a.createElement("div",{style:{position:"absolute",width:2,left:-19,top:26,bottom:-31,backgroundColor:"var(--textLink)"}}))},x=function(e){var t=e.startDate,r=e.endDate;return a.a.createElement("span",{style:{width:130}},a.a.createElement("span",null,d.DateTime.fromFormat(t,"yyyy-MM-dd").toFormat("MMM yyyy")),a.a.createElement("span",null," - "),a.a.createElement("span",null,r?d.DateTime.fromFormat(r,"yyyy-MM-dd").toFormat("MMM yyyy"):"now"))},j=function(e){var t=e.color,r=e.children;return a.a.createElement("span",{style:{backgroundColor:"secondary"===t?"#48BFE3":"blueviolet",color:"white",borderRadius:4,padding:"0px 4px 2px 4px",marginLeft:4,boxSizing:"border-box",fontSize:"smaller",fontWeight:"bold"}},r)};function S(e){return!e||0===e.length}var C=function(e){var t=e.resume,r=e.style,n=e.dark;return a.a.createElement("div",{style:v(v({display:"flex",alignItems:"center",justifyContent:"center"},r),{},{color:n?"white":void 0})},a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{style:{width:300,marginRight:80}},a.a.createElement("div",{style:{height:150,display:"flex",justifyContent:"center",marginBottom:b}},t.basics.picture?a.a.createElement("img",{src:t.basics.picture,style:{height:150,borderRadius:"100%"}}):a.a.createElement(g.a,{size:150})),a.a.createElement("div",null,a.a.createElement("h3",{style:{marginTop:b,marginBottom:b}},"SUMMARY"),a.a.createElement("p",null,t.basics.summary)),a.a.createElement("div",{style:{marginBottom:b}},a.a.createElement("h3",{style:{marginBottom:b}},"CONTACT"),a.a.createElement("div",null,a.a.createElement("a",{href:"mailto:"+t.basics.email},t.basics.email)),t.basics.phone?a.a.createElement("div",null,a.a.createElement("a",{href:"tel:"+t.basics.phone},t.basics.phone)):null,t.basics.website?a.a.createElement("div",null,a.a.createElement("a",{href:t.basics.website,target:"_blank"},t.basics.website)):null),a.a.createElement("div",{style:{marginBottom:b}},a.a.createElement("h3",{style:{marginBottom:b}},"PROFILES"),(t.basics.profiles||[]).map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},a.a.createElement(E,{url:e.url}),a.a.createElement("a",{href:e.url,target:"_blank"},e.username)))}))),S(t.languages)?null:a.a.createElement("div",{style:{marginBottom:b}},a.a.createElement("h3",{style:{marginBottom:b}},"LANGUAGES"),(t.languages||[]).map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("span",null,e.language),a.a.createElement(j,null,e.fluency))}))),S(t.interests)?null:a.a.createElement("div",null,a.a.createElement("h3",{style:{marginBottom:b}},"INTERESTS"),(t.interests||[]).map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("span",null,e.name),a.a.createElement("div",null,(e.keywords||[]).map((function(e,t){return a.a.createElement(j,{key:t,color:"secondary"},e)}))))})))),a.a.createElement("div",null,a.a.createElement("div",{style:{height:150,display:"flex",alignItems:"center",marginTop:b}},a.a.createElement("div",null,a.a.createElement("h1",null,t.basics.name),a.a.createElement("h5",{style:{textTransform:"uppercase",marginTop:-20}},t.basics.label))),a.a.createElement("div",{style:{marginBottom:b}},a.a.createElement("h3",{style:{marginBottom:b}},"SKILLS"),(t.skills||[]).map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("div",null,a.a.createElement("strong",null,e.name),a.a.createElement(j,null,e.level)),a.a.createElement("div",null,(e.keywords||[]).map((function(e,t){return a.a.createElement(j,{key:t,color:"secondary"},e)}))))}))),a.a.createElement(k,{education:t.education||[]}),a.a.createElement(w,{items:t.work||[]}),a.a.createElement(w,{items:t.volunteer||[],title:"VOLUNTEER WORK"}))))},I=r("ATiB"),A=r("GRpk"),D=function(e){return a.a.createElement(A.a,Object.assign({speed:2,width:800,height:100,viewBox:"0 0 800 100",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),a.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"67",height:"11"}),a.a.createElement("rect",{x:"76",y:"0",rx:"3",ry:"3",width:"140",height:"11"}),a.a.createElement("rect",{x:"127",y:"48",rx:"3",ry:"3",width:"53",height:"11"}),a.a.createElement("rect",{x:"187",y:"48",rx:"3",ry:"3",width:"72",height:"11"}),a.a.createElement("rect",{x:"18",y:"48",rx:"3",ry:"3",width:"100",height:"11"}),a.a.createElement("rect",{x:"0",y:"71",rx:"3",ry:"3",width:"37",height:"11"}),a.a.createElement("rect",{x:"18",y:"23",rx:"3",ry:"3",width:"140",height:"11"}),a.a.createElement("rect",{x:"166",y:"23",rx:"3",ry:"3",width:"173",height:"11"}))};function T(e){return e?Object(l.a)("resume.json?src="+e,(function(){return e.match(/[A-Fa-f0-9]{32}/)?fetch("https://api.github.com/gists/"+e).then((function(e){return e.json()})).then((function(e){return JSON.parse(e.files[Object.keys(e.files)[0]].content)})):fetch((t=q.src,t.startsWith("https://gist.githubusercontent.com/")?t:"https://api.allorigins.win/raw?url="+encodeURIComponent(t))).then((function(e){return e.json()}));var t})):{data:I}}t.default=function(e){var t=T(function(e){return i.a.parse(e?e.search:"")}(e.location).src),r=t.data,o=t.error,l="dark"===function(){var e=Object(n.useState)("undefined"==typeof window?"light":window.__theme),t=e[0],r=e[1];return Object(n.useEffect)((function(){var e=function(){r(window.__theme)};return document.addEventListener("themechange",e),function(){document.removeEventListener("themechange",e)}})),t}();return o?a.a.createElement(c.a,null,a.a.createElement("main",{className:"post-page"},a.a.createElement("div",{className:"error"},"Something goes wrong."))):r?a.a.createElement(c.a,null,a.a.createElement("main",{className:"post-page"},a.a.createElement(C,{resume:r,style:{marginTop:50},dark:l}),a.a.createElement(s.a,null))):a.a.createElement(c.a,null,a.a.createElement("main",{className:"post-page"},a.a.createElement(D,null)))}}}]);
//# sourceMappingURL=component---src-pages-cv-index-js-476d5d9e6cef9f106f3a.js.map