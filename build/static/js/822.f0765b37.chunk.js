"use strict";(self.webpackChunkeasy_store=self.webpackChunkeasy_store||[]).push([[822],{7822:function(r,o,e){e.r(o),e.d(o,{default:function(){return m}});var a,t,n,l=e(168),i=e(2791),d=e(885),b=e(8304),g=e(5355),s=e(1243),c=e(6444),u=e(184);b.kL.register(b.uw,b.f$,b.ZL,b.Dx,b.u);var p,v=c.ZP.option(a||(a=(0,l.Z)([""]))),h=c.ZP.select(t||(t=(0,l.Z)(["\n  margin-left: 20px;\n"]))),f=c.ZP.div(n||(n=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 120px;\n  margin-bottom: 30px;\n"]))),x=function(){var r=(0,i.useState)(null),o=(0,d.Z)(r,2),e=o[0],a=o[1],t=(0,i.useState)("top3"),n=(0,d.Z)(t,2),l=n[0],b=n[1];(0,i.useEffect)((function(){s.Z.get("http://localhost:4000/products?_sort=viewCount&_order=desc").then((function(r){a(r.data)})).catch((function(r){console.log(r)}))}),[]);var c={labels:null===e||void 0===e?void 0:e.slice(0,3).map((function(r){return r.title})),datasets:[{label:"Product Viewed",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(50, 34, 132, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:2,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:null===e||void 0===e?void 0:e.slice(0,3).map((function(r){return r.viewCount}))}]},p={labels:null===e||void 0===e?void 0:e.slice(0,5).map((function(r){return r.title})),datasets:[{label:"Product Viewed",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(50, 34, 132, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:2,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:null===e||void 0===e?void 0:e.slice(0,5).map((function(r){return r.viewCount}))}]},x={labels:null===e||void 0===e?void 0:e.slice(0,7).map((function(r){return r.title})),datasets:[{label:"Product Viewed",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(50, 34, 132, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:2,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:null===e||void 0===e?void 0:e.slice(0,7).map((function(r){return r.viewCount}))}]};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(f,{children:[(0,u.jsx)("h3",{className:" fw-bold",children:"Most Viewed Products"}),(0,u.jsxs)(h,{onChange:function(r){b(r.target.value)},children:[(0,u.jsx)(v,{value:"top3",children:"Top 3"}),(0,u.jsx)(v,{value:"top5",children:"Top 5"}),(0,u.jsx)(v,{value:"top7",children:"Top 7"})]})]}),(0,u.jsx)("div",{className:"chart-container mb-5",children:(0,u.jsx)(g.$Q,{options:{maintainAspectRatio:!1,scales:{y:{stacked:!0,grid:{display:!0,color:"rgba(255,99,132,0.2)"}},x:{grid:{display:!1}}}},data:"top3"===l?c:"top7"===l?x:"top5"===l?p:""})})]})},C=c.ZP.div(p||(p=(0,l.Z)(["\n  margin-top: 80px;\n"]))),m=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(C,{children:(0,u.jsx)(x,{})})})}}}]);
//# sourceMappingURL=822.f0765b37.chunk.js.map