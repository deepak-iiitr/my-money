(this["webpackJsonpmy-money"]=this["webpackJsonpmy-money"]||[]).push([[0],{17:function(e,t,n){e.exports={container:"Home_container__EPmmK",content:"Home_content__201zp",sidebar:"Home_sidebar__1Te-n",transactions:"Home_transactions__382X-",name:"Home_name__4y3Om",amount:"Home_amount__1MLAJ"}},29:function(e,t,n){e.exports={navbar:"Navbar_navbar__1N13Y",title:"Navbar_title__3s5BV"}},34:function(e,t,n){e.exports={"login-form":"Login_login-form__1PFnI"}},35:function(e,t,n){e.exports={"signup-form":"Signup_signup-form__Qocbv"}},42:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(33),s=n.n(r),u=(n(42),n(22)),i=n(16),o=n(5),l=n(12),j=n(23);n(53),n(44);j.a.initializeApp({apiKey:"AIzaSyBoWa8IZlNuunsxJL6-BcIIpom0rf377GI",authDomain:"mymoney-b11cd.firebaseapp.com",projectId:"mymoney-b11cd",storageBucket:"mymoney-b11cd.appspot.com",messagingSenderId:"916505174384",appId:"1:916505174384:web:eea93f8c7227daa243efb5"});var b=j.a.firestore(),d=j.a.auth(),O=j.a.firestore.Timestamp,p=n(1),f=Object(c.createContext)(),h=function(e,t){switch(t.type){case"LOGIN":return Object(l.a)(Object(l.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(l.a)(Object(l.a)({},e),{},{user:null});case"AUTH_IS_READY":return{user:t.payload,authIsReady:!0};default:return e}},m=function(e){var t=e.children,n=Object(c.useReducer)(h,{user:null,authIsReady:!1}),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=d.onAuthStateChanged((function(t){s({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log("AuthContext state:",r),Object(p.jsx)(f.Provider,{value:Object(l.a)(Object(l.a)({},r),{},{dispatch:s}),children:t})},x=function(){var e=Object(c.useContext)(f);if(!e)throw Error("useAuthContext must be used inside an AuthContextProvider");return e},v=n(31),g=n(17),y=n.n(g),_=n(9),N=n.n(_),E=n(15),S={document:null,isPending:!1,error:null,success:null},D=function(e,t){switch(t.type){case"IS_PENDING":return{isPending:!0,document:null,success:!1,error:null};case"ADDED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};case"DELETED_DOCUMENT":return{isPending:!1,document:null,success:!0,error:null};case"ERROR":return{isPending:!1,document:null,success:!1,error:t.payload};default:return e}},w=function(e){var t=Object(c.useReducer)(D,S),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),u=Object(o.a)(s,2),i=u[0],j=u[1],d=b.collection(e),p=function(e){i||r(e)},f=function(){var e=Object(E.a)(N.a.mark((function e(t){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"IS_PENDING"}),e.prev=1,n=O.fromDate(new Date),e.next=5,d.add(Object(l.a)(Object(l.a)({},t),{},{createdAt:n}));case 5:c=e.sent,p({type:"ADDED_DOCUMENT",payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),p({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(E.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"IS_PENDING"}),e.prev=1,e.next=4,d.doc(t).delete();case 4:p({type:"DELETED_DOCUMENT"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),p({type:"ERROR",payload:"could not delete"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return j(!0)}}),[]),{addDocument:f,deleteDocument:h,response:a}};function I(e){var t=e.uid,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(""),i=Object(o.a)(u,2),l=i[0],j=i[1],b=w("transactions"),d=b.addDocument,O=b.response;return Object(c.useEffect)((function(){O.success&&(s(""),j(""))}),[O.success]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"Add a Transaction"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({uid:t,name:r,amount:l})},children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Transaction name:"}),Object(p.jsx)("input",{type:"text",required:!0,onChange:function(e){return s(e.target.value)},value:r})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Amount (Rs.):"}),Object(p.jsx)("input",{type:"number",required:!0,onChange:function(e){return j(e.target.value)},value:l})]}),Object(p.jsx)("button",{children:"Add Transaction"})]})]})}function A(e){var t=e.transactions,n=w("transactions").deleteDocument;return Object(p.jsx)("ul",{className:y.a.transactions,children:t.map((function(e){return Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:y.a.name,children:e.name}),Object(p.jsxs)("p",{className:y.a.amount,children:["Rs.",e.amount]}),Object(p.jsx)("button",{onClick:function(){return n(e.id)},children:"x"})]},e.id)}))})}function C(){var e=x().user,t=function(e,t,n){var a=Object(c.useState)(null),r=Object(o.a)(a,2),s=r[0],u=r[1],i=Object(c.useState)(null),j=Object(o.a)(i,2),d=j[0],O=j[1],p=Object(c.useRef)(t).current,f=Object(c.useRef)(n).current;return Object(c.useEffect)((function(){var t,n,c=b.collection(e);p&&(c=(t=c).where.apply(t,Object(v.a)(p))),f&&(c=(n=c).orderBy.apply(n,Object(v.a)(f)));var a=c.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){console.log(e),t.push(Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id}))})),u(t),O(null)}),(function(e){console.log(e),O("could not fetch the data")}));return function(){return a()}}),[e,p,f]),{documents:s,error:d}}("transactions",["uid","==",e.uid],["createdAt","desc"]),n=t.documents,a=t.error;return Object(p.jsxs)("div",{className:y.a.container,children:[Object(p.jsxs)("div",{className:y.a.content,children:[a&&Object(p.jsx)("p",{children:a}),n&&Object(p.jsx)(A,{transactions:n})]}),Object(p.jsx)("div",{className:y.a.sidebar,children:Object(p.jsx)(I,{uid:e.uid})})]})}var P=n(34),R=n.n(P);function k(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),u=s[0],i=s[1],l=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),u=s[0],i=s[1],l=Object(c.useState)(!1),j=Object(o.a)(l,2),b=j[0],O=j[1],p=x().dispatch,f=function(){var e=Object(E.a)(N.a.mark((function e(t,c){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),O(!0),e.prev=2,e.next=5,d.signInWithEmailAndPassword(t,c);case 5:a=e.sent,p({type:"LOGIN",payload:a.user}),n||(O(!1),i(null)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n||(i(e.t0.message),O(!1));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return a(!0)}}),[]),{login:f,isPending:b,error:u}}(),j=l.login,b=l.error,O=l.isPending;return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(n,u)},className:R.a["login-form"],children:[Object(p.jsx)("h2",{children:"login"}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"email:"}),Object(p.jsx)("input",{type:"email",onChange:function(e){return a(e.target.value)},value:n})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"password:"}),Object(p.jsx)("input",{type:"password",onChange:function(e){return i(e.target.value)},value:u})]}),!O&&Object(p.jsx)("button",{className:"btn",children:"Login"}),O&&Object(p.jsx)("button",{className:"btn",disabled:!0,children:"loading"}),b&&Object(p.jsx)("p",{children:b})]})}var T=n(35),L=n.n(T);function G(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),u=s[0],i=s[1],l=Object(c.useState)(""),j=Object(o.a)(l,2),b=j[0],O=j[1],f=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),u=s[0],i=s[1],l=Object(c.useState)(!1),j=Object(o.a)(l,2),b=j[0],O=j[1],p=x().dispatch,f=function(){var e=Object(E.a)(N.a.mark((function e(t,c,a){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),O(!0),e.prev=2,e.next=5,d.createUserWithEmailAndPassword(t,c);case 5:if(r=e.sent){e.next=8;break}throw new Error("Could not complete signup");case 8:return e.next=10,r.user.updateProfile({displayName:a});case 10:p({type:"LOGIN",payload:r.user}),n||(O(!1),i(null)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n||(i(e.t0.message),O(!1));case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return a(!0)}}),[]),{signup:f,error:u,isPending:b}}(),h=f.signup,m=f.isPending,v=f.error;return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(n,u,b)},className:L.a["signup-form"],children:[Object(p.jsx)("h2",{children:"sign up"}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"email:"}),Object(p.jsx)("input",{type:"email",onChange:function(e){return a(e.target.value)},value:n})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"password:"}),Object(p.jsx)("input",{type:"password",onChange:function(e){return i(e.target.value)},value:u})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"display name:"}),Object(p.jsx)("input",{type:"text",onChange:function(e){return O(e.target.value)},value:b})]}),!m&&Object(p.jsx)("button",{className:"btn",children:"sign up"}),m&&Object(p.jsx)("button",{className:"btn",disabled:!0,children:"loading"}),v&&Object(p.jsx)("p",{children:v})]})}var U=n(29),H=n.n(U);function M(){var e=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),u=s[0],i=s[1],l=Object(c.useState)(!1),j=Object(o.a)(l,2),b=j[0],O=j[1],p=x().dispatch,f=function(){var e=Object(E.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),O(!0),e.prev=2,e.next=5,d.signOut();case 5:p({type:"LOGOUT"}),n||(O(!1),i(null)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n||(i(e.t0.message),O(!1));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return a(!0)}}),[]),{logout:f,error:u,isPending:b}}().logout,t=x().user;return Object(p.jsx)("nav",{className:H.a.navbar,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:H.a.title,children:"myMoney"}),!t&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/login",children:"Login"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/signup",children:"Signup"})})]}),t&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("li",{children:["hello, ",t.displayName]}),Object(p.jsx)("li",{children:Object(p.jsx)("button",{className:"btn",onClick:e,children:"Logout"})})]})]})})}var B=function(){var e=x(),t=e.authIsReady,n=e.user;return Object(p.jsx)("div",{className:"App",children:t&&Object(p.jsxs)(u.a,{children:[Object(p.jsx)(M,{}),Object(p.jsxs)(i.d,{children:[Object(p.jsxs)(i.b,{exact:!0,path:"/",children:[!n&&Object(p.jsx)(i.a,{to:"/login"}),n&&Object(p.jsx)(C,{})]}),Object(p.jsxs)(i.b,{path:"/login",children:[n&&Object(p.jsx)(i.a,{to:"/"}),!n&&Object(p.jsx)(k,{})]}),Object(p.jsxs)(i.b,{path:"/signup",children:[n&&n.displayName&&Object(p.jsx)(i.a,{to:"/"}),!n&&Object(p.jsx)(G,{})]})]})]})})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m,{children:Object(p.jsx)(B,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.126243ff.chunk.js.map