(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{280:function(e,t,r){"use strict";r.r(t);var n=r(50),a=r(281),o=r(284),i=r(0),l=r.n(i),c=r(61);var s=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return l.a.createElement("footer",{style:{marginTop:Object(c.a)(2.5),paddingTop:Object(c.a)(1)}},l.a.createElement("div",{style:{float:"right"}},l.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),l.a.createElement("a",{href:"https://mobile.twitter.com/todysh",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",l.a.createElement("a",{href:"https://github.com/sergeyt",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/sergeytodyshev",target:"_blank",rel:"noopener noreferrer"},"linkedin"),"• ",l.a.createElement("a",{href:"/resume/"},"resume"))},n}(l.a.Component),p=r(271),u=r(286),m=r(287),d=r(272),f=r.n(d);r.d(t,"pageQuery",(function(){return g}));var y=function(e){var t,r;function i(){return e.apply(this,arguments)||this}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.prototype.render=function(){var e=f()(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.langKey,r=(f()(this,"props.data.allMarkdownRemark")||{}).edges||[];return l.a.createElement(p.a,{location:this.props.location,title:e},l.a.createElement(m.a,null),l.a.createElement("aside",null,l.a.createElement(o.a,null)),l.a.createElement("main",null,"en"!==t&&"ru"!==t&&l.a.createElement(u.a,null,"These articles have been"," ",l.a.createElement("a",{href:"https://github.com/gaearon/overreacted.io#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),r.map((function(e){var r=e.node,o=f()(r,"frontmatter.title")||r.fields.slug;return l.a.createElement("article",{key:r.fields.slug},l.a.createElement("header",null,l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(c.a)(1),marginBottom:Object(c.a)(.25)}},l.a.createElement(n.Link,{style:{boxShadow:"none"},to:r.fields.slug,rel:"bookmark"},o)),l.a.createElement("small",null,Object(a.a)(r.frontmatter.date,t)," • "+Object(a.b)(r.timeToRead))),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:r.frontmatter.spoiler}}))}))),l.a.createElement(s,null))},i}(l.a.Component),g=(t.default=y,"3710597169")},281:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));r(117),r(159),r(22),r(2),r(42),r(27),r(12),r(282);function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e,t){var r;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=e).toLocaleDateString.apply(r,n(a))}},282:function(e,t,r){var n=r(1);n(n.P,"Array",{fill:r(283)}),r(116)("fill")},283:function(e,t,r){"use strict";var n=r(21),a=r(158),o=r(24);e.exports=function(e){for(var t=n(this),r=o(t.length),i=arguments.length,l=a(i>1?arguments[1]:void 0,r),c=i>2?arguments[2]:void 0,s=void 0===c?r:a(c,r);s>l;)t[l++]=e;return t}},284:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(285),i=r.n(o),l=r(61);var c=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return a.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2)}},a.a.createElement("img",{src:i.a,alt:"Sergey Todyshev",style:{marginRight:Object(l.a)(.5),marginBottom:0,width:Object(l.a)(2),height:Object(l.a)(2),borderRadius:"50%"}}),a.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",a.a.createElement("a",{href:"https://mobile.twitter.com/todysh"},"Sergey Todyshev"),"."," ","I may write few words here from time to time."))},n}(a.a.Component);t.a=c},285:function(e,t,r){e.exports=r.p+"static/profile-pic-d2d912573ab04387bcdade689656ba65.jpg"},286:function(e,t,r){"use strict";r(6);var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.style,n=void 0===r?{}:r;return a.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},n)},t)}},287:function(e,t,r){"use strict";r(6);var n=r(288),a=r(0),o=r.n(a),i=r(118),l=r.n(i),c=r(50),s="3236765318";function p(e){var t=e.meta,r=e.image,a=e.title,i=e.description,p=e.slug,u=e.lang,m=void 0===u?"en":u;return o.a.createElement(c.StaticQuery,{query:s,render:function(e){var n=e.site.siteMetadata,c=i||n.description,s=r?n.siteUrl+"/"+r:null,u=""+n.siteUrl+p;return o.a.createElement(l.a,Object.assign({htmlAttributes:{lang:m}},a?{titleTemplate:"%s — "+n.title,title:a}:{title:n.title+" — A blog by Sergey Todyshev"},{meta:[{name:"description",content:c},{property:"og:url",content:u},{property:"og:title",content:a||n.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.social.twitter},{name:"twitter:title",content:a||n.title},{name:"twitter:description",content:c}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(t)}))},data:n})}p.defaultProps={meta:[],title:"",slug:""},t.a=p},288:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"tsvbits","author":"Sergey Todyshev","description":"Personal blog by Sergey Todyshev","siteUrl":"https://tsvbits.com","social":{"twitter":"@todysh"}}}}}')}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-26a63c37e9ce2541bb8b.js.map