(window.webpackJsonp=window.webpackJsonp||[]).push([[23,29],{102:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},104:function(e,t,a){(function(t){var a="[object AsyncFunction]",n="[object Function]",o="[object GeneratorFunction]",r="[object Null]",s="[object Proxy]",i="[object Undefined]",c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")(),d=Object.prototype,p=d.hasOwnProperty,f=d.toString,m=u.Symbol,b=m?m.toStringTag:void 0;function g(e){return null==e?void 0===e?i:r:b&&b in Object(e)?function(e){var t=p.call(e,b),a=e[b];try{e[b]=void 0;var n=!0}catch(r){}var o=f.call(e);n&&(t?e[b]=a:delete e[b]);return o}(e):function(e){return f.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=g(e);return t==n||t==o||t==a||t==s}}).call(this,a(19))},105:function(e,t,a){"use strict";var n=a(15),o=a(18),r=a(3),s=a.n(r),i=a(2),c=a.n(i),l=a(89),u=a.n(l),d=a(91),p={tag:d.m,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},f=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,i=e.tag,c=e.form,l=Object(o.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(d.i)(u()(t,r?"no-gutters":null,c?"form-row":"row"),a);return s.a.createElement(i,Object(n.a)({},l,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},118:function(e,t,a){"use strict";var n=a(15),o=a(18),r=a(3),s=a.n(r),i=a(2),c=a.n(i),l=a(89),u=a.n(l),d=a(91),p={tag:d.m,inverse:c.a.bool,color:c.a.string,block:Object(d.e)(c.a.bool,'Please use the props "body"'),body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var t=e.className,a=e.cssModule,r=e.color,i=e.block,c=e.body,l=e.inverse,p=e.outline,f=e.tag,m=e.innerRef,b=Object(o.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(d.i)(u()(t,"card",!!l&&"text-white",!(!i&&!c)&&"card-body",!!r&&(p?"border":"bg")+"-"+r),a);return s.a.createElement(f,Object(n.a)({},b,{className:g,ref:m}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},137:function(e,t,a){"use strict";var n=a(15),o=a(18),r=a(3),s=a.n(r),i=a(2),c=a.n(i),l=a(89),u=a.n(l),d=a(91),p={tag:d.m,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,i=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.i)(u()(t,"card-body"),a);return s.a.createElement(i,Object(n.a)({},c,{className:l,ref:r}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},139:function(e,t,a){"use strict";var n=a(15),o=a(18),r=a(102),s=a.n(r),i=a(3),c=a.n(i),l=a(2),u=a.n(l),d=a(89),p=a.n(d),f=a(91),m=u.a.oneOfType([u.a.number,u.a.string]),b=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(f.e)(m,'Please use the prop "order"'),pull:Object(f.e)(m,'Please use the prop "order"'),order:m,offset:m})]),g={tag:f.m,xs:b,sm:b,md:b,lg:b,xl:b,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.widths,i=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach(function(t,n){var o=e[t];if(delete l[t],o||""===o){var r=!n;if(s()(o)){var i,c=r?"-":"-"+t+"-",d=y(r,t,o.size);u.push(Object(f.i)(p()(((i={})[d]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i)),a))}else{var m=y(r,t,o);u.push(m)}}}),u.length||u.push("col");var d=Object(f.i)(p()(t,u),a);return c.a.createElement(i,Object(n.a)({},l,{className:d}))};h.propTypes=g,h.defaultProps=v,t.a=h},140:function(e,t,a){"use strict";var n=a(15),o=a(18),r=a(30),s=a(29),i=a(3),c=a.n(i),l=a(2),u=a.n(l),d=a(89),p=a.n(d),f=a(91),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(Object(s.a)(a))),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,s=e.className,i=e.close,l=e.cssModule,u=e.color,d=e.outline,m=e.size,b=e.tag,g=e.innerRef,v=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof v.children&&(v.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var y="btn"+(d?"-outline":"")+"-"+u,h=Object(f.i)(p()(s,{close:i},i||"btn",i||y,!!m&&"btn-"+m,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);v.href&&"button"===b&&(b="a");var j=i?"Close":null;return c.a.createElement(b,Object(n.a)({type:"button"===b&&v.onClick?"button":void 0},v,{className:h,ref:g,onClick:this.onClick,"aria-label":a||j}))},t}(c.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},154:function(e,t,a){"use strict";var n=a(15),o=a(18),r=a(3),s=a.n(r),i=a(2),c=a.n(i),l=a(89),u=a.n(l),d=a(91),p={tag:d.m,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),c=Object(d.i)(u()(t,"card-header"),a);return s.a.createElement(r,Object(n.a)({},i,{className:c}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},159:function(e,t,a){"use strict";var n=a(15),o=a(18),r=a(30),s=a(29),i=a(3),c=a.n(i),l=a(2),u=a.n(l),d=a(89),p=a.n(d),f=a(91),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,state:Object(f.e)(u.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:u.a.bool,invalid:u.a.bool,tag:f.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),static:Object(f.e)(u.a.bool,'Please use the prop "plaintext"'),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(Object(s.a)(a))),a.focus=a.focus.bind(Object(s.a)(Object(s.a)(a))),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,s=e.bsSize,i=e.state,l=e.valid,u=e.invalid,d=e.tag,m=e.addon,b=e.static,g=e.plaintext,v=e.innerRef,y=Object(o.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,j=new RegExp("\\D","g"),O=d||("select"===r||"textarea"===r?r:"input"),E="form-control";g||b?(E+="-plaintext",O=d||"input"):"file"===r?E+="-file":h&&(E=m?null:"form-check-input"),i&&"undefined"===typeof l&&"undefined"===typeof u&&("danger"===i?u=!0:"success"===i&&(l=!0)),y.size&&j.test(y.size)&&(Object(f.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=y.size,delete y.size);var w=Object(f.i)(p()(t,u&&"is-invalid",l&&"is-valid",!!s&&"form-control-"+s,E),a);return("input"===O||d&&"function"===typeof d)&&(y.type=r),!y.children||g||b||"select"===r||"string"!==typeof O||"select"===O||(Object(f.n)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete y.children),c.a.createElement(O,Object(n.a)({},y,{ref:v,className:w}))},t}(c.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},173:function(e,t,a){"use strict";var n=a(15),o=a(18),r=a(3),s=a.n(r),i=a(2),c=a.n(i),l=a(89),u=a.n(l),d=a(102),p=a.n(d),f=a(91),m=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:m,push:Object(f.e)(m,'Please use the prop "order"'),pull:Object(f.e)(m,'Please use the prop "order"'),order:m,offset:m})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.m,className:c.a.string,cssModule:c.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:c.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.hidden,i=e.widths,c=e.tag,l=e.check,d=e.size,m=e.for,b=Object(o.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];i.forEach(function(t,n){var o=e[t];if(delete b[t],o||""===o){var r,s=!n;if(p()(o)){var i,c=s?"-":"-"+t+"-";r=y(s,t,o.size),g.push(Object(f.i)(u()(((i={})[r]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i))),a)}else r=y(s,t,o),g.push(r)}});var v=Object(f.i)(u()(t,!!r&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),a);return s.a.createElement(c,Object(n.a)({htmlFor:m},b,{className:v}))};h.propTypes=g,h.defaultProps=v,t.a=h},225:function(e,t,a){"use strict";a.r(t);var n=a(24),o=a(25),r=a(27),s=a(26),i=a(28),c=a(3),l=a.n(c),u=a(105),d=a(139),p=a(140),f=a(118),m=a(154),b=a(137),g=a(173),v=a(159),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={dataUserStory:[{as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits"},{as:"admin",want:"Add new categories",so:"I can allow members to create engaging content"},{as:"admin",want:"Add new security groups",so:"Security levels are approriate"}],dataProductBacklog:[{as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits",priority:1,estimation:3,sprint:1},{as:"admin",want:"Add new categories",so:"I can allow members to create engaging content",priority:2,estimation:1,sprint:1},{as:"admin",want:"Add new security groups",so:"Security levels are approriate",priority:3,estimation:4,sprint:1}]},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement(u.a,null,l.a.createElement("div",{class:"col-sm-4"},l.a.createElement("div",{class:"card border-primary mb-3"},l.a.createElement("div",{class:"card-header bg-primary"},"All message"),l.a.createElement("div",{class:"card-body"},this.state.dataUserStory.map(function(e,t){return l.a.createElement("div",{class:"list-group"},l.a.createElement("button",{type:"button",class:"list-group-item list-group-item-action active"},"Cras justo odio"),l.a.createElement("button",{type:"button",class:"list-group-item list-group-item-action"},"Dapibus ac facilisis in"),l.a.createElement("button",{type:"button",class:"list-group-item list-group-item-action"},"Morbi leo risus"),l.a.createElement("button",{type:"button",class:"list-group-item list-group-item-action"},"Porta ac consectetur ac"),l.a.createElement("button",{type:"button",class:"list-group-item list-group-item-action",disabled:!0},"Vestibulum at eros"))})))),l.a.createElement("div",{class:"col-sm-8"},l.a.createElement("div",{class:"card border-primary mb-3"},l.a.createElement("div",{class:"card-header bg-primary"},"Message",l.a.createElement(p.a,{type:"submit",size:"sm",color:"primary"}," save")),l.a.createElement("div",{class:"card-body"},this.state.dataProductBacklog.map(function(e,t){return l.a.createElement(f.a,null,l.a.createElement(m.a,null,l.a.createElement("i",{className:""}),l.a.createElement("strong",null,"As ",e.as)),l.a.createElement(b.a,null,l.a.createElement("h6",null,"I want :  ",e.want),l.a.createElement("h6",null," So that:   ",e.so),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},l.a.createElement(g.a,{htmlFor:"text-input"},"Priority")),l.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},l.a.createElement(v.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:e.priority})),l.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},l.a.createElement(g.a,{htmlFor:"text-input"},"Estimation")),l.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},l.a.createElement(v.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:e.estimation})),l.a.createElement("div",{class:"col col-lg-1 col-md-1 col-sm-1"},l.a.createElement(g.a,{htmlFor:"text-input"},"Sprint")),l.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},l.a.createElement(v.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:e.sprint}))),l.a.createElement(p.a,{type:"submit",size:"sm",color:"success",align:"center"},l.a.createElement("i",{class:"fa fa-arrow-left"}))))}))))))))}}]),t}(c.Component);t.default=y},89:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=o.apply(null,n);s&&e.push(s)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},91:function(e,t,a){"use strict";a.d(t,"l",function(){return s}),a.d(t,"g",function(){return i}),a.d(t,"d",function(){return c}),a.d(t,"i",function(){return l}),a.d(t,"j",function(){return u}),a.d(t,"k",function(){return d}),a.d(t,"n",function(){return f}),a.d(t,"e",function(){return m}),a.d(t,"m",function(){return b}),a.d(t,"b",function(){return g}),a.d(t,"a",function(){return v}),a.d(t,"h",function(){return y}),a.d(t,"c",function(){return h}),a.d(t,"f",function(){return j});a(104);var n,o=a(2),r=a.n(o);function s(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&s(a+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function u(e,t){var a={};return Object.keys(e).forEach(function(n){-1===t.indexOf(n)&&(a[n]=e[n])}),a}function d(e,t){for(var a,n=Array.isArray(t)?t:[t],o=n.length,r={};o>0;)r[a=n[o-=1]]=e[a];return r}var p={};function f(e){p[e]||("undefined"!==typeof console&&console.error(e),p[e]=!0)}function m(e,t){return function(a,n,o){null!==a[n]&&"undefined"!==typeof a[n]&&f('"'+n+'" property of "'+o+'" has been deprecated.\n'+t);for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.apply(void 0,[a,n,o].concat(s))}}r.a.oneOfType([r.a.string,r.a.func,function(e,t,a){if(!(e[t]instanceof Element))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},r.a.shape({current:r.a.any})]);var b=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},h=!("undefined"===typeof window||!window.document||!window.document.createElement);var j=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']}}]);
//# sourceMappingURL=23.d04d5187.chunk.js.map