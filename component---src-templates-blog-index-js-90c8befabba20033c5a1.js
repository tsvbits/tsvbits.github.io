(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{EYWl:function(e,t,r){"use strict";r("E5k/");var n=r("c/e4"),a=r("q1tI"),o=r.n(a),i=r("TJpk"),l=r.n(i),c=r("Wbzz"),s="3236765318";function p(e){var t=e.meta,r=e.image,a=e.title,i=e.description,p=e.slug,u=e.lang,m=void 0===u?"en":u;return o.a.createElement(c.StaticQuery,{query:s,render:function(e){var n=e.site.siteMetadata,c=i||n.description,s=r?n.siteUrl+"/"+r:null,u=""+n.siteUrl+p;return o.a.createElement(l.a,Object.assign({htmlAttributes:{lang:m}},a?{titleTemplate:"%s — "+n.title,title:a}:{title:n.title+" — A blog by Sergey Todyshev"},{meta:[{name:"description",content:c},{property:"og:url",content:u},{property:"og:title",content:a||n.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.social.twitter},{name:"twitter:title",content:a||n.title},{name:"twitter:description",content:c}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(t)}))},data:n})}p.defaultProps={meta:[],title:"",slug:""},t.a=p},JLKy:function(e,t,r){"use strict";r("E5k/");var n=r("q1tI"),a=r.n(n);t.a=function(e){var t=e.children,r=e.style,n=void 0===r?{}:r;return a.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},n)},t)}},L6NH:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("n0hJ");function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function i(e,t){var r;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=e).toLocaleDateString.apply(r,n(a))}},SbOt:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("caJ7"),i=r.n(o),l=r("p3AD");var c=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return a.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:Object(l.a)(2)}},a.a.createElement("img",{src:i.a,alt:"Sergey Todyshev",style:{marginRight:Object(l.a)(.5),marginBottom:0,width:Object(l.a)(2),height:Object(l.a)(2),borderRadius:"50%"}}),a.a.createElement("div",{style:{maxWidth:500}},"Hey, here is ",a.a.createElement("a",{href:"https://github.com/sergeyt"},"SergeyT"),"'s pages."," ",a.a.createElement("a",{href:"/about"},"More about me")))},n}(a.a.Component);t.a=c},TshS:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return h}));var n=r("Wbzz"),a=r("L6NH"),o=r("SbOt"),i=r("q1tI"),l=r.n(i),c=r("p3AD");var s=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return l.a.createElement("footer",{style:{marginTop:Object(c.a)(2.5),paddingTop:Object(c.a)(1)}},l.a.createElement("div",{style:{float:"right"}},l.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),l.a.createElement("a",{href:"https://mobile.twitter.com/todysh",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",l.a.createElement("a",{href:"https://github.com/sergeyt",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/sergeytodyshev",target:"_blank",rel:"noopener noreferrer"},"linkedin"),"• ",l.a.createElement("a",{href:"/resume/"},"resume"),l.a.createElement("span",{style:{fontSize:"smaller",marginLeft:100}},"icons by ",l.a.createElement("a",{href:"https://simpleicons.org/"},"simple icons")))},n}(l.a.Component),p=r("7oih"),u=r("JLKy"),m=r("EYWl"),d=r("mwIZ"),f=r.n(d);var y=function(e){var t,r;function i(){return e.apply(this,arguments)||this}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.prototype.render=function(){var e=f()(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.langKey,r=(f()(this,"props.data.allMarkdownRemark")||{}).edges||[];return l.a.createElement(p.a,{location:this.props.location,title:e},l.a.createElement(m.a,null),l.a.createElement("aside",null,l.a.createElement(o.a,null)),l.a.createElement("main",null,"en"!==t&&"ru"!==t&&l.a.createElement(u.a,null,"These articles have been"," ",l.a.createElement("a",{href:"https://github.com/gaearon/overreacted.io#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),r.map((function(e){var r=e.node,o=f()(r,"frontmatter.title")||r.fields.slug;return l.a.createElement("article",{key:r.fields.slug},l.a.createElement("header",null,l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(c.a)(1),marginBottom:Object(c.a)(.25)}},l.a.createElement(n.Link,{style:{boxShadow:"none"},to:r.fields.slug,rel:"bookmark"},o)),l.a.createElement("small",null,Object(a.a)(r.frontmatter.date,t)," • "+Object(a.b)(r.timeToRead))),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:r.frontmatter.spoiler}}))}))),l.a.createElement(s,null))},i}(l.a.Component),h=(t.default=y,"3710597169")},"Y++M":function(e,t,r){"use strict";var n=r("DFzH"),a=r("dTG6"),o=r("kiRH");e.exports=function(e){for(var t=n(this),r=o(t.length),i=arguments.length,l=a(i>1?arguments[1]:void 0,r),c=i>2?arguments[2]:void 0,s=void 0===c?r:a(c,r);s>l;)t[l++]=e;return t}},"c/e4":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"tsvbits","author":"Sergey Todyshev","description":"Personal blog by Sergey Todyshev","siteUrl":"https://tsvbits.com","social":{"twitter":"@todysh"}}}}}')},caJ7:function(e,t,r){e.exports=r.p+"static/profile-pic-d2d912573ab04387bcdade689656ba65.jpg"},n0hJ:function(e,t,r){var n=r("P8UN");n(n.P,"Array",{fill:r("Y++M")}),r("Dq1/")("fill")}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-90c8befabba20033c5a1.js.map