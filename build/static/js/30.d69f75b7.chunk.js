(window.webpackJsonp=window.webpackJsonp||[]).push([[30,38],{103:function(e,t,n){(function(t){var n="[object AsyncFunction]",a="[object Function]",i="[object GeneratorFunction]",r="[object Null]",o="[object Proxy]",c="[object Undefined]",l="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,u=l||s||Function("return this")(),m=Object.prototype,p=m.hasOwnProperty,d=m.toString,g=u.Symbol,h=g?g.toStringTag:void 0;function f(e){return null==e?void 0===e?c:r:h&&h in Object(e)?function(e){var t=p.call(e,h),n=e[h];try{e[h]=void 0;var a=!0}catch(r){}var i=d.call(e);a&&(t?e[h]=n:delete e[h]);return i}(e):function(e){return d.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=f(e);return t==a||t==i||t==n||t==o}}).call(this,n(17))},144:function(e,t,n){"use strict";function a(e){if(!e)return null;try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){return null}}n.d(t,"a",function(){return a})},147:function(e,t,n){"use strict";var a=n(8),i=n(11),r=n(0),o=n.n(r),c=n(1),l=n.n(c),s=n(68),u=n.n(s),m=n(70),p={tag:m.m,fluid:l.a.bool,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,n=e.cssModule,r=e.fluid,c=e.tag,l=Object(i.a)(e,["className","cssModule","fluid","tag"]),s=Object(m.i)(u()(t,r?"container-fluid":"container"),n);return o.a.createElement(c,Object(a.a)({},l,{className:s}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},155:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),o=n.n(r),c=n(5),l=n.n(c),s=n(30),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,r=Array(i),o=0;o<i;o++)r[o]=arguments[o];return n=a=m(this,e.call.apply(e,[this].concat(r))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!p(e)){e.preventDefault();var t=a.context.router.history,n=a.props,i=n.replace,r=n.to;i?t.replace(r):t.push(r)}},m(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,o="string"===typeof t?Object(s.b)(t,null,null,r.location):t,c=r.createHref(o);return i.a.createElement("a",u({},a,{onClick:this.handleClick,href:c,ref:n}))},t}(i.a.Component);d.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=d},170:function(e,t,n){"use strict";n.r(t);var a=n(12),i=n(13),r=n(15),o=n(14),c=n(16),l=n(3),s=n(20),u=n(0),m=n.n(u),p=n(155),d=n(147),g=n(91),h=n(114),f=n(806),b=n(96),y=n(137),v=n(254),E=n(317),w=n(318),j=n(199),O=n(166),x=n(138),S=n(31),k=n(151),N=n.n(k),C=n(100),I=n.n(C),L=n(74),R=n(113),T=n.n(R),P=n(93),z=n.n(P),B=n(87),U=n(9),H=n(68),F=n.n(H),A=n(77);function W(e){return Math.round(1e4*e)/1e4}function G(e){var t,n=e.children,a=e.classes,i=e.className,r=e.component,o=e.fullHeight,c=e.fullWidth,l=e.margin,s=e.marginBottom,u=e.style,p=e.width,d=Object(B.a)(e,["children","classes","className","component","fullHeight","fullWidth","margin","marginBottom","style","width"]);return m.a.createElement(r,Object.assign({className:F()(a.root,(t={},Object(U.a)(t,a["width".concat(Object(A.capitalize)(p))],!c),Object(U.a)(t,a.fullHeight,o),Object(U.a)(t,a.margin,l),Object(U.a)(t,a.marginBottom,s),t),i),style:u},d),n)}G.defaultProps={component:"div",fullHeight:!1,fullWidth:!1,margin:!1,marginBottom:!1,width:"medium"};var q=Object(L.withStyles)(function(e){var t,n;return{margin:{margin:7*e.spacing.unit},marginBottom:{marginBottom:12*e.spacing.unit},widthSmall:Object(U.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(660+6*e.spacing.unit),{width:660,marginLeft:"auto",marginRight:"auto"}),widthMedium:Object(U.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(850+6*e.spacing.unit),{width:850,marginLeft:"auto",marginRight:"auto"}),widthLarge:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(U.a)(t,e.breakpoints.up("md"),{width:880,marginLeft:"auto",marginRight:"auto"}),Object(U.a)(t,e.breakpoints.up(W(880/.7777)),{width:"77.7777%"}),Object(U.a)(t,e.breakpoints.up(W(1400/.7777)),{width:1400}),t),widthXlarge:(n={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(U.a)(n,e.breakpoints.up("md"),{width:900,marginLeft:"auto",marginRight:"auto"}),Object(U.a)(n,e.breakpoints.up(W(1e3)),{width:"90%"}),Object(U.a)(n,e.breakpoints.up(W(2e3)),{width:1800}),n),widthFull:{width:"100%"},fullHeight:{height:"100%"}}})(G),M=n(95),J=n.n(M),$={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};function _(e){var t=e.children,n=e.classes,a=e.marked,i=e.variant,r=Object(B.a)(e,["children","classes","marked","variant"]);return m.a.createElement(J.a,Object.assign({headlineMapping:$,variant:i},r),t,a?m.a.createElement("span",{className:n["marked".concat(Object(A.capitalize)(i)+Object(A.capitalize)(a))]}):null)}_.defaultProps={marked:!1};var K=Object(L.withStyles)(function(e){return{markedH2Center:{height:4,width:73,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH3Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH4Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH6Left:{height:2,width:28,display:"block",marginTop:e.spacing.unit/2,background:"currentColor"}}})(_),X=n(104),V=n(145),Y=n.n(V);function D(e){var t=e.classes,n=e.InputProps,a=(n=void 0===n?{}:n).classes,i=(a=void 0===a?{}:a).input,r=Object(B.a)(a,["input"]),o=Object(B.a)(n,["classes"]),c=e.InputLabelProps,l=e.noBorder,s=e.size,u=e.SelectProps,p=Object(B.a)(e,["classes","InputProps","InputLabelProps","noBorder","size","SelectProps"]);return m.a.createElement(Y.a,Object.assign({InputProps:Object(X.a)({disableUnderline:!0,classes:Object(X.a)({root:t.root,input:F()(t.input,t["inputSize".concat(Object(A.capitalize)(s))],Object(U.a)({},t.inputBorder,!l),i),disabled:t.disabled},r)},o),InputLabelProps:Object(X.a)({},c,{shrink:!0,className:t.formLabel}),SelectProps:Object(X.a)({},u,{classes:{select:t.select,icon:t.selectIcon}})},p))}D.defaultProps={noBorder:!1,size:"medium"};Object(L.withStyles)(function(e){return{root:{padding:0,"label + &":{marginTop:3*e.spacing.unit}},input:{minWidth:6*e.spacing.unit,backgroundColor:e.palette.common.white,"&$disabled":{backgroundColor:e.palette.divider}},inputBorder:{border:"1px solid #e9ddd0","&:focus":{borderColor:e.palette.secondary.main}},disabled:{},inputSizeSmall:{fontSize:14,padding:e.spacing.unit,width:"calc(100% - ".concat(2*e.spacing.unit,"px)")},inputSizeMedium:{fontSize:16,padding:2*e.spacing.unit,width:"calc(100% - ".concat(4*e.spacing.unit,"px)")},inputSizeLarge:{fontSize:18,padding:22,width:"calc(100% - ".concat(44,"px)")},inputSizeXlarge:{fontSize:20,padding:25,width:"calc(100% - ".concat(50,"px)")},formLabel:{fontSize:18},select:{height:"auto",borderRadius:0},selectIcon:{top:"50%",marginTop:-12}}})(D);var Q=N()(I.a,Object(L.withStyles)(function(e){return{root:{display:"flex",backgroundColor:e.palette.secondary.light},layoutBody:{marginTop:8*e.spacing.unit,marginBottom:8*e.spacing.unit,display:"flex"},iconsWrapper:{height:120},icons:{display:"flex"},icon:{width:48,height:48,display:"flex",justifyContent:"center",alignItems:"center",marginRight:e.spacing.unit,"&:hover":{backgroundColor:"#d8d4d6"}},list:{margin:0,listStyle:"none",paddingLeft:0},listItem:{paddingTop:e.spacing.unit/2,paddingBottom:e.spacing.unit/2}}}))(function(e){var t=e.classes;return m.a.createElement(K,{component:"footer",className:t.root},m.a.createElement(q,{className:t.layoutBody,width:"large"},m.a.createElement(T.a,{container:!0,spacing:10},m.a.createElement(T.a,{item:!0,xs:6,sm:4,md:2},m.a.createElement(T.a,{container:!0,direction:"column",justify:"flex-end",className:t.iconsWrapper,spacing:16},m.a.createElement(T.a,{item:!0,className:t.icons},m.a.createElement("a",{href:"http://overlead.co/",className:t.icon},m.a.createElement("img",{src:"/Home/appFooterFacebook.png",alt:"Facebook"})),m.a.createElement("a",{href:"https://twitter.com/overlead",className:t.icon},m.a.createElement("img",{src:"/Home/appFooterTwitter.png",alt:"Twitter"}))),m.a.createElement(T.a,{item:!0},"\xa9 2019 Overlead"))),m.a.createElement(T.a,{item:!0,xs:6,sm:4,md:2},m.a.createElement(K,{variant:"h6",marked:"left",gutterBottom:!0},"Legal"),m.a.createElement("ul",{className:t.list},m.a.createElement("li",{className:t.listItem},m.a.createElement(z.a,{href:"/premium-themes/onepirate/terms"},"Terms")),m.a.createElement("li",{className:t.listItem},m.a.createElement(z.a,{href:"/premium-themes/onepirate/privacy"},"Privacy")))),m.a.createElement(T.a,{item:!0,xs:6,sm:8,md:4}),m.a.createElement(T.a,{item:!0},m.a.createElement(K,{variant:"caption"})))))}),Z=n(97),ee=n.n(Z);var te=Object(L.withStyles)(function(e){return{root:{color:"theme.palette.common.white"}}})(function(e){return m.a.createElement(ee.a,Object.assign({elevation:0,color:"primary",position:"static"},e))}),ne=n(98),ae=n.n(ne),ie=function(e){return{root:Object(U.a)({height:64},e.breakpoints.up("sm"),{height:70})}};var re=Object(L.withStyles)(ie)(function(e){return m.a.createElement(ae.a,e)}),oe=n(7),ce=n.n(oe);var le=Object(L.withStyles)(function(e){return{title:{fontSize:24},placeholder:ie(e).root,toolbar:{justifyContent:"space-between"},left:{flex:1},leftLinkActive:{color:e.palette.common.white},right:{flex:1,display:"flex",justifyContent:"flex-end"},rightLink:{fontSize:16,color:e.palette.common.white,marginLeft:3*e.spacing.unit},linkSecondary:{color:"theme.palette.secondary.main"}}})(function(e){var t=e.classes;return m.a.createElement("div",null,m.a.createElement(te,{position:"fixed"},m.a.createElement(re,{className:t.toolbar},m.a.createElement("div",{className:t.left}),m.a.createElement(z.a,{variant:"h6",underline:"none",color:"inherit",className:t.title,href:"/Home/Final"},"Overlead"),m.a.createElement("div",{className:t.right},m.a.createElement(z.a,{color:"inherit",variant:"h6",underline:"none",className:t.rightLink,href:"/login"},"Sign In"),m.a.createElement(z.a,{variant:"h6",underline:"none",className:F()(t.rightLink,t.linkSecondary),href:"/register"},"Sign Up")))),m.a.createElement("div",{className:t.placeholder}))}),se=n(152),ue=n(198),me=n.n(ue),pe={};pe.auth=n(38);var de=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).onTextboxChangeSignInEmail=function(e){n.setState({signInEmail:e.target.value})},n.onTextboxChangeSignInPassword=function(e){n.setState({signInPassword:e.target.value})},n.onTextboxChangeSignUpEmail=function(e){n.setState({signUpEmail:e.target.value})},n.onTextboxChangeSignUpPassword=function(e){n.setState({signUpPassword:e.target.value})},n.onSignIn=function(){var e=n.state,t=e.signInEmail,a=e.signInPassword;n.setState({isLoading:!0});var i=new pe.auth.AuthClient("https://www.overlead.co"),r=new pe.auth.SignInReq;r.setUsername(t),r.setPassword(a),console.log("signIn"),i.signIn(r,{},function(e,a){e?console.log(e):"SUCCESS"==a.getStatus()&&(ce.a.save("userId",a.getId()),ce.a.save("tokenAccess",a.getSession()),ce.a.save("username",t),ce.a.save("name",a.getName()),ce.a.save("avatar",a.getAvatar()),n.props.dispatch(Object(l.r)(a.getId(),a.getSession(),t,a.getName(),a.getAvatar())))})},n.onSignInGoogle=function(e){console.log("signInGoogle");var t=new pe.auth.AuthClient("https://www.overlead.co"),a=new pe.auth.SignInGoogleReq;a.setUsername(e.email),a.setName(e.givenName+" "+e.givenName),a.setAvatar(e.imageUrl),t.signInGoogle(a,{},function(t,a){t?console.log(t):(console.log("SUCCESS"),"SUCCESS"==a.getStatus()&&(ce.a.save("userId",a.getId()),ce.a.save("tokenAccess",a.getSession()),ce.a.save("username",e.email),ce.a.save("name",a.getName()),ce.a.save("avatar",e.imageUrl),n.props.dispatch(Object(l.r)(a.getId(),a.getSession(),e.email,a.getName(),e.imageUrl))))})},n.state={isLoading:!0,token:"",signUpError:"",signInError:"",signInEmail:"",signInPassword:"",signUpEmail:"",signUpPassword:""},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=function(t){e.onSignInGoogle(t.profileObj)};return m.a.createElement("div",null,m.a.createElement(le,null),m.a.createElement("div",{className:"app flex-row align-items-center"},m.a.createElement(d.a,null,m.a.createElement(g.a,{className:"justify-content-center"},m.a.createElement(h.a,{md:"8"},m.a.createElement(f.a,null,m.a.createElement(b.a,{className:"p-4"},m.a.createElement(y.a,null,m.a.createElement(v.a,null,m.a.createElement("h1",null,"Login"),m.a.createElement("p",{className:"text-muted"},"Sign In to your account"),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(j.a,null,m.a.createElement("i",{className:"icon-user"}))),m.a.createElement(O.a,{type:"email",placeholder:"Username/ Email",autoComplete:"email",value:this.state.signInEmail,onChange:this.onTextboxChangeSignInEmail})),m.a.createElement(E.a,{className:"mb-4"},m.a.createElement(w.a,{addonType:"prepend"},m.a.createElement(j.a,null,m.a.createElement("i",{className:"icon-lock"}))),m.a.createElement(O.a,{type:"password",placeholder:"Password",autoComplete:"current-password",value:this.state.signInPassword,onChange:this.onTextboxChangeSignInPassword})),m.a.createElement(g.a,null,m.a.createElement(h.a,{xs:"6"},m.a.createElement(x.a,{color:"primary",className:"px-4",onClick:this.onSignIn},"Login")),m.a.createElement(h.a,{xs:"6",className:"text-right"},m.a.createElement(p.a,{to:"/ResetFirst"},m.a.createElement(x.a,{color:"link",className:"px-0"},"Forgot password, reset now?"))))))),m.a.createElement(b.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},m.a.createElement(y.a,{className:"text-center"},m.a.createElement("div",null,m.a.createElement("h2",null,"Sign up"),m.a.createElement(p.a,{to:"/register"},m.a.createElement(x.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"Register Now!")),m.a.createElement(se.GoogleLogin,{clientId:"1044290572211-9tqo456g2kknsaj3tpi72lmcjnp18rms.apps.googleusercontent.com",buttonText:"Login",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin",render:function(e){return m.a.createElement("button",{onClick:e.onClick},"Login with Google")}}),",",m.a.createElement(se.GoogleLogout,{buttonText:"Logout",onLogoutSuccess:this.logout}))))))))),m.a.createElement(Q,null))}}]),t}(u.Component);de.contextType=S.a;var ge=function(e,t){return m.a.createElement("div",{key:t,className:"item"+(e%2?"":" even")},e)};ge.toJSON=function(){return ge.toString()};var he=function(e,t){return m.a.createElement("div",{key:t,className:"square-item"+(e%2?"":" even")},e)};he.toJSON=function(){return he.toString()};var fe=function(e){return 30+e%10*10};fe.toJSON=function(){return fe.toString()};var be=function(e){return 100+e%10*10};be.toJSON=function(){return be.toString()};var ye=function(e,t){return m.a.createElement("div",{key:t,className:"item"+(e%2?"":" even"),style:{lineHeight:"".concat(fe(e),"px")}},e)};ye.toJSON=function(){return ye.toString()};var ve=function(e,t){return m.a.createElement("div",{key:t,className:"item"+(e%2?"":" even"),style:{width:"".concat(be(e),"px")}},e)};ve.toJSON=function(){return ve.toString()};var Ee=function(e,t){return m.a.createElement(me.a,{axis:"x",key:t,length:1e4,itemRenderer:function(t,n){return he(t+1e4*e,n)},type:"uniform"})};Ee.toJSON=function(){return Ee.toString()};var we=[{length:1e4,itemRenderer:ye},{axis:"x",length:1e4,itemRenderer:ve},{length:1e4,itemRenderer:ye,type:"variable"},{axis:"x",length:1e4,itemRenderer:ve,type:"variable"},{length:1e4,itemRenderer:ye,itemSizeGetter:fe,type:"variable"},{axis:"x",length:1e4,itemRenderer:ve,itemSizeGetter:be,threshold:0,type:"variable"},{length:1e4,initialIndex:5e3,itemRenderer:ye,itemSizeGetter:fe,type:"variable"},{length:1e4,itemRenderer:ge,type:"uniform"},{axis:"x",length:1e4,itemRenderer:ge,type:"uniform"},{length:1e4,itemRenderer:he,type:"uniform"},{length:1e4,initialIndex:5e3,itemRenderer:ge,type:"uniform"},{length:1e4,itemRenderer:Ee,type:"uniform",useTranslate3d:!0}];u.Component;t.default=Object(s.b)(function(e){var t=e.changeStatusLogin;return{isLogin:t.isLogin,id:t.id,token:t.token}})(de)},175:function(e,t,n){"use strict";var a=n(12),i=n(13),r=n(15),o=n(14),c=n(16),l=n(18),s=n(0),u=n.n(s),m=n(144),p=n(170);s.Component},68:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},70:function(e,t,n){"use strict";n.d(t,"l",function(){return o}),n.d(t,"g",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"j",function(){return u}),n.d(t,"k",function(){return m}),n.d(t,"n",function(){return d}),n.d(t,"e",function(){return g}),n.d(t,"m",function(){return h}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return b}),n.d(t,"h",function(){return y}),n.d(t,"c",function(){return v}),n.d(t,"f",function(){return E});n(103);var a,i=n(1),r=n.n(i);function o(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function l(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&o(n+e)}function s(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach(function(a){-1===t.indexOf(a)&&(n[a]=e[a])}),n}function m(e,t){for(var n,a=Array.isArray(t)?t:[t],i=a.length,r={};i>0;)r[n=a[i-=1]]=e[n];return r}var p={};function d(e){p[e]||("undefined"!==typeof console&&console.error(e),p[e]=!0)}function g(e,t){return function(n,a,i){null!==n[a]&&"undefined"!==typeof n[a]&&d('"'+a+'" property of "'+i+'" has been deprecated.\n'+t);for(var r=arguments.length,o=new Array(r>3?r-3:0),c=3;c<r;c++)o[c-3]=arguments[c];return e.apply(void 0,[n,a,i].concat(o))}}r.a.oneOfType([r.a.string,r.a.func,function(e,t,n){if(!(e[t]instanceof Element))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},r.a.shape({current:r.a.any})]);var h=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),f={Fade:150,Collapse:350,Modal:300,Carousel:600},b=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},v=!("undefined"===typeof window||!window.document||!window.document.createElement);var E=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},841:function(e,t,n){"use strict";n.r(t);var a=n(12),i=n(13),r=n(15),o=n(14),c=n(16),l=n(18),s=n(0),u=n.n(s),m=n(147),p=n(91),d=n(114),g=n(96),h=n(137),f=n(254),b=n(317),y=n(318),v=n(199),E=n(166),w=n(138),j=n(7),O=n.n(j),x=(n(144),n(175),n(155)),S=n(151),k=n.n(S),N=n(100),C=n.n(N),I=n(74),L=n(113),R=n.n(L),T=n(93),P=n.n(T),z=n(87),B=n(9),U=n(68),H=n.n(U),F=n(77);function A(e){return Math.round(1e4*e)/1e4}function W(e){var t,n=e.children,a=e.classes,i=e.className,r=e.component,o=e.fullHeight,c=e.fullWidth,l=e.margin,s=e.marginBottom,m=e.style,p=e.width,d=Object(z.a)(e,["children","classes","className","component","fullHeight","fullWidth","margin","marginBottom","style","width"]);return u.a.createElement(r,Object.assign({className:H()(a.root,(t={},Object(B.a)(t,a["width".concat(Object(F.capitalize)(p))],!c),Object(B.a)(t,a.fullHeight,o),Object(B.a)(t,a.margin,l),Object(B.a)(t,a.marginBottom,s),t),i),style:m},d),n)}W.defaultProps={component:"div",fullHeight:!1,fullWidth:!1,margin:!1,marginBottom:!1,width:"medium"};var G=Object(I.withStyles)(function(e){var t,n;return{margin:{margin:7*e.spacing.unit},marginBottom:{marginBottom:12*e.spacing.unit},widthSmall:Object(B.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(660+6*e.spacing.unit),{width:660,marginLeft:"auto",marginRight:"auto"}),widthMedium:Object(B.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(850+6*e.spacing.unit),{width:850,marginLeft:"auto",marginRight:"auto"}),widthLarge:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(B.a)(t,e.breakpoints.up("md"),{width:880,marginLeft:"auto",marginRight:"auto"}),Object(B.a)(t,e.breakpoints.up(A(880/.7777)),{width:"77.7777%"}),Object(B.a)(t,e.breakpoints.up(A(1400/.7777)),{width:1400}),t),widthXlarge:(n={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(B.a)(n,e.breakpoints.up("md"),{width:900,marginLeft:"auto",marginRight:"auto"}),Object(B.a)(n,e.breakpoints.up(A(1e3)),{width:"90%"}),Object(B.a)(n,e.breakpoints.up(A(2e3)),{width:1800}),n),widthFull:{width:"100%"},fullHeight:{height:"100%"}}})(W),q=n(95),M=n.n(q),J={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};function $(e){var t=e.children,n=e.classes,a=e.marked,i=e.variant,r=Object(z.a)(e,["children","classes","marked","variant"]);return u.a.createElement(M.a,Object.assign({headlineMapping:J,variant:i},r),t,a?u.a.createElement("span",{className:n["marked".concat(Object(F.capitalize)(i)+Object(F.capitalize)(a))]}):null)}$.defaultProps={marked:!1};var _=Object(I.withStyles)(function(e){return{markedH2Center:{height:4,width:73,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH3Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH4Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH6Left:{height:2,width:28,display:"block",marginTop:e.spacing.unit/2,background:"currentColor"}}})($),K=n(104),X=n(145),V=n.n(X);function Y(e){var t=e.classes,n=e.InputProps,a=(n=void 0===n?{}:n).classes,i=(a=void 0===a?{}:a).input,r=Object(z.a)(a,["input"]),o=Object(z.a)(n,["classes"]),c=e.InputLabelProps,l=e.noBorder,s=e.size,m=e.SelectProps,p=Object(z.a)(e,["classes","InputProps","InputLabelProps","noBorder","size","SelectProps"]);return u.a.createElement(V.a,Object.assign({InputProps:Object(K.a)({disableUnderline:!0,classes:Object(K.a)({root:t.root,input:H()(t.input,t["inputSize".concat(Object(F.capitalize)(s))],Object(B.a)({},t.inputBorder,!l),i),disabled:t.disabled},r)},o),InputLabelProps:Object(K.a)({},c,{shrink:!0,className:t.formLabel}),SelectProps:Object(K.a)({},m,{classes:{select:t.select,icon:t.selectIcon}})},p))}Y.defaultProps={noBorder:!1,size:"medium"};Object(I.withStyles)(function(e){return{root:{padding:0,"label + &":{marginTop:3*e.spacing.unit}},input:{minWidth:6*e.spacing.unit,backgroundColor:e.palette.common.white,"&$disabled":{backgroundColor:e.palette.divider}},inputBorder:{border:"1px solid #e9ddd0","&:focus":{borderColor:e.palette.secondary.main}},disabled:{},inputSizeSmall:{fontSize:14,padding:e.spacing.unit,width:"calc(100% - ".concat(2*e.spacing.unit,"px)")},inputSizeMedium:{fontSize:16,padding:2*e.spacing.unit,width:"calc(100% - ".concat(4*e.spacing.unit,"px)")},inputSizeLarge:{fontSize:18,padding:22,width:"calc(100% - ".concat(44,"px)")},inputSizeXlarge:{fontSize:20,padding:25,width:"calc(100% - ".concat(50,"px)")},formLabel:{fontSize:18},select:{height:"auto",borderRadius:0},selectIcon:{top:"50%",marginTop:-12}}})(Y);var D=k()(C.a,Object(I.withStyles)(function(e){return{root:{display:"flex",backgroundColor:e.palette.secondary.light},layoutBody:{marginTop:8*e.spacing.unit,marginBottom:8*e.spacing.unit,display:"flex"},iconsWrapper:{height:120},icons:{display:"flex"},icon:{width:48,height:48,display:"flex",justifyContent:"center",alignItems:"center",marginRight:e.spacing.unit,"&:hover":{backgroundColor:"#d8d4d6"}},list:{margin:0,listStyle:"none",paddingLeft:0},listItem:{paddingTop:e.spacing.unit/2,paddingBottom:e.spacing.unit/2}}}))(function(e){var t=e.classes;return u.a.createElement(_,{component:"footer",className:t.root},u.a.createElement(G,{className:t.layoutBody,width:"large"},u.a.createElement(R.a,{container:!0,spacing:10},u.a.createElement(R.a,{item:!0,xs:6,sm:4,md:2},u.a.createElement(R.a,{container:!0,direction:"column",justify:"flex-end",className:t.iconsWrapper,spacing:16},u.a.createElement(R.a,{item:!0,className:t.icons},u.a.createElement("a",{href:"http://overlead.co/",className:t.icon},u.a.createElement("img",{src:"/Home/appFooterFacebook.png",alt:"Facebook"})),u.a.createElement("a",{href:"https://twitter.com/overlead",className:t.icon},u.a.createElement("img",{src:"/Home/appFooterTwitter.png",alt:"Twitter"}))),u.a.createElement(R.a,{item:!0},"\xa9 2019 Overlead"))),u.a.createElement(R.a,{item:!0,xs:6,sm:4,md:2},u.a.createElement(_,{variant:"h6",marked:"left",gutterBottom:!0},"Legal"),u.a.createElement("ul",{className:t.list},u.a.createElement("li",{className:t.listItem},u.a.createElement(P.a,{href:"/premium-themes/onepirate/terms"},"Terms")),u.a.createElement("li",{className:t.listItem},u.a.createElement(P.a,{href:"/premium-themes/onepirate/privacy"},"Privacy")))),u.a.createElement(R.a,{item:!0,xs:6,sm:8,md:4}),u.a.createElement(R.a,{item:!0},u.a.createElement(_,{variant:"caption"})))))}),Q=n(97),Z=n.n(Q);var ee=Object(I.withStyles)(function(e){return{root:{color:"theme.palette.common.white"}}})(function(e){return u.a.createElement(Z.a,Object.assign({elevation:0,color:"primary",position:"static"},e))}),te=n(98),ne=n.n(te),ae=function(e){return{root:Object(B.a)({height:64},e.breakpoints.up("sm"),{height:70})}};var ie=Object(I.withStyles)(ae)(function(e){return u.a.createElement(ne.a,e)});var re=Object(I.withStyles)(function(e){return{title:{fontSize:24},placeholder:ae(e).root,toolbar:{justifyContent:"space-between"},left:{flex:1},leftLinkActive:{color:e.palette.common.white},right:{flex:1,display:"flex",justifyContent:"flex-end"},rightLink:{fontSize:16,color:e.palette.common.white,marginLeft:3*e.spacing.unit},linkSecondary:{color:"theme.palette.secondary.main"}}})(function(e){var t=e.classes;return u.a.createElement("div",null,u.a.createElement(ee,{position:"fixed"},u.a.createElement(ie,{className:t.toolbar},u.a.createElement("div",{className:t.left}),u.a.createElement(P.a,{variant:"h6",underline:"none",color:"inherit",className:t.title,href:"/Home/Final"},"Overlead"),u.a.createElement("div",{className:t.right},u.a.createElement(P.a,{color:"inherit",variant:"h6",underline:"none",className:t.rightLink,href:"/login"},"Sign In"),u.a.createElement(P.a,{variant:"h6",underline:"none",className:H()(t.rightLink,t.linkSecondary),href:"/register"},"Sign Up")))),u.a.createElement("div",{className:t.placeholder}))}),oe={};oe.auth=n(38);var ce=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={isLoading:!0,token:"",Username:"",Type:""},n.onTextboxChangeUsername=n.onTextboxChangeUsername.bind(Object(l.a)(Object(l.a)(n))),n.onTextboxChangeType=n.onTextboxChangeType.bind(Object(l.a)(Object(l.a)(n))),n.onReset=n.onReset.bind(Object(l.a)(Object(l.a)(n))),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"onTextboxChangeUsername",value:function(e){this.setState({Username:e.target.value})}},{key:"onTextboxChangeType",value:function(e){this.setState({Type:e.target.value})}},{key:"onReset",value:function(){console.log("onResetFirst");var e=this.state,t=e.Username,n=e.Type;this.setState({isLoading:!0});var a=new oe.auth.AuthClient("https://trungcs.com"),i=new oe.auth.ResetReq;i.setUsername(t),i.setType(n);a.resetPassword(i,{},function(e,n){O.a.save("resetUsername",t),e?console.log(e):console.log(n.getStatus())})}},{key:"render",value:function(){var e=this.state,t=(e.token,e.Username);e.Type;return u.a.createElement("div",null,u.a.createElement(re,null),u.a.createElement("div",null,u.a.createElement("br",null)),u.a.createElement(m.a,null,u.a.createElement(p.a,{className:"justify-content-center"},u.a.createElement(d.a,{md:"9",lg:"7",xl:"6"},u.a.createElement(g.a,{className:"mx-4"},u.a.createElement(h.a,{className:"p-4"},u.a.createElement(f.a,null,u.a.createElement("h1",null,"Reset account"),u.a.createElement(b.a,{className:"mb-3"},u.a.createElement(y.a,{addonType:"prepend"},u.a.createElement(v.a,null,u.a.createElement("i",{className:"icon-user"}))),u.a.createElement(E.a,{type:"text",placeholder:"Username",autoComplete:"username",value:t,onChange:this.onTextboxChangeUsername})),u.a.createElement(x.a,{to:"/ResetSecond"},u.a.createElement(w.a,{color:"success",block:!0,onClick:this.onReset},"Go to next step")))))))),u.a.createElement(D,null))}}]),t}(s.Component);t.default=ce}}]);
//# sourceMappingURL=30.d69f75b7.chunk.js.map