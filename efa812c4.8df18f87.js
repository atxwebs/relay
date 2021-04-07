(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(323)),o=n(329),l={id:"use-lazy-load-query",title:"useLazyLoadQuery",slug:"/api-reference/use-lazy-load-query/",description:"API reference for useLazyLoadQuery, a React hook used to lazily fetch query data when a component renders",keywords:["lazy fetching","query","fetch"]},c={unversionedId:"api-reference/hooks/use-lazy-load-query",id:"api-reference/hooks/use-lazy-load-query",isDocsHomePage:!1,title:"useLazyLoadQuery",description:"API reference for useLazyLoadQuery, a React hook used to lazily fetch query data when a component renders",source:"@site/docs/api-reference/hooks/use-lazy-load-query.md",slug:"/api-reference/use-lazy-load-query/",permalink:"/docs/next/api-reference/use-lazy-load-query/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/hooks/use-lazy-load-query.md",version:"current",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1617823587,sidebar:"docs",previous:{title:"loadQuery",permalink:"/docs/next/api-reference/load-query/"},next:{title:"useFragment",permalink:"/docs/next/api-reference/use-fragment/"}},u=[{value:"<code>useLazyLoadQuery</code>",id:"uselazyloadquery",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Behavior",id:"behavior",children:[]},{value:"Differences with <code>QueryRenderer</code>",id:"differences-with-queryrenderer",children:[]}]}],s={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"uselazyloadquery"},Object(i.b)("inlineCode",{parentName:"h2"},"useLazyLoadQuery")),Object(i.b)("p",null,"Hook used to fetch a GraphQL query during render. This hook can trigger multiple nested or waterfalling round trips if used without caution, and waits until render to start a data fetch (when it can usually start a lot sooner than render), thereby degrading performance. Instead, prefer ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../use-preloaded-query"}),Object(i.b)("inlineCode",{parentName:"a"},"usePreloadedQuery")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import type {AppQuery} from 'AppQuery.graphql';\n\nconst React = require('React');\n\nconst {graphql, useLazyLoadQuery} = require('react-relay');\n\nfunction App() {\n  const data = useLazyLoadQuery<AppQuery>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    {id: 4},\n    {fetchPolicy: 'store-or-network'},\n  );\n\n return <h1>{data.user?.name}</h1>;\n}\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"query"),": GraphQL query specified using a ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," template literal."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variables"),": Object containing the variable values to fetch the query. These variables need to match GraphQL variables declared inside the query."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," options object",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and when to send a network request based on the cached data that is currently available in the Relay store (for more details, see our ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/reusing-cached-data/fetch-policies"}),"Fetch Policies")," and ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/reusing-cached-data/presence-of-data"}),"Garbage Collection")," guides):",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"store-or-network": ',Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"(default)"))," ",Object(i.b)("em",{parentName:"li"},"will")," reuse locally cached data and will ",Object(i.b)("em",{parentName:"li"},"only")," send a network request if any data for the query is missing. If the query is fully cached, a network request will ",Object(i.b)("em",{parentName:"li"},"not")," be made."),Object(i.b)("li",{parentName:"ul"},'"store-and-network": ',Object(i.b)("em",{parentName:"li"},"will")," reuse locally cached data and will ",Object(i.b)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was missing from the local cache or not."),Object(i.b)("li",{parentName:"ul"},'"network-only": ',Object(i.b)("em",{parentName:"li"},"will")," ",Object(i.b)("em",{parentName:"li"},"not")," reuse locally cached data, and will ",Object(i.b)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached in Relay."),Object(i.b)("li",{parentName:"ul"},'"store-only": ',Object(i.b)("em",{parentName:"li"},"will")," ",Object(i.b)("em",{parentName:"li"},"only")," reuse locally cached data, and will ",Object(i.b)("em",{parentName:"li"},"never")," send a network request to fetch the query. In this case, the responsibility of fetching the query falls to the caller, but this policy could also be used to read and operate and data that is entirely ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/updating-data/local-data-updates"}),"local"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fetchKey"),": A ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey")," can be passed to force a re-evaluation of the current query and variables when the component re-renders, even if the variables didn't change, or even if the component isn't remounted (similarly to how passing a different ",Object(i.b)("inlineCode",{parentName:"li"},"key")," to a React component will cause it to remount). If the ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey")," is different from the one used in the previous render, the current query will be re-evaluated against the store, and it might be refetched depending on the current ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," and the state of the cache."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"networkCacheConfig"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"," "))," Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"{force: true}"),". Object containing cache config options for the ",Object(i.b)("em",{parentName:"li"},"network layer"),". Note that the network layer may contain an ",Object(i.b)("em",{parentName:"li"},"additional")," query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass ",Object(i.b)("inlineCode",{parentName:"li"},"{force: true}")," as the value for this option.")))),Object(i.b)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",Object(i.b)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),".")),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified query.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema. For example, the type of ",Object(i.b)("inlineCode",{parentName:"li"},"data")," above is: ",Object(i.b)("inlineCode",{parentName:"li"},"{| user: ?{| name: ?string |} |}"),".")))),Object(i.b)("h3",{id:"behavior"},"Behavior"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It is expected for ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," to have been rendered under a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../relay-environment-provider"}),Object(i.b)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider")),", in order to access the correct Relay environment, otherwise an error will be thrown."),Object(i.b)("li",{parentName:"ul"},"Calling ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),"  will fetch and render the data for this query, and it may ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/rendering/loading-states"}),Object(i.b)("em",{parentName:"a"},Object(i.b)("em",{parentName:"em"},"suspend")))," while the network request is in flight, depending on the specified ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy"),", and whether cached data is available, or if it needs to send and wait for a network request. If ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," causes the component to suspend, you'll need to make sure that there's a ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense")," ancestor wrapping this component in order to show the appropriate loading state.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For more details on Suspense, see our ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/rendering/loading-states/"}),"Loading States with Suspense")," guide."))),Object(i.b)("li",{parentName:"ul"},"The component is automatically subscribed to updates to the query data: if the data for this query is updated anywhere in the app, the component will automatically re-render with the latest updated data."),Object(i.b)("li",{parentName:"ul"},"After a component using ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," has committed, re-rendering/updating the component will not cause the query to be fetched again.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If the component is re-rendered with ",Object(i.b)("em",{parentName:"li"},"different query variables,")," that will cause the query to be fetched again with the new variables, and potentially re-render with different data."),Object(i.b)("li",{parentName:"ul"},"If the component ",Object(i.b)("em",{parentName:"li"},"unmounts and remounts"),", that will cause the current query and variables to be refetched (depending on the ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," and the state of the cache).")))),Object(i.b)("h3",{id:"differences-with-queryrenderer"},"Differences with ",Object(i.b)("inlineCode",{parentName:"h3"},"QueryRenderer")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," no longer takes a Relay environment as a parameter, and thus no longer sets the environment in React Context, like ",Object(i.b)("inlineCode",{parentName:"li"},"QueryRenderer")," did. Instead, ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," should be used as a descendant of a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../relay-environment-provider"}),Object(i.b)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider")),", which now sets the Relay environment in Context. Usually, you should render a single ",Object(i.b)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")," at the very root of the application, to set a single Relay environment for the whole application."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," will use ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/rendering/loading-states"}),"Suspense")," to allow developers to render loading states using Suspense boundaries, and will throw errors if network errors occur, which can be caught and rendered with Error Boundaries. This as opposed to providing error objects or null props to the ",Object(i.b)("inlineCode",{parentName:"li"},"QueryRenderer")," render function to indicate errors or loading states."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," fully supports fetch policies in order to reuse data that is cached in the Relay store instead of solely relying on the network response cache."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," has better type safety guarantees for the data it returns, which was not possible with QueryRenderer since we couldn't parametrize the type of the data with a renderer api.")),Object(i.b)(o.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,h=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(h,l(l({ref:t},u),{},{components:n})):r.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(327));const o=["internal","external"];let l;try{l=n(325).usePluginData}catch(b){l=null}function c(e){return s(e),d()?"internal"in e?u(e.internal):[]:"external"in e?u(e.external):[]}function u(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=s,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var c,u=[],s=!1,d=-1;function b(){s&&c&&(s=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!s){var e=l(b);s=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,s=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||s||l(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},327:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function l(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(328);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function l(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,i=0;const o={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),n}))}},329:function(e,t,n){"use strict";n(61);var a=n(324),r=n(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return r.createElement(o,null,r.createElement(c,null),r.createElement(l,null))},s=function(){return r.createElement(o,null,r.createElement(l,null))};t.a=function(){return Object(a.fbContent)({internal:r.createElement(u,null),external:r.createElement(s,null)})}}}]);