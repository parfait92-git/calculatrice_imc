_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";r.r(t);var n=r("rePB"),c=r("nKUr"),o=(r("zPlV"),r("uXJ4"),r("xMo/"),r("XvOm"));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return Object(c.jsx)(o.DataProvider,{children:Object(c.jsx)(t,u({},r))})}},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},XvOm:function(e,t,r){"use strict";r.r(t),r.d(t,"DataContext",(function(){return a})),r.d(t,"DataProvider",(function(){return f}));var n=r("rePB"),c=r("nKUr"),o=r("q1tI");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=Object(o.createContext)(),f=function(e){var t=e.children,r=Object(o.useReducer)(p,{notify:{},indice:{},imc:{}}),n=r[0],i=r[1];return Object(c.jsx)(a.Provider,{value:[n,i],children:t})};function p(e,t){switch(t.type){case"NOTIFY":return u(u({},e),{},{notify:t.payload});case"SAVE_INDICE":return u(u({},e),{},{indice:t.payload});case"UPDATE_IMC":return u(u({},e),{},{imc:t.payload});default:return e}}t.default=f},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},uXJ4:function(e,t,r){},"xMo/":function(e,t,r){},zPlV:function(e,t,r){}},[[0,0,1,4,5,2]]]);