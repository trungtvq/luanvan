(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{119:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(25),l=a(27),o=a(26),i=a(28),c=a(39),s=a(3),m=a.n(s),u=a(116),d=a.n(u),p=a(117),E=a.n(p),h=a(143),g=a.n(h),f=a(107),b=a.n(f),v=a(136),x=a.n(v),y=a(115),C=a.n(y),j=a(114),P=a.n(j),w=a(110),O=a.n(w),S=a(138),k=a(92),M=a(125),N=a.n(M),T=a(126),R=a.n(T),L=a(124),A=a.n(L),F=a(122),z=a.n(F),B=a(123),D=a.n(B),V=a(127),q=a.n(V),I=a(16),K=a.n(I),Q=a(7),U=a(31),W=a(140),J=a(845),_=a(821),H=a(822),G=a(245),X=a(246),Y=a(139),Z=a(173),$=a(159),ee=a(823),te={};te.myproject=a(54);var ae=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).toggleCreatePj=function(){a.setState(function(e){return{modalCreatePj:!e.modalCreatePj,mobileMoreAnchorEl:null}})},a.handleProfileMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a.handleCreatePj=function(){var e=new te.myproject.MyprojectClient("http://overlead.co:8085"),t=new te.myproject.AddNewProjectReq;t.setTopic(a.state.Topic),t.setRequesterid(K.a.load("userId")),t.setProjectname(a.state.ProjectName),t.setStart(a.state.dateStart),t.setEnd(a.state.dateEnd),t.setPrivate(a.state.isPrivate),t.setCookie(K.a.load("accessToken")),e.addNewProject(t,{},function(e,t){e?(console.log(e),console.log("error AddNewProjectReq")):(console.log(t.getStatus()),"SUCCESS"==t.getStatus()&&(a.props.dispatch(Object(Q.n)(t.getProjectid(),a.state.Topic,a.state.ProjectName,a.state.dateStart,a.state.dateEnd,a.state.isPrivate)),console.log(a.props.project),a.toggleCreatePj()))})},a.onTextboxChangeTopic=function(e){a.setState({Topic:e.target.value})},a.onTextboxChangeProjectName=function(e){a.setState({ProjectName:e.target.value})},a.onTextboxChangetimeStart=function(e){a.setState({timeStart:e.target.value})},a.onTextboxChangedateStart=function(e){a.setState({dateStart:e.target.value})},a.onTextboxChangetimeEnd=function(e){a.setState({timeEnd:e.target.value})},a.onTextboxChangedateEnd=function(e){a.setState({dateEnd:e.target.value})},a.onTextboxChangePrivate=function(e){a.setState({isPrivate:"false"==a.state.isPrivate?"true":"false"})},a.state={anchorEl:null,mobileMoreAnchorEl:null,modalCreatePj:!1,Topic:"",ProjectName:"",timeStart:"",dateStart:"",timeEnd:"",dateEnd:"",isPrivate:"false"},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=Boolean(r),a=Boolean(l),n=this.state,r=n.anchorEl,l=n.mobileMoreAnchorEl,o=m.a.createElement(O.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:t,onClose:this.handleMenuClose},m.a.createElement(P.a,{onClick:this.handleMenuClose},m.a.createElement("a",{href:"/Profile/Detail"},"Profile")),m.a.createElement(P.a,{onClick:this.handleMenuClose},m.a.createElement("a",{href:"/AllProject"},"My project")),m.a.createElement(P.a,{onClick:this.handleMenuClose},m.a.createElement("a",{href:"/login"},"Log out"))),i=m.a.createElement(O.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:this.handleMenuClose},m.a.createElement(P.a,{onClick:this.handleMobileMenuClose},m.a.createElement(g.a,{color:"inherit"},m.a.createElement(C.a,{badgeContent:4,color:"secondary"},m.a.createElement(z.a,null))),m.a.createElement("p",null,"Messages")),m.a.createElement(P.a,{onClick:this.handleMobileMenuClose},m.a.createElement(g.a,{color:"inherit"},m.a.createElement(C.a,{badgeContent:11,color:"secondary"},m.a.createElement(D.a,null))),m.a.createElement("p",null,"Notifications")),m.a.createElement(P.a,{onClick:this.handleProfileMenuOpen},m.a.createElement(g.a,{color:"inherit"},m.a.createElement(A.a,null)),m.a.createElement("p",null,"Profile")));return m.a.createElement("div",{className:e.root},m.a.createElement(d.a,{position:"static"},m.a.createElement(E.a,null,m.a.createElement(g.a,{className:e.menuButton,color:"inherit","aria-label":"Open drawer"},m.a.createElement(N.a,null)),m.a.createElement(b.a,{className:e.title,variant:"h6",color:"inherit",noWrap:!0},"Overlead"),m.a.createElement("div",{className:e.search},m.a.createElement("div",{className:e.searchIcon},m.a.createElement(R.a,null)),m.a.createElement(x.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput}})),m.a.createElement("div",{className:e.grow}),m.a.createElement("div",{className:e.sectionDesktop},m.a.createElement(W.a,{variant:"outlined",color:"primary",size:"sm",onClick:this.toggleCreatePj},m.a.createElement("b",null,"Create Project")),m.a.createElement(J.a,{size:"lg",isOpen:this.state.modalCreatePj,toggle:this.toggleCreatePj,className:this.props.className},m.a.createElement(_.a,{toggle:this.toggleCreatePj},"Project"),m.a.createElement(H.a,null,m.a.createElement("div",{class:"card  bg-primary mb-3"},m.a.createElement("div",{class:"card-body"},m.a.createElement(G.a,{className:"form-horizontal"},m.a.createElement(X.a,{row:!0},m.a.createElement(Y.a,{md:"3"},m.a.createElement(Z.a,{htmlFor:"text-input"},"Topic Name")),m.a.createElement(Y.a,{xs:"5",md:"5"},m.a.createElement($.a,{type:"text",id:"Topic",name:"Topic",placeholder:"Topic",value:this.state.Topic,onChange:this.onTextboxChangeTopic}))),m.a.createElement(X.a,{row:!0},m.a.createElement(Y.a,{md:"3"},m.a.createElement(Z.a,{htmlFor:"text-input"},"Project Name")),m.a.createElement(Y.a,{xs:"5",md:"5"},m.a.createElement($.a,{type:"text",id:"ProjectName",name:"ProjectName",placeholder:"Project Name",value:this.state.ProjectName,onChange:this.onTextboxChangeProjectName}))),m.a.createElement(X.a,{row:!0},m.a.createElement(Y.a,{md:"3"},m.a.createElement(Z.a,{htmlFor:"date-input"},"Start ")),m.a.createElement(Y.a,{xs:"3",md:"3"},m.a.createElement($.a,{type:"time",id:"timeStart",name:"timeStart",value:this.state.timeStart,onChange:this.onTextboxChangetimeStart})),m.a.createElement(Y.a,{xs:"3",md:"3"},m.a.createElement($.a,{type:"date",id:"dateStart",name:"dateStart",value:this.state.dateStart,onChange:this.onTextboxChangedateStart}))),m.a.createElement(X.a,{row:!0},m.a.createElement(Y.a,{md:"3"},m.a.createElement(Z.a,{htmlFor:"date-input"},"End ")),m.a.createElement(Y.a,{xs:"3",md:"3"},m.a.createElement($.a,{type:"time",id:"timeEnd",name:"timeEnd",value:this.state.timeEnd,onChange:this.onTextboxChangetimeEnd})),m.a.createElement(Y.a,{xs:"3",md:"3"},m.a.createElement($.a,{type:"date",id:"dateEnd",name:"dateEnd",value:this.state.dateEnd,onChange:this.onTextboxChangedateEnd}))),m.a.createElement(X.a,{row:!0},m.a.createElement(Y.a,{md:"5"},m.a.createElement(Z.a,{htmlFor:"date-input"},"Private ")),m.a.createElement(Y.a,{xs:"5",md:"5"},m.a.createElement($.a,{type:"checkbox",id:"Private",name:"Private",value:this.state.isPrivate,onChange:this.onTextboxChangePrivate}))))))),m.a.createElement(ee.a,null,m.a.createElement(W.a,{type:"submit",color:"primary",onClick:this.handleCreatePj},"Submit"),m.a.createElement(W.a,{color:"secondary",onClick:this.toggleCreatePj},"Cancel"))),m.a.createElement(g.a,{color:"inherit"},m.a.createElement(C.a,{badgeContent:4,color:"secondary"},m.a.createElement(z.a,null))),m.a.createElement(g.a,{color:"inherit"},m.a.createElement(C.a,{badgeContent:17,color:"secondary"},m.a.createElement(D.a,null))),m.a.createElement(g.a,{"aria-owns":t?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},m.a.createElement(A.a,null))),m.a.createElement("div",{className:e.sectionMobile},m.a.createElement(g.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},m.a.createElement(q.a,null))))),o,i)}}]),t}(m.a.Component);t.default=Object(U.b)(function(e){console.log("mapStateToProps homeNav");var t=e.updateProjectLoaded;return{project:t.project,needUpdate:t.needUpdate}})(Object(k.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(c.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(c.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(S.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(c.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(c.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(c.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(ae))},153:function(e,t,a){"use strict";var n=a(15),r=a(18),l=a(3),o=a.n(l),i=a(2),c=a.n(i),s=a(89),m=a.n(s),u=a(91),d={tag:u.m,fluid:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.fluid,i=e.tag,c=Object(r.a)(e,["className","cssModule","fluid","tag"]),s=Object(u.i)(m()(t,l?"container-fluid":"container"),a);return o.a.createElement(i,Object(n.a)({},c,{className:s}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},158:function(e,t,a){"use strict";var n=a(3),r=a.n(n),l=a(2),o=a.n(l),i=a(8),c=a.n(i),s=a(20),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},p=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return a=n=u(this,e.call.apply(e,[this].concat(l))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!d(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,l=a.to;r?t.replace(l):t.push(l)}},u(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var l=this.context.router.history,o="string"===typeof t?Object(s.b)(t,null,null,l.location):t,i=l.createHref(o);return r.a.createElement("a",m({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(r.a.Component);p.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},p.defaultProps={replace:!1},p.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=p},161:function(e,t,a){"use strict";var n=a(15),r=a(18),l=a(3),o=a.n(l),i=a(2),c=a.n(i),s=a(89),m=a.n(s),u=a(91),d={tag:u.m,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.i)(m()(t,"card-footer"),a);return o.a.createElement(l,Object(n.a)({},i,{className:c}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},839:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(25),l=a(27),o=a(26),i=a(28),c=a(3),s=a.n(c),m=a(153),u=a(105),d=a(139),p=a(118),E=a(137),h=a(245),g=a(246),f=a(173),b=a(159),v=a(261),x=a(833),y=a(834),C=a(835),j=a(161),P=a(140),w=a(158),O=a(119),S=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(O.default,null)),s.a.createElement(m.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement(E.a,null,s.a.createElement("img",{src:"../../assets/img/avatar/myavatar.png",className:"img-avatar"}),s.a.createElement(h.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},s.a.createElement(g.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{htmlFor:"text-input"},"Point")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(b.a,{type:"text",id:"text-input",name:"text-input",placeholder:"",value:"8/10"}))),s.a.createElement(g.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{htmlFor:"text-input"},"Full name")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(b.a,{type:"text",id:"text-input",name:"text-input",placeholder:"",value:"Nguy\u1ec5n V\u0103n A"}))),s.a.createElement(g.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{htmlFor:"text-input"},"Address")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(b.a,{type:"text",id:"text-input",name:"text-input",placeholder:"",value:"13 L\xed Th\u01b0\u1eddng Ki\u1ec7t, p9, Q10"}))),s.a.createElement(g.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{htmlFor:"text-input"},"Date of Birth ")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(b.a,{type:"text",id:"text-input",name:"text-input",placeholder:"",value:"26/5/1993"}))),s.a.createElement(g.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{htmlFor:"text-input"},"Email")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(b.a,{type:"text",id:"text-input",name:"text-input",placeholder:"",value:"NguyenA@gmail.com"}))),s.a.createElement(g.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{htmlFor:"text-input"},"Fb")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(b.a,{type:"text",id:"text-input",name:"text-input",placeholder:"",value:"https://www.facebook.com/NguyenA.9615"}))),s.a.createElement(g.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{htmlFor:"text-input"},"Workplace")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(b.a,{type:"text",id:"text-input",name:"text-input",placeholder:"",value:"freelancer"}))),s.a.createElement(g.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{htmlFor:"text-input"},"Project")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," Name of project"),s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"Responsibilities"),s.a.createElement("th",null,"Point"),s.a.createElement("th",null,"Comments of master"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"App sell product online "),s.a.createElement("td",null,"Build an application on android to help users buy products online or sell their products"),s.a.createElement("td",null,"Write the front end code and back end of sales, build firebase connection functions for other members to use."),s.a.createElement("td",null,"8/10"),s.a.createElement("td",null,"positive, responsible, working ontime")),s.a.createElement("tr",null,s.a.createElement("td",null,"Web news "),s.a.createElement("td",null,"Building news website using laravel framework"),s.a.createElement("td",null,"Write code to build news website"),s.a.createElement("td",null,"8/10"),s.a.createElement("td",null,"positive, responsible, working ontime")),s.a.createElement("tr",null,s.a.createElement("td",null,"Library book "),s.a.createElement("td",null,"Build book management software on the console"),s.a.createElement("td",null,"Write code to edit and delete books to the library, create an account, divide account permissions, store data with text files"),s.a.createElement("td",null,"9/10"),s.a.createElement("td",null,"positive, responsible, working ontime")),s.a.createElement("tr",null,s.a.createElement("td",null,"Game plant and zombie "),s.a.createElement("td",null,"Build data input processing software for plants and zombies to return results for each zombie attack"),s.a.createElement("td",null,"Using link list structure, AVL tree, Queue, Stack, DFS, BFS algorithms to process and return results for each zombie attack in each turn."),s.a.createElement("td",null,"9/10"),s.a.createElement("td",null,"positive, responsible, working ontime")))),s.a.createElement("nav",null,s.a.createElement(x.a,null,s.a.createElement(y.a,null,s.a.createElement(C.a,{previous:!0,tag:"button"},"Prev")),s.a.createElement(y.a,{active:!0},s.a.createElement(C.a,{tag:"button"},"1")),s.a.createElement(y.a,null,s.a.createElement(C.a,{tag:"button"},"2")),s.a.createElement(y.a,null,s.a.createElement(C.a,{tag:"button"},"3")),s.a.createElement(y.a,null,s.a.createElement(C.a,{tag:"button"},"4")),s.a.createElement(y.a,null,s.a.createElement(C.a,{next:!0,tag:"button"},"Next")))))),s.a.createElement(g.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(f.a,{htmlFor:"text-input"},"Skill")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(b.a,{type:"textarea",id:"text-input",name:"text-input",placeholder:"",value:"\u2022  Databases etc: Oracle 8 to 10g, PL/SQL, MS SQL Server, My SQL\r \u2022 Programming Languages: C#, SharePoint, VB, ASP,  Java, Progress, XML,  X/HTML, JavaScript/VBScript, T-SQL, PL/SQL, C, C++ , Pascal\r \u2022 Programming Tools: Visual Studio 98, 2003, 2005, 2008, Eclipse, Microsoft Visio, Keil uVison\r \u2022 App server / Middleware: Microsoft IIS.\r \u2022 Framework: .NET, MDK-ARM\r \u2022 Configuration Management tools: VSS, Visual SVN\r \u2022 Browsers: IE 3-8, Firefox 1-3\r \u2022 OOAD/OOP: Object Oriented Analysis (OOA), Object Oriented Design (OOD), Object Oriented Programming (OOP), Unified Modeling Language (UML)\r "}))))),s.a.createElement(j.a,null,s.a.createElement(w.a,{to:"/Profile/Edit"},s.a.createElement(P.a,{type:"submit",size:"sm",color:"primary"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Edit"))))))))}}]),t}(c.Component);t.default=S}}]);
//# sourceMappingURL=41.d1019be8.chunk.js.map