(this["webpackJsonpreact-project-dogs-api"]=this["webpackJsonpreact-project-dogs-api"]||[]).push([[0],{15:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(16),a=c.n(s),i=(c(15),c(13)),j=c.n(i),o=c(17),l=c(10),d=c(0),b=function(e){var t=e.data;e.loading;return Object(d.jsxs)("div",{className:"picture",children:[Object(d.jsxs)("div",{className:"word",children:[Object(d.jsx)("a",{className:"download",target:"_blank",href:t.src.large,rel:"noreferrer",children:"click me to download"}),Object(d.jsxs)("p",{children:["credit: ",t.photographer]})]}),Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:t.src.large,alt:""})})]})},h=function(e){var t=e.search;return Object(d.jsxs)("div",{className:"create",children:[Object(d.jsx)("h1",{children:"\u4e32\u63a5 PEXEL API"}),Object(d.jsx)("input",{autoFocus:!0,type:"text"}),Object(d.jsx)("button",{onClick:t,children:"search"})]})},u=c.p+"static/media/undraw_Dog_walking_re_l61p.41cb1049.svg",x=function(){return Object(d.jsxs)("div",{className:"loading",children:[Object(d.jsx)("h3",{children:"one more second..."}),Object(d.jsx)("img",{src:u,alt:""})]})},O=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],n=(t[1],Object(r.useState)(null)),s=Object(l.a)(n,2),a=s[0],i=s[1],u=Object(r.useState)(!0),O=Object(l.a)(u,2),p=O[0],g=O[1],f=function(){var e=Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.pexels.com/v1/curated?page=1&per_page=15",{method:"GET",headers:{Accept:"application/json",Authorization:"563492ad6f91700001000001e29189a8073847c1af5449418a3579c9"}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c.photos),console.log(c.photos),g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(r.useEffect)((function(){console.log(p),f(),g(!0)}),[]),p)return Object(d.jsx)(x,{loading:p});"https://api.pexels.com/v1/search?query=".concat(c,"&per_page=15&page=1");return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)(h,{search:f}),Object(d.jsx)("div",{className:"pictures",children:a&&a.map((function(e,t){return Object(d.jsx)(b,{data:e,i:e.i})}))})]})})},p=c(8),g=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(p.b,{to:"/React-API",children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)(p.b,{to:"/about",children:Object(d.jsx)("li",{children:"About"})})]})})})},f=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("footer",{children:"\xa9 2021 Shih-Ching-Huang. All rights reserved."})})},m=c(2),v=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"about"})})};var w=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/React-API/",exact:!0,children:Object(d.jsx)(O,{})}),Object(d.jsx)(m.a,{path:"/about",exact:!0,children:Object(d.jsx)(v,{})})]}),Object(d.jsx)(f,{})]})};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(w,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b3fc9360.chunk.js.map