(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{101:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},102:function(e,t,n){(function(t){var n="[object AsyncFunction]",a="[object Function]",o="[object GeneratorFunction]",r="[object Null]",s="[object Proxy]",c="[object Undefined]",i="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=i||l||Function("return this")(),d=Object.prototype,f=d.hasOwnProperty,p=d.toString,b=u.Symbol,m=b?b.toStringTag:void 0;function g(e){return null==e?void 0===e?c:r:m&&m in Object(e)?function(e){var t=f.call(e,m),n=e[m];try{e[m]=void 0;var a=!0}catch(r){}var o=p.call(e);a&&(t?e[m]=n:delete e[m]);return o}(e):function(e){return p.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=g(e);return t==a||t==o||t==n||t==s}}).call(this,n(17))},104:function(e,t,n){"use strict";var a=n(9),o=n(11),r=n(0),s=n.n(r),c=n(1),i=n.n(c),l=n(18),u=n.n(l),d=n(79),f={tag:d.n,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},p=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,c=e.tag,i=e.form,l=Object(o.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(d.j)(u()(t,r?"no-gutters":null,i?"form-row":"row"),n);return s.a.createElement(c,Object(a.a)({},l,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},123:function(e,t,n){"use strict";var a=n(9),o=n(11),r=n(21),s=n(6),c=n(0),i=n.n(c),l=n(1),u=n.n(l),d=n(18),f=n.n(d),p=n(79),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(s.a)(Object(s.a)(n))),n}Object(r.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],r=e.block,s=e.className,c=e.close,l=e.cssModule,u=e.color,d=e.outline,b=e.size,m=e.tag,g=e.innerRef,h=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,y=Object(p.j)(f()(s,{close:c},c||"btn",c||v,!!b&&"btn-"+b,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);h.href&&"button"===m&&(m="a");var j=c?"Close":null;return i.a.createElement(m,Object(a.a)({type:"button"===m&&h.onClick?"button":void 0},h,{className:y,ref:g,onClick:this.onClick,"aria-label":n||j}))},t}(i.a.Component);m.propTypes=b,m.defaultProps={color:"secondary",tag:"button"},t.a=m},152:function(e,t,n){"use strict";var a=n(9),o=n(11),r=n(0),s=n.n(r),c=n(1),i=n.n(c),l=n(18),u=n.n(l),d=n(79),f={tag:d.n,fluid:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.fluid,c=e.tag,i=Object(o.a)(e,["className","cssModule","fluid","tag"]),l=Object(d.j)(u()(t,r?"container-fluid":"container"),n);return s.a.createElement(c,Object(a.a)({},i,{className:l}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},156:function(e,t,n){"use strict";var a=n(9),o=n(11),r=n(101),s=n.n(r),c=n(0),i=n.n(c),l=n(1),u=n.n(l),d=n(18),f=n.n(d),p=n(79),b=u.a.oneOfType([u.a.number,u.a.string]),m=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(p.f)(b,'Please use the prop "order"'),pull:Object(p.f)(b,'Please use the prop "order"'),order:b,offset:b})]),g={tag:p.n,xs:m,sm:m,md:m,lg:m,xl:m,className:u.a.string,cssModule:u.a.object,widths:u.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,r=e.widths,c=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach(function(t,a){var o=e[t];if(delete l[t],o||""===o){var r=!a;if(s()(o)){var c,i=r?"-":"-"+t+"-",d=v(r,t,o.size);u.push(Object(p.j)(f()(((c={})[d]=o.size||""===o.size,c["order"+i+o.order]=o.order||0===o.order,c["offset"+i+o.offset]=o.offset||0===o.offset,c)),n))}else{var b=v(r,t,o);u.push(b)}}}),u.length||u.push("col");var d=Object(p.j)(f()(t,u),n);return i.a.createElement(c,Object(a.a)({},l,{className:d}))};y.propTypes=g,y.defaultProps=h,t.a=y},157:function(e,t,n){"use strict";var a=n(9),o=n(11),r=n(0),s=n.n(r),c=n(1),i=n.n(c),l=n(18),u=n.n(l),d=n(79),f={tag:d.n,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.j)(u()(t,"input-group-text"),n);return s.a.createElement(r,Object(a.a)({},c,{className:i}))};p.propTypes=f,p.defaultProps={tag:"span"},t.a=p},201:function(e,t,n){"use strict";var a=n(9),o=n(11),r=n(21),s=n(6),c=n(0),i=n.n(c),l=n(1),u=n.n(l),d=n(18),f=n.n(d),p=n(79),b={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,state:Object(p.f)(u.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:u.a.bool,invalid:u.a.bool,tag:p.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),static:Object(p.f)(u.a.bool,'Please use the prop "plaintext"'),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(s.a)(Object(s.a)(n))),n.focus=n.focus.bind(Object(s.a)(Object(s.a)(n))),n}Object(r.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,s=e.bsSize,c=e.state,l=e.valid,u=e.invalid,d=e.tag,b=e.addon,m=e.static,g=e.plaintext,h=e.innerRef,v=Object(o.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),y=["radio","checkbox"].indexOf(r)>-1,j=new RegExp("\\D","g"),O=d||("select"===r||"textarea"===r?r:"input"),E="form-control";g||m?(E+="-plaintext",O=d||"input"):"file"===r?E+="-file":y&&(E=b?null:"form-check-input"),c&&"undefined"===typeof l&&"undefined"===typeof u&&("danger"===c?u=!0:"success"===c&&(l=!0)),v.size&&j.test(v.size)&&(Object(p.o)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=v.size,delete v.size);var N=Object(p.j)(f()(t,u&&"is-invalid",l&&"is-valid",!!s&&"form-control-"+s,E),n);return("input"===O||d&&"function"===typeof d)&&(v.type=r),!v.children||g||m||"select"===r||"string"!==typeof O||"select"===O||(Object(p.o)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),i.a.createElement(O,Object(a.a)({},v,{ref:h,className:N}))},t}(i.a.Component);m.propTypes=b,m.defaultProps={type:"text"},t.a=m},250:function(e,t,n){"use strict";var a=n(9),o=n(11),r=n(0),s=n.n(r),c=n(1),i=n.n(c),l=n(18),u=n.n(l),d=n(79),f={tag:d.n,size:i.a.string,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,c=e.size,i=Object(o.a)(e,["className","cssModule","tag","size"]),l=Object(d.j)(u()(t,"input-group",c?"input-group-"+c:null),n);return s.a.createElement(r,Object(a.a)({},i,{className:l}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},251:function(e,t,n){"use strict";var a=n(9),o=n(11),r=n(0),s=n.n(r),c=n(1),i=n.n(c),l=n(18),u=n.n(l),d=n(79),f=n(157),p={tag:d.n,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,n=e.cssModule,r=e.tag,c=e.addonType,i=e.children,l=Object(o.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(d.j)(u()(t,"input-group-"+c),n);return"string"===typeof i?s.a.createElement(r,Object(a.a)({},l,{className:p}),s.a.createElement(f.a,{children:i})):s.a.createElement(r,Object(a.a)({},l,{className:p,children:i}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},79:function(e,t,n){"use strict";n.d(t,"m",function(){return s}),n.d(t,"h",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"j",function(){return l}),n.d(t,"k",function(){return u}),n.d(t,"l",function(){return d}),n.d(t,"o",function(){return p}),n.d(t,"f",function(){return b}),n.d(t,"n",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"a",function(){return h}),n.d(t,"b",function(){return v}),n.d(t,"i",function(){return y}),n.d(t,"d",function(){return j}),n.d(t,"g",function(){return O});n(102);var a,o=n(1),r=n.n(o);function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function i(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&s(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach(function(a){-1===t.indexOf(a)&&(n[a]=e[a])}),n}function d(e,t){for(var n,a=Array.isArray(t)?t:[t],o=a.length,r={};o>0;)r[n=a[o-=1]]=e[n];return r}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}function b(e,t){return function(n,a,o){null!==n[a]&&"undefined"!==typeof n[a]&&p('"'+a+'" property of "'+o+'" has been deprecated.\n'+t);for(var r=arguments.length,s=new Array(r>3?r-3:0),c=3;c<r;c++)s[c-3]=arguments[c];return e.apply(void 0,[n,a,o].concat(s))}}r.a.oneOfType([r.a.string,r.a.func,function(e,t,n){if(!(e[t]instanceof Element))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},r.a.shape({current:r.a.any})]);var m=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},h=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],v={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},y={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},j=!("undefined"===typeof window||!window.document||!window.document.createElement);var O=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},982:function(e,t,n){"use strict";n.r(t);var a=n(12),o=n(13),r=n(15),s=n(14),c=n(16),i=n(0),l=n.n(i),u=n(152),d=n(104),f=n(156),p=n(250),b=n(251),m=n(157),g=n(201),h=n(123),v={};v.auth=n(47);var y=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=new v.auth.AuthClient("http://trungtvq.ddns.net:8080"),t=new v.auth.SignInReq;t.setUsername("useridoremail"),t.setPassword("mypass");e.signIn(t,{},function(e,t){if(e)console.log(e);else{var n=t.getSignInRes();null==n?console.log("Something was wrong ".concat("useridoremail"," wasn't found")):console.log("Fetched TODO with ID ".concat("useridoremail",": ").concat(n))}});return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:"6"},l.a.createElement("div",{className:"clearfix"},l.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),l.a.createElement("h4",{className:"pt-3"},"Oops! You're lost."),l.a.createElement("p",{className:"text-muted float-left"},"The page you are looking for was not found.")),l.a.createElement(p.a,{className:"input-prepend"},l.a.createElement(b.a,{addonType:"prepend"},l.a.createElement(m.a,null,l.a.createElement("i",{className:"fa fa-search"}))),l.a.createElement(g.a,{size:"16",type:"text",placeholder:"What are you looking for?"}),l.a.createElement(b.a,{addonType:"append"},l.a.createElement(h.a,{color:"info"},"Search")))))))}}]),t}(i.Component);t.default=y}}]);
//# sourceMappingURL=35.16801f5e.chunk.js.map