(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{198:function(e,n,a){"use strict";n.a={items:[{name:"Dashboard",url:"/DashBoard",icon:"icon-speedometer"},{title:!0,name:"Product Owner",wrapper:{element:"",attributes:{}},class:""},{name:"User Story",url:"/UserStory/Detail",icon:"icon-pencil"},{name:"Estimation",url:"/Cover",icon:"icon-directions"},{name:"Product backlog",url:"/ProductBacklog/Detail",icon:"icon-pencil"},{name:"Evaluate",url:"/Evaluate",icon:"icon-layers"},{title:!0,name:"Team member",wrapper:{element:"",attributes:{}},class:""},{name:"Team",url:"/Member/Team",icon:"icon-people"},{name:"Velocity",url:"/Member/Velocity",icon:"icon-rocket"},{name:"SprintBacklog",url:"/Member/SprintBacklog",icon:"icon-book-open"},{name:"Evaluate",url:"/Member/Evaluate",icon:"icon-layers"},{name:"Team Task",url:"/Member/TeamTask",icon:"icon-docs"},{name:"My Task",url:"/Member/Task/MyTask",icon:"icon-doc"},{title:!0,name:"Extras"},{name:"Daily Schedule",url:"/DailySchedule",icon:"icon-calendar"},{name:"Pages",url:"/pages",icon:"icon-star",children:[{name:"Login",url:"/login",icon:"icon-star"},{name:"Register",url:"/register",icon:"icon-star"},{name:"Error 404",url:"/404",icon:"icon-star"},{name:"Error 500",url:"/500",icon:"icon-star"},{name:"Chat",url:"/Chat",icon:"icon-star"}]}]}},199:function(e,n,a){"use strict";var t=a(3),l=a.n(t),r=a(224),o=l.a.lazy(function(){return Promise.all([a.e(47),a.e(60)]).then(a.bind(null,320))}),c=(l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(14)]).then(a.bind(null,288))}),l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(36)]).then(a.bind(null,321))})),i=l.a.lazy(function(){return a.e(29).then(a.bind(null,225))}),u=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(8),a.e(64)]).then(a.bind(null,322))}),m=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(51)]).then(a.bind(null,370))}),s=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(38)]).then(a.bind(null,371))}),p=l.a.lazy(function(){return a.e(30).then(a.bind(null,372))}),h=l.a.lazy(function(){return a.e(44).then(a.bind(null,373))}),d=l.a.lazy(function(){return a.e(58).then(a.bind(null,380))}),b=l.a.lazy(function(){return Promise.all([a.e(35),a.e(65)]).then(a.bind(null,374))}),y=l.a.lazy(function(){return a.e(40).then(a.bind(null,375))}),f=l.a.lazy(function(){return a.e(43).then(a.bind(null,376))}),E=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(50)]).then(a.bind(null,377))}),g=l.a.lazy(function(){return a.e(66).then(a.bind(null,378))}),k=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(20),a.e(57)]).then(a.bind(null,379))}),v=[{path:"/",exact:!0,name:"Home",component:r.default},{path:"/theme/colors",exact:!0,name:"Colors",component:o},{path:"/DailySchedule",exact:!0,name:"DailySchedule",component:c},{path:"/Chat",exact:!0,name:"Chat",component:i},{path:"/DashBoard",exact:!0,name:"DashBoard",component:u},{path:"/ProductBacklog/Detail",exact:!0,name:"Detail",component:m},{path:"/UserStory/Detail",exact:!0,name:"UserStory_Detail",component:s},{path:"/Cover",exact:!0,name:"Cover",component:p},{path:"/Evaluate",exact:!0,name:"Evaluate",component:h},{path:"/testapollo",name:"Typography",component:d},{path:"/Member/Task/MyTask",exact:!0,name:"MyTask",component:b},{path:"/Member/SprintBacklog",exact:!0,name:"SprintBacklog",component:y},{path:"/Member/Evaluate",exact:!0,name:"Evaluate",component:f},{path:"/Member/TeamTask",exact:!0,name:"TeamTask",component:E},{path:"/Member/Velocity",exact:!0,name:"Velocity_Member",component:g},{path:"/Member/Team",exact:!0,name:"Team_Member",component:k}];n.a=v},224:function(e,n,a){"use strict";a.r(n);var t=a(24),l=a(25),r=a(27),o=a(26),c=a(28),i=a(3),u=a.n(i),m=a(88),s=a(85),p=a(87),h=a(153),d=a(152),b=a(198),y=a(199),f=u.a.lazy(function(){return a.e(31).then(a.bind(null,317))}),E=u.a.lazy(function(){return a.e(52).then(a.bind(null,318))}),g=u.a.lazy(function(){return a.e(27).then(a.bind(null,319))}),k=function(e){function n(){var e,a;Object(t.a)(this,n);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(c.a)(n,e),Object(l.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return console.log("loginlayout"),u.a.createElement("div",{className:"app"},u.a.createElement(d.e,{fixed:!0},u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(g,{onLogout:function(n){return e.signOut(n)}}))),u.a.createElement("div",{className:"app-body"},u.a.createElement(d.h,{fixed:!0,display:"lg"},u.a.createElement(d.k,null),u.a.createElement(d.j,null),u.a.createElement(i.Suspense,null,u.a.createElement(d.m,Object.assign({navConfig:b.a},this.props))),u.a.createElement(d.i,null),u.a.createElement(d.l,null)),u.a.createElement("main",{className:"main"},u.a.createElement(d.c,{appRoutes:y.a}),u.a.createElement(h.a,{fluid:!0},u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(m.a,null,y.a.map(function(e,n){return e.component?u.a.createElement(s.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return u.a.createElement(e.component,n)}}):null}),u.a.createElement(p.a,{from:"/",to:"/dashboard"}))))),u.a.createElement(d.a,{fixed:!0},u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(f,null)))),u.a.createElement(d.d,null,u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(E,null))))}}]),n}(i.Component);n.default=k}}]);
//# sourceMappingURL=48.37d6ed87.chunk.js.map