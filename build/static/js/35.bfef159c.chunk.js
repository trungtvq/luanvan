(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{102:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(31),o=n(33),i=n(32),l=n(34),c=n(36),s=n(3),u=n.n(s),p=n(127),h=n.n(p),f=n(128),d=n.n(f),m=n(122),b=n.n(m),g=n(129),E=n.n(g),y=n(123),v=n.n(y),O=n(121),C=n.n(O),w=n(119),M=n.n(w),k=n(107),j=n(131),R=n(126),P=n.n(R),x=n(124),A=n.n(x),T=n(125),N=n.n(T),q=n(130),L=n.n(q),S=n(141),z=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={anchorEl:null,mobileMoreAnchorEl:null},n.handleProfileMenuOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,n=e.mobileMoreAnchorEl,a=this.props.classes,r=Boolean(t),o=Boolean(n),i=u.a.createElement(M.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose},u.a.createElement(C.a,{onClick:this.handleMenuClose},u.a.createElement(S.a,{to:"/Profile/Detail"},"Profile")),u.a.createElement(C.a,{onClick:this.handleMenuClose},u.a.createElement(S.a,{to:"/AllProject"},"Project")),u.a.createElement(C.a,{onClick:this.handleMenuClose},u.a.createElement(S.a,{to:"/login"},"Log out"))),l=u.a.createElement(M.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMenuClose},u.a.createElement(C.a,{onClick:this.handleMobileMenuClose},u.a.createElement(b.a,{color:"inherit"},u.a.createElement(v.a,{badgeContent:4,color:"secondary"},u.a.createElement(A.a,null))),u.a.createElement("p",null,"Messages")),u.a.createElement(C.a,{onClick:this.handleMobileMenuClose},u.a.createElement(b.a,{color:"inherit"},u.a.createElement(v.a,{badgeContent:11,color:"secondary"},u.a.createElement(N.a,null))),u.a.createElement("p",null,"Notifications")),u.a.createElement(C.a,{onClick:this.handleProfileMenuOpen},u.a.createElement(b.a,{color:"inherit"},u.a.createElement(P.a,null)),u.a.createElement("p",null,"Profile")));return u.a.createElement("div",{className:a.root},u.a.createElement(h.a,{position:"static"},u.a.createElement(d.a,null,u.a.createElement(E.a,{className:a.title,variant:"h6",color:"inherit",noWrap:!0},u.a.createElement(S.a,{to:"/Home/Main"},"Overlead")),u.a.createElement(E.a,{className:a.title,variant:"h6",color:"inherit",noWrap:!0}),u.a.createElement("div",{className:a.grow}),u.a.createElement("div",{className:a.sectionDesktop},u.a.createElement(b.a,{color:"inherit"},u.a.createElement(v.a,{badgeContent:4,color:"secondary"},u.a.createElement(A.a,null))),u.a.createElement(b.a,{color:"inherit"},u.a.createElement(v.a,{badgeContent:17,color:"secondary"},u.a.createElement(N.a,null))),u.a.createElement(b.a,{"aria-owns":r?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},u.a.createElement(P.a,null))),u.a.createElement("div",{className:a.sectionMobile},u.a.createElement(b.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},u.a.createElement(L.a,null))))),i,l)}}]),t}(u.a.Component);t.default=Object(j.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(c.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(c.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(c.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(c.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(c.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(z)},141:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(2),i=n.n(o),l=n(7),c=n.n(l),s=n(37),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var h=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=p(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!h(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},p(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(s.b)(t,null,null,o.location):t,l=o.createHref(i);return r.a.createElement("a",u({},a,{onClick:this.handleClick,href:l,ref:n}))},t}(r.a.Component);f.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=f},76:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=35.bfef159c.chunk.js.map