(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,a){"use strict";var l=a(15),n=a(17),r=a(3),c=a.n(r),o=a(2),u=a.n(o),s=a(76),m=a.n(s),i=a(78),d={tag:i.m,inverse:u.a.bool,color:u.a.string,block:Object(i.e)(u.a.bool,'Please use the props "body"'),body:u.a.bool,outline:u.a.bool,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},E=function(e){var t=e.className,a=e.cssModule,r=e.color,o=e.block,u=e.body,s=e.inverse,d=e.outline,E=e.tag,b=e.innerRef,g=Object(n.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),p=Object(i.i)(m()(t,"card",!!s&&"text-white",!(!o&&!u)&&"card-body",!!r&&(d?"border":"bg")+"-"+r),a);return c.a.createElement(E,Object(l.a)({},g,{className:p,ref:b}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},123:function(e,t,a){"use strict";var l=a(15),n=a(17),r=a(88),c=a.n(r),o=a(3),u=a.n(o),s=a(2),m=a.n(s),i=a(76),d=a.n(i),E=a(78),b=m.a.oneOfType([m.a.number,m.a.string]),g=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),push:Object(E.e)(b,'Please use the prop "order"'),pull:Object(E.e)(b,'Please use the prop "order"'),order:b,offset:b})]),p={tag:E.m,xs:g,sm:g,md:g,lg:g,xl:g,className:m.a.string,cssModule:m.a.object,widths:m.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.widths,o=e.tag,s=Object(n.a)(e,["className","cssModule","widths","tag"]),m=[];r.forEach(function(t,l){var n=e[t];if(delete s[t],n||""===n){var r=!l;if(c()(n)){var o,u=r?"-":"-"+t+"-",i=h(r,t,n.size);m.push(Object(E.i)(d()(((o={})[i]=n.size||""===n.size,o["order"+u+n.order]=n.order||0===n.order,o["offset"+u+n.offset]=n.offset||0===n.offset,o)),a))}else{var b=h(r,t,n);m.push(b)}}}),m.length||m.push("col");var i=Object(E.i)(d()(t,m),a);return u.a.createElement(o,Object(l.a)({},s,{className:i}))};v.propTypes=p,v.defaultProps=f,t.a=v},152:function(e,t){var a=NaN,l="[object Symbol]",n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,s=Object.prototype.toString;function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&s.call(e)==l}(e))return a;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var i=c.test(e);return i||o.test(e)?u(e.slice(2),i?2:8):r.test(e)?a:+e}},221:function(e,t,a){"use strict";var l=a(15),n=a(17),r=a(3),c=a.n(r),o=a(2),u=a.n(o),s=a(76),m=a.n(s),i=a(152),d=a.n(i),E=a(78),b={children:u.a.node,bar:u.a.bool,multi:u.a.bool,tag:E.m,value:u.a.oneOfType([u.a.string,u.a.number]),max:u.a.oneOfType([u.a.string,u.a.number]),animated:u.a.bool,striped:u.a.bool,color:u.a.string,className:u.a.string,barClassName:u.a.string,cssModule:u.a.object},g=function(e){var t=e.children,a=e.className,r=e.barClassName,o=e.cssModule,u=e.value,s=e.max,i=e.animated,b=e.striped,g=e.color,p=e.bar,f=e.multi,h=e.tag,v=Object(n.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),y=d()(u)/d()(s)*100,N=Object(E.i)(m()(a,"progress"),o),j=Object(E.i)(m()("progress-bar",p&&a||r,i?"progress-bar-animated":null,g?"bg-"+g:null,b||i?"progress-bar-striped":null),o),O=f?t:c.a.createElement("div",{className:j,style:{width:y+"%"},role:"progressbar","aria-valuenow":u,"aria-valuemin":"0","aria-valuemax":s,children:t});return p?O:c.a.createElement(h,Object(l.a)({},v,{className:N,children:O}))};g.propTypes=b,g.defaultProps={tag:"div",value:0,max:100},t.a=g},738:function(e,t,a){"use strict";a.r(t);var l=a(30),n=a(31),r=a(33),c=a(32),o=a(34),u=a(21),s=a(3),m=a.n(s),i=a(97),d=a(123),E=a(100),b=a(351),g=a(221),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).toggle=a.toggle.bind(Object(u.a)(Object(u.a)(a))),a.state={collapse:!0,fadeIn:!0},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return m.a.createElement(i.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,null,m.a.createElement("div",{class:"table-responsive"},m.a.createElement("table",{class:"table table-lg"},m.a.createElement("thead",{class:"thead"},m.a.createElement("tr",{class:"bg-primary"},m.a.createElement("th",null,"Title"),m.a.createElement("th",null,"Sprint"),m.a.createElement("th",null,"IdBacklog"),m.a.createElement("th",null,"Description"),m.a.createElement("th",null,"Priority"),m.a.createElement("th",null,"Start day"),m.a.createElement("th",null,"Deadline"),m.a.createElement("th",null,"Completed"),m.a.createElement("th",null,"Assignee"),m.a.createElement("th",null,"Point"),m.a.createElement("th",null,"Review"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"Login b\u1eb1ng Fb"),m.a.createElement("td",null,"2"),m.a.createElement("td",null,"6"),m.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n fb \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),m.a.createElement("td",null,m.a.createElement(b.a,{color:"danger"},"High")),m.a.createElement("td",null,"20/4/2019"),m.a.createElement("td",null,"24/4/2019"),m.a.createElement("td",null,"H\xf9ng"),m.a.createElement("td",null),m.a.createElement("td",null,m.a.createElement(g.a,{value:100}),m.a.createElement("div",{className:"text-center"},"100%")),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null,"Login b\u1eb1ng email"),m.a.createElement("td",null,"2"),m.a.createElement("td",null,"7"),m.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n email \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),m.a.createElement("td",null,m.a.createElement(b.a,{color:"danger"},"High")),m.a.createElement("td",null,"20/4/2019"),m.a.createElement("td",null,"23/4/2019"),m.a.createElement("td",null,"Nh\xe2n"),m.a.createElement("td",null,"C\xf3 c\u1ea7n x\xe1c th\u1ef1c email kh\xf4ng?"),m.a.createElement("td",null,m.a.createElement(g.a,{value:85}),m.a.createElement("div",{className:"text-center"},"85%")),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null,"Login b\u1eb1ng t\xe0i kho\u1ea3n"),m.a.createElement("td",null,"2"),m.a.createElement("td",null,"7"),m.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng t\u1ea1o t\xe0i kho\u1ea3n v\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n n\xe0y \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),m.a.createElement("td",null,m.a.createElement(b.a,{color:"warning"},"Medium")),m.a.createElement("td",null,"21/4/2019"),m.a.createElement("td",null,"25/4/2019"),m.a.createElement("td",null,"T\xe2m"),m.a.createElement("td",null),m.a.createElement("td",null,m.a.createElement(g.a,{value:10}),m.a.createElement("div",{className:"text-center"},"10%")),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null,"\u0110\u1ed5i m\u1eadt kh\u1ea9u"),m.a.createElement("td",null,"2"),m.a.createElement("td",null,"7"),m.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng \u0111\u1ed5i m\u1eadt kh\u1ea9u c\u1ee7a t\xe0i kho\u1ea3n m\xe0 m\xecnh t\u1ea1o"),m.a.createElement("td",null,m.a.createElement(b.a,{color:"primary"},"Low")),m.a.createElement("td",null,"20/4/2019"),m.a.createElement("td",null,"24/4/2019"),m.a.createElement("td",null),m.a.createElement("td",null,"C\xf3 c\u1ea7n g\u1eedi m\xe0 t\u1edbi email li\xean k\u1ebft \u0111\u1ec3 x\xe1c nh\u1eadn kh\xf4ng?"),m.a.createElement("td",null,m.a.createElement(g.a,{value:0}),m.a.createElement("div",{className:"text-center"},"0%")),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null,"Thay \u0111\u1ed5i avatar"),m.a.createElement("td",null,"2"),m.a.createElement("td",null,"8"),m.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng thay \u0111\u1ed5i avatar hi\u1ec3n th\u1ecb \u1edf giao di\u1ec7n ch\xednh"),m.a.createElement("td",null,m.a.createElement(b.a,{color:"primary"},"Low")),m.a.createElement("td",null,"20/4/2019"),m.a.createElement("td",null,"24/4/2019"),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,m.a.createElement(g.a,{value:0}),m.a.createElement("div",{className:"text-center"},"0%")),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null,"Thanh to\xe1n b\u1eb1ng paypal"),m.a.createElement("td",null,"2"),m.a.createElement("td",null,"8"),m.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng s\u1eed d\u1ee5ng paypal \u0111\u1ec3 tr\u1ea3 ph\xed"),m.a.createElement("td",null,m.a.createElement(b.a,{color:"primary"},"Low")),m.a.createElement("td",null,"20/4/2019"),m.a.createElement("td",null,"24/4/2019"),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,m.a.createElement(g.a,{value:0}),m.a.createElement("div",{className:"text-center"},"0%")),m.a.createElement("td",null))))))))}}]),t}(s.Component);t.default=p},88:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},97:function(e,t,a){"use strict";var l=a(15),n=a(17),r=a(3),c=a.n(r),o=a(2),u=a.n(o),s=a(76),m=a.n(s),i=a(78),d={tag:i.m,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool},E=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,o=e.tag,u=e.form,s=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(i.i)(m()(t,r?"no-gutters":null,u?"form-row":"row"),a);return c.a.createElement(o,Object(l.a)({},s,{className:d}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E}}]);
//# sourceMappingURL=30.39a8bc3c.chunk.js.map