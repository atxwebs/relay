(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{323:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(h,c(c({ref:t},l),{},{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=a(n(327));const o=["internal","external"];let c;try{c=n(325).usePluginData}catch(p){c=null}function s(e){return u(e),b()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function b(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=u,t.isInternal=b,t.FbInternalOnly=function(e){return b()?e.children:null},t.OssOnly=function(e){return b()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"useAllPluginInstancesData",(function(){return a})),n.d(t,"usePluginData",(function(){return o}));var r=n(22);function i(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=i()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s,l=[],u=!1,b=-1;function p(){u&&s&&(u=!1,s.length?l=s.concat(l):b=-1,l.length&&d())}function d(){if(!u){var e=c(p);u=!0;for(var t=l.length;t;){for(s=l,l=[];++b<t;)s&&s[b].run();b=-1,t=l.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},327:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const i=n(328);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let i=!1,a=0;const o={};t.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=a++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),n}))}},329:function(e,t,n){"use strict";n(61);var r=n(324),i=n(0);function a(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var c=function(){var e=i.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:a},"Filing a task"))},l=function(){return i.createElement(o,null,i.createElement(s,null),i.createElement(c,null))},u=function(){return i.createElement(o,null,i.createElement(c,null))};t.a=function(){return Object(r.fbContent)({internal:i.createElement(l,null),external:i.createElement(u,null)})}},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),a=(n(0),n(323)),o=n(329),c=n(324),s={id:"graphql-subscriptions",title:"GraphQL Subscriptions",slug:"/guided-tour/updating-data/graphql-subscriptions/"},l={unversionedId:"guided-tour/updating-data/graphql-subscriptions",id:"version-v11.0.0/guided-tour/updating-data/graphql-subscriptions",isDocsHomePage:!1,title:"GraphQL Subscriptions",description:"GraphQL Subscriptions (GQLS) are a mechanism which allow clients to subscribe to changes in a piece of data from the server, and get notified whenever that data changes.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/updating-data/graphql-subscriptions.md",slug:"/guided-tour/updating-data/graphql-subscriptions/",permalink:"/docs/guided-tour/updating-data/graphql-subscriptions/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/guided-tour/updating-data/graphql-subscriptions.md",version:"v11.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1616535083,sidebar:"version-v11.0.0/docs",previous:{title:"GraphQL Mutations",permalink:"/docs/guided-tour/updating-data/graphql-mutations/"},next:{title:"Local Data Updates",permalink:"/docs/guided-tour/updating-data/local-data-updates/"}},u=[{value:"Request subscription API",id:"request-subscription-api",children:[]},{value:"Requesting a subscription with Hooks",id:"requesting-a-subscription-with-hooks",children:[]},{value:"Configuring the Network Layer",id:"configuring-the-network-layer",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://our.internmc.facebook.com/intern/wiki/GraphQL_Subscriptions/"}),"GraphQL Subscriptions")," (GQLS) are a mechanism which allow clients to subscribe to changes in a piece of data from the server, and get notified whenever that data changes.")),Object(a.b)(c.OssOnly,{mdxType:"OssOnly"},Object(a.b)("p",null,"GraphQL Subscriptions (GQLS) are a mechanism which allow clients to subscribe to changes in a piece of data from the server, and get notified whenever that data changes.")),Object(a.b)("p",null,"A GraphQL Subscription looks very similar to a query, with the exception that it uses the subscription keyword:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"subscription FeedbackLikeSubscription($input: FeedbackLikeSubscribeData!) {\n  feedback_like_subscribe(data: $input) {\n    feedback {\n      id\n      like_count\n    }\n  }\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Subscribing to the above subscription will notify the client whenever the specified ",Object(a.b)("inlineCode",{parentName:"li"},"Feedback"),' object has been "liked" or "unliked". The ',Object(a.b)("inlineCode",{parentName:"li"},"feedback_like_subscription")," field is the subscription field itself, which takes specific input and will set up the subscription in the backend."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"feedback_like_subscription")," returns a specific GraphQL type which exposes the data we can query in the subscription payload; that is, whenever the client is notified, it will receive the subscription payload in the notification. In this case, we're querying for the Feedback object with its ",Object(a.b)("em",{parentName:"li"},"updated")," ",Object(a.b)("inlineCode",{parentName:"li"},"like_count"),", which will allows us to show the like count in real time.")),Object(a.b)("p",null,"An example of a subscription payload received by the client could look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "feedback_like_subscribe": {\n    "feedback": {\n      "id": "feedback-id",\n      "like_count": 321,\n    }\n  }\n}\n')),Object(a.b)("p",null,"In Relay, we can declare GraphQL subscriptions using the ",Object(a.b)("inlineCode",{parentName:"p"},"graphql")," tag too:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {graphql} = require('react-relay');\n\nconst feedbackLikeSubscription = graphql`\n  subscription FeedbackLikeSubscription($input: FeedbackLikeSubscribeData!) {\n    feedback_like_subscribe(data: $input) {\n      feedback {\n        id\n        like_count\n      }\n    }\n  }\n`;\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Note that subscriptions can also reference GraphQL ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../../rendering/variables/"}),"variables")," in the same way queries or fragments do.")),Object(a.b)("p",null,"There are two ways of ",Object(a.b)("em",{parentName:"p"},"executing")," a subscription against the server. The ",Object(a.b)("inlineCode",{parentName:"p"},"requestSubscription")," API and using hooks."),Object(a.b)("h2",{id:"request-subscription-api"},"Request subscription API"),Object(a.b)("p",null,"In order to execute a subscription against the server in Relay, we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"requestSubscription")," API:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {Environment} from 'react-relay';\nimport type {FeedbackLikeSubscribeData} from 'FeedbackLikeSubscription.graphql';\n\nconst {graphql, requestSubscription} = require('react-relay');\n\nfunction feedbackLikeSubscribe(\n  environment: Environment,\n  feedbackID: string,\n  input: FeedbackLikeSubscribeData,\n) {\n  return requestSubscription(environment, {\n    subscription: graphql`\n      subscription FeedbackLikeSubscription(\n        $input: FeedbackLikeSubscribeData!\n      ) {\n        feedback_like_subscribe(data: $input) {\n          feedback {\n            id\n            like_count\n          }\n        }\n      }\n    `,\n    variables: {input},\n    onCompleted: () => {} /* Subscription established */,\n    onError: error => {} /* Subscription errored */,\n    onNext: response => {} /* Subscription payload received */\n  });\n}\n\nmodule.exports = {subscribe: feedbackLikeSubscribe};\n")),Object(a.b)("p",null,"Let's distill what's happening here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"requestSubscription")," takes an environment, the ",Object(a.b)("inlineCode",{parentName:"li"},"graphql")," tagged subscription, and the variables to use."),Object(a.b)("li",{parentName:"ul"},"Note that the ",Object(a.b)("inlineCode",{parentName:"li"},"input")," for the subscription can be Flow typed with the autogenerated type available from the ",Object(a.b)("em",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"em"},"FeedbackLikeSubscription.graphql"))," module. In general, the Relay will generate Flow types for subscriptions at build time, with the following naming format: ",Object(a.b)("inlineCode",{parentName:"li"},"*<subscription_name>*.graphql.js"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"requestSubscription")," also takes an ",Object(a.b)("inlineCode",{parentName:"li"},"onCompleted")," and ",Object(a.b)("inlineCode",{parentName:"li"},"onError")," callbacks, which will respectively be called when the subscription is successfully established, or when an error occurs."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"requestSubscription")," also takes an ",Object(a.b)("inlineCode",{parentName:"li"},"onNext")," callback, which will be called whenever a subscription payload is received."),Object(a.b)("li",{parentName:"ul"},"When the subscription payload is received, ",Object(a.b)("em",{parentName:"li"},"i**f the objects in the subscription payload have IDs, the records in the local store will "),"automatically",Object(a.b)("em",{parentName:"li"}," be updated with the new field values from the payload**.")," In this case, it would automatically find the existing ",Object(a.b)("inlineCode",{parentName:"li"},"Feedback")," object matching the given ID in the store, and update the values for the ",Object(a.b)("inlineCode",{parentName:"li"},"like_count")," field."),Object(a.b)("li",{parentName:"ul"},"Note that any local data updates caused by the subscription will automatically cause components subscribed to the data to be notified of the change and re-render.")),Object(a.b)("p",null,"However, if the updates you wish to perform on the local data in response to the subscription are more complex than just updating the values of fields, like deleting or creating new records, or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../list-data/updating-connections/"}),"adding and removing items from a connection"),", you can provide an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../graphql-mutations/"}),Object(a.b)("inlineCode",{parentName:"a"},"updater"))," function to ",Object(a.b)("inlineCode",{parentName:"p"},"requestSubscription")," for full control over how to update the store:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {Environment} from 'react-relay';\nimport type {CommentCreateSubscribeData} from 'CommentCreateSubscription.graphql';\n\nconst {graphql, requestSubscription} = require('react-relay');\n\nfunction commentCreateSubscribe(\n  environment: Environment,\n  feedbackID: string,\n  input: CommentCreateSubscribeData,\n) {\n  return requestSubscription(environment, {\n    subscription: graphql`\n      subscription CommentCreateSubscription(\n        $input: CommentCreateSubscribeData!\n      ) {\n        comment_create_subscribe(data: $input) {\n          feedback_comment_edge {\n            cursor\n            node {\n              body {\n                text\n              }\n            }\n          }\n        }\n      }\n    `,\n    variables: {input},\n    updater: store => {\n      const feedbackRecord = store.get(feedbackID);\n\n      // Get connection record\n      const connectionRecord = ConnectionHandler.getConnection(\n        feedbackRecord,\n        'CommentsComponent_comments_connection',\n      );\n\n      // Get the payload returned from the server\n      const payload = store.getRootField('comment_create_subscribe');\n\n      // Get the edge inside the payload\n      const serverEdge = payload.getLinkedRecord('feedback_comment_edge');\n\n      // Build edge for adding to the connection\n      const newEdge = ConnectionHandler.buildConnectionEdge(\n        store,\n        connectionRecord,\n        serverEdge,\n      );\n\n      // Add edge to the end of the connection\n      ConnectionHandler.insertEdgeAfter(connectionRecord, newEdge);\n    },\n    onCompleted: () => {} /* Subscription established */,\n    onError: error => {} /* Subscription errored */,\n    onNext: response => {} /* Subscription payload received */,\n  });\n}\n\nmodule.exports = {subscribe: commentCreateSubscribe};\n")),Object(a.b)("p",null,"Let's distill this example:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"updater")," takes a ",Object(a.b)("em",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"em"},"store"))," argument, which is an instance of a ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../../../api-reference/store/"}),Object(a.b)("inlineCode",{parentName:"a"},"RecordSourceSelectorProxy")),";  this interface allows you to ",Object(a.b)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",Object(a.b)("em",{parentName:"li"},"create entirely new records"),", or ",Object(a.b)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available here: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://facebook.github.io/relay/docs/en/relay-store.html"}),"https://facebook.github.io/relay/docs/en/relay-store.html")),Object(a.b)("li",{parentName:"ul"},"In our specific example, we're adding a new comment to our local store when we receive a subscription payload notifying us that a new comment has been created. Specifically, we're adding a new item to a connection; for more details on the specifics of how that works, check out our ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../../list-data/updating-connections/"}),"Updating Connections")," section."),Object(a.b)("li",{parentName:"ul"},"Note that the subscription payload is a ",Object(a.b)("em",{parentName:"li"},"root field")," record that can be read from the ",Object(a.b)("inlineCode",{parentName:"li"},"store"),", specifically using the ",Object(a.b)("inlineCode",{parentName:"li"},"store.getRootField")," API. In our case, we're reading the ",Object(a.b)("inlineCode",{parentName:"li"},"comment_create_subcribe")," root field, which is a root field in the subscription response."),Object(a.b)("li",{parentName:"ul"},"Note that any local data updates caused by the mutation ",Object(a.b)("inlineCode",{parentName:"li"},"updater")," will automatically cause components subscribed to the data to be notified of the change and re-render.")),Object(a.b)("h2",{id:"requesting-a-subscription-with-hooks"},"Requesting a subscription with Hooks"),Object(a.b)("p",null,"You can also use hooks to subscribe to a ",Object(a.b)("em",{parentName:"p"},"subscription query"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {graphql, useSubscription} from 'react-relay';\nimport {useMemo} from 'react';\n\nconst subscription = graphql`subscription ...`;\nfunction MyFunctionalComponent({ id }) {\n  // IMPORTANT: your config should be memoized, or at least not re-computed\n  // every render. Otherwise, useSubscription will re-render too frequently.\n  const config = useMemo(() => { variables: { id }, subscription }, [id]);\n  useSubscription(config);\n  return <div>Move Fast</div>\n}\n")),Object(a.b)("p",null,"This is only a thin wrapper around the ",Object(a.b)("inlineCode",{parentName:"p"},"requestSubscription")," API. It's behavior:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Subscribe when the component is mounted with the given config"),Object(a.b)("li",{parentName:"ul"},"Unsubscribe when the component is unmounted")),Object(a.b)("p",null,"If you have the need to do something more complicated, such as imperatively requesting a subscription, please use the ",Object(a.b)("inlineCode",{parentName:"p"},"requestSubscription")," API directly."),Object(a.b)("h2",{id:"configuring-the-network-layer"},"Configuring the Network Layer"),Object(a.b)(c.OssOnly,{mdxType:"OssOnly"},Object(a.b)("p",null,"You will need to Configure your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../../guides/network-layer"}),"Network Layer")," to handle subscriptions. The below example uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apollographql/subscriptions-transport-ws"}),"subscriptions-transport-ws"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {\n    ...\n    Network,\n    Observable\n} from 'relay-runtime';\nimport { SubscriptionClient } from 'subscriptions-transport-ws';\n\n...\n\nconst subscriptionClient = new SubscriptionClient('ws://localhost:3000', {\n    reconnect: true,\n});\n\nconst subscribe = (request, variables) => {\n    const subscribeObservable = subscriptionClient.request({\n        query: request.text,\n        operationName: request.name,\n        variables,\n    });\n    // Important: Convert subscriptions-transport-ws observable type to Relay's\n    return Observable.from(subscribeObservable);\n};\n\nconst network = Network.create(fetchQuery, subscribe);\n\n...\n"))),Object(a.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(a.b)("p",null,"At Facebook, the Network Layer has already been configured to handle GraphQL Subscriptions. For more details on writing subscriptions at Facebook, check out this ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../../guides/writing-subscriptions/"}),"guide"),". For a guide on setting up subscriptions on the server side, check out this ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://our.internmc.facebook.com/intern/wiki/GraphQL_Subscriptions/creating-a-new-subscription/"}),"wiki"),".")),Object(a.b)(o.a,{mdxType:"DocsRating"}))}p.isMDXComponent=!0}}]);