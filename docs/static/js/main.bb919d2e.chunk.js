(this["webpackJsonpcrypto-project"]=this["webpackJsonpcrypto-project"]||[]).push([[0],{36:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(10),i=a.n(s),r=(a(36),a(30)),o=a(17),j=a(46),l=a(47),d=a(48),b=a(53),u=a(49),h=a(50),m=a(51),p=(a(54),a(55),a(2)),O=function(){var e=Object(n.useState)("https://coinranking1.p.rapidapi.com/coins"),t=Object(o.a)(e,2),a=t[0],c=t[1],s=function(e){var t=Object(n.useRef)(!0),a=Object(n.useState)({data:null,loading:!0,error:null}),c=Object(o.a)(a,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){return function(){t.current=!1}}),[]),Object(n.useEffect)((function(){i({data:null,loading:!0,error:null}),fetch(e,{method:"GET",headers:{"x-rapidapi-key":"082f9eeb53msh1fa5a117adc2f49p1e06bajsnf81d61049626","x-rapidapi-host":"coinranking1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){i({loading:!1,error:null,data:e})})).catch((function(e){console.log("Waiting for data")}))}),[e]),s}(a),i=s.data,O=s.loading;return Object(p.jsx)("div",{children:Object(p.jsxs)(l.a,{className:"container-body animate__animated animate__fadeIn",children:[Object(p.jsx)(d.a,{className:" justify-content-center boton-fila",children:Object(p.jsx)(b.a,{placement:"right",delay:{show:250,hide:400},overlay:function(e){return Object(p.jsx)(j.a,Object(r.a)(Object(r.a)({id:"button-tooltip"},e),{},{children:"Refresh"}))},children:Object(p.jsx)(u.a,{onClick:function(){c("nothing"),console.log("Loading..."),setTimeout((function(){c("https://coinranking1.p.rapidapi.com/coins"),console.log("Refreshed")}),500)},className:"boton",src:"../../public/assets/refresh.jpg",alt:"Refresh Button"})})}),Object(p.jsxs)(d.a,{className:"fila-superior",children:[Object(p.jsx)(h.a,{xs:1,children:Object(p.jsx)("span",{})}),Object(p.jsxs)(h.a,{children:[" ",Object(p.jsx)("p",{className:"items-superior nombre",children:"CRYPTO CURRENCY"})," "]}),Object(p.jsxs)(h.a,{children:[" ",Object(p.jsx)("p",{className:"items-superior",children:"PRICE ($)"})," "]}),Object(p.jsxs)(h.a,{children:[" ",Object(p.jsx)("p",{className:"items-superior",children:"CHANGE RATE($)"})," "]})]}),O?Object(p.jsx)(m.a,{animation:"border",role:"status",className:" spin",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})}):i.data.coins.map((function(e){return Object(p.jsxs)(d.a,{className:"fila animate__animated animate__fadeIn",children:[Object(p.jsxs)(h.a,{xs:12,md:1,children:[" ",Object(p.jsx)(u.a,{src:e.iconUrl,alt:e.name,roundedCircle:!0,className:"imagenes"})]}),Object(p.jsxs)(h.a,{children:[" ",Object(p.jsx)("p",{className:"items nombre",children:e.name})," "]}),Object(p.jsxs)(h.a,{children:[" ",Object(p.jsx)("p",{className:"items",children:parseFloat(e.price).toFixed(2)})," "]}),Object(p.jsxs)(h.a,{children:[" ",Object(p.jsx)("p",{className:"items ".concat(e.change>0?"verde":"rojo"),children:e.change})," "]})]},e.id)}))]})})},x=function(){return Object(p.jsx)("div",{className:"foot",children:Object(p.jsxs)("h5",{children:["\xa9 Lorenzo Sancho Aragon - React App -",Object(p.jsxs)("small",{children:[Object(p.jsx)("i",{children:" Data from coinranking1"})," "]})]})})},f=a(52),g=a(56),N=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(f.a,{className:"animate__animated animate__fadeIn",children:[Object(p.jsxs)("video",{loop:!0,autoPlay:!0,muted:!0,className:"video animate__animated animate__fadeIn",children:[Object(p.jsx)("source",{src:"../../public/assets/landing-video.mp4",type:"video/mp4"}),"Your browser does not support the video tag. I suggest you upgrade your browser."]}),Object(p.jsxs)(g.a,{className:"titulo animate__animated animate__fadeIn",children:[Object(p.jsx)("h1",{children:"Crypto Currency App"}),Object(p.jsx)("h3",{children:"Today's Cryptocurrency Prices"})]})]})})},_=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(N,{}),Object(p.jsx)(O,{}),Object(p.jsx)(x,{})]})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bb919d2e.chunk.js.map