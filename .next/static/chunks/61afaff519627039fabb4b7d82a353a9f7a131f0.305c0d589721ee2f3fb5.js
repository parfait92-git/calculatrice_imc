(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var l=f[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var d=o.props[l],p=r[l]||new Set;"name"===l&&a||!p.has(d)?(p.add(d),r[l]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},Aiso:function(e,t,n){e.exports=n("dQHF")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("nKUr"),o=n("g4pe"),i=n.n(o),a=n("YFqc"),c=n.n(a);n("Aiso");function s(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:e.page})}),Object(r.jsxs)("header",{className:"container-lg",children:[Object(r.jsx)("h2",{className:"text-3xl mb-2 text-blue-600 hover:text-blue-900",children:"Indice De Masse Corporelle"}),Object(r.jsxs)("div",{className:"inline-grid grid-cols-2 gep-x-10 p-4",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("button",{className:"bg-blue-200 p-3 m-3 rounded-3xl focus:rounded-2xl text-blue-900 focus:border-blue-300\r hover:shadow-md focus:text-red-900 border-2 border-blue-300 ",children:"Accueil"})}),Object(r.jsx)(c.a,{href:"/formulaire",children:Object(r.jsx)("button",{className:"bg-blue-300 p-3 m-3 rounded-3xl \r hover:shadow-md hover:bg-blue-200 border-2 focus:rounded-2xl text-blue-900 focus:border-blue-300 focus:text-red-900 hover:border-blue-300 border-blue-400 ",children:"Calculer"})})]})]})]})}function u(){return Object(r.jsx)("footer",{className:"pt-10",children:Object(r.jsxs)("ul",{className:"pt-10 pb-4 flex justify-around",children:[Object(r.jsx)("li",{className:"text-blue-700",children:"NZO Parfait A."}),Object(r.jsx)("li",{className:"text-blue-700",children:"parfaitaristantnzo@gmail.com"}),Object(r.jsx)("li",{className:"text-blue-700",children:"Phase 2 de recrutement chez UZENZE - 2021"})]})})}var l=n("q1tI"),d=n("XvOm"),f=function(e){var t=e.color;return Object(r.jsx)("p",{className:t,children:" en cour de chargement..."})},p=function(e){var t=e.color,n=e.content,o=e.title;return Object(r.jsx)("div",{className:"flex flex-col bg-gray-50",children:Object(r.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(r.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(r.jsxs)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:[Object(r.jsxs)("h4",{className:t,children:[" ",o," "]}),Object(r.jsxs)("p",{className:t,children:[" ",n," "]})]})})})})},h=function(){var e=Object(l.useContext)(d.DataContext),t=e[0],n=(e[1],t.notify);return Object(r.jsxs)(r.Fragment,{children:[n.loading&&Object(r.jsx)(f,{color:"success"}),n.error&&Object(r.jsx)(p,{color:"danger",content:n.error,title:"Opps erreur!"}),n.success&&Object(r.jsx)(p,{color:"success",content:"votre taille est de "+parseFloat(n.success.taille).toFixed(2)+" m et votre poids est de "+parseFloat(n.success.poids).toFixed(2)+" kg. votre Indice de Masse Corporelle est de "+parseFloat(n.success.imc).toFixed(2)+"."+n.success.remarque,title:"Succ\xe8s de l'op\xe9ration!"})]})};function b(e){var t=e.children,n=e.page;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"bg-blue-100 pt-5 text-center min-h-screen",children:[Object(r.jsx)(s,{page:n}),Object(r.jsx)(h,{}),Object(r.jsx)("div",{className:"pt-4 mx-20",children:t})]}),Object(r.jsx)(u,{})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){a(n,e);var t=u(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},XvOm:function(e,t,n){"use strict";n.r(t),n.d(t,"DataContext",(function(){return s})),n.d(t,"DataProvider",(function(){return u}));var r=n("rePB"),o=n("nKUr"),i=n("q1tI");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(i.createContext)(),u=function(e){var t=e.children,n=Object(i.useReducer)(l,{notify:{},indice:{},imc:{}}),r=n[0],a=n[1];return Object(o.jsx)(s.Provider,{value:[r,a],children:t})};function l(e,t){switch(t.type){case"NOTIFY":return c(c({},e),{},{notify:t.payload});case"SAVE_INDICE":return c(c({},e),{},{indice:t.payload});case"UPDATE_IMC":return c(c({},e),{},{imc:t.payload});default:return e}}t.default=u},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",d=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,b=e.replace,v=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=i.Children.only(h),x=y&&"object"===typeof y&&y.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),O=r(j,2),w=O[0],A=O[1],_=i.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,i.useEffect)((function(){var e=A&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof g?g:n&&n.locale,o=u[f+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,f,p,{locale:r})}),[p,f,A,g,t,n]);var M={ref:_,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,f,p,b,v,m,g)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,f,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var S="undefined"!==typeof g?g:n&&n.locale,k=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);M.href=k||(0,a.addBasePath)((0,a.addLocale)(p,S,n&&n.defaultLocale))}return i.default.cloneElement(y,M)};t.default=d},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var r=n("J4zp"),o=n("RIqP"),i=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,c=void 0!==i&&i,d=e.priority,p=void 0!==d&&d,h=e.loading,v=e.className,m=e.quality,g=e.width,O=e.height,w=e.objectFit,A=e.objectPosition,_=e.loader,M=void 0===_?j:_,S=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),k=n?"responsive":"intrinsic",I=!1;"unsized"in S?(I=Boolean(S.unsized),delete S.unsized):"layout"in S&&(S.layout&&(k=S.layout),delete S.layout);0;var E=!p&&("lazy"===h||"undefined"===typeof h);t&&t.startsWith("data:")&&(c=!0,E=!1);var C,P,N,z=(0,f.useIntersection)({rootMargin:"200px",disabled:!E}),D=r(z,2),q=D[0],R=D[1],H=!E||R,L=x(g),F=x(O),U=x(m),W={visibility:H?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:A};if("undefined"!==typeof L&&"undefined"!==typeof F&&"fill"!==k){var Y=F/L,B=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===k?(C={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},P={display:"block",boxSizing:"border-box",paddingTop:B}):"intrinsic"===k?(C={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},P={boxSizing:"border-box",display:"block",maxWidth:"100%"},N='<svg width="'.concat(L,'" height="').concat(F,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===k&&(C={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:L,height:F})}else"undefined"===typeof L&&"undefined"===typeof F&&"fill"===k&&(C={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var K={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};H&&(K=function(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:b,kind:"w"};return{widths:o(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(i,r),l=u.widths,d=u.kind,f=l.length-1;return{src:s({src:t,quality:a,width:l[f]}),sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", ")}}({src:t,unoptimized:c,layout:k,width:L,quality:U,sizes:n,loader:M}));I&&(C=void 0,P=void 0,W=void 0);return s.default.createElement("div",{style:C},P?s.default.createElement("div",{style:P},N?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(N))}):null):null,s.default.createElement("img",Object.assign({},S,K,{decoding:"async",className:v,ref:q,style:W})),p?s.default.createElement(u.default,null,s.default.createElement("link",{key:"__nimg-"+K.src+K.srcSet+K.sizes,rel:"preload",as:"image",href:K.srcSet?void 0:K.src,imagesrcset:K.srcSet,imagesizes:K.sizes})):null)};var a=i(n("8OQS")),c=i(n("pVnL")),s=i(n("q1tI")),u=i(n("8Kt/")),l=n("dEHY"),d=n("UWYU"),f=n("vNVm");var p=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["auto=format","fit=max","w="+r],a="";o&&i.push("q="+o);i.length&&(a="?"+i.join("&"));return"".concat(t).concat(O(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(O(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(O(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,b=h.deviceSizes,v=h.imageSizes,m=h.loader,g=h.path,y=(h.domains,[].concat(o(b),o(v)));function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t=p.get(m);if(t)return t((0,c.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(m))}function O(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),d=l[0],f=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!a&&!d){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n("q1tI"),i=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map}}]);