(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategoties,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),r.trim().length>1)return e((function(t){return[r].concat(Object(s.a)(t))})),o("")},children:[Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}}),Object(u.jsxs)("h5",{children:[" ",r," "]})]})},j=n(10),d=function(t){var e=t.url,n=t.title;return Object(u.jsxs)("div",{className:"card animate__animated animate__backInUp",children:[Object(u.jsx)("img",{src:e,alt:n}),Object(u.jsx)("p",{children:n})]})},l=n(6),b=n.n(l),f=n(8),p=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,a,c,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"YDoJRwmN8uHLFRfj9H61nGiYxANI6NeO","https://api.giphy.com/v1/gifs/search?",n="".concat("https://api.giphy.com/v1/gifs/search?","api_key=").concat("YDoJRwmN8uHLFRfj9H61nGiYxANI6NeO","&q=").concat(encodeURI(e),"&lang=es"),t.next=5,fetch(n);case 5:return a=t.sent,t.next=8,a.json();case 8:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){return r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[" Resultados de: ",e," "]}),r&&Object(u.jsx)("p",{className:"animate__rubberBand",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))}),0===c.length&&Object(u.jsx)("p",{className:"animate__animated animate__shakeX",children:"Gif not found"})]})},O=function(){var t=Object(a.useState)(["Dragon Ball"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategoties:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})};r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7c56d665.chunk.js.map