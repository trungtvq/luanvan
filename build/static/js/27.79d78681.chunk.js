(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(18);function o(e,a){if(null==e)return{};var t,o,r=Object(n.a)(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}},133:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(39);function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(a){Object(n.a)(e,a,t[a])})}return e}},140:function(e,a,t){"use strict";var n=t(15),o=t(18),r=t(30),l=t(29),c=t(3),s=t.n(c),i=t(2),d=t.n(i),p=t(89),m=t.n(p),u=t(91),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:u.m,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(Object(l.a)(t))),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,l=e.className,c=e.close,i=e.cssModule,d=e.color,p=e.outline,b=e.size,f=e.tag,g=e.innerRef,h=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(p?"-outline":"")+"-"+d,v=Object(u.i)(m()(l,{close:c},c||"btn",c||E,!!b&&"btn-"+b,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===f&&(f="a");var O=c?"Close":null;return s.a.createElement(f,Object(n.a)({type:"button"===f&&h.onClick?"button":void 0},h,{className:v,ref:g,onClick:this.onClick,"aria-label":t||O}))},a}(s.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},169:function(e,a,t){e.exports=t.p+"static/media/logo.c7fd352d.png"},262:function(e,a,t){e.exports=t.p+"static/media/sygnet.dba7f081.svg"},319:function(e,a,t){"use strict";t.r(a);var n=t(101),o=t(24),r=t(25),l=t(27),c=t(26),s=t(28),i=t(3),d=t.n(i),p=t(158),m=t(819),u=t(817),b=t(818),f=t(614),g=t(615),h=t(616),E=t(617),v=t(475),O=t(152),j=t(169),N=t.n(j),y=t(262),k=t.n(y),C=t(41),w=function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.props;a.children,Object(n.a)(a,["children"]);return d.a.createElement(d.a.Fragment,null,d.a.createElement(O.n,{className:"d-lg-none",display:"md",mobile:!0}),d.a.createElement(p.a,{to:"/Home/Final",className:"nav-link"},d.a.createElement(O.g,{full:{src:N.a,width:89,height:25,alt:"Overlead Logo"},minimized:{src:k.a,width:30,height:30,alt:"Overlead Logo"}})),d.a.createElement(O.n,{className:"d-md-down-none",display:"lg"}),d.a.createElement(m.a,{className:"d-md-down-none",navbar:!0},d.a.createElement(u.a,{className:"px-3"},d.a.createElement(p.a,{to:"/users"},"Users")),d.a.createElement(u.a,{className:"px-3"},d.a.createElement(b.a,{href:"#"},"Settings")),d.a.createElement(u.a,{className:"px-3"},d.a.createElement(f.a,{color:"light"},d.a.createElement(g.a,{caret:!0},"Project"),d.a.createElement(h.a,null,d.a.createElement(E.a,{href:"/CreateProject"},"Create project"),d.a.createElement(E.a,{href:"/AllProject"},"My projects"))))),d.a.createElement(m.a,{className:"ml-auto",navbar:!0},d.a.createElement(u.a,{className:"d-md-down-none"},d.a.createElement(b.a,{href:"#"},d.a.createElement("i",{className:"icon-bell"}),d.a.createElement(v.a,{pill:!0,color:"danger"},"5"))),d.a.createElement(u.a,{className:"d-md-down-none"},d.a.createElement(b.a,{href:"#"},d.a.createElement("i",{className:"icon-list"}))),d.a.createElement(u.a,{className:"d-md-down-none"},d.a.createElement(b.a,{href:"#"},d.a.createElement("i",{className:"icon-location-pin"}))),d.a.createElement(O.f,{direction:"down"},d.a.createElement(g.a,{nav:!0},d.a.createElement("img",{src:"",className:"img-avatar",alt:""})),d.a.createElement(h.a,{right:!0,style:{right:"auto"}},d.a.createElement(C.a.Consumer,null,function(e){return d.a.createElement(E.a,{header:!0,tag:"div",className:"text-center"},d.a.createElement("strong",null,e.signInEmail))}),d.a.createElement(E.a,null,d.a.createElement("i",{className:"fa fa-bell-o"})," Updates",d.a.createElement(v.a,{color:"info"},"42")),d.a.createElement(E.a,null,d.a.createElement("i",{className:"fa fa-envelope-o"})," Messages",d.a.createElement(v.a,{color:"success"},"42")),d.a.createElement(E.a,null,d.a.createElement("i",{className:"fa fa-tasks"})," Tasks",d.a.createElement(v.a,{color:"danger"},"42")),d.a.createElement(E.a,null,d.a.createElement("i",{className:"fa fa-comments"})," Comments",d.a.createElement(v.a,{color:"warning"},"42")),d.a.createElement(E.a,{header:!0,tag:"div",className:"text-center"},d.a.createElement("strong",null,"Settings")),d.a.createElement(p.a,{to:"/Profile/Detail"},d.a.createElement(E.a,null,d.a.createElement("i",{className:"fa fa-user"}),"Profile")),d.a.createElement(E.a,null,d.a.createElement("i",{className:"fa fa-wrench"})," Settings"),d.a.createElement(E.a,null,d.a.createElement("i",{className:"fa fa-usd"})," Payments",d.a.createElement(v.a,{color:"secondary"},"42")),d.a.createElement(E.a,null,d.a.createElement("i",{className:"fa fa-file"})," Projects",d.a.createElement(v.a,{color:"primary"},"42")),d.a.createElement(E.a,{divider:!0}),d.a.createElement(E.a,{onClick:function(a){return e.props.onLogout(a)}},d.a.createElement("i",{className:"fa fa-lock"})," Logout")))),d.a.createElement(O.b,{className:"d-md-down-none"}))}}]),a}(i.Component);w.defaultProps={},a.default=w},614:function(e,a,t){"use strict";t.d(a,"a",function(){return b});var n=t(133),o=t(15),r=t(30),l=t(29),c=t(3),s=t.n(c),i=t(2),d=t.n(i),p=t(290),m=t(91),u=["defaultOpen"],b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(l.a)(Object(l.a)(t))),t}Object(r.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return s.a.createElement(p.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(m.j)(this.props,u)))},a}(c.Component);b.propTypes=Object(n.a)({defaultOpen:d.a.bool},p.a.propTypes)},615:function(e,a,t){"use strict";var n=t(15),o=t(18),r=t(30),l=t(29),c=t(3),s=t.n(c),i=t(2),d=t.n(i),p=t(89),m=t.n(p),u=t(197),b=t(91),f=t(140),g={caret:d.a.bool,color:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,disabled:d.a.bool,onClick:d.a.func,"aria-haspopup":d.a.bool,split:d.a.bool,tag:b.m,nav:d.a.bool},h={isOpen:d.a.bool.isRequired,toggle:d.a.func.isRequired,inNavbar:d.a.bool.isRequired},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(Object(l.a)(t))),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},t.render=function(){var e,a=this.props,t=a.className,r=a.color,l=a.cssModule,c=a.caret,i=a.split,d=a.nav,p=a.tag,g=Object(o.a)(a,["className","color","cssModule","caret","split","nav","tag"]),h=g["aria-label"]||"Toggle Dropdown",E=Object(b.i)(m()(t,{"dropdown-toggle":c||i,"dropdown-toggle-split":i,"nav-link":d}),l),v=g.children||s.a.createElement("span",{className:"sr-only"},h);return d&&!p?(e="a",g.href="#"):p?e=p:(e=f.a,g.color=r,g.cssModule=l),this.context.inNavbar?s.a.createElement(e,Object(n.a)({},g,{className:E,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:v})):s.a.createElement(u.c,Object(n.a)({},g,{className:E,component:e,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:v}))},a}(s.a.Component);E.propTypes=g,E.defaultProps={"aria-haspopup":!0,color:"secondary"},E.contextTypes=h,a.a=E},616:function(e,a,t){"use strict";var n=t(15),o=t(133),r=t(18),l=t(3),c=t.n(l),s=t(2),i=t.n(s),d=t(89),p=t.n(d),m=t(197),u=t(91),b={tag:u.m,children:i.a.node.isRequired,right:i.a.bool,flip:i.a.bool,modifiers:i.a.object,className:i.a.string,cssModule:i.a.object,persist:i.a.bool},f={isOpen:i.a.bool.isRequired,direction:i.a.oneOf(["up","down","left","right"]).isRequired,inNavbar:i.a.bool.isRequired},g={flip:{enabled:!1}},h={up:"top",left:"left",right:"right",down:"bottom"},E=function(e,a){var t=e.className,l=e.cssModule,s=e.right,i=e.tag,d=e.flip,b=e.modifiers,f=e.persist,E=Object(r.a)(e,["className","cssModule","right","tag","flip","modifiers","persist"]),v=Object(u.i)(p()(t,"dropdown-menu",{"dropdown-menu-right":s,show:a.isOpen}),l),O=i;if(f||a.isOpen&&!a.inNavbar){O=m.b;var j=h[a.direction]||"bottom",N=s?"end":"start";E.placement=j+"-"+N,E.component=i,E.modifiers=d?b:Object(o.a)({},b,g)}return c.a.createElement(O,Object(n.a)({tabIndex:"-1",role:"menu"},E,{"aria-hidden":!a.isOpen,className:v,"x-placement":E.placement}))};E.propTypes=b,E.defaultProps={tag:"div",flip:!0},E.contextTypes=f,a.a=E},617:function(e,a,t){"use strict";var n=t(15),o=t(18),r=t(30),l=t(29),c=t(3),s=t.n(c),i=t(2),d=t.n(i),p=t(89),m=t.n(p),u=t(91),b={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:u.m,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},f={toggle:d.a.func},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(Object(l.a)(t))),t.getTabIndex=t.getTabIndex.bind(Object(l.a)(Object(l.a)(t))),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},t.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},t.render=function(){var e=this.getTabIndex(),a=e>-1?"menuitem":void 0,t=Object(u.j)(this.props,["toggle"]),r=t.className,l=t.cssModule,c=t.divider,i=t.tag,d=t.header,p=t.active,b=Object(o.a)(t,["className","cssModule","divider","tag","header","active"]),f=Object(u.i)(m()(r,{disabled:b.disabled,"dropdown-item":!c&&!d,active:p,"dropdown-header":d,"dropdown-divider":c}),l);return"button"===i&&(d?i="h6":c?i="div":b.href&&(i="a")),s.a.createElement(i,Object(n.a)({type:"button"===i&&(b.onClick||this.props.toggle)?"button":void 0},b,{tabIndex:e,role:a,className:f,onClick:this.onClick}))},a}(s.a.Component);g.propTypes=b,g.defaultProps={tag:"button",toggle:!0},g.contextTypes=f,a.a=g}}]);
//# sourceMappingURL=27.79d78681.chunk.js.map