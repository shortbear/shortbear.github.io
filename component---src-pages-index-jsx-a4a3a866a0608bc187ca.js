(self.webpackChunkshort_bear=self.webpackChunkshort_bear||[]).push([[230],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!o(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!o(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!o(e[u[s]],a[u[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},1247:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ce}});var r,i,o,a,c=n(7294),s=n(5697),u=n.n(s),l=n(4839),f=n.n(l),d=n(2993),p=n.n(d),m=n(6494),h=n.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",E="href",x="http-equiv",O="innerHTML",A="itemprop",C="name",k="property",S="rel",j="src",N="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",z="defer",I="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",Z=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),_=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,v.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},V=function(e){return Q(e,M)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],s=c.toLowerCase();-1===t.indexOf(s)||n===S&&"canonical"===e[n].toLowerCase()||s===S&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==O&&c!==w&&c!==A||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],s=h()({},r[c],i[c]);r[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;se(v.BODY,r),se(v.HTML,i),ce(f,d);var p={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,o),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,l)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===i.indexOf(s)&&i.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,i=fe(n,r),[c.createElement(v.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(b,i,r),link:de(v.LINK,o,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,s,r),style:de(v.STYLE,u,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},me=f()((function(e){return{baseTag:$([E,N],e),bodyAttributes:J(y,e),defer:Q(e,z),encode:Q(e,I),htmlAttributes:J(b,e),linkTags:G(v.LINK,[S,E],e),metaTags:G(v.META,[C,T,x,k,A],e),noscriptTags:G(v.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:G(v.SCRIPT,[j,O],e),styleTags:G(v.STYLE,[w],e),title:W(e),titleAttributes:J(g,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),pe)((function(){return null})),he=(i=me,a=o=function(e){function t(){return q(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return H({},i,((t={})[r.type]=a,t.titleAttributes=H({},o),t));case v.BODY:return H({},i,{bodyAttributes:H({},o)});case v.HTML:return H({},i,{htmlAttributes:H({},o)})}return H({},i,((n={})[r.type]=H({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(Y(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},F(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=function(e){var t=e.title,n=e.description,r=e.snippet;return c.createElement(he,null,c.createElement("title",null,t),c.createElement("meta",{name:"description",content:n}),r?c.createElement("script",{type:"application/ld+json"},JSON.stringify(r)):null)},be=n(3366),ge=n(5505),ve=["children"],Te=["as","decorate","className","children"];function we(e){return c.createElement("svg",Object.assign({viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e),c.createElement("path",{d:"M6.75 5.75 9.25 8l-2.5 2.25",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}function Ee(e){var t=e.as,n=void 0===t?"div":t,r=e.className,i=e.children;return c.createElement(n,{className:(0,ge.Z)(r,"group relative flex flex-col items-start")},i)}Ee.Link=function(e){var t=e.children,n=(0,be.Z)(e,ve);return c.createElement(c.Fragment,null,c.createElement("div",{className:"absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"}),c.createElement("a",n,c.createElement("span",{className:"absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"}),c.createElement("span",{className:"relative z-10"},t)))},Ee.Title=function(e){var t=e.as,n=void 0===t?"h2":t,r=e.href,i=e.children;return c.createElement(n,{className:"text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"},r?c.createElement(Ee.Link,{href:r},i):i)},Ee.Description=function(e){var t=e.children;return c.createElement("p",{className:"relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"},t)},Ee.Cta=function(e){var t=e.children;return c.createElement("div",{"aria-hidden":"true",className:"relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"},t,c.createElement(we,{className:"ml-1 h-4 w-4 stroke-current"}))},Ee.Eyebrow=function(e){var t=e.as,n=void 0===t?"p":t,r=e.decorate,i=void 0!==r&&r,o=e.className,a=e.children,s=(0,be.Z)(e,Te);return c.createElement(n,Object.assign({className:(0,ge.Z)(o,"relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",i&&"pl-3.5")},s),i&&c.createElement("span",{className:"absolute inset-y-0 left-0 flex items-center","aria-hidden":"true"},c.createElement("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"})),a)};var xe=n(5617);function Oe(e){var t=e.title,n=e.intro,r=e.children;return c.createElement(xe.W,{className:"mt-16 sm:mt-32"},c.createElement("header",{className:"max-w-2xl"},c.createElement("h1",{className:"text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"},t),c.createElement("p",{className:"mt-6 text-base text-zinc-600 dark:text-zinc-400"},n)),c.createElement("div",{className:"mt-16 sm:mt-20"},r))}var Ae=function(e){return c.createElement("svg",Object.assign({viewBox:"0 0 24 24","aria-hidden":"true"},e),c.createElement("path",{d:"M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z",fill:"currentColor"}))},Ce=function(){return c.createElement(c.Fragment,null,c.createElement(ye,{title:"ShortBear - Coding tips, tricks and FAQs.",description:"Learn how to code while keeping your sanity."}),c.createElement(Oe,{title:'"Learning to code makes me feel so dumb!"',intro:"Getting stuck when coding will make you want to take up day drinking. Trust me, you're not alone. That's why I compiled a list of common questions to help you in your journey. Just choose what language you're working on from the links below."},c.createElement("ul",{className:"grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"},[].map((function(e){return c.createElement(Ee,{as:"li",key:e.name},c.createElement("div",{className:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"},c.createElement("img",{src:e.logo,alt:"",className:"h-8 w-8",unoptimized:!0})),c.createElement("h2",{className:"mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"},c.createElement(Ee.Link,{href:e.link.href},e.name)),c.createElement(Ee.Description,null,e.description),c.createElement("p",{className:"relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"},c.createElement(Ae,{className:"h-6 w-6 flex-none"}),c.createElement("span",{className:"ml-2"},e.link.label)))})))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a4a3a866a0608bc187ca.js.map