/*! For license information please see component---src-templates-blog-post-js-0706f06b19c49b0b334c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?l:c[e.$$typeof]||a}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=l;var i=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(d){var a=m(r);a&&a!==d&&e(t,a,n)}var l=u(r);f&&(l=l.concat(f(r)));for(var c=s(t),y=s(r),h=0;h<l.length;++h){var b=l[h];if(!(o[b]||n&&n[b]||y&&y[b]||c&&c[b])){var g=p(r,b);try{i(t,b,g)}catch(v){}}}}return t}},BvKN:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,m=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,E=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case p:case l:case s:case c:case d:return e;default:switch(e=e&&e.$$typeof){case u:case m:case b:case h:case i:return e;default:return t}}case o:return t}}}function w(e){return k(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=i,t.Element=a,t.ForwardRef=m,t.Fragment=l,t.Lazy=b,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return w(e)||k(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return k(e)===m},t.isFragment=function(e){return k(e)===l},t.isLazy=function(e){return k(e)===b},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===o},t.isProfiler=function(e){return k(e)===s},t.isStrictMode=function(e){return k(e)===c},t.isSuspense=function(e){return k(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===p||e===s||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===i||e.$$typeof===u||e.$$typeof===m||e.$$typeof===v||e.$$typeof===E||e.$$typeof===S||e.$$typeof===g)},t.typeOf=k},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},qT12:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,m=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,E=n?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case p:case l:case s:case c:case d:return e;default:switch(e=e&&e.$$typeof){case u:case m:case b:case h:case i:return e;default:return t}}case o:return t}}}function k(e){return S(e)===p}t.typeOf=S,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=i,t.Element=a,t.ForwardRef=m,t.Fragment=l,t.Lazy=b,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===p||e===s||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===i||e.$$typeof===u||e.$$typeof===m||e.$$typeof===g||e.$$typeof===v||e.$$typeof===E)},t.isAsyncMode=function(e){return k(e)||S(e)===f},t.isConcurrentMode=k,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return S(e)===m},t.isFragment=function(e){return S(e)===l},t.isLazy=function(e){return S(e)===b},t.isMemo=function(e){return S(e)===h},t.isPortal=function(e){return S(e)===o},t.isProfiler=function(e){return S(e)===s},t.isStrictMode=function(e){return S(e)===c},t.isSuspense=function(e){return S(e)===d}},uTUB:function(e,t,r){"use strict";e.exports=r("BvKN")},"vPK/":function(e,t,r){},yZlL:function(e,t,r){"use strict";r.r(t);var n=r("FqMR"),a=r("9Hrx"),o=r("q1tI"),l=r.n(o),c=r("Wbzz"),s=r("8o2o");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=r("uRdJ"),f=r("uTUB"),p=r("2mql"),m=r.n(p);function d(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var y=l.a.createContext();var h={initialChunks:{}};var b=function(e){return e};function g(e){var t=e.defaultResolveComponent,r=void 0===t?b:t,n=e.render,o=e.onLoad;function c(e,t){void 0===t&&(t={});var c=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),p={};function b(e){return t.cacheKey?t.cacheKey(e):c.resolve?c.resolve(e):"static"}function g(e,n,a){var o=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!Object(f.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return m()(a,o,{preload:!0}),o}var v,E=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:b(r)},d(!r.__chunkExtractor||c.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(c.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(c.chunkName(r))),Object(u.a)(n)):(!1!==t.ssr&&(c.isReady&&c.isReady(r)||c.chunkName&&h.initialChunks[c.chunkName(r)])&&n.loadSync(),n)}Object(a.a)(r,e),r.getDerivedStateFromProps=function(e,t){var r=b(e);return i({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var l=r.prototype;return l.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},l.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},l.componentWillUnmount=function(){this.mounted=!1},l.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},l.getCacheKey=function(){return b(this.props)},l.getCache=function(){return p[this.getCacheKey()]},l.setCache=function(e){void 0===e&&(e=void 0),p[this.getCacheKey()]=e},l.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},l.loadSync=function(){if(this.state.loading)try{var e=g(c.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:c.resolve(this.props),chunkName:c.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},l.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=g(t,e.props,{Loadable:k});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},l.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,Object(s.a)(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=c.requireAsync(r)).status="PENDING",this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:c.resolve(e.props),chunkName:c.chunkName(e.props),error:t?t.message:t}),n.status="REJECTED"}))),n},l.render=function(){var e=this.props,r=e.forwardedRef,a=e.fallback,o=(e.__chunkExtractor,Object(s.a)(e,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,c=l.error,u=l.loading,f=l.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(c)throw c;var p=a||t.fallback||null;return u?p:n({fallback:p,result:f,options:t,props:i({},o,{ref:r})})},r}(l.a.Component),S=(v=E,function(e){return l.a.createElement(y.Consumer,null,(function(t){return l.a.createElement(v,Object.assign({__chunkExtractor:t},e))}))}),k=l.a.forwardRef((function(e,t){return l.a.createElement(S,Object.assign({forwardedRef:t},e))}));return k.preload=function(e){c.requireAsync(e)},k.load=function(e){return c.requireAsync(e)},k}return{loadable:c,lazy:function(e,t){return c(e,i({},t,{suspense:!0}))}}}var v=g({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return l.a.createElement(t,r)}}),E=v.loadable,S=v.lazy,k=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),w=k.loadable,O=k.lazy;var P=E;P.lib=w,S.lib=O;var $=P,C=(r("vPK/"),r("7oih")),j=r("EYWl"),x=r("JLKy"),_=r("pOn1"),R=r("L6NH"),M=r("p3AD"),N=r("k7Sn"),L=function(e){return N.supportedLanguages[e].replace(/ /g," ")};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=$((function(){return Promise.all([r.e(2),r.e(22)]).then(r.bind(null,"pN5j"))})),q=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,r=e.lang,n=e.languageLink,a=e.editUrl,o=t.filter((function(e){return"ru"!==e})),s=-1!==t.indexOf("ru");return l.a.createElement("div",{className:"translations"},l.a.createElement(x.a,{style:{fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif'}},t.length>0&&l.a.createElement("span",null,s&&l.a.createElement("span",null,"Originally written in:"," ","en"===r?l.a.createElement("b",null,L("en")):l.a.createElement(c.Link,{to:n("en")},"English")," • ","ru"===r?l.a.createElement("b",null,"Русский (авторский перевод)"):l.a.createElement(c.Link,{to:n("ru")},"Русский (авторский перевод)"),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("span",null,"Translated by readers into: "),o.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:e},e===r?l.a.createElement("b",null,L(e)):l.a.createElement(c.Link,{to:n(e)},L(e)),t===o.length-1?"":" • ")}))),"en"!==r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),"ru"!==r&&l.a.createElement(l.a.Fragment,null,l.a.createElement(c.Link,{to:n("en")},"Read the original")," • ",l.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),l.a.createElement(c.Link,{to:"/"+r},"View all translated posts")," ")))},t}(l.a.Component);function A(e){var t=e.reddit;return t?l.a.createElement("a",{href:t,target:"_blank"},"Discuss on Reddit"):null}function K(e){var t=e.enSlug,r="https://mobile.twitter.com/search?q="+encodeURIComponent("https://tsvbits.com"+t);return l.a.createElement("a",{href:r,target:"_blank"},"Discuss on Twitter")}function z(){return l.a.createElement("div",{className:"buymeacoffee"},l.a.createElement("a",{href:"https://www.buymeacoffee.com/todysh",target:"_blank"},l.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/default-orange.png",alt:"Buy Me A Coffee"})))}t.default=function(e){var t=e.pageContext,n=t.html,a=t.timeToRead,o=t.title,s=t.date,i=t.spoiler,u=t.previous,f=t.next,p=t.slug,m=t.translations,d=t.translatedLinks,y=t.tags,h=t.reddit,b=t.langKey;d.forEach((function(e){var t="/"+b+e;n=n.replace(new RegExp('"'+(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"'),"g"),'"'+t+'"')})),(m=m.slice()).sort((function(e,t){return L(e)<L(t)?-1:1})),function(e){switch(e){case"ru":case"bg":Promise.all([r.e(0),r.e(7)]).then(r.t.bind(null,"EsZP",7)),Promise.all([r.e(0),r.e(5)]).then(r.t.bind(null,"s85H",7));break;case"uk":Promise.all([r.e(0),r.e(7)]).then(r.t.bind(null,"EsZP",7)),Promise.all([r.e(0),r.e(5)]).then(r.t.bind(null,"s85H",7)),Promise.all([r.e(0),r.e(8)]).then(r.t.bind(null,"Mq6Z",7)),Promise.all([r.e(0),r.e(6)]).then(r.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":Promise.all([r.e(0),r.e(8)]).then(r.t.bind(null,"Mq6Z",7)),Promise.all([r.e(0),r.e(6)]).then(r.t.bind(null,"e/YJ",7));break;case"vi":Promise.all([r.e(0),r.e(26)]).then(r.t.bind(null,"Vjog",7)),Promise.all([r.e(0),r.e(25)]).then(r.t.bind(null,"Pf5Y",7));break;case"fa":Promise.all([r.e(0),r.e(24)]).then(r.t.bind(null,"BiVN",7));break;case"ar":Promise.all([r.e(0),r.e(23)]).then(r.t.bind(null,"xpFW",7))}}(b);var g=function(e,t){var r=e.replace(t+"/","");return function(e){return"en"===e?r:""+e+r}}(p,b),v=g("en"),E="https://github.com/tsvbits/tsvbits.com/edit/dev/src/pages/"+v.slice(1,v.length-1)+"/index"+("en"===b?"":"."+b)+".md",S=!["resume","cover","about","sponsor"].some((function(e){return p.toLowerCase().indexOf(e)>=0}));return l.a.createElement(C.a,null,l.a.createElement(j.a,{lang:b,title:o,description:i,slug:p,tags:y}),l.a.createElement("main",{className:"post-page"},l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h1",{style:{color:"var(--textTitle)"}},o),l.a.createElement(_.a,{tags:y}),l.a.createElement("p",{style:D(D({},Object(M.b)(-.2)),{},{display:"block",marginBottom:Object(M.a)(1)})},Object(R.a)(s,b)," • "+Object(R.b)(a)),m.length>0&&l.a.createElement(q,{translations:m,editUrl:E,languageLink:g,lang:b})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),l.a.createElement("footer",null,S?l.a.createElement(z,null):null,l.a.createElement(F,{reddit:h}),l.a.createElement("p",null,l.a.createElement(A,{reddit:h})," • ",l.a.createElement(K,{enSlug:v})," • ",l.a.createElement("a",{href:E,target:"_blank"},"Edit on GitHub"))))),l.a.createElement("aside",null,l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(M.a)(.25)}},l.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},"tsvbits")),l.a.createElement("nav",null,l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,u&&l.a.createElement(c.Link,{to:u.fields.slug,rel:"prev",style:{marginRight:20}},"← ",u.frontmatter.title)),l.a.createElement("li",null,f&&l.a.createElement(c.Link,{to:f.fields.slug,rel:"next"},f.frontmatter.title," →"))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0706f06b19c49b0b334c.js.map