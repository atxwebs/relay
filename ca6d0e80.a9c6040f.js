(window.webpackJsonp=window.webpackJsonp||[]).push([[197,139],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return g}));var r=n(3),a=n(8),i=(n(0),n(323)),o=n(329),s=n(324),c=n(66),l={id:"refreshing-fragments",title:"Refreshing Fragments",slug:"/guided-tour/refetching/refreshing-fragments/"},u={unversionedId:"guided-tour/refetching/refreshing-fragments",id:"version-v11.0.0/guided-tour/refetching/refreshing-fragments",isDocsHomePage:!1,title:"Refreshing Fragments",description:'When referring to "refreshing a fragment", we mean fetching the exact same data that was originally rendered by the fragment, in order to get the most up-to-date version of that data from the server.',source:"@site/versioned_docs/version-v11.0.0/guided-tour/refetching/refreshing-fragments.md",slug:"/guided-tour/refetching/refreshing-fragments/",permalink:"/docs/guided-tour/refetching/refreshing-fragments/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/guided-tour/refetching/refreshing-fragments.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1617823587,sidebar:"version-v11.0.0/docs",previous:{title:"Refetching Queries with Different Data",permalink:"/docs/guided-tour/refetching/refetching-queries-with-different-data/"},next:{title:"Refetching Fragments With Different Data",permalink:"/docs/guided-tour/refetching/refetching-fragments-with-different-data/"}},d=[{value:"Using real-time features",id:"using-real-time-features",children:[]},{value:"Using <code>useRefetchableFragment</code>",id:"using-userefetchablefragment",children:[{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense",children:[]}]}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},f=h("FbRefreshingUsingRealTimeFeatures"),p=h("FbRefreshingFragments"),b=h("FbAvoidSuspenseCaution"),m={toc:d};function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When referring to ",Object(i.b)("strong",{parentName:"p"},'"refreshing a fragment"'),", we mean fetching the ",Object(i.b)("em",{parentName:"p"},"exact")," same data that was originally rendered by the fragment, in order to get the most up-to-date version of that data from the server."),Object(i.b)("h2",{id:"using-real-time-features"},"Using real-time features"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(f,{mdxType:"FbRefreshingUsingRealTimeFeatures"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},"If we want to keep our data up to date with the latest version from the server, the first thing to consider is if it appropriate to use any real-time features, which can make it easier to automatically keep the data up to date without manually refreshing the data periodically.",Object(i.b)("p",null,"One example of this is using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://relay.dev/docs/en/subscriptions"}),"GraphQL Subscriptions"),", which will require additional configuration on your server and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://relay.dev/docs/en/subscriptions#configure-network"}),"network layer"),".")),Object(i.b)("h2",{id:"using-userefetchablefragment"},"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"useRefetchableFragment")),Object(i.b)("p",null,"In order to manually refresh the data for a fragment, we need a query to refetch the fragment under; remember, ",Object(i.b)("em",{parentName:"p"},"fragments can't be fetched by themselves: they need to be part of a query,"),' so we can\'t just "fetch" the fragment again by itself.'),Object(i.b)("p",null,"To do so, we can also use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../../api-reference/use-refetchable-fragment/"}),Object(i.b)("inlineCode",{parentName:"a"},"useRefetchableFragment"))," Hook in combination with the ",Object(i.b)("inlineCode",{parentName:"p"},"@refetchable")," directive, which will automatically generate a query to refetch the fragment under, and which we can fetch using the ",Object(i.b)("inlineCode",{parentName:"p"},"refetch")," function:"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(p,{mdxType:"FbRefreshingFragments"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n// This type is autogenerated by Relay given @refetchable used below\nimport type {UserComponentRefreshQuery} from 'UserComponentRefreshQuery.graphql';\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const [data, refetch] = useRefetchableFragment<UserComponentRefreshQuery, _>(\n    graphql`\n      fragment UserComponent_user on User\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"UserComponentRefreshQuery\") {\n        id\n        name\n        friends {\n          count\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const refresh = useCallback(() => {\n    // We call refetch with empty variables: `{}`,\n    // which will refetch the @refetchable query with the same\n    // original variables the fragment was fetched with, and update\n    // this component with the latest fetched data.\n    // The fetchPolicy ensures we always fetch from the server and skip\n    // the local data cache.\n    refetch({}, {fetchPolicy: 'network-only'})\n  }), [/* ... */];\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>Friends count: {data.friends?.count}</div>\n      <Button\n        onClick={() => refresh()}>\n        Fetch latest count\n      </Button>\n    </>\n  );\n}\n")),Object(i.b)("p",null,"Let's distill what's happening in this example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useRefetchableFragment")," behaves similarly to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../../api-reference/use-fragment/"}),Object(i.b)("inlineCode",{parentName:"a"},"useFragment"))," (see the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../rendering/fragments/"}),"Fragments")," section), but with a few additions:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It expects a fragment that is annotated with the ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," directive. Note that  ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are on ',Object(i.b)("inlineCode",{parentName:"li"},"Viewer"),", on ",Object(i.b)("inlineCode",{parentName:"li"},"Query"),", on any type that implements ",Object(i.b)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",Object(i.b)("inlineCode",{parentName:"li"},"id")," field)."))),Object(i.b)("li",{parentName:"ul"},"It returns a ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," function, which is already Flow typed to expect the query variables that the generated query expects"),Object(i.b)("li",{parentName:"ul"},"It takes two Flow type parameters: the type of the generated query (in our case  ",Object(i.b)("inlineCode",{parentName:"li"},"UserComponentRefreshQuery"),"), and a second type which can always be inferred, so you only need to pass underscore (",Object(i.b)("inlineCode",{parentName:"li"},"_"),")."),Object(i.b)("li",{parentName:"ul"},"We're calling the ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," function with 2 main inputs:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The first argument is the set of variables to fetch the fragment with. In this case, calling ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," and passing an empty set of variables will fetch the fragment again ",Object(i.b)("em",{parentName:"li"},"with the exact same variables the fragment was originally fetched with,")," which is what we want for a refresh."),Object(i.b)("li",{parentName:"ul"},"In the second argument we are passing a ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",Object(i.b)("inlineCode",{parentName:"li"},"'network-only'")," to ensure that we always fetch from the network and skip the local data cache."))),Object(i.b)("li",{parentName:"ul"},"Calling ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," will re-render the component and cause ",Object(i.b)("inlineCode",{parentName:"li"},"useRefetchableFragment")," to suspend (as explained in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../rendering/loading-states/"}),"Loading States with Suspense"),"), since a network request will be required due to the ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," we are using. This means that you'll need to make sure that there's a ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component from above in order to show a fallback loading state."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that this same behavior also applies to using the ",Object(i.b)("inlineCode",{parentName:"p"},"refetch")," function from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../../api-reference/use-pagination-fragment"}),Object(i.b)("inlineCode",{parentName:"a"},"usePaginationFragment")),"."))),Object(i.b)("h3",{id:"if-you-need-to-avoid-suspense"},"If you need to avoid Suspense"),Object(i.b)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../../api-reference/fetch-query/"}),Object(i.b)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(b,{mdxType:"FbAvoidSuspenseCaution"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)(c.default,{mdxType:"OssAvoidSuspenseNote"})),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n// This type is autogenerated by Relay given @refetchable used below\nimport type {UserComponentRefreshQuery} from 'UserComponentRefreshQuery.graphql';\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const [data, refetch] = useRefetchableFragment<UserComponentRefreshQuery, _>(\n    graphql`\n      fragment UserComponent_user on User\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"UserComponentRefreshQuery\") {\n        id\n        name\n        friends {\n          count\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const [isRefreshing, setIsRefreshing] = useState(false);\n  const refresh = useCallback(() => {\n    if (isRefreshing) { return; }\n    setIsRefreshing(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefreshing(false);\n\n          // *After* the query has been fetched, we call\n          // refetch again to re-render with the updated data.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          refetch({}, {fetchPolicy: 'store-only'});\n        }\n        error: () => {\n          setIsRefreshing(false);\n        }\n      });\n  }), [/* ... */];\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>Friends count: {data.friends?.count}</div>\n      <Button\n        disabled={isRefreshing}\n        onClick={() => refresh()}>\n        Fetch latest count {isRefreshing ? <LoadingSpinner /> : null}\n      </Button>\n    </>\n  );\n}\n")),Object(i.b)("p",null,"Let's distill what's going on here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When refreshing, we now keep track of our own ",Object(i.b)("inlineCode",{parentName:"li"},"isRefreshing")," loading state, since we are avoiding supending. We can use this state to render a busy spinner or similar loading UI in our component, ",Object(i.b)("em",{parentName:"li"},"without")," hiding the content."),Object(i.b)("li",{parentName:"ul"},"In the event handler, we first call ",Object(i.b)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",Object(i.b)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we call ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," so that we render the updated data, similar to the previous example."),Object(i.b)("li",{parentName:"ul"},"At this point, when ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," is called, the data for the fragment should already be cached in the local Relay store, so we use ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",Object(i.b)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),Object(i.b)(o.a,{mdxType:"DocsRating"}))}g.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,p=d["".concat(o,".").concat(f)]||d[f]||h[f]||i;return n?a.a.createElement(p,s(s({ref:t},l),{},{components:n})):a.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(327));const o=["internal","external"];let s;try{s=n(325).usePluginData}catch(h){s=null}function c(e){return u(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||s&&s("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=u,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var r=n(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,d=-1;function h(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=s(h);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function b(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},327:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const a=n(328);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,i=0;const o={};t.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,s),n}))}},329:function(e,t,n){"use strict";n(61);var r=n(324),a=n(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var s=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},l=function(){return a.createElement(o,null,a.createElement(c,null),a.createElement(s,null))},u=function(){return a.createElement(o,null,a.createElement(s,null))};t.a=function(){return Object(r.fbContent)({internal:a.createElement(l,null),external:a.createElement(u,null)})}},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(323)),o={},s={unversionedId:"guided-tour/refetching/OssAvoidSuspenseNote",id:"version-v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote",isDocsHomePage:!1,title:"OssAvoidSuspenseNote",description:"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",slug:"/guided-tour/refetching/OssAvoidSuspenseNote",permalink:"/docs/guided-tour/refetching/OssAvoidSuspenseNote",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1617823587},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending."))))}u.isMDXComponent=!0}}]);