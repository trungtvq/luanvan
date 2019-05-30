(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{174:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(197),o=a.n(i),c=a(122),l=a.n(c),s=a(91),m=a(99),d=a(32),g=a(18),u=a.n(g),p=a(94);function h(e){return Math.round(1e4*e)/1e4}function b(e){var t,a=e.children,n=e.classes,i=e.className,o=e.component,c=e.fullHeight,l=e.fullWidth,s=e.margin,g=e.marginBottom,h=e.style,b=e.width,f=Object(m.a)(e,["children","classes","className","component","fullHeight","fullWidth","margin","marginBottom","style","width"]);return r.a.createElement(o,Object.assign({className:u()(n.root,(t={},Object(d.a)(t,n["width".concat(Object(p.capitalize)(b))],!l),Object(d.a)(t,n.fullHeight,c),Object(d.a)(t,n.margin,s),Object(d.a)(t,n.marginBottom,g),t),i),style:h},f),a)}b.defaultProps={component:"div",fullHeight:!1,fullWidth:!1,margin:!1,marginBottom:!1,width:"medium"};Object(s.withStyles)(function(e){var t,a;return{margin:{margin:7*e.spacing.unit},marginBottom:{marginBottom:12*e.spacing.unit},widthSmall:Object(d.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(660+6*e.spacing.unit),{width:660,marginLeft:"auto",marginRight:"auto"}),widthMedium:Object(d.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(850+6*e.spacing.unit),{width:850,marginLeft:"auto",marginRight:"auto"}),widthLarge:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(d.a)(t,e.breakpoints.up("md"),{width:880,marginLeft:"auto",marginRight:"auto"}),Object(d.a)(t,e.breakpoints.up(h(880/.7777)),{width:"77.7777%"}),Object(d.a)(t,e.breakpoints.up(h(1400/.7777)),{width:1400}),t),widthXlarge:(a={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(d.a)(a,e.breakpoints.up("md"),{width:900,marginLeft:"auto",marginRight:"auto"}),Object(d.a)(a,e.breakpoints.up(h(1e3)),{width:"90%"}),Object(d.a)(a,e.breakpoints.up(h(2e3)),{width:1800}),a),widthFull:{width:"100%"},fullHeight:{height:"100%"}}})(b);var f=a(108),E=a.n(f),v={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};function j(e){var t=e.children,a=e.classes,n=e.marked,i=e.variant,o=Object(m.a)(e,["children","classes","marked","variant"]);return r.a.createElement(E.a,Object.assign({headlineMapping:v,variant:i},o),t,n?r.a.createElement("span",{className:a["marked".concat(Object(p.capitalize)(i)+Object(p.capitalize)(n))]}):null)}j.defaultProps={marked:!1};Object(s.withStyles)(function(e){return{markedH2Center:{height:4,width:73,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH3Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH4Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH6Left:{height:2,width:28,display:"block",marginTop:e.spacing.unit/2,background:"currentColor"}}})(j);var w=a(97),x=a(176),S=a.n(x);function y(e){var t=e.classes,a=e.InputProps,n=(a=void 0===a?{}:a).classes,i=(n=void 0===n?{}:n).input,o=Object(m.a)(n,["input"]),c=Object(m.a)(a,["classes"]),l=e.InputLabelProps,s=e.noBorder,g=e.size,h=e.SelectProps,b=Object(m.a)(e,["classes","InputProps","InputLabelProps","noBorder","size","SelectProps"]);return r.a.createElement(S.a,Object.assign({InputProps:Object(w.a)({disableUnderline:!0,classes:Object(w.a)({root:t.root,input:u()(t.input,t["inputSize".concat(Object(p.capitalize)(g))],Object(d.a)({},t.inputBorder,!s),i),disabled:t.disabled},o)},c),InputLabelProps:Object(w.a)({},l,{shrink:!0,className:t.formLabel}),SelectProps:Object(w.a)({},h,{classes:{select:t.select,icon:t.selectIcon}})},b))}y.defaultProps={noBorder:!1,size:"medium"};Object(s.withStyles)(function(e){return{root:{padding:0,"label + &":{marginTop:3*e.spacing.unit}},input:{minWidth:6*e.spacing.unit,backgroundColor:e.palette.common.white,"&$disabled":{backgroundColor:e.palette.divider}},inputBorder:{border:"1px solid #e9ddd0","&:focus":{borderColor:e.palette.secondary.main}},disabled:{},inputSizeSmall:{fontSize:14,padding:e.spacing.unit,width:"calc(100% - ".concat(2*e.spacing.unit,"px)")},inputSizeMedium:{fontSize:16,padding:2*e.spacing.unit,width:"calc(100% - ".concat(4*e.spacing.unit,"px)")},inputSizeLarge:{fontSize:18,padding:22,width:"calc(100% - ".concat(44,"px)")},inputSizeXlarge:{fontSize:20,padding:25,width:"calc(100% - ".concat(50,"px)")},formLabel:{fontSize:18},select:{height:"auto",borderRadius:0},selectIcon:{top:"50%",marginTop:-12}}})(y);t.a=o()(l.a,Object(s.withStyles)(function(e){return{root:{display:"flex",backgroundColor:e.palette.secondary.light},layoutBody:{marginTop:8*e.spacing.unit,marginBottom:8*e.spacing.unit,display:"flex"},iconsWrapper:{height:120},icons:{display:"flex"},icon:{width:48,height:48,display:"flex",justifyContent:"center",alignItems:"center",marginRight:e.spacing.unit,"&:hover":{backgroundColor:"#d8d4d6"}},list:{margin:0,listStyle:"none",paddingLeft:0},listItem:{paddingTop:e.spacing.unit/2,paddingBottom:e.spacing.unit/2}}}))(function(e){return e.classes,r.a.createElement("footer",{style:{fontSize:"16px",background:"#000000",padding:"7em 0",color:"#fff  "},class:"ftco-footer ftco-bg-dark ftco-section"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row mb-5"},r.a.createElement("div",{class:"col-md"},r.a.createElement("div",{class:"ftco-footer-widget mb-4"},r.a.createElement("h2",{class:"ftco-heading-2"},"About"),r.a.createElement("p",null,"Management tool for every one. Free for everyone, but you can donate us if you feel it can save your time."),r.a.createElement("ul",{class:"ftco-footer-social list-unstyled float-md-left float-lft mt-3"},r.a.createElement("li",{class:"ftco-animate"},r.a.createElement("a",{href:"#"},r.a.createElement("span",{class:"icon-twitter"}))),r.a.createElement("li",{class:"ftco-animate"},r.a.createElement("a",{href:"https://www.facebook.com/Overlead-237878327133820/?modal=admin_todo_tour"},r.a.createElement("span",{class:"icon-facebook"}))),r.a.createElement("li",{class:"ftco-animate"},r.a.createElement("a",{href:"#"},r.a.createElement("span",{class:"icon-instagram"})))))),r.a.createElement("div",{class:"col-md"},r.a.createElement("div",{class:"ftco-footer-widget mb-4"},r.a.createElement("h2",{class:"ftco-heading-2"},"Employers"),r.a.createElement("ul",{class:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",class:"py-2 d-block"},"How it works")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",class:"py-2 d-block"},"Recruiting Service")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",class:"py-2 d-block"},"FAQ"))))),r.a.createElement("div",{class:"col-md"},r.a.createElement("div",{class:"ftco-footer-widget mb-4 ml-md-4"},r.a.createElement("h2",{class:"ftco-heading-2"},"Workers"),r.a.createElement("ul",{class:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",class:"py-2 d-block"},"How it works"))))),r.a.createElement("div",{class:"col-md"},r.a.createElement("div",{class:"ftco-footer-widget mb-4"},r.a.createElement("h2",{class:"ftco-heading-2"},"Have a Questions?"),r.a.createElement("div",{class:"block-23 mb-3"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{class:"icon icon-map-marker"}),r.a.createElement("span",{class:"text"},"268 L\xfd Th\u01b0\u1eddng Ki\u1ec7t, Ph\u01b0\u1eddng 14, Qu\u1eadn 10, H\u1ed3 Ch\xed Minh, Vi\u1ec7t Nam")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("span",{class:"icon icon-phone"}),r.a.createElement("span",{class:"text"},"+84907316215"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("span",{class:"icon icon-envelope"}),r.a.createElement("span",{class:"text"},"info@overlead.co"))))))))))})},175:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=(a(18),a(91)),o=a(113),c=a.n(o);Object(i.withStyles)(function(e){return{root:{color:"theme.palette.common.white"}}})(function(e){return r.a.createElement(c.a,Object.assign({elevation:0,color:"primary",position:"static"},e))});var l=a(32),s=a(115),m=a.n(s);Object(i.withStyles)(function(e){return{root:Object(l.a)({height:64},e.breakpoints.up("sm"),{height:70})}})(function(e){return r.a.createElement(m.a,e)});t.a=function(e){var t={fontSize:"16px",paddingTop:".9rem",paddingBottom:".9rem",paddingLeft:"20px",paddingRight:"20px",color:"#000000",fontWeight:"400",opacity:"22222222 !important"};return r.a.createElement("nav",{class:"navbar navbar-expand-lg  ftco_navbar  ftco-navbar-light",style:{color:"red",background:"transparent !important",position:"absolute",top:"20px",left:0,right:0,zIndex:3}},r.a.createElement("div",{class:"container",style:{display:"flex",flexBasis:"auto",alignItems:"center",webkitBoxFlex:1,msFlexPositive:1,flexGrow:1,webkitBoxAlign:"center",boxSizing:"border-box",WebkitBoxDirection:"normal",fontSize:"16px",lineHeight:1.8,fontWeight:"400",color:"#999999",fontFamily:'"Nunito Sans", Arial, sans-serif',WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"}},r.a.createElement("a",{class:"navbar-brand",href:"index.html",style:{color:"#000000",fontWeight:900,fontSize:"20px",display:"block",paddingTop:"0.3125rem",paddingBottom:"0.3125rem",marginRight:"1rem",lineHeight:"inherit",whiteSpace:"nowrap",boxSizing:"border-box",fontFamily:'"Nunito Sans", Arial, sans-serif',textDecoration:"none"}},"Overlead"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"oi oi-menu"})," Menu"),r.a.createElement("div",{class:"collapse navbar-collapse",id:"ftco-nav"},r.a.createElement("ul",{class:"navbar-nav ml-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{style:{fontSize:"16px",paddingTop:".9rem",paddingBottom:".9rem",paddingLeft:"20px",paddingRight:"20px",color:"#6c63ff",fontWeight:"400",opacity:"22222222 !important"},href:"https://overlead.co/home",class:"nav-link"},"Home")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{style:t,href:"https://overlead.co/about",class:"nav-link"},"About")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{style:t,href:"https://overlead.co/privacy",class:"nav-link"},"Privacy")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{style:t,href:"https://overlead.co/donate",class:"nav-link"},"Donate")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{style:t,href:"https://overlead.co/contact",class:"nav-link"},"Contact")),r.a.createElement("li",{class:"nav-item cta mr-md-1"},r.a.createElement("a",{style:{background:"#6c63ff",border:'1px solid "#6c63ff',paddingTop:".5rem",paddingBottom:".5rem",paddingLeft:"20px",paddingRight:"20px",margin:"1px 0px 0px",borderRadius:"5px",color:"#fff",boxSizing:"border-box",opacity:1,fontWeight:400,display:"block",transition:".3s all ease"},href:"https://overlead.co/login",class:"nav-link"},"Sign In")),r.a.createElement("li",{class:"nav-item cta cta-colored"},r.a.createElement("a",{style:{background:"#ff6347",border:'1px solid "#6c63ff',paddingTop:".5rem",paddingBottom:".5rem",paddingLeft:"20px",paddingRight:"20px",margin:"1px 0px 0px",borderRadius:"5px",color:"#fff",boxSizing:"border-box",opacity:1,fontWeight:400,display:"block",transition:".3s all ease"},href:"https://overlead.co/register",class:"nav-link"},"Sign Up"))))))}},641:function(e,t){},643:function(e,t){},651:function(e,t){},653:function(e,t){},686:function(e,t){},687:function(e,t){},689:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=689},945:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),i=a(16),o=a(15),c=a(17),l=a(5),s=a(3),m=a(22),d=a(1),g=a.n(d),u=a(112),p=a(149),h=a(106),b=a(180),f=a(117),E=a(193),v=a(204),j=a(123),w=a(383),x=a(219),S=a(124),y=a(238),O=a(37),k=a(535),I=(a(27),a(536)),P=a.n(I),C=a(2),R=a(175),N=a(174),T=(a(631),{});T.auth=a(47),T.myproject=a(34),T.team=a(48);var L=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).onTextboxChangeSignInEmail=function(e){a.setState({signInEmail:e.target.value})},a.onTextboxChangeSignInPassword=function(e){a.setState({signInPassword:e.target.value})},a.onTextboxChangeSignUpEmail=function(e){a.setState({signUpEmail:e.target.value})},a.onTextboxChangeSignUpPassword=function(e){a.setState({signUpPassword:e.target.value})},a.onSignIn=function(){var e=a.state,t=e.signInEmail,n=e.signInPassword;a.setState({isLoading:!0});var r=new T.auth.AuthClient("https://www.overlead.co"),i=new T.auth.SignInReq;i.setUsername(t),i.setPassword(n),console.log("signIn");var o=Object(l.a)(Object(l.a)(a));r.signIn(i,{},function(e,n){e?console.log(e):"SUCCESS"==n.getStatus()&&(Object(C.b)("userId",n.getId()),Object(C.b)("accessToken",n.getSession()),Object(C.b)("username",t),Object(C.b)("name",n.getName()),Object(C.b)("avatar",n.getAvatar()),a.props.dispatch(Object(s.q)(n.getId(),n.getSession(),t,n.getName(),n.getAvatar())),o.getAllProject())})},a.onSignInGoogle=function(e){console.log("signInGoogle");var t=new T.auth.AuthClient("https://www.overlead.co"),n=new T.auth.SignInGoogleReq;n.setUsername(e.email),n.setName(e.givenName+" "+e.givenName),n.setAvatar(e.imageUrl);var r=Object(l.a)(Object(l.a)(a));t.signInGoogle(n,{},function(t,n){t?console.log(t):(console.log("SUCCESS"),"SUCCESS"==n.getStatus()&&(Object(C.b)("userId",n.getId()),Object(C.b)("accessToken",n.getSession()),Object(C.b)("username",e.email),Object(C.b)("name",n.getName()),Object(C.b)("avatar",n.getAvatar()),a.props.dispatch(Object(s.q)(n.getId(),n.getSession(),e.email,n.getName(),n.getAvatar())),r.getAllProject()))})},a.onInitState=function(){a.setState({clientId:"1044290572211-9tqo456g2kknsaj3tpi72lmcjnp18rms.apps.googleusercontent.com"})},a.getAllProject=function(){var e=a.props.dispatch,t=new T.myproject.MyprojectClient("https://www.overlead.co"),n=new T.myproject.GetAllProjectReq;n.setRequesterid(Object(C.a)("userId")),n.setCookie(Object(C.a)("accessToken"));var r=Object(l.a)(Object(l.a)(a)),i=t.getAllProject(n,{});i.on("data",function(t){"SUCCESS"==t.getStatus()&&(e(Object(s.n)(t.getProjectid(),t.getTopic(),t.getProjectname(),t.getStart(),t.getEnd(),t.getPrivate(),t.getProgress())),console.log("receipt"))}),i.on("status",function(e){var t=!1;0!=e.code&&console.log(e);var a=Object(C.a)("currentProject"),n="",i="";r.props.currentProject.map(function(e){return e.id==a&&(t=!0),n=e.id,i=e.projectName,e}),0==t&&Object(C.b)("currentProject",n),Object(C.b)("currentProjectName",i),null!=Object(C.a)("currentProject")&&""!=Object(C.a)("currentProject")&&(r.loadAllTeam(),r.props.dispatch(Object(s.r)(n,i)))}),i.on("end",function(e){console.log("edddddddddddddd"),console.log(e)})},a.loadAllTeam=function(){console.log("getAllTeam");var e=new T.team.TeamClient("https://www.overlead.co"),t=new T.team.GetAllTeamReq;t.setRequesterid(Object(C.a)("userId")),t.setProjectid(Object(C.a)("currentProject")),t.setAccesstoken(Object(C.a)("accessToken"));var n=e.getAllTeam(t,{});console.log("currenProject"+Object(C.a)("currentProject"));var r=Object(l.a)(Object(l.a)(a)),i="",o="",c=!1;n.on("data",function(e){"SUCCESS"==e.getStatus()&&(console.log("hasTeam"+e.getTeamid()),Object(C.a)("teamId")==e.getTeamid()?c=!0:(i=e.getTeamid(),o=e.getName()))}),n.on("status",function(e){0!=e.code&&console.log(e),0==c?""!=i&&(Object(C.b)("teamId",i),Object(C.b)("teamName",o),r.props.dispatch(Object(s.s)(i,o))):r.props.dispatch(Object(s.s)(Object(C.a)("teamId"),Object(C.a)("teamName")))}),n.on("end",function(e){})},a.state={isLoading:!0,token:"",signUpError:"",signInError:"",signInEmail:"",signInPassword:"",signUpEmail:"",signUpPassword:"",clientId:"1044290572211-9tqo456g2kknsaj3tpi72lmcjnp18rms.apps.googleusercontent.com"},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=function(t){e.onSignInGoogle(t.profileObj),console.log("responseGoogle"),console.log(t)};return g.a.createElement("div",{style:{backgroundColor:"#FFFFFF"}},g.a.createElement(R.a,null),g.a.createElement("div",null,g.a.createElement("br",null)),g.a.createElement("div",{className:"app flex-row align-items-center"},g.a.createElement(p.a,null,g.a.createElement(h.a,{className:"justify-content-center"},g.a.createElement(b.a,{md:"8"},g.a.createElement(f.a,{className:" border-primary"},g.a.createElement(E.a,null,g.a.createElement(v.a,{className:"form-horizontal"},g.a.createElement("center",null,g.a.createElement("h6",null,"Already Have A Account?")),g.a.createElement("center",null,g.a.createElement("h5",null,g.a.createElement("b",null,g.a.createElement("font",{color:"green"},"Login")))),g.a.createElement(j.a,{row:!0},g.a.createElement(b.a,{md:"3"},g.a.createElement(w.a,{htmlFor:"text-input"},"Email")),g.a.createElement(b.a,{xs:"12",md:"6"},g.a.createElement(x.a,{type:"text-input",id:"text-input",name:"text-input",placeholder:" name@email.com",value:this.state.signInEmail,onChange:this.onTextboxChangeSignInEmail}))),g.a.createElement(j.a,{row:!0},g.a.createElement(b.a,{md:"3"},g.a.createElement(w.a,{htmlFor:"text-input"},"Password")),g.a.createElement(b.a,{xs:"12",md:"6"},g.a.createElement(x.a,{type:"password",id:"Password",name:"Password",placeholder:"Password",value:this.state.signInPassword,onChange:this.onTextboxChangeSignInPassword}))),g.a.createElement(j.a,{row:!0},g.a.createElement(b.a,{md:"3"},g.a.createElement("input",{type:"checkbox"})),g.a.createElement(b.a,{xs:"12",md:"3"},g.a.createElement("h6",null,g.a.createElement("font",{color:"green"},"Remember me?")))),g.a.createElement("center",null,g.a.createElement(u.a,{to:"/DashBoard"},g.a.createElement(S.a,{color:"success",onClick:this.onSignIn},"Login"))),g.a.createElement(j.a,{row:!0},g.a.createElement("div",null,g.a.createElement("br",null)),g.a.createElement("div",null,g.a.createElement(u.a,{to:"/register"},g.a.createElement("h6",null,"Register "))),g.a.createElement("div",null,g.a.createElement("h6",null,"|")),g.a.createElement("div",null," ",g.a.createElement(u.a,{to:"/ResetFirst"},g.a.createElement("h6",null," Lost your password")))))),g.a.createElement(y.a,{className:"border-warning"},g.a.createElement(k.GoogleLogin,{clientId:"1044290572211-9tqo456g2kknsaj3tpi72lmcjnp18rms.apps.googleusercontent.com",buttonText:"Login",onSuccess:t,onFailure:t}))))))),g.a.createElement(N.a,null))}}]),t}(d.Component);L.contextType=O.a;var z=function(e,t){return g.a.createElement("div",{key:t,className:"item"+(e%2?"":" even")},e)};z.toJSON=function(){return z.toString()};var A=function(e,t){return g.a.createElement("div",{key:t,className:"square-item"+(e%2?"":" even")},e)};A.toJSON=function(){return A.toString()};var B=function(e){return 30+e%10*10};B.toJSON=function(){return B.toString()};var H=function(e){return 100+e%10*10};H.toJSON=function(){return H.toString()};var U=function(e,t){return g.a.createElement("div",{key:t,className:"item"+(e%2?"":" even"),style:{lineHeight:"".concat(B(e),"px")}},e)};U.toJSON=function(){return U.toString()};var F=function(e,t){return g.a.createElement("div",{key:t,className:"item"+(e%2?"":" even"),style:{width:"".concat(H(e),"px")}},e)};F.toJSON=function(){return F.toString()};var W=function(e,t){return g.a.createElement(P.a,{axis:"x",key:t,length:1e4,itemRenderer:function(t,a){return A(t+1e4*e,a)},type:"uniform"})};W.toJSON=function(){return W.toString()};var G=[{length:1e4,itemRenderer:U},{axis:"x",length:1e4,itemRenderer:F},{length:1e4,itemRenderer:U,type:"variable"},{axis:"x",length:1e4,itemRenderer:F,type:"variable"},{length:1e4,itemRenderer:U,itemSizeGetter:B,type:"variable"},{axis:"x",length:1e4,itemRenderer:F,itemSizeGetter:H,threshold:0,type:"variable"},{length:1e4,initialIndex:5e3,itemRenderer:U,itemSizeGetter:B,type:"variable"},{length:1e4,itemRenderer:z,type:"uniform"},{axis:"x",length:1e4,itemRenderer:z,type:"uniform"},{length:1e4,itemRenderer:A,type:"uniform"},{length:1e4,initialIndex:5e3,itemRenderer:z,type:"uniform"},{length:1e4,itemRenderer:W,type:"uniform",useTranslate3d:!0}];d.Component;t.default=Object(m.b)(function(e){var t=e.changeStatusLogin,a=e.updateProjectLoaded;return{isLogin:t.isLogin,id:t.id,token:t.token,currentProject:a.project}})(L)}}]);
//# sourceMappingURL=29.dd705045.chunk.js.map