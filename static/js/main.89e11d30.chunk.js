(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(15),r=c.n(a),i=c(2),j=(c(22),c(23),c(0));var l=function(){return Object(j.jsx)("div",{className:"home",children:Object(j.jsxs)("div",{className:"intro",children:[Object(j.jsx)("div",{classname:"intro-text1",children:Object(j.jsx)("h2",{children:" Hey there!"})}),Object(j.jsx)("div",{className:"intro-pic",children:Object(j.jsx)("img",{src:"/assets/images/intropic.png",className:"display-picture",alt:"display-pic"})}),Object(j.jsxs)("div",{className:"intro-text2",children:[Object(j.jsx)("h4",{children:"I am Diya Mahendru"}),Object(j.jsx)("h6",{children:"MERN Stack Developer | Book Nerd | Budding Chess Player | Yoga Enthusiast"})]}),Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("a",{href:"/blogs",children:"Blog"}),Object(j.jsx)("a",{href:"/assets/pdfs/DIYA-MAHENDRU-RESUME.pdf",download:!0,children:"Resume"}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/diya-mahendru/",children:"Connect"})]})]})})},o=(c(25),function(){return Object(j.jsx)("div",{className:"home",children:Object(j.jsx)(l,{})})}),b=c(9),d=[],h=(c(26),function(e){var t=e.label;return Object(j.jsx)("p",{className:"chip",children:t})}),O=(c(27),function(e){var t=e.img;return Object(j.jsxs)("div",{className:"emptyList-wrap",children:[Object(j.jsx)("h1",{children:"404 - NOT FOUND"}),Object(j.jsx)("img",{src:t,alt:"empty"})]})}),u=(c(28),c(7)),x=c(16),m=function(){var e=Object(i.g)().id,t=Object(s.useState)(null),c=Object(b.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(""),l=Object(b.a)(r,2),o=l[0],m=l[1];return Object(s.useEffect)((function(){var t=d.find((function(t){return t.id===parseInt(e)}));t&&(a(t),document.title=t.title),m("/assets/images/empty".concat(Math.floor(10*Math.random()),".gif"))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(u.b,{className:"blog-goBack",to:"/blogs",children:[Object(j.jsx)("span",{children:" \u2190"})," ",Object(j.jsx)("span",{children:"Go Back"})]}),n?Object(j.jsxs)("div",{className:"blog-wrap",children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)("p",{className:"blog-date",children:["Published ",n.createdAt]}),Object(j.jsx)("h1",{children:n.title}),Object(j.jsx)("div",{className:"blog-subCategory",children:n.subCategory.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)(h,{label:e})},t)}))})]}),Object(j.jsx)("img",{src:n.cover,alt:"cover"}),Object(j.jsx)(x.a,{options:{wrapper:"article"},children:n.content})]}):Object(j.jsx)(O,{img:o})]})},p=(c(37),function(e){var t=e.blog,c=t.description,s=t.title,n=t.createdAt,a=t.authorName,r=t.authorAvatar,i=t.cover,l=t.category,o=t.id;return Object(j.jsxs)("div",{className:"blogItem-wrap",children:[Object(j.jsx)("img",{className:"blogItem-cover",src:i,alt:"cover"}),Object(j.jsx)(h,{label:l}),Object(j.jsx)("h3",{children:s}),Object(j.jsx)("p",{className:"blogItem-desc",children:c}),Object(j.jsxs)("footer",{children:[Object(j.jsxs)("div",{className:"blogItem-author",children:[Object(j.jsx)("img",{src:r,alt:"avatar"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h6",{children:a}),Object(j.jsx)("p",{children:n})]})]}),Object(j.jsx)(u.b,{className:"blogItem-link",to:"/blog/".concat(o),children:"\u279d"})]})]})}),g=(c(38),function(e){var t=e.blogs;return Object(j.jsx)("div",{className:"blogList-wrap",children:t.map((function(e){return Object(j.jsx)(p,{blog:e})}))})}),f=(c(39),function(){return Object(j.jsxs)("header",{className:"blogs-header",children:[Object(j.jsx)("h1",{children:"Tech Blog"}),Object(j.jsx)("p",{children:"Happy Reading!"})]})}),v=(c(40),function(e){var t=e.formSubmit,c=e.value,s=e.handleSearchKey,n=e.clearSearch;return Object(j.jsx)("div",{className:"searchBar-wrap",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",placeholder:"Search By Category",value:c,onChange:s}),c&&Object(j.jsx)("span",{onClick:n,children:"X"}),Object(j.jsx)("button",{onClick:t,children:"Go"})]})})}),N=(c(41),function(){var e=Object(s.useState)(d),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(b.a)(a,2),i=r[0],l=r[1],o=Object(s.useState)("/assets/images/empty6.gif"),h=Object(b.a)(o,2),x=h[0],m=h[1],p=function(){m("/assets/images/empty".concat(Math.floor(10*Math.random()),".gif"));var e=d.filter((function(e){return e.category.toLowerCase().includes(i.toLowerCase().trim())}));n(e)};return Object(j.jsxs)("div",{children:[Object(j.jsxs)(u.b,{className:"blogs-goBack",to:"/",children:[Object(j.jsx)("span",{children:" \u2190"})," ",Object(j.jsx)("span",{children:"Home"})]}),Object(j.jsx)(f,{}),Object(j.jsx)(v,{value:i,clearSearch:function(){n(d),l("")},formSubmit:function(e){e.preventDefault(),p()},handleSearchKey:function(e){return l(e.target.value)}}),c.length?Object(j.jsx)(g,{blogs:c}):Object(j.jsx)(O,{img:x})]})}),y=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/site",exact:!0,component:o}),Object(j.jsx)(i.b,{path:"/site/blogs",exact:!0,component:N}),Object(j.jsx)(i.b,{path:"/site/blog/:id",component:m}),Object(j.jsx)(i.a,{to:"/"})]})})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(u.a,{children:Object(j.jsx)(y,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.89e11d30.chunk.js.map