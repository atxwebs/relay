(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1069:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),p=r,h=d["".concat(o,".").concat(p)]||d[p]||f[p]||a;return t?i.a.createElement(h,c(c({ref:n},s),{},{components:t})):i.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1070:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=a(t(1073));const o=["internal","external"];let c;try{c=t(1071).usePluginData}catch(f){c=null}function u(e){return l(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}n.fbContent=u,n.fbInternalOnly=function(e){return u({internal:e})},n.validateFbContentArgs=l,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(1072))},1071:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i})),t.d(n,"useAllPluginInstancesData",(function(){return a})),t.d(n,"usePluginData",(function(){return o}));var r=t(22);function i(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var n=i()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=a(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},1072:function(e,n){var t,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,s=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?s=u.concat(s):d=-1,s.length&&p())}function p(){if(!l){var e=c(f);l=!0;for(var n=s.length;n;){for(u=s,s=[];++d<n;)u&&u[d].run();d=-1,n=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function b(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new h(e,n)),1!==s.length||l||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},1073:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{u(r.next(e))}catch(n){a(n)}}function c(e){try{u(r.throw(e))}catch(n){a(n)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}u((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const i=t(1074);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1074:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{u(r.next(e))}catch(n){a(n)}}function c(e){try{u(r.throw(e))}catch(n){a(n)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}u((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let i=!1,a=0;const o={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=a++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),t}))}},1075:function(e,n,t){"use strict";t(60);var r=t(1070),i=t(0);var a=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),"Thank you for letting us know!"):i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return null};n.a=function(){return Object(r.fbContent)({internal:i.createElement(o,null),external:i.createElement(a,null)})}},178:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),i=t(7),a=(t(0),t(1069)),o=t(1075),c=(t(1070),{id:"refetching-queries",title:"Refetching Queries",slug:"/guided-tour/refetching/refetching-queries/"}),u={unversionedId:"guided-tour/refetching/refetching-queries",id:"guided-tour/refetching/refetching-queries",isDocsHomePage:!1,title:"Refetching Queries",description:"Refetching Queries",source:"@site/docs/guided-tour/refetching/refetching-queries.md",slug:"/guided-tour/refetching/refetching-queries/",permalink:"/docs/next/guided-tour/refetching/refetching-queries/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/docs/guided-tour/refetching/refetching-queries.md",version:"current",lastUpdatedBy:"Rene Murillo",lastUpdatedAt:1614368754},s=[{value:"Refetching Queries",id:"refetching-queries",children:[]}],l={toc:s};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"refetching-queries"},"Refetching Queries"),Object(a.b)("p",null,"To refresh a query, we can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"useQueryLoader")," Hook described in our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../rendering/queries/"}),"Fetching Queries for Rendering")," section:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {AppQuery as AppQueryType} from 'AppQuery.graphql';\nimport type {PreloadedQuery} from 'react-relay';\n\nconst React = require('React');\nconst {useTransition} = require('React');\nconst {graphql, usePreloadedQuery, useQueryLoader} = require('react-relay');\n\ntype Props = {\n  appQueryRef: PreloadedQuery<AppQuery>,\n};\n\nconst AppQuery = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n      friends {\n        count\n      }\n    }\n  }\n`;\n\nfunction App(props: Props) {\n  const variables = {id: '4'};\n  const [startTransition, isRefreshing] = useTransition();\n  const [refreshedQueryRef, loadQuery] = useQueryLoader<AppQueryType>(AppQuery);\n\n  const refresh = () => {\n    startTransition(() => {\n      // Load the query again using the same original variables.\n      // Calling loadQuery will update the value of refreshedQueryRef.\n      // The fetchPolicy ensures we always fetch from the server and skip\n      // the local data cache.\n      const {variables} = props.appQueryRef;\n      loadQuery(variables, {fetchPolicy: 'network-only'});\n    })\n  };\n\n  const data = usePreloadedQuery<AppQueryType>(\n    AppQuery,\n    refreshedQueryRef ?? props.appQueryRef,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      <div>Friends count: {data.user.friends?.count}</div>\n      <Button\n        disabled={isRefreshing}\n        onClick={() => refresh()}>\n        Fetch latest count {isRefreshing ? <LoadingSpinner /> : null}\n      </Button>\n    </>\n  );\n}\n")),Object(a.b)("p",null,"Let's distill what's going on here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"We call ",Object(a.b)("inlineCode",{parentName:"li"},"loadQuery")," in the event handler for refreshing, so the network request starts immediately, and then pass the ",Object(a.b)("inlineCode",{parentName:"li"},"refreshedQueryRef")," to ",Object(a.b)("inlineCode",{parentName:"li"},"usePreloadedQuery")," so we render the updated data."),Object(a.b)("li",{parentName:"ul"},"We are passing a ",Object(a.b)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",Object(a.b)("inlineCode",{parentName:"li"},"\u2018network-only'")," to ensure that we always fetch from the network and skip the local data cache."),Object(a.b)("li",{parentName:"ul"},"Calling ",Object(a.b)("inlineCode",{parentName:"li"},"loadQuery")," will re-render the component and cause ",Object(a.b)("inlineCode",{parentName:"li"},"usePreloadedQuery")," to suspend (as explained in ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../../rendering/loading-states/"}),"Transitions and Updates that Suspend"),"), since a network request will be required due to the ",Object(a.b)("inlineCode",{parentName:"li"},"fetchPolicy")," we are using. This means that you'll need to make sure that there's a ",Object(a.b)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component from above, to show a fallback loading state, and/or that you are using ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactjs.org/docs/concurrent-mode-patterns.html#transitions"}),Object(a.b)("inlineCode",{parentName:"a"},"useTransition"))," in order to show the appropriate pending or loading state.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"In this case, we are using the pending flag provided by ",Object(a.b)("inlineCode",{parentName:"li"},"useTransition"),", ",Object(a.b)("inlineCode",{parentName:"li"},"isRefreshing"),", in order render a pending state while the request is active, i.e. to render the busy spinner and to disable our UI control."),Object(a.b)("li",{parentName:"ul"},"Using this pending state is optional, however, note that since ",Object(a.b)("inlineCode",{parentName:"li"},"loadQuery")," will cause the component to suspend, regardless of whether we're rendering a pending state, we should ",Object(a.b)("em",{parentName:"li"},"always")," use ",Object(a.b)("inlineCode",{parentName:"li"},"startTransition")," to schedule that update; any update that may cause a component to suspend should be scheduled using this pattern.")))),Object(a.b)(o.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0}}]);