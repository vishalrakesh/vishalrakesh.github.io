(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{22:function(e,t,n){"use strict";var c=n(1),i=n(17),l=n(3),s=n(12),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),r=a.NODE_ENV,o=a.REACT_APP_GA_TRACKING_ID;"production"===r&&s.a.initialize(o);var j=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},h=n(5),b=n(24),u=[{index:!0,label:"Dhruv Doshi",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Research",path:"/research"},{label:"Blogs",path:"/blogs"},{label:"Contact",path:"/contact"}],d=n(0),O=Object(c.lazy)((function(){return n.e(6).then(n.t.bind(null,93,7))})),m=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(d.jsxs)("div",{className:"hamburger-container",children:[Object(d.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(d.jsx)("ul",{children:n?Object(d.jsx)("li",{className:"menu close-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(d.jsx)("li",{className:"menu open-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsx)(O,{right:!0,isOpen:n,children:Object(d.jsx)("ul",{className:"hamburger-ul",children:u.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:e.path,onClick:function(){return i(!n)},children:Object(d.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:u.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(h.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsx)("ul",{children:u.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:e.path,children:e.label})},e.label)}))})}),Object(d.jsx)(m,{})]})},p=n(27),f=function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(h.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Dhruv Doshi"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:dhruvdoshi25071999@gmail.com",children:"dhruvdoshi25071999@gmail.com"})}),Object(d.jsx)(p.a,{})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsxs)("p",{children:["Hi, I Dhruv. I like building things. I am pursing masters from ",Object(d.jsx)("a",{href:"https://www.dal.ca/",children:"Dalhousie University"})," ,",Object(d.jsx)("a",{href:"https://www.gtu.ac.in/",children:" Gujarat Tech University"})," Alumni, and the founder of ",Object(d.jsx)("a",{href:"https://dhruv25071999.wixsite.com/dcs-bbn",children:"DCS-BBN"}),"."]}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(h.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(h.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(d.jsx)("section",{id:"footer",children:Object(d.jsxs)("p",{className:"copyright",children:["\xa9 Dhruv Doshi ",Object(d.jsx)(h.b,{to:"/",children:"dhruvdoshi.github.io"}),"."]})})]})},v=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(d.jsxs)(i.b,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(v,{}),Object(d.jsxs)(i.a,{titleTemplate:"%s | Dhruv Doshi",defaultTitle:"Dhruv Doshi",children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(x,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(f,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"Dhruv Doshi's personal website."};t.a=g},27:function(e,t,n){"use strict";n(1);var c=n(31),i=n(32),l=n(33),s=n(34),a=n(38),r=n(35),o=n(36),j=n(21),h=n(37),b=[{link:"https://github.com/DhruvDoshi",label:"Github",icon:i.faGithub},{link:"https://www.linkedin.com/in/dhruvdoshi25071999",label:"LinkedIn",icon:l.faLinkedinIn},{link:"https://twitter.com/dhruv25071999",label:"Twitter",icon:s.faTwitter},{link:"https://www.quora.com/profile/Dhruv-Doshi-18",label:"Quora",icon:j.a},{link:"https://scholar.google.com/citations?user=Ri3ZDcIAAAAJ&hl=en",label:"Google Scholar",icon:r.faGoogle},{link:"https://www.researchgate.net/profile/Dhruv-Doshi-4",label:"Research Gate",icon:o.faResearchgate},{link:"https://calendly.com/dhruvdoshi25071999/15min",label:"Calendar",icon:h.a},{link:"https://telegram.me/DoshiDhruv",label:"",icon:j.b},{link:"mailto:dhruvdoshi25071999@gmail.com",label:"Email",icon:a.faEnvelope}],u=n(0);t.a=function(){return Object(u.jsx)("ul",{className:"icons",children:b.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.link,children:Object(u.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(16),s=n(5),a=n(3),r=n(22),o=(n(54),n(0)),j=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(10)]).then(n.bind(null,90))})),h=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,99))})),b=Object(c.lazy)((function(){return n.e(12).then(n.bind(null,91))})),u=Object(c.lazy)((function(){return n.e(13).then(n.bind(null,92))})),d=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,96))})),O=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,94))})),m=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,97))})),x=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,98))})),p=Object(c.lazy)((function(){return Promise.all([n.e(5),n.e(14)]).then(n.bind(null,95))})),f=function(){return Object(o.jsx)(s.a,{basename:"",children:Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(r.a,{}),children:Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{exact:!0,path:"/",component:b}),Object(o.jsx)(a.a,{path:"/about",component:j}),Object(o.jsx)(a.a,{path:"/projects",component:d}),Object(o.jsx)(a.a,{path:"/stats",component:p}),Object(o.jsx)(a.a,{path:"/contact",component:h}),Object(o.jsx)(a.a,{path:"/resume",component:O}),Object(o.jsx)(a.a,{path:"/research",component:m}),Object(o.jsx)(a.a,{path:"/blogs",component:x}),Object(o.jsx)(a.a,{component:u,status:404})]})})})},v=function(){return Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(f,{})})},g=document.getElementById("root");g.hasChildNodes()?Object(l.hydrate)(Object(o.jsx)(v,{}),g):Object(l.render)(Object(o.jsx)(v,{}),g)}},[[55,1,2]]]);
//# sourceMappingURL=main.a4d8868a.chunk.js.map