(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1171:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),f=s(r),l=n,b=f["".concat(u,".").concat(l)]||f[l]||p[l]||i;return r?o.a.createElement(b,c(c({ref:t},d),{},{components:r})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,u=new Array(i);u[0]=l;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var d=2;d<i;d++)u[d]=r[d];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1178:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var n=r(22),o=r(1179);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,u=i.forcePrependBaseUrl,c=void 0!==u&&u,a=i.absolute,d=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return d?e+s:s}(i,r,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1179:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},1185:function(e,t,r){"use strict";r.r(t);var n=r(11);r.d(t,"MemoryRouter",(function(){return n.d})),r.d(t,"Prompt",(function(){return n.f})),r.d(t,"Redirect",(function(){return n.g})),r.d(t,"Route",(function(){return n.h})),r.d(t,"Router",(function(){return n.i})),r.d(t,"StaticRouter",(function(){return n.j})),r.d(t,"Switch",(function(){return n.k})),r.d(t,"generatePath",(function(){return n.l})),r.d(t,"matchPath",(function(){return n.m})),r.d(t,"useHistory",(function(){return n.n})),r.d(t,"useLocation",(function(){return n.o})),r.d(t,"useParams",(function(){return n.p})),r.d(t,"useRouteMatch",(function(){return n.q})),r.d(t,"withRouter",(function(){return n.r})),r.d(t,"BrowserRouter",(function(){return n.a})),r.d(t,"HashRouter",(function(){return n.b})),r.d(t,"Link",(function(){return n.c})),r.d(t,"NavLink",(function(){return n.e}))},345:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(1171)),u=r(1185),c=r(1178),a={id:"step-by-step-guide-redirect",slug:"/introduction/step-by-step-guide/"},d={unversionedId:"introduction/step-by-step-guide-redirect",id:"version-11.0.0/introduction/step-by-step-guide-redirect",isDocsHomePage:!1,title:"step-by-step-guide-redirect",source:"@site/versioned_docs/version-11.0.0/introduction/step-by-step-guide.md",slug:"/introduction/step-by-step-guide/",permalink:"/docs/introduction/step-by-step-guide/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/versioned_docs/version-11.0.0/introduction/step-by-step-guide.md",version:"11.0.0",lastUpdatedBy:"Lauren Tan",lastUpdatedAt:1615339286},s=[],f={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(u.Redirect,{to:Object(c.a)("/docs/getting-started/step-by-step-guide/"),mdxType:"Redirect"}))}p.isMDXComponent=!0}}]);