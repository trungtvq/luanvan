(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,l){"use strict";var a=l(8),n=l(11),r=l(86),c=l.n(r),o=l(0),u=l.n(o),m=l(1),s=l.n(m),d=l(68),i=l.n(d),E=l(70),g=s.a.oneOfType([s.a.number,s.a.string]),h=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),push:Object(E.e)(g,'Please use the prop "order"'),pull:Object(E.e)(g,'Please use the prop "order"'),order:g,offset:g})]),b={tag:E.m,xs:h,sm:h,md:h,lg:h,xl:h,className:s.a.string,cssModule:s.a.object,widths:s.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,l){return!0===l||""===l?e?"col":"col-"+t:"auto"===l?e?"col-auto":"col-"+t+"-auto":e?"col-"+l:"col-"+t+"-"+l},v=function(e){var t=e.className,l=e.cssModule,r=e.widths,o=e.tag,m=Object(n.a)(e,["className","cssModule","widths","tag"]),s=[];r.forEach(function(t,a){var n=e[t];if(delete m[t],n||""===n){var r=!a;if(c()(n)){var o,u=r?"-":"-"+t+"-",d=f(r,t,n.size);s.push(Object(E.i)(i()(((o={})[d]=n.size||""===n.size,o["order"+u+n.order]=n.order||0===n.order,o["offset"+u+n.offset]=n.offset||0===n.offset,o)),l))}else{var g=f(r,t,n);s.push(g)}}}),s.length||s.push("col");var d=Object(E.i)(i()(t,s),l);return u.a.createElement(o,Object(a.a)({},m,{className:d}))};v.propTypes=b,v.defaultProps=p,t.a=v},836:function(e,t,l){"use strict";l.r(t);var a=l(12),n=l(13),r=l(15),c=l(14),o=l(16),u=l(18),m=l(0),s=l.n(m),d=l(91),i=l(114),E=l(96),g=l(469),h=function(e){function t(e){var l;return Object(a.a)(this,t),(l=Object(r.a)(this,Object(c.a)(t).call(this,e))).toggle=l.toggle.bind(Object(u.a)(Object(u.a)(l))),l.state={collapse:!0,fadeIn:!0},l}return Object(o.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(i.a,null,s.a.createElement(E.a,null,s.a.createElement("div",{class:"table-responsive"},s.a.createElement("table",{class:"table table-lg"},s.a.createElement("thead",{class:"thead"},s.a.createElement("tr",{class:"bg-primary"},s.a.createElement("th",null,"Title"),s.a.createElement("th",null,"Sprint"),s.a.createElement("th",null,"IdBacklog"),s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"Priority"),s.a.createElement("th",null,"Start day"),s.a.createElement("th",null,"Deadline"),s.a.createElement("th",null,"Assignee"),s.a.createElement("th",null,"Point"),s.a.createElement("th",null,"Review"),s.a.createElement("th",null))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Login b\u1eb1ng Fb"),s.a.createElement("td",null,"2"),s.a.createElement("td",null,"6"),s.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n fb \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),s.a.createElement("td",null,s.a.createElement(g.a,{color:"danger"},"High")),s.a.createElement("td",null,"20/4/2019"),s.a.createElement("td",null,"24/4/2019"),s.a.createElement("td",null,"H\xf9ng"),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null)),s.a.createElement("tr",null,s.a.createElement("td",null,"Login b\u1eb1ng email"),s.a.createElement("td",null,"2"),s.a.createElement("td",null,"7"),s.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n email \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),s.a.createElement("td",null,s.a.createElement(g.a,{color:"danger"},"High")),s.a.createElement("td",null,"20/4/2019"),s.a.createElement("td",null,"23/4/2019"),s.a.createElement("td",null,"Nh\xe2n"),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null)),s.a.createElement("tr",null,s.a.createElement("td",null,"Login b\u1eb1ng t\xe0i kho\u1ea3n"),s.a.createElement("td",null,"2"),s.a.createElement("td",null,"7"),s.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng t\u1ea1o t\xe0i kho\u1ea3n v\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n n\xe0y \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),s.a.createElement("td",null,s.a.createElement(g.a,{color:"warning"},"Medium")),s.a.createElement("td",null,"21/4/2019"),s.a.createElement("td",null,"25/4/2019"),s.a.createElement("td",null,"T\xe2m"),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null)),s.a.createElement("tr",null,s.a.createElement("td",null,"\u0110\u1ed5i m\u1eadt kh\u1ea9u"),s.a.createElement("td",null,"2"),s.a.createElement("td",null,"7"),s.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng \u0111\u1ed5i m\u1eadt kh\u1ea9u c\u1ee7a t\xe0i kho\u1ea3n m\xe0 m\xecnh t\u1ea1o"),s.a.createElement("td",null,s.a.createElement(g.a,{color:"primary"},"Low")),s.a.createElement("td",null,"20/4/2019"),s.a.createElement("td",null,"24/4/2019"),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null)),s.a.createElement("tr",null,s.a.createElement("td",null,"Thay \u0111\u1ed5i avatar"),s.a.createElement("td",null,"2"),s.a.createElement("td",null,"8"),s.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng thay \u0111\u1ed5i avatar hi\u1ec3n th\u1ecb \u1edf giao di\u1ec7n ch\xednh"),s.a.createElement("td",null,s.a.createElement(g.a,{color:"primary"},"Low")),s.a.createElement("td",null,"20/4/2019"),s.a.createElement("td",null,"24/4/2019"),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null)),s.a.createElement("tr",null,s.a.createElement("td",null,"Thanh to\xe1n b\u1eb1ng paypal"),s.a.createElement("td",null,"2"),s.a.createElement("td",null,"8"),s.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng s\u1eed d\u1ee5ng paypal \u0111\u1ec3 tr\u1ea3 ph\xed"),s.a.createElement("td",null,s.a.createElement(g.a,{color:"primary"},"Low")),s.a.createElement("td",null,"20/4/2019"),s.a.createElement("td",null,"24/4/2019"),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null))))))))}}]),t}(m.Component);t.default=h},86:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},91:function(e,t,l){"use strict";var a=l(8),n=l(11),r=l(0),c=l.n(r),o=l(1),u=l.n(o),m=l(68),s=l.n(m),d=l(70),i={tag:d.m,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool},E=function(e){var t=e.className,l=e.cssModule,r=e.noGutters,o=e.tag,u=e.form,m=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),i=Object(d.i)(s()(t,r?"no-gutters":null,u?"form-row":"row"),l);return c.a.createElement(o,Object(a.a)({},m,{className:i}))};E.propTypes=i,E.defaultProps={tag:"div"},t.a=E},96:function(e,t,l){"use strict";var a=l(8),n=l(11),r=l(0),c=l.n(r),o=l(1),u=l.n(o),m=l(68),s=l.n(m),d=l(70),i={tag:d.m,inverse:u.a.bool,color:u.a.string,block:Object(d.e)(u.a.bool,'Please use the props "body"'),body:u.a.bool,outline:u.a.bool,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},E=function(e){var t=e.className,l=e.cssModule,r=e.color,o=e.block,u=e.body,m=e.inverse,i=e.outline,E=e.tag,g=e.innerRef,h=Object(n.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),b=Object(d.i)(s()(t,"card",!!m&&"text-white",!(!o&&!u)&&"card-body",!!r&&(i?"border":"bg")+"-"+r),l);return c.a.createElement(E,Object(a.a)({},h,{className:b,ref:g}))};E.propTypes=i,E.defaultProps={tag:"div"},t.a=E}}]);
//# sourceMappingURL=44.177d5557.chunk.js.map