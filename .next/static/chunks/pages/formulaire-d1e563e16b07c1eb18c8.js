_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/u0W":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formulaire",function(){return r("N82P")}])},"1ZOC":function(e,t,r){"use strict";r.r(t);var n=r("nKUr");t.default=function(e){var t=e.color;return Object(n.jsx)("p",{className:t,children:" en cour de chargement..."})}},"Bw/0":function(e,t,r){"use strict";r.r(t);var n=r("nKUr");t.default=function(e){var t=e.color,r=e.content,c=e.title;return Object(n.jsx)("div",{className:"flex flex-col bg-gray-50",children:Object(n.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(n.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(n.jsxs)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:[Object(n.jsxs)("h4",{className:t,children:[" ",c," "]}),Object(n.jsxs)("p",{className:t,children:[" ",r," "]})]})})})})}},"DJh+":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r("nKUr"),c=r("Isfp"),s=r("MFDk"),o=r("QDVf");function a(e){var t=e.children,r=e.page;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"bg-blue-100 pt-5 text-center min-h-screen",children:[Object(n.jsx)(c.default,{page:r}),Object(n.jsx)(o.default,{}),Object(n.jsx)("div",{className:"pt-4 mx-20",children:t})]}),Object(n.jsx)(s.default,{})]})}},MFDk:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var n=r("nKUr");function c(){return Object(n.jsx)("footer",{className:"pt-10",children:Object(n.jsxs)("ul",{className:"pt-10 pb-4 flex justify-around",children:[Object(n.jsx)("li",{className:"text-blue-700",children:"NZO Parfait A."}),Object(n.jsx)("li",{className:"text-blue-700",children:"parfaitaristantnzo@gmail.com"}),Object(n.jsx)("li",{className:"text-blue-700",children:"Phase 2 de recrutement chez UZENZE - 2021"})]})})}},N82P:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return x}));var n=r("nKUr"),c=r("o0o1"),s=r.n(c);function o(e,t,r,n,c,s,o){try{var a=e[s](o),i=a.value}catch(l){return void r(l)}a.done?t(i):Promise.resolve(i).then(n,c)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,c){var s=e.apply(t,r);function a(e){o(s,n,c,a,i,"next",e)}function i(e){o(s,n,c,a,i,"throw",e)}a(void 0)}))}}var i=r("rePB"),l=r("DJh+"),u=r("q5W1"),d=r("q1tI"),p=function(){var e=a(s.a.mark((function e(t,r,n){var c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:3000","/api/").concat(t),{method:"POST",headers:{"Content-Type":"application/json",Authorization:n},body:JSON.stringify(r)}).catch((function(e){console.error("erreur cot\xe9 serveur:",e)}));case 2:return c=e.sent,e.next=5,c.json();case 5:return o=e.sent,console.log("mes donneees",o.imc),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),f=function(e,t){if(!e||!t)return"svp veuillez remplir tous les champs";if(e>=.5&&e<=2.5){if(e%1!==0&&e.toString().length>4)return"Vous ne pouvez pas utiliser plus de 2 chiffres apr\xe8s la vigule pour votre taille"}else if(e<1||e.toString().length>.4)return e+"m est invalide comme taille! veuillez donner une taille comprise entre 1m et 2.5m";if(t%1!==0){if(t.toString().length>6)return"Vous ne pouvez pas utiliser plus de 2 chiffres apr\xe8s la vigule pour votre poids";if(t<0)return t+"kg ne peut etre pris en compte!"}return e>.5&&e<1&&t>30?"ceci ne peut etre pris en charge par notre systeme!":t%1==0&&(t<0||t>=200)?t+"kg ne peut etre pris en compte!":void 0},b=r("XvOm");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(){var e=Object(d.useState)({taille:"",poids:""}),t=e[0],r=e[1],c=t.taille,o=t.poids,m=Object(d.useContext)(b.DataContext),x=(m[0],m[1]),O=function(e){var n=e.target,c=n.name,s=n.value;r(j(j({},t),{},Object(i.a)({},c,s)))},h=function(){var e=a(s.a.mark((function e(r){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),(n=f(c,o))&&x({type:"NOTIFY",payload:{error:n}}),n){e.next=12;break}return x({type:"NOTIFY",payload:{loading:!0}}),e.next=7,p("imc",t);case 7:return(a=e.sent).err&&x({type:"NOTIFY",payload:{error:a.err}}),console.log("test test ",a),x({type:"NOTIFY",payload:{success:a}}),e.abrupt("return",x({type:"UPDATE_IMC",payload:{payload:a}}));case 12:console.log(t);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(l.default,{page:"formulaire",children:Object(n.jsx)("div",{className:"flex flex-col bg-gray-50",children:Object(n.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(n.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(n.jsxs)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:[Object(n.jsx)(u.default,{}),Object(n.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:h,children:[Object(n.jsx)("div",{className:"rounded-md shadow-sm -space-y-px",children:Object(n.jsx)("input",{type:"number",name:"taille",value:c,pattern:"^\\d*(\\.\\d{0,2})?$",step:"0.01",placeholder:"Entrer votre taille",id:"taille",label:"Entrer votre taille (m)",className:"appearance-none \r rounded-none relative block w-full px-3 py-2 border \r border-gray-300 placeholder-gray-500 text-gray-900 \r rounded-t-md focus:outline-none focus:ring-indigo-500 \r focus:border-blue-500 focus:z-10 sm:text-sm",onChange:O})}),Object(n.jsx)("div",{className:"rounded-md shadow-sm -space-y-px",children:Object(n.jsx)("input",{type:"number",name:"poids",step:"0.01",pattern:"^\\d*(\\.\\d{0,2})?$",value:o,placeholder:"Entrer votre poids (Kg)",id:"poids",label:"Entrer votre poids",className:"appearance-none \r rounded-none relative block w-full px-3 py-2 border \r border-gray-300 placeholder-gray-500 text-gray-900 \r rounded-t-md focus:outline-none focus:ring-indigo-500 \r focus:border-blue-500 focus:z-10 sm:text-sm",onChange:O})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"group relative w-full flex \r justify-center py-2 px-4 border-2 text-sm\r font-medium rounded-md bg-blue-300 hover:border-blue-300 \r border-blue-400 text-blue-900 focus:bg-blue-400 \r focus:outline-none focus:ring-2 focus:ring-offset-2 \r focus:ring-blue-500",type:"submit",children:"Calculer"})})]})]})})})})})}},QDVf:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),c=r("q1tI"),s=r("XvOm"),o=r("1ZOC"),a=r("Bw/0");t.default=function(){var e=Object(c.useContext)(s.DataContext),t=e[0],r=(e[1],t.notify);return Object(n.jsxs)(n.Fragment,{children:[r.loading&&Object(n.jsx)(o.default,{color:"success"}),r.error&&Object(n.jsx)(a.default,{color:"danger",content:r.error,title:"Opps erreur!"}),r.success&&Object(n.jsx)(a.default,{color:"success",content:"votre taille est de "+parseFloat(r.success.taille).toFixed(2)+" m et votre poids est de "+parseFloat(r.success.poids).toFixed(2)+" kg. votre Indice de Masse Corporelle est de "+parseFloat(r.success.imc).toFixed(2)+"."+r.success.remarque,title:"Succ\xe8s de l'op\xe9ration!"})]})}},XvOm:function(e,t,r){"use strict";r.r(t),r.d(t,"DataContext",(function(){return i})),r.d(t,"DataProvider",(function(){return l}));var n=r("rePB"),c=r("nKUr"),s=r("q1tI");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=Object(s.createContext)(),l=function(e){var t=e.children,r=Object(s.useReducer)(u,{notify:{},indice:{},imc:{}}),n=r[0],o=r[1];return Object(c.jsx)(i.Provider,{value:[n,o],children:t})};function u(e,t){switch(t.type){case"NOTIFY":return a(a({},e),{},{notify:t.payload});case"SAVE_INDICE":return a(a({},e),{},{indice:t.payload});case"UPDATE_IMC":return a(a({},e),{},{imc:t.payload});default:return e}}t.default=l},q5W1:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var n=r("nKUr");function c(e){return Object(n.jsx)("div",{className:"bg-blue-300",children:Object(n.jsx)("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",children:Object(n.jsxs)("div",{className:"flex items-center justify-between flex-wrap",children:[Object(n.jsxs)("div",{className:"w-0 flex-1 flex items-center",children:[Object(n.jsx)("span",{className:"flex p-2 rounded-lg",children:Object(n.jsx)("svg",{className:"h-6 w-6 text-blue-900",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"})})}),Object(n.jsxs)("p",{className:"ml-5 font-medium text-blue-900 truncate",children:[Object(n.jsx)("span",{className:"md:hidden"}),Object(n.jsx)("span",{className:"hidden md:inline"})]})]}),Object(n.jsx)("div",{className:"order-3 mt-7 flex-shrink-0 w-full text-blue-900 sm:order-2 sm:mt-0 sm:w-auto",children:Object(n.jsx)("a",{href:"#",className:"flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white"})})]})})})}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}},[["/u0W",0,1,2,3]]]);