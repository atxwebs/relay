(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),o=(n(0),n(323)),a=n(329),l=n(324),c={id:"use-entrypoint-loader",title:"useEntryPointLoader",slug:"/api-reference/use-entrypoint-loader/"},s={unversionedId:"api-reference/entrypoint-apis/use-entrypoint-loader",id:"version-v11.0.0/api-reference/entrypoint-apis/use-entrypoint-loader",isDocsHomePage:!1,title:"useEntryPointLoader",description:"useEntryPointLoader",source:"@site/versioned_docs/version-v11.0.0/api-reference/entrypoint-apis/use-entrypoint-loader.md",slug:"/api-reference/use-entrypoint-loader/",permalink:"/docs/api-reference/use-entrypoint-loader/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/entrypoint-apis/use-entrypoint-loader.md",version:"v11.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1615605839,sidebar:"version-v11.0.0/docs",previous:{title:"useSubscription",permalink:"/docs/api-reference/use-subscription/"},next:{title:"loadEntryPoint",permalink:"/docs/api-reference/load-entrypoint/"}},u=[{value:"<code>useEntryPointLoader</code>",id:"useentrypointloader",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Behavior",id:"behavior",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"useentrypointloader"},Object(o.b)("inlineCode",{parentName:"h2"},"useEntryPointLoader")),Object(o.b)("p",null,"Hook used to make it easy to safely work with EntryPoints, while avoiding data leaking into the Relay store. It will keep an EntryPoint reference in state, and dispose of it when it is no longer accessible via state."),Object(o.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("p",null,"For more information, see the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.internalfb.com/intern/wiki/Relay/Guides/entry-points/#loading-entrypoints"}),"Loading EntryPoints")," guide.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {useEntryPointLoader, EntryPointContainer} = require('react-relay');\n\nconst ComponentEntryPoint = require('Component.entrypoint');\n\nfunction EntryPointRevealer(): React.MixedElement {\n  const environmentProvider = useMyEnvironmentProvider();\n  const [\n    entryPointReference,\n    loadEntryPoint,\n    disposeEntryPoint,\n  ] = useEntryPointLoader(environmentProvider, ComponentEntryPoint);\n\n  return (\n    <>\n      {\n        entryPointReference == null && (\n          <Button onClick={() => loadEntryPoint({})}>\n            Click to reveal the contents of the EntryPoint\n          </Button>\n        )\n      }\n      {\n        entryPointReference != null && (\n          <>\n            <Button onClick={disposeEntryPoint}>\n              Click to hide and dispose the EntryPoint.\n            </Button>\n            <Suspense fallback=\"Loading...\">\n              <EntryPointContainer\n                entryPointReference={entryPointReference}\n                props={{}}\n              />\n            </Suspense>\n          </>\n        )\n      }\n    </>\n  );\n}\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"environmentProvider"),": an object with a ",Object(o.b)("inlineCode",{parentName:"li"},"getEnvironment")," method that returns a relay environment."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"EntryPoint"),": the EntryPoint, usually acquired by importing a ",Object(o.b)("inlineCode",{parentName:"li"},".entrypoint.js")," file.")),Object(o.b)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TEntryPointParams"),": the type of the first argument to the ",Object(o.b)("inlineCode",{parentName:"li"},"getPreloadProps")," method of the EntryPoint."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TPreloadedQueries"),": the type of the ",Object(o.b)("inlineCode",{parentName:"li"},"queries")," prop passed to the EntryPoint component."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TPreloadedEntryPoints"),": the type of the ",Object(o.b)("inlineCode",{parentName:"li"},"entryPoints")," prop passed to the EntryPoint component."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TRuntimeProps"),": the type of the ",Object(o.b)("inlineCode",{parentName:"li"},"props")," prop passed to ",Object(o.b)("inlineCode",{parentName:"li"},"EntryPointContainer"),". This object is passed down to the EntryPoint component, also as ",Object(o.b)("inlineCode",{parentName:"li"},"props"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TExtraProps"),": if an EntryPoint's ",Object(o.b)("inlineCode",{parentName:"li"},"getPreloadProps")," method returns an object with an ",Object(o.b)("inlineCode",{parentName:"li"},"extraProps")," property, those extra props will be passed to the EntryPoint component as ",Object(o.b)("inlineCode",{parentName:"li"},"extraProps")," and have type ",Object(o.b)("inlineCode",{parentName:"li"},"TExtraProps"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TEntryPointComponent"),": the type of the EntryPoint component."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TEntryPoint"),": the type of the EntryPoint.")),Object(o.b)("h3",{id:"return-value"},"Return value"),Object(o.b)("p",null,"A tuple containing the following values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"entryPointReference"),": the EntryPoint reference, or ",Object(o.b)("inlineCode",{parentName:"li"},"null"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"loadEntryPoint"),": a callback that, when executed, will load an EntryPoint, which will be accessible as ",Object(o.b)("inlineCode",{parentName:"li"},"entryPointReference"),". If a previous EntryPoint was loaded, it will dispose of it. It may throw an error if called during React's render phase.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Parameters",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params: TEntryPointParams"),": the params passed to the EntryPoint's ",Object(o.b)("inlineCode",{parentName:"li"},"getPreloadProps")," method."))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disposeEntryPoint"),": a callback that, when executed, will set ",Object(o.b)("inlineCode",{parentName:"li"},"entryPointReference")," to ",Object(o.b)("inlineCode",{parentName:"li"},"null")," and call ",Object(o.b)("inlineCode",{parentName:"li"},".dispose()")," on it. It has type ",Object(o.b)("inlineCode",{parentName:"li"},"() => void"),". It should not be called during React's render phase.")),Object(o.b)("h3",{id:"behavior"},"Behavior"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When the ",Object(o.b)("inlineCode",{parentName:"li"},"loadEntryPoint")," callback is called, each of an EntryPoint's associated queries (if it has any) will load their query data and query AST. Once both the query AST and the data are available, the data will be written to the store. This differs from the behavior of ",Object(o.b)("inlineCode",{parentName:"li"},"prepareEntryPoint_DEPRECATED"),", which would only write the data from an associated query to the store when that query was rendered with ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),Object(o.b)("li",{parentName:"ul"},"The EntryPoint reference's associated query references will be retained by the Relay store, preventing it the data from being garbage collected. Once you call ",Object(o.b)("inlineCode",{parentName:"li"},".dispose()")," on the EntryPoint reference, the data from the associated queries is liable to be garbage collected."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"loadEntryPoint")," callback may throw an error if it is called during React's render phase.")),Object(o.b)(a.a,{mdxType:"DocsRating"}))}p.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?i.a.createElement(f,l(l({ref:t},s),{},{components:n})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=o(n(327));const a=["internal","external"];let l;try{l=n(325).usePluginData}catch(p){l=null}function c(e){return u(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const t=Object.keys(e).filter((e=>!a.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${a}`)}function d(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=u,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return a}));var r=n(22);function i(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=i()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function a(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?s=c.concat(s):d=-1,s.length&&b())}function b(){if(!u){var e=l(p);u=!0;for(var t=s.length;t;){for(c=s,s=[];++d<t;)c&&c[d].run();d=-1,t=s.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new f(e,t)),1!==s.length||u||l(b)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},327:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const i=n(328);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let i=!1,o=0;const a={};t.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in a||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?a[t].resolve(e.data.response):a[t].reject(new Error(e.data.error)),delete a[t]})));const t=o++,n=new Promise(((e,n)=>{a[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,l),n}))}},329:function(e,t,n){"use strict";n(61);var r=n(324),i=n(0);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.",tag_ids:{add:[0xac96423e5b680]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function a(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},s=function(){return i.createElement(a,null,i.createElement(c,null),i.createElement(l,null))},u=function(){return i.createElement(a,null,i.createElement(l,null))};t.a=function(){return Object(r.fbContent)({internal:i.createElement(s,null),external:i.createElement(u,null)})}}}]);