(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,a,t){"use strict";var n=t(15),c=t(17),l=t(3),o=t.n(l),r=t(2),s=t.n(r),i=t(76),u=t.n(i),m=t(78),p={tag:m.m,inverse:s.a.bool,color:s.a.string,block:Object(m.e)(s.a.bool,'Please use the props "body"'),body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},b=function(e){var a=e.className,t=e.cssModule,l=e.color,r=e.block,s=e.body,i=e.inverse,p=e.outline,b=e.tag,d=e.innerRef,f=Object(c.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),h=Object(m.i)(u()(a,"card",!!i&&"text-white",!(!r&&!s)&&"card-body",!!l&&(p?"border":"bg")+"-"+l),t);return o.a.createElement(b,Object(n.a)({},f,{className:h,ref:d}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b},123:function(e,a,t){"use strict";var n=t(15),c=t(17),l=t(88),o=t.n(l),r=t(3),s=t.n(r),i=t(2),u=t.n(i),m=t(76),p=t.n(m),b=t(78),d=u.a.oneOfType([u.a.number,u.a.string]),f=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(b.e)(d,'Please use the prop "order"'),pull:Object(b.e)(d,'Please use the prop "order"'),order:d,offset:d})]),h={tag:b.m,xs:f,sm:f,md:f,lg:f,xl:f,className:u.a.string,cssModule:u.a.object,widths:u.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},j=function(e){var a=e.className,t=e.cssModule,l=e.widths,r=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),u=[];l.forEach(function(a,n){var c=e[a];if(delete i[a],c||""===c){var l=!n;if(o()(c)){var r,s=l?"-":"-"+a+"-",m=v(l,a,c.size);u.push(Object(b.i)(p()(((r={})[m]=c.size||""===c.size,r["order"+s+c.order]=c.order||0===c.order,r["offset"+s+c.offset]=c.offset||0===c.offset,r)),t))}else{var d=v(l,a,c);u.push(d)}}}),u.length||u.push("col");var m=Object(b.i)(p()(a,u),t);return s.a.createElement(r,Object(n.a)({},i,{className:m}))};j.propTypes=h,j.defaultProps=g,a.a=j},125:function(e,a,t){"use strict";var n=t(15),c=t(17),l=t(3),o=t.n(l),r=t(2),s=t.n(r),i=t(76),u=t.n(i),m=t(78),p={tag:m.m,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},b=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,r=e.tag,s=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.i)(u()(a,"card-body"),t);return o.a.createElement(r,Object(n.a)({},s,{className:i,ref:l}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b},128:function(e,a,t){"use strict";var n=t(15),c=t(17),l=t(22),o=t(21),r=t(3),s=t.n(r),i=t(2),u=t.n(i),m=t(76),p=t.n(m),b=t(78),d={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(Object(o.a)(t))),t}Object(l.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],l=e.block,o=e.className,r=e.close,i=e.cssModule,u=e.color,m=e.outline,d=e.size,f=e.tag,h=e.innerRef,g=Object(c.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(m?"-outline":"")+"-"+u,j=Object(b.i)(p()(o,{close:r},r||"btn",r||v,!!d&&"btn-"+d,!!l&&"btn-block",{active:a,disabled:this.props.disabled}),i);g.href&&"button"===f&&(f="a");var E=r?"Close":null;return s.a.createElement(f,Object(n.a)({type:"button"===f&&g.onClick?"button":void 0},g,{className:j,ref:h,onClick:this.onClick,"aria-label":t||E}))},a}(s.a.Component);f.propTypes=d,f.defaultProps={color:"secondary",tag:"button"},a.a=f},143:function(e,a,t){"use strict";var n=t(15),c=t(17),l=t(3),o=t.n(l),r=t(2),s=t.n(r),i=t(76),u=t.n(i),m=t(78),p={tag:m.m,className:s.a.string,cssModule:s.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),s=Object(m.i)(u()(a,"card-footer"),t);return o.a.createElement(l,Object(n.a)({},r,{className:s}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b},144:function(e,a,t){"use strict";var n=t(15),c=t(17),l=t(3),o=t.n(l),r=t(2),s=t.n(r),i=t(76),u=t.n(i),m=t(78),p={tag:m.m,className:s.a.string,cssModule:s.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),s=Object(m.i)(u()(a,"card-header"),t);return o.a.createElement(l,Object(n.a)({},r,{className:s}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b},714:function(e,a,t){"use strict";t.r(a);var n=t(30),c=t(31),l=t(33),o=t(32),r=t(34),s=(t(147),t(3)),i=t.n(s),u=t(149),m=t(97),p=t(123),b=t(706),d=t(704),f=t(705),h=t(100),g=t(144),v=t(125),j=t(143),E=t(128),O=t(148),y=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement(b.a,{tabs:!0},i.a.createElement(d.a,null,i.a.createElement(f.a,{href:"/Home/Main",active:!0},"V\u1ec1 ch\xfang t\xf4i")),i.a.createElement(d.a,null,i.a.createElement(f.a,{href:"/Home/Service",active:!0},"D\u1ecbch v\u1ee5")),i.a.createElement(d.a,null,i.a.createElement(f.a,{href:"/Home/Solve",active:!0},"Gi\u1ea3i ph\xe1p")),i.a.createElement(d.a,null,i.a.createElement(f.a,{href:"/Home/Contact",active:!0},"Li\xean h\u1ec7")),i.a.createElement(d.a,null,i.a.createElement(f.a,{href:"/login",active:!0},"Sign in")),i.a.createElement(d.a,null,i.a.createElement(f.a,{href:"/register",active:!0},"Sign up"))),i.a.createElement(h.a,null,i.a.createElement(g.a,null,i.a.createElement("strong",null,"D\u1ecbch v\u1ee5 v\u1edbi ch\xfang t\xf4i")),i.a.createElement(v.a,null,i.a.createElement("p",null,"Cung c\u1ea5p c\xf4ng c\u1ee5 qu\u1ea3n l\xed d\u1ef1 \xe1n, \u0111\xe1nh gi\xe1 n\u0103ng l\u1ef1c nh\xe2n vi\xean:"),i.a.createElement("p",null,"_ Gi\xfap qu\u1ea3n l\xed d\u1ef1 \xe1n, t\xecm ki\u1ebfm, l\u1ecdc c\xe1c d\u1ef1 \xe1n m\xe0 m\xecnh \u0111ang tham gia ho\u1eb7c \u0111ang qu\u1ea3n l\xed."),i.a.createElement("p",null,"_ T\u1ea1o v\xe0 thi\u1ebft l\u1eadp product backlog, sprint backlog nhanh v\xe0 hi\u1ec7u qu\u1ea3."),i.a.createElement("p",null,"_ Cho ph\xe9p t\u1ea1o c\xe1c task c\xf4ng vi\u1ec7c, thi\u1ebft l\u1eadp tr\u1ea1ng th\xe1i c\u1ee7a c\xf4ng vi\u1ec7c."),i.a.createElement("p",null,"_  Cho ph\xe9p t\xecm ki\u1ec3m th\xe0nh vi\xean theo ch\u1ec9 m\u1ee5c c\u1ea7n thi\u1ebft \u0111\u1ec3 th\xeam v\xe0o d\u1ef1 \xe1n, c\u0169ng nh\u01b0 thi\u1ebft l\u1eadp quy\u1ec1n h\u1ea1n cho th\xe0nh vi\xean \u0111\xf3."),i.a.createElement("p",null,"_ Cho ph\xe9p t\xecm ki\u1ebfm c\xe1c freelancer \u0111\u1ec3 th\xeam v\xe0o d\u1ef1 \xe1n, khi thi\u1ebfu ngu\u1ed3n l\u1ef1c n\u1ed9i b\u1ed9."),i.a.createElement("p",null,"_\u0110\xe1nh gi\xe1 \u0111\xf3ng g\xf3p t\u1eebng th\xe0nh vi\xean trong d\u1ef1 \xe1n th\xf4ng qua gi\xe1 tr\u1ecb \u0111em l\u1ea1i c\u1ee7a th\xe0nh vi\xean \u0111\xf3 cu\u1ed1i m\u1ed7i sprint.")),i.a.createElement(j.a,null,i.a.createElement(O.a,{to:"/Home/Payment"},i.a.createElement(E.a,{type:"submit",size:"sm",color:"primary"},i.a.createElement("i",{className:"fa fa-dot-circle-o"})," Mua ngay")))))))}}]),a}(s.Component);a.default=y},88:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},97:function(e,a,t){"use strict";var n=t(15),c=t(17),l=t(3),o=t.n(l),r=t(2),s=t.n(r),i=t(76),u=t.n(i),m=t(78),p={tag:m.m,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},b=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,r=e.tag,s=e.form,i=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(m.i)(u()(a,l?"no-gutters":null,s?"form-row":"row"),t);return o.a.createElement(r,Object(n.a)({},i,{className:p}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=27.714065db.chunk.js.map