(this["webpackJsonpreact-project-dogs-api"]=this["webpackJsonpreact-project-dogs-api"]||[]).push([[0],{13:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(16),a=c.n(s),i=(c(13),c(14)),j=c.n(i),o=c(17),l=c(10),h=c(0),d=function(e){var t=e.data;e.loading;return Object(h.jsxs)("div",{className:"picture",children:[Object(h.jsxs)("div",{className:"word",children:[Object(h.jsx)("a",{className:"download",target:"_blank",href:t.src.large,rel:"noreferrer",children:"click me to download"}),Object(h.jsxs)("p",{children:["credit: ",t.photographer]})]}),Object(h.jsx)("div",{className:"img",children:Object(h.jsx)("img",{src:t.src.large,alt:""})})]})},b=function(e){var t=e.search,c=e.setInput;e.enter;return Object(h.jsxs)("div",{className:"create",children:[Object(h.jsx)("h1",{children:"\u4e32\u63a5 PEXEL API"}),Object(h.jsx)("input",{placeholder:"enter English vocabulary...",onChange:function(e){c(e.target.value)},autoFocus:!0,type:"text"}),Object(h.jsx)("button",{onClick:t,children:"search"})]})},u=c.p+"static/media/undraw_Dog_walking_re_l61p.41cb1049.svg",x=function(){return Object(h.jsxs)("div",{className:"loading",children:[Object(h.jsx)("h3",{children:"one more second..."}),Object(h.jsx)("img",{src:u,alt:""})]})},p=function(e){var t=e.v,c=e.search;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{onClick:c,children:t})})},O=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(null),a=Object(l.a)(s,2),i=a[0],u=a[1],O=Object(r.useState)(!0),g=Object(l.a)(O,2),f=g[0],m=g[1],v="https://api.pexels.com/v1/search?query=".concat(c,"&per_page=15&page=1"),w=function(){var e=Object(o.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{Accept:"application/json",Authorization:"563492ad6f91700001000001e29189a8073847c1af5449418a3579c9"}});case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,u(r.photos),m(!1),console.log(i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){w("https://api.pexels.com/v1/curated?page=1&per_page=15"),m(!0)}),[]),f?Object(h.jsx)(x,{loading:f}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)(b,{search:function(){w(v)},input:c,setInput:n}),Object(h.jsx)("p",{style:{textAlign:"center",color:"#261808"},children:"try these categories \u2b07"}),Object(h.jsx)("div",{className:"category",children:["cake","dog","cat"].map((function(e,t){return Object(h.jsx)(p,{v:e,i:t,search:function(){w("https://api.pexels.com/v1/search?query=".concat(e,"}&per_page=15&page=1"))}})}))}),Object(h.jsx)("div",{className:"pictures",children:i&&i.map((function(e,t){return Object(h.jsx)(d,{data:e,i:t})}))})]})})},g=c(8),f=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)(g.b,{to:"/React-API",children:Object(h.jsx)("li",{children:"Home"})}),Object(h.jsx)(g.b,{to:"/about",children:Object(h.jsx)("li",{children:"About"})})]})})})},m=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("footer",{children:"\xa9 2021 Shih-Ching-Huang. All rights reserved."})})},v=c(2),w=c.p+"static/media/footer.37ce4b28.svg",N=function(){return Object(h.jsx)("div",{className:"about",children:Object(h.jsxs)("div",{className:"data",children:[Object(h.jsxs)("h1",{children:["visit my website ","",Object(h.jsx)("a",{href:"https://shihchinghuang.github.io/React-personal-web/",target:"_blank",rel:"noreferrer",children:"here"}),"!"]}),Object(h.jsx)("img",{src:w,alt:""})]})})};var k=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{path:"/React-API/",exact:!0,children:Object(h.jsx)(O,{})}),Object(h.jsx)(v.a,{path:"/about",exact:!0,children:Object(h.jsx)(N,{})})]}),Object(h.jsx)(m,{})]})};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(g.a,{children:Object(h.jsx)(k,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2d9f8037.chunk.js.map