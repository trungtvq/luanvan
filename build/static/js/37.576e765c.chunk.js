(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{102:function(e,n){e.exports=function(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}},105:function(e,n,t){"use strict";var a=t(15),c=t(18),l=t(3),r=t.n(l),o=t(2),i=t.n(o),u=t(89),s=t.n(u),h=t(91),m={tag:h.m,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},p=function(e){var n=e.className,t=e.cssModule,l=e.noGutters,o=e.tag,i=e.form,u=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(h.i)(s()(n,l?"no-gutters":null,i?"form-row":"row"),t);return r.a.createElement(o,Object(a.a)({},u,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div"},n.a=p},118:function(e,n,t){"use strict";var a=t(15),c=t(18),l=t(3),r=t.n(l),o=t(2),i=t.n(o),u=t(89),s=t.n(u),h=t(91),m={tag:h.m,inverse:i.a.bool,color:i.a.string,block:Object(h.e)(i.a.bool,'Please use the props "body"'),body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var n=e.className,t=e.cssModule,l=e.color,o=e.block,i=e.body,u=e.inverse,m=e.outline,p=e.tag,g=e.innerRef,v=Object(c.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),d=Object(h.i)(s()(n,"card",!!u&&"text-white",!(!o&&!i)&&"card-body",!!l&&(m?"border":"bg")+"-"+l),t);return r.a.createElement(p,Object(a.a)({},v,{className:d,ref:g}))};p.propTypes=m,p.defaultProps={tag:"div"},n.a=p},137:function(e,n,t){"use strict";var a=t(15),c=t(18),l=t(3),r=t.n(l),o=t(2),i=t.n(o),u=t(89),s=t.n(u),h=t(91),m={tag:h.m,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var n=e.className,t=e.cssModule,l=e.innerRef,o=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),u=Object(h.i)(s()(n,"card-body"),t);return r.a.createElement(o,Object(a.a)({},i,{className:u,ref:l}))};p.propTypes=m,p.defaultProps={tag:"div"},n.a=p},139:function(e,n,t){"use strict";var a=t(15),c=t(18),l=t(102),r=t.n(l),o=t(3),i=t.n(o),u=t(2),s=t.n(u),h=t(89),m=t.n(h),p=t(91),g=s.a.oneOfType([s.a.number,s.a.string]),v=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),push:Object(p.e)(g,'Please use the prop "order"'),pull:Object(p.e)(g,'Please use the prop "order"'),order:g,offset:g})]),d={tag:p.m,xs:v,sm:v,md:v,lg:v,xl:v,className:s.a.string,cssModule:s.a.object,widths:s.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,n,t){return!0===t||""===t?e?"col":"col-"+n:"auto"===t?e?"col-auto":"col-"+n+"-auto":e?"col-"+t:"col-"+n+"-"+t},E=function(e){var n=e.className,t=e.cssModule,l=e.widths,o=e.tag,u=Object(c.a)(e,["className","cssModule","widths","tag"]),s=[];l.forEach(function(n,a){var c=e[n];if(delete u[n],c||""===c){var l=!a;if(r()(c)){var o,i=l?"-":"-"+n+"-",h=f(l,n,c.size);s.push(Object(p.i)(m()(((o={})[h]=c.size||""===c.size,o["order"+i+c.order]=c.order||0===c.order,o["offset"+i+c.offset]=c.offset||0===c.offset,o)),t))}else{var g=f(l,n,c);s.push(g)}}}),s.length||s.push("col");var h=Object(p.i)(m()(n,s),t);return i.a.createElement(o,Object(a.a)({},u,{className:h}))};E.propTypes=d,E.defaultProps=b,n.a=E},154:function(e,n,t){"use strict";var a=t(15),c=t(18),l=t(3),r=t.n(l),o=t(2),i=t.n(o),u=t(89),s=t.n(u),h=t(91),m={tag:h.m,className:i.a.string,cssModule:i.a.object},p=function(e){var n=e.className,t=e.cssModule,l=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),i=Object(h.i)(s()(n,"card-header"),t);return r.a.createElement(l,Object(a.a)({},o,{className:i}))};p.propTypes=m,p.defaultProps={tag:"div"},n.a=p},829:function(e,n,t){"use strict";t.r(n);var a=t(24),c=t(25),l=t(27),r=t(26),o=t(28),i=(t(152),t(3)),u=t.n(i),s=t(153),h=t(105),m=t(139),p=t(819),g=t(817),v=t(818),d=t(118),b=t(154),f=t(137),E=function(e){function n(){return Object(a.a)(this,n),Object(l.a)(this,Object(r.a)(n).apply(this,arguments))}return Object(o.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return u.a.createElement(s.a,null,u.a.createElement(h.a,null,u.a.createElement(m.a,null,u.a.createElement(p.a,{tabs:!0},u.a.createElement(g.a,null,u.a.createElement(v.a,{href:"/Home/Main",active:!0},"V\u1ec1 ch\xfang t\xf4i")),u.a.createElement(g.a,null,u.a.createElement(v.a,{href:"/Home/Service",active:!0},"D\u1ecbch v\u1ee5")),u.a.createElement(g.a,null,u.a.createElement(v.a,{href:"/Home/Solve",active:!0},"Gi\u1ea3i ph\xe1p")),u.a.createElement(g.a,null,u.a.createElement(v.a,{href:"/Home/Contact",active:!0},"Li\xean h\u1ec7")),u.a.createElement(g.a,null,u.a.createElement(v.a,{href:"/login",active:!0},"Sign in")),u.a.createElement(g.a,null,u.a.createElement(v.a,{href:"/register",active:!0},"Sign up"))),u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("strong",null,"Qu\u1ea3n l\xed d\u1ef1 \xe1n theo m\xf4 h\xecnh scrum")),u.a.createElement(f.a,null,u.a.createElement("p",null,"Cung c\u1ea5p c\xf4ng c\u1ee5 qu\u1ea3n l\xed d\u1ef1 \xe1n, \u0111\xe1nh gi\xe1 n\u0103ng l\u1ef1c nh\xe2n vi\xean:"),u.a.createElement("p",null,"_ Gi\xfap qu\u1ea3n l\xed d\u1ef1 \xe1n, t\xecm ki\u1ebfm, l\u1ecdc c\xe1c d\u1ef1 \xe1n m\xe0 m\xecnh \u0111ang tham gia ho\u1eb7c \u0111ang qu\u1ea3n l\xed."),u.a.createElement("p",null,"_ T\u1ea1o v\xe0 thi\u1ebft l\u1eadp product backlog, sprint backlog nhanh v\xe0 hi\u1ec7u qu\u1ea3."),u.a.createElement("p",null,"_ Cho ph\xe9p t\u1ea1o c\xe1c task c\xf4ng vi\u1ec7c, thi\u1ebft l\u1eadp tr\u1ea1ng th\xe1i c\u1ee7a c\xf4ng vi\u1ec7c."),u.a.createElement("p",null,"_  Cho ph\xe9p t\xecm ki\u1ec3m th\xe0nh vi\xean theo ch\u1ec9 m\u1ee5c c\u1ea7n thi\u1ebft \u0111\u1ec3 th\xeam v\xe0o d\u1ef1 \xe1n, c\u0169ng nh\u01b0 thi\u1ebft l\u1eadp quy\u1ec1n h\u1ea1n cho th\xe0nh vi\xean \u0111\xf3."),u.a.createElement("p",null,"_ Cho ph\xe9p t\xecm ki\u1ebfm c\xe1c freelancer \u0111\u1ec3 th\xeam v\xe0o d\u1ef1 \xe1n, khi thi\u1ebfu ngu\u1ed3n l\u1ef1c n\u1ed9i b\u1ed9."),u.a.createElement("p",null,"_\u0110\xe1nh gi\xe1 \u0111\xf3ng g\xf3p t\u1eebng th\xe0nh vi\xean trong d\u1ef1 \xe1n th\xf4ng qua gi\xe1 tr\u1ecb \u0111em l\u1ea1i c\u1ee7a th\xe0nh vi\xean \u0111\xf3 cu\u1ed1i m\u1ed7i sprint."))),u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("strong",null,"\u0110\xe1nh gi\xe1 n\u0103ng l\u1ef1c theo ph\u01b0\u01a1ng ph\xe1p qu\u1ea3n tr\u1ecb theo m\u1ee5c ti\xeau (Management by Objectives-BMO):")),u.a.createElement(f.a,null,u.a.createElement("p",null,u.a.createElement("b",null,"Theo ph\u01b0\u01a1ng ph\xe1p qu\u1ea3n tr\u1ecb theo m\u1ee5c ti\xeau, tr\u1ecdng t\xe2m c\u1ee7a vi\u1ec7c \u0111\xe1nh gi\xe1:")),u.a.createElement("p",null,"\u2013 C\xe1c \u0111\u1eb7c t\xednh c\xe1 nh\xe2n qua s\u1ef1 ho\xe0n th\xe0nh c\xf4ng vi\u1ec7c."),u.a.createElement("p",null,"\u2013 Vai tr\xf2 c\u1ee7a nh\xe0 qu\u1ea3n tr\u1ecb chuy\u1ec3n t\u1eeb vai tr\xf2 c\u1ee7a ng\u01b0\u1eddi tr\u1ecdng t\xe0i ph\xe2n x\u1eed qua vai tr\xf2 c\u1ee7a ng\u01b0\u1eddi t\u01b0 v\u1ea5n, c\u1ed1 v\u1ea5n."),u.a.createElement("p",null,"\u2013 Nh\xe2n vi\xean t\u1eeb th\u1ee5 \u0111\u1ed9ng chuy\u1ec3n sang tham d\u1ef1 mang t\xednh t\xedch c\u1ef1c"),u.a.createElement("p",null,"\u2013 S\u1ef1 ph\u1ed1i h\u1ee3p c\u1ee7a l\xe3nh \u0111\u1ea1o v\xe0 nh\xe2n vi\xean trong vi\u1ec7c x\u1ebfp \u0111\u1eb7t c\xe1c m\u1ee5c ti\xeau cho nh\xe2n vi\xean trong m\u1ed9t kho\u1ea3ng th\u1eddi gian nh\u1ea5t \u0111\u1ecbnh. Tr\xean c\u01a1 s\u1edf \u0111\xe3 th\u1ea3o lu\u1eadn b\u1ea3n m\xf4 t\u1ea3 c\xf4ng vi\u1ec7c, n\u1ed9i dung c\xf4ng vi\u1ec7c, tr\xe1ch nhi\u1ec7m b\xe1o c\xe1o v\u1ec1 c\xe1c vi\u1ec7c \u0111\xf3.                 "),u.a.createElement("p",null,"\u2013 \xd0\u1ecbnh k\u1ef3 xem x\xe9t c\xe1c k\u1ebft qu\u1ea3 \u0111\xe3 \u0111\u1ea1t \u0111\u01b0\u1ee3c."),u.a.createElement("p",null,"\u2013 C\u1ea5p tr\xean v\xe0 c\u1ea5p d\u01b0\u1edbi g\u1eb7p nhau cu\u1ed1i giai \u0111o\u1ea1n \u0111\xe1nh gi\xe1 \u0111\u1ec3 th\u1ea3o lu\u1eadn k\u1ebft qu\u1ea3 c\u1ee7a c\u1ea5p d\u01b0\u1edbi c\xf3 \u0111\u1ea1t \u0111\u01b0\u1ee3c m\u1ee5c ti\xeau \u0111\xe3 \u0111\u1ec1 ra tr\u01b0\u1edbc \u0111\xe2y hay kh\xf4ng.                  "))),u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("strong",null,u.a.createElement("b",null,"Ph\u01b0\u01a1ng ph\xe1p qu\u1ea3n tr\u1ecb theo m\u1ee5c ti\xeau \u0111em l\u1ea1i:"))),u.a.createElement(f.a,null,u.a.createElement("p",null,"- N\u0103ng su\u1ea5t lao \u0111\u1ed9ng cao."),u.a.createElement("p",null,"- Ph\xe1t huy \u0111\u01b0\u1ee3c tr\xed tu\u1ec7 v\xe0 n\u0103ng l\u1ef1c l\xe0m vi\u1ec7c c\u1ee7a nh\xe2n vi\xean."),u.a.createElement("p",null,"- T\u1ea1o m\xf4i tr\u01b0\u1eddng l\xe0m vi\u1ec7c mang t\xednh c\u1ea1nh tranh."),u.a.createElement("p",null,"- Th\xfac \u0111\u1ea9y l\xe0m vi\u1ec7c v\xec m\u1ee5c ti\xeau c\u1ee7a nh\xe2n vi\xean v\xe0 c\u1ee7a doanh nghi\u1ec7p."),u.a.createElement("p",null,"- T\u1ed1i \u0111a ho\xe1 ngu\u1ed3n l\u1ef1c daonh nghi\u1ec7p v\xe0 h\u1ea1n ch\u1ebf l\xe3ng ph\xed v\u1ec1 th\u1eddi gian."))))))}}]),n}(i.Component);n.default=E}}]);
//# sourceMappingURL=37.576e765c.chunk.js.map