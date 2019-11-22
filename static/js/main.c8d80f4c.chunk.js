(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(n,e,t){n.exports=t(55)},42:function(n,e){},44:function(n,e){},55:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(24),o=t.n(c),i=t(1),u=t(2);function l(){var n=Object(i.a)(["\n  font-size: 1.2rem;\n  margin: 20px 0;\n  text-align: center;\n"]);return l=function(){return n},n}var d=function(){return a.a.createElement(f,null,"Lista zada\u0144 do wykonania")},f=u.b.h1(l()),s=t(4),p=t(29),m=t(3),b=t(28),h=t.n(b),E=function(n,e){switch(e.type){case"HANDLE_TASK_COMPLETE":return n.map(function(n){return n.id===e.payload.id?Object(m.a)({},n,{completed:!n.completed}):n});case"ADD_TASK":var t=n.map(function(n){return Object(m.a)({},n,{hiddenInSearch:!1})});return[].concat(Object(p.a)(t),[{content:e.payload.content,completed:!1,hiddenByFilterButtons:!1,id:h()()}]);case"REMOVE_TASK":return n.filter(function(n){return n.id!==e.payload.id});case"SEARCH_TASKS":return n.map(function(n){var t=n.content.toUpperCase(),r=e.payload.inputValue.toUpperCase();return t.includes(r)?Object(m.a)({},n,{hiddenInSearch:!1}):Object(m.a)({},n,{hiddenInSearch:!0})});case"FILTER_TASKS_BY_COMPLETION":return function(e){switch(e){case"all":return n.map(function(n){return Object(m.a)({},n,{hiddenByFilterButtons:!1})});case"active":return n.map(function(n){return n.completed?Object(m.a)({},n,{hiddenByFilterButtons:!0}):Object(m.a)({},n,{hiddenByFilterButtons:!1})});case"completed":return n.map(function(n){return n.completed?Object(m.a)({},n,{hiddenByFilterButtons:!1}):Object(m.a)({},n,{hiddenByFilterButtons:!0})});default:return n}}(e.payload.activeButton);case"REMOVE_COMPLETED_TASK":return n.filter(function(n){return!n.completed})}},O=function(n){return{type:"SEARCH_TASKS",payload:{inputValue:n}}},v=function(n){return{type:"FILTER_TASKS_BY_COMPLETION",payload:{activeButton:n}}},j=[{content:"Twoje pierwsze zadanie.",completed:!1,hiddenByFilterButtons:!1,hiddenBySearch:!1,id:1},{content:"Hello World!",completed:!1,hiddenByFilterButtons:!1,hiddenBySearch:!1,id:2}],y=Object(r.createContext)(),g=function(n){var e=Object(r.useState)("all"),t=Object(s.a)(e,2),c=t[0],o=t[1],i=Object(r.useReducer)(E,[],function(){var n=localStorage.getItem("tasks");return n?JSON.parse(n):j}),u=Object(s.a)(i,2),l=u[0],d=u[1];return Object(r.useEffect)(function(){d(v(c))},[]),Object(r.useEffect)(function(){return localStorage.setItem("tasks",JSON.stringify(l))},[l]),a.a.createElement(y.Provider,{value:{tasks:l,activeFilter:c,setActiveFilter:o,dispatch:d}},n.children)};function x(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 500px;\n  margin: 0 auto;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);\n  width: 95%;\n"]);return x=function(){return n},n}var w=u.b.main(x()),k=function(n){var e=n.children;return a.a.createElement(w,null,e)},S="#eee",C="#fefefe";function B(){var n=Object(i.a)(["\n  :hover {\n    background-color: ",";\n  }\n"]);return B=function(){return n},n}function A(){var n=Object(i.a)(["\n  background-color: ",";\n  :hover {\n    background-color: ",";\n  }\n"]);return A=function(){return n},n}function T(){var n=Object(i.a)(["\n  background-color: ",";\n  :hover {\n    background-color: ",";\n  }\n"]);return T=function(){return n},n}function F(){var n=Object(i.a)(["\n  width: 30px;\n  height: 30px;\n  border: 1px solid ",";\n  border-radius: 50%;\n  background-color: ",";\n"]);return F=function(){return n},n}function _(){var n=Object(i.a)(["\n  min-width: ",";\n  height: 40px;\n  background-color: ",";\n  border: ",";\n  color: ",";\n  border-radius: ",";\n  text-transform: capitalize;\n  padding: 0 5px;\n  transition: 0.2s ease-in-out;\n  :hover {\n    border: 1px solid ",";\n  }\n\n  i {\n    font-size: 20px;\n  }\n"]);return _=function(){return n},n}function N(){var n=Object(i.a)(["\n  cursor: pointer;\n  outline: none;\n"]);return N=function(){return n},n}var z=S,K="#ddd",I="#1a1919",L=C,M="#9de9ad",R="#fff59b",D="#fd7381",P=u.b.button(N()),H=Object(u.b)(P)(_(),function(n){return n.round?"40px":"30%"},function(n){return n.primary?I:z},function(n){return n.primary?"1px solid ".concat(I):"2px solid ".concat(K)},function(n){return n.primary?z:I},function(n){return n.round?"50%":"5px"},I),V=Object(u.b)(P)(F(),z,L),J=Object(u.b)(V)(T(),function(n){return n.completed?"".concat(M):"".concat(L)},M),U=Object(u.b)(V)(A(),function(n){return n.isFocused?"".concat(R):"".concat(L)},R),Y=Object(u.b)(V)(B(),D);function W(){var n=Object(i.a)(["\n  width: 90%;\n  display: flex;\n  justify-content: space-around;\n  margin: 10px 0;\n\n  input {\n    width: 60%;\n    background-color: ",";\n    border: none;\n    padding: 10px;\n    font-size: 18px;\n    word-wrap: break-word;\n  }\n"]);return W=function(){return n},n}var q=S,G=function(){var n=Object(r.useState)("search"),e=Object(s.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),u=i[0],l=i[1],d=Object(r.useContext)(y),f=d.dispatch,p=d.setActiveFilter;Object(r.useEffect)(function(){"search"===t&&f(O(u))},[u]);return a.a.createElement(Q,{onSubmit:function(n){return function(n){if(n.preventDefault(),"add"===t)""===u?alert("Podaj nazw\u0119 zadania"):(f({type:"ADD_TASK",payload:{content:u}}),f(v("all")),p("all"),l(""));else{if("search"!==t)return;f(O(u))}}(n)}},a.a.createElement(H,{primary:"add"===t,round:!0,onClick:function(){return c("add")}},a.a.createElement("i",{className:"fas fa-plus"})),a.a.createElement("input",{type:"text",placeholder:"Nazwa zadania...",value:u,onChange:function(n){return function(n){l(n.target.value),"search"===t&&f(O(u))}(n)}}),a.a.createElement(H,{primary:"search"===t,round:!0,onClick:function(){c("search"),l("")}},a.a.createElement("i",{className:"fas fa-search"})))},Q=u.b.form(W(),q);function X(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-around;\n  max-width: 95vw;\n  padding: 5px;\n  border-bottom: 1px solid #ddd;\n  background-color: ",";\n\n  input {\n    width: 60%;\n    font-size: 18px;\n    border: none;\n    text-decoration: ",";\n    background-color: ",";\n    color: ",";\n  }\n\n  p {\n    width: 60%;\n    align-self: center;\n    text-decoration: ",";\n    word-wrap: break-word;\n  }\n"]);return X=function(){return n},n}var Z=function(n){var e=n.task,t=Object(r.useContext)(y).dispatch,c=Object(r.useState)(e.content),o=Object(s.a)(c,2),i=o[0],u=o[1],l=Object(r.useState)(!1),d=Object(s.a)(l,2),f=d[0],p=d[1],m=f?a.a.createElement("input",{autoFocus:!0,value:i,onChange:function(n){return u(n.target.value)}}):a.a.createElement("p",null,i);return a.a.createElement($,{completed:e.completed},a.a.createElement(J,{completed:e.completed,onClick:function(){return t({type:"HANDLE_TASK_COMPLETE",payload:{id:e.id}})}},a.a.createElement("i",{className:"fas fa-check"})),m,a.a.createElement(U,{isFocused:f,onClick:function(){return""!==i&&p(!f)}},a.a.createElement("i",{className:"fas fa-edit"})),a.a.createElement(Y,{onClick:function(){return t({type:"REMOVE_TASK",payload:{id:e.id}})}},a.a.createElement("i",{className:"far fa-trash-alt"})))},$=u.b.li(X(),function(n){return n.completed?"rgba(237, 237, 237, 0.3)":"#fefefe"},function(n){return n.completed?"line-through":"none"},function(n){return n.completed?"rgba(237, 237, 237, 0.3)":"#fefefe"},function(n){return n.completed?"#ccc":"#000"},function(n){return n.completed?"line-through":"none"});function nn(){var n=Object(i.a)(["\n  background-color: ",";\n  width: 100%;\n\n  ul {\n    list-style: none;\n  }\n\n  .empty {\n    margin: 0 10px;\n  }\n"]);return nn=function(){return n},n}var en=C,tn=function(){var n=Object(r.useContext)(y).tasks,e=n.filter(function(n){return!n.hiddenByFilterButtons&&!n.hiddenInSearch}).map(function(n){return a.a.createElement(Z,{task:n,key:n.id})}),t=n.length?a.a.createElement("ul",null,e.length?e:a.a.createElement("li",null,"No tasks to show.")):a.a.createElement("div",null,"No tasks to do. Hello free time.");return a.a.createElement(rn,null,t)},rn=u.b.div(nn(),en);function an(){var n=Object(i.a)(["\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n"]);return an=function(){return n},n}var cn=u.b.div(an()),on=function(){var n=Object(r.useContext)(y),e=n.dispatch,t=n.activeFilter,c=n.setActiveFilter,o=[{title:"all"},{title:"active"},{title:"completed"}].map(function(n,r){var o=n.title;return a.a.createElement(H,{key:r,primary:t===o,onClick:function(){c(o),e(v(o))}},o)});return a.a.createElement(cn,null,o)};function un(){var n=Object(i.a)(["\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px;\n  div {\n    width: 50%;\n    text-align: center;\n  }\n"]);return un=function(){return n},n}var ln=u.b.div(un()),dn=function(){var n=Object(r.useContext)(y),e=n.tasks,t=n.dispatch,c=e.filter(function(n){return n.completed}).length;return a.a.createElement(ln,null,a.a.createElement("div",null,e.length," items left"),a.a.createElement("div",null,a.a.createElement(H,{onClick:function(){return t({type:"REMOVE_COMPLETED_TASK"})}},"Clear completed (",c,")")))};function fn(){var n=Object(i.a)(["\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Roboto, Helvetica, sans-serif;\n  width: 100%;\n  background-color: ",";\n}\n"]);return fn=function(){return n},n}var sn=S,pn=Object(u.a)(fn(),sn),mn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(pn,null),a.a.createElement(d,null),a.a.createElement(g,null,a.a.createElement(k,null,a.a.createElement(G,null),a.a.createElement(tn,null),a.a.createElement(on,null),a.a.createElement(dn,null))))};o.a.render(a.a.createElement(mn,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c8d80f4c.chunk.js.map