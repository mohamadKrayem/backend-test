(this["webpackJsonppart2-notes"]=this["webpackJsonppart2-notes"]||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(17),r=n.n(c),a=n(8),i=n(4),s=n(2),u=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(o.jsxs)("li",{className:"note",children:[e.content,Object(o.jsx)("button",{onClick:n,style:{marginLeft:"5px"},children:c})]})},l=n(3),j=n.n(l),f="/api/notes",p=function(t){return j.a.post(f,t).then((function(t){return t.data}))},d=function(t,e){return j.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},b=function(t){var e=t.message;return null===e?null:Object(o.jsx)("div",{className:"error",children:e})},h=function(){return Object(o.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(o.jsx)("br",{}),Object(o.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},m=function(){var t=Object(s.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),f=l[0],m=l[1],O=Object(s.useState)(!0),x=Object(i.a)(O,2),g=x[0],v=x[1],S=Object(s.useState)("some error happened..."),k=Object(i.a)(S,2),y=k[0],w=k[1];Object(s.useEffect)((function(){j.a.get("http://localhost:3001/api/notes").then((function(t){c(t.data)}))}),[]);var C=g?n:n.filter((function(t){return t.important}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Notes"}),Object(o.jsx)(b,{message:y}),Object(o.jsx)("div",{children:Object(o.jsxs)("button",{onClick:function(){return v(!g)},children:["show ",g?"important":"all"]})}),Object(o.jsx)("ul",{children:C.map((function(t){return Object(o.jsx)(u,{note:t,toggleImportance:function(){return function(t){console.log(n);var e=n.find((function(e){return e.id===t})),o=Object(a.a)(Object(a.a)({},e),{},{important:!e.important});d(t,o).then((function(e){console.log("putResponse",e),c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(o){w("the note '".concat(e.content,"' was already deleted from server")),setTimeout((function(){w(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:(new Date).toISOString(),important:Math.random()<.5,id:n.length+1};p(e).then((function(t){console.log("postResponse",t),c(n.concat(t)),m("")}))},children:[Object(o.jsx)("input",{placeholder:"add a new note",value:f,onChange:function(t){m(t.target.value)}}),Object(o.jsx)("button",{type:"submit",children:"save"}),Object(o.jsx)(h,{})]})]})};n(41);r.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d1aa568d.chunk.js.map