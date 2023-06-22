(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o,c=n(0),i=n(7),r=n.n(i),a=(n(30),n(31),n(32),n(33),n(34),n(12)),l=n(8),s=n(5),u=n(3),d=n(23),j=n(41),m=n(40),b=n(22),f=n.n(b),p=n(1),h=function(e){var t=e.todo,n=e.onHandleToggleComplete,o=e.onDeleteTodo,i=e.onPatchTodo,r=Object(c.useState)(!1),a=Object(u.a)(r,2),l=a[0],s=a[1],d=Object(c.useState)(t.title),j=Object(u.a)(d,2),m=j[0],b=j[1];return Object(p.jsxs)("li",{className:f()({completed:t.completed},{editing:l}),children:[Object(p.jsxs)("div",{className:"view",children:[Object(p.jsx)("input",{type:"checkbox",className:"toggle",id:"toggle-view",checked:t.completed,onChange:function(){return n(t.id)}}),Object(p.jsx)("span",{onDoubleClick:function(){return s(!0)},children:m}),Object(p.jsx)("button",{type:"button",className:"destroy","data-cy":"deleteTodo","aria-label":"destroy-button",onClick:function(){return o(t.id)}})]}),l&&Object(p.jsx)("input",{autoFocus:!0,type:"text",className:"edit",value:m,onChange:function(e){return b(e.target.value)},onKeyDown:function(e){return"Escape"===e.key?(b(t.title),void s(!1)):"Enter"!==e.key||m?void("Enter"===e.key&&(i(t.id,m),s(!1))):(o(t.id),void s(!1))},onBlur:function(){if(!m)return o(t.id),void s(!1);m!==t.title?(i(t.id,m),s(!1)):s(!1)}})]})},O=function(e){var t=e.todos,n=e.isSomeTodos,o=e.areAllCompleted,c=e.onToggleComplete,i=e.onToggleAll,r=e.onDeleteTodo,a=e.onPatchTodo;return Object(p.jsxs)("section",{className:"main",children:[n&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all","data-cy":"toggleAll",checked:o,onChange:i}),Object(p.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"})]}),Object(p.jsx)("ul",{className:"todo-list","data-cy":"todoList",children:Object(p.jsx)(j.a,{children:t.map((function(e){return Object(p.jsx)(m.a,{timeout:800,classNames:"item",children:Object(p.jsx)(h,{todo:e,onHandleToggleComplete:c,onDeleteTodo:r,onPatchTodo:a},e.id)},e.id)}))})})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(o||(o={}));var T,g=function(e){var t=e.activeTodosAmount,n=e.completedTodosAmount,c=e.onFilterTodos,i=e.onClearCompletedTodos;return Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:1===t?"1 item left":"".concat(t," items left")}),Object(p.jsxs)("ul",{className:"filters",children:[Object(p.jsx)("li",{children:Object(p.jsx)(a.b,{to:"/",className:function(e){return e.isActive?"selected":""},onClick:function(){return c(o.ALL)},children:"All"})}),Object(p.jsx)("li",{children:Object(p.jsx)(a.b,{to:"/active",className:function(e){return e.isActive?"selected":""},onClick:function(){return c(o.ACTIVE)},children:"Active"})}),Object(p.jsx)("li",{children:Object(p.jsx)(a.b,{to:"/completed",className:function(e){return e.isActive?"selected":""},onClick:function(){return c(o.COMPLETED)},children:"Completed"})})]}),n>0&&Object(p.jsx)("button",{type:"button",className:"clear-completed",onClick:i,children:"Clear completed"})]})},x=function(e){var t=e.newTodoTitle,n=e.onTitleChange,o=e.onFormSubmit;return Object(p.jsx)("header",{className:"header",children:Object(p.jsx)("form",{onSubmit:o,children:Object(p.jsx)("input",{autoFocus:!0,type:"text","data-cy":"createTodo",className:"new-todo",placeholder:"What needs to be done?",value:t,onChange:function(e){return n(e.target.value)}})})})};!function(e){e.None="",e.EmptyTitle="Title can't be empty",e.NoUser="No such user",e.NoTodos="No current todos",e.UnableCompleteAction="Something went wrong"}(T||(T={}));function v(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return t&&(n.body=JSON.stringify(t),n.headers={"Content-Type":"application/json; charset=UTF-8"}),fetch("https://mate.academy/students-api"+e,n).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var C=function(e){return v(e)},y=function(e,t){return v(e,"POST",t)},N=function(e,t){return v(e,"PATCH",t)},A=function(e){return v(e,"DELETE")},k=function(e){return A("/todos/".concat(e))},E=function(e,t){return N("/todos/".concat(e),{completed:t})},S=10812,w=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),n=Object(u.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(""),j=Object(u.a)(a,2),m=j[0],b=j[1],f=Object(c.useState)([]),h=Object(u.a)(f,2),v=h[0],A=h[1],w=Object(c.useState)(""),L=Object(u.a)(w,2),D=L[0],P=L[1],F=Object(c.useState)(o.ALL),U=Object(u.a)(F,2),I=U[0],M=U[1],J=Object(c.useState)(T.None),V=Object(u.a)(J,2),_=V[0],H=V[1],B={transition:"opacity 300ms ease-in-out",opacity:0},R={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},G=function(e){e!==T.None&&(r(!0),H(e),setTimeout((function(){r(!1)}),3e3))},K=function(e){A(e),localStorage.setItem("todos",JSON.stringify(e))};Object(c.useEffect)((function(){var e;switch((e=S,C("/users/".concat(e))).then((function(e){return b(e.name)})).catch((function(){return G(T.NoUser)})),function(e){return C("/todos?userId=".concat(e))}(S).then((function(e){return K(e)})).catch((function(){return G(T.NoTodos)})),window.location.hash){case"#/active":M(o.ACTIVE);break;case"#/completed":M(o.COMPLETED);break;default:M(o.ALL)}}),[]);var W=function(e,t){switch(e){case o.ACTIVE:return t.filter((function(e){return!1===e.completed}));case o.COMPLETED:return t.filter((function(e){return!0===e.completed}));default:return t}}(I,v),q=v.filter((function(e){return!e.completed})),z=v.filter((function(e){return e.completed})),Q=v.every((function(e){return e.completed}));return Object(p.jsxs)("div",{className:"todoapp",children:[m&&Object(p.jsxs)(p.Fragment,{children:[m?Object(p.jsx)("h1",{children:"".concat(m,"'s tasks")}):Object(p.jsx)("h1",{className:"no-user",children:"tasks"}),Object(p.jsx)(x,{newTodoTitle:D,onTitleChange:P,onFormSubmit:function(e){if(e.preventDefault(),G(T.None),!D.trim())return P(""),void G(T.EmptyTitle);var t;(t={userId:S,title:D,completed:!1},y("/todos",t)).then((function(e){var t={id:e.id,title:e.title,completed:e.completed};K([].concat(Object(s.a)(v),[t]))})).catch((function(){G(T.UnableCompleteAction)})).finally((function(){return P("")}))}}),Object(p.jsx)(O,{todos:W,isSomeTodos:v.length>0,areAllCompleted:Q,onToggleComplete:function(e){var t=Object(s.a)(v),n=t.findIndex((function(t){return t.id===e}));t[n].completed=!t[n].completed,K(t),E(e,t[n].completed).then().catch((function(){G(T.UnableCompleteAction),t[n].completed=!t[n].completed,K(t)}))},onToggleAll:function(e){var t=e.target.checked,n=Object(s.a)(v).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{completed:t})})),o=n.map((function(e){return E(e.id,t)}));K(n),Promise.all(o).then().catch((function(){G(T.UnableCompleteAction),K(Object(s.a)(v))}))},onDeleteTodo:function(e){var t=Object(s.a)(v).filter((function(t){return t.id!==e}));K(t),k(e).then().catch((function(){G(T.UnableCompleteAction),K(v)}))},onPatchTodo:function(e,t){var n=Object(s.a)(v).map((function(n){return n.id!==e?n:Object(l.a)(Object(l.a)({},n),{},{title:t})}));K(n),function(e,t){return N("/todos/".concat(e),{title:t})}(e,t).then().catch((function(){G(T.UnableCompleteAction),K(Object(s.a)(v))}))}}),v.length>0&&Object(p.jsx)(g,{activeTodosAmount:q.length,completedTodosAmount:z.length,onFilterTodos:M,onClearCompletedTodos:function(){var e=z.map((function(e){return k(e.id)}));K(q),Promise.all(e).then().catch((function(){G(T.UnableCompleteAction),K(Object(s.a)(v))}))}})]}),Object(p.jsx)(d.a,{nodeRef:e,in:i,timeout:300,children:function(t){return Object(p.jsxs)("div",{className:"error",ref:e,style:Object(l.a)(Object(l.a)({},B),R[t]),children:[_,Object(p.jsx)("button",{type:"button",className:"error__button","aria-label":"close__error",onClick:function(){return r(!1)}})]})}})]})};r.a.render(Object(p.jsx)(a.a,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.980cb80e.chunk.js.map