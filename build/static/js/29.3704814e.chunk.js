(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{114:function(e,t,a){"use strict";var s=a(8),n=a(11),l=a(86),o=a.n(l),r=a(0),c=a.n(r),i=a(1),u=a.n(i),d=a(68),m=a.n(d),p=a(70),f=u.a.oneOfType([u.a.number,u.a.string]),b=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(p.e)(f,'Please use the prop "order"'),pull:Object(p.e)(f,'Please use the prop "order"'),order:f,offset:f})]),g={tag:p.m,xs:b,sm:b,md:b,lg:b,xl:b,className:u.a.string,cssModule:u.a.object,widths:u.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,l=e.widths,r=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];l.forEach(function(t,s){var n=e[t];if(delete i[t],n||""===n){var l=!s;if(o()(n)){var r,c=l?"-":"-"+t+"-",d=v(l,t,n.size);u.push(Object(p.i)(m()(((r={})[d]=n.size||""===n.size,r["order"+c+n.order]=n.order||0===n.order,r["offset"+c+n.offset]=n.offset||0===n.offset,r)),a))}else{var f=v(l,t,n);u.push(f)}}}),u.length||u.push("col");var d=Object(p.i)(m()(t,u),a);return c.a.createElement(r,Object(s.a)({},i,{className:d}))};y.propTypes=g,y.defaultProps=h,t.a=y},137:function(e,t,a){"use strict";var s=a(8),n=a(11),l=a(0),o=a.n(l),r=a(1),c=a.n(r),i=a(68),u=a.n(i),d=a(70),m={tag:d.m,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,a=e.cssModule,l=e.innerRef,r=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.i)(u()(t,"card-body"),a);return o.a.createElement(r,Object(s.a)({},c,{className:i,ref:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},138:function(e,t,a){"use strict";var s=a(8),n=a(11),l=a(19),o=a(18),r=a(0),c=a.n(r),i=a(1),u=a.n(i),d=a(68),m=a.n(d),p=a(70),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(Object(o.a)(a))),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],l=e.block,o=e.className,r=e.close,i=e.cssModule,u=e.color,d=e.outline,f=e.size,b=e.tag,g=e.innerRef,h=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,y=Object(p.i)(m()(o,{close:r},r||"btn",r||v,!!f&&"btn-"+f,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),i);h.href&&"button"===b&&(b="a");var E=r?"Close":null;return c.a.createElement(b,Object(s.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:y,ref:g,onClick:this.onClick,"aria-label":a||E}))},t}(c.a.Component);b.propTypes=f,b.defaultProps={color:"secondary",tag:"button"},t.a=b},162:function(e,t,a){"use strict";var s=a(8),n=a(11),l=a(0),o=a.n(l),r=a(1),c=a.n(r),i=a(68),u=a.n(i),d=a(70),m={tag:d.m,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(d.i)(u()(t,"card-header"),a);return o.a.createElement(l,Object(s.a)({},r,{className:c}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},166:function(e,t,a){"use strict";var s=a(8),n=a(11),l=a(19),o=a(18),r=a(0),c=a.n(r),i=a(1),u=a.n(i),d=a(68),m=a.n(d),p=a(70),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,state:Object(p.e)(u.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:u.a.bool,invalid:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),static:Object(p.e)(u.a.bool,'Please use the prop "plaintext"'),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(Object(o.a)(a))),a.focus=a.focus.bind(Object(o.a)(Object(o.a)(a))),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,o=e.bsSize,r=e.state,i=e.valid,u=e.invalid,d=e.tag,f=e.addon,b=e.static,g=e.plaintext,h=e.innerRef,v=Object(n.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),y=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),j=d||("select"===l||"textarea"===l?l:"input"),O="form-control";g||b?(O+="-plaintext",j=d||"input"):"file"===l?O+="-file":y&&(O=f?null:"form-check-input"),r&&"undefined"===typeof i&&"undefined"===typeof u&&("danger"===r?u=!0:"success"===r&&(i=!0)),v.size&&E.test(v.size)&&(Object(p.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=v.size,delete v.size);var w=Object(p.i)(m()(t,u&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,O),a);return("input"===j||d&&"function"===typeof d)&&(v.type=l),!v.children||g||b||"select"===l||"string"!==typeof j||"select"===j||(Object(p.n)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(j,Object(s.a)({},v,{ref:h,className:w}))},t}(c.a.Component);b.propTypes=f,b.defaultProps={type:"text"},t.a=b},185:function(e,t,a){"use strict";var s=a(8),n=a(11),l=a(0),o=a.n(l),r=a(1),c=a.n(r),i=a(68),u=a.n(i),d=a(86),m=a.n(d),p=a(70),f=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:f,push:Object(p.e)(f,'Please use the prop "order"'),pull:Object(p.e)(f,'Please use the prop "order"'),order:f,offset:f})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:p.m,className:c.a.string,cssModule:c.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,l=e.hidden,r=e.widths,c=e.tag,i=e.check,d=e.size,f=e.for,b=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];r.forEach(function(t,s){var n=e[t];if(delete b[t],n||""===n){var l,o=!s;if(m()(n)){var r,c=o?"-":"-"+t+"-";l=v(o,t,n.size),g.push(Object(p.i)(u()(((r={})[l]=n.size||""===n.size,r["order"+c+n.order]=n.order||0===n.order,r["offset"+c+n.offset]=n.offset||0===n.offset,r))),a)}else l=v(o,t,n),g.push(l)}});var h=Object(p.i)(u()(t,!!l&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),a);return o.a.createElement(c,Object(s.a)({htmlFor:f},b,{className:h}))};y.propTypes=g,y.defaultProps=h,t.a=y},831:function(e,t,a){"use strict";a.r(t);var s=a(12),n=a(13),l=a(15),o=a(14),r=a(16),c=a(0),i=a.n(c),u=a(91),d=a(114),m=a(96),p=a(162),f=a(137),b=a(185),g=a(166),h=a(138),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={dataUserStory:[{as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits"},{as:"admin",want:"Add new categories",so:"I can allow members to create engaging content"},{as:"admin",want:"Add new security groups",so:"Security levels are approriate"}],dataProductBacklog:[{as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits",priority:1,estimation:3,sprint:1},{as:"admin",want:"Add new categories",so:"I can allow members to create engaging content",priority:2,estimation:1,sprint:1},{as:"admin",want:"Add new security groups",so:"Security levels are approriate",priority:3,estimation:4,sprint:1}]},a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement("div",{class:"card border-primary mb-3"},i.a.createElement("div",{class:"card-header bg-primary"},"USER STORY"),i.a.createElement("div",{class:"card-body"},this.state.dataUserStory.map(function(e,t){return i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:""}),i.a.createElement("strong",null,"As: ",e.as)),i.a.createElement(f.a,null,i.a.createElement("h6",null,"I want: ",e.want),i.a.createElement("h6",null,"So that:  ",e.so),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(b.a,{htmlFor:"text-input"},"Priority")),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(g.a,{type:"text",name:"text-input",id:"text-input",rows:"9"})),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(b.a,{htmlFor:"text-input"},"Estimation")),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(g.a,{type:"text",name:"text-input",id:"text-input",rows:"9"})),i.a.createElement("div",{class:"col col-lg-1 col-md-1 col-sm-1"},i.a.createElement(b.a,{htmlFor:"text-input"},"Sprint")),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(g.a,{type:"text",name:"text-input",id:"text-input",rows:"9"}))),i.a.createElement(h.a,{type:"submit",size:"sm",color:"success",align:"center"},i.a.createElement("i",{class:"fa fa-arrow-right"}))))})))),i.a.createElement(d.a,null,i.a.createElement("div",{class:"card border-primary mb-3"},i.a.createElement("div",{class:"card-header bg-primary"},"PRODUCT BACKLOG_",i.a.createElement(h.a,{type:"submit",size:"sm",color:"primary"}," save")),i.a.createElement("div",{class:"card-body"},this.state.dataProductBacklog.map(function(e,t){return i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:""}),i.a.createElement("strong",null,"As ",e.as)),i.a.createElement(f.a,null,i.a.createElement("h6",null,"I want :  ",e.want),i.a.createElement("h6",null," So that:   ",e.so),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(b.a,{htmlFor:"text-input"},"Priority")),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(g.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:e.priority})),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(b.a,{htmlFor:"text-input"},"Estimation")),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(g.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:e.estimation})),i.a.createElement("div",{class:"col col-lg-1 col-md-1 col-sm-1"},i.a.createElement(b.a,{htmlFor:"text-input"},"Sprint")),i.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},i.a.createElement(g.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:e.sprint}))),i.a.createElement(h.a,{type:"submit",size:"sm",color:"success",align:"center"},i.a.createElement("i",{class:"fa fa-arrow-left"}))))})))))))}}]),t}(c.Component);t.default=v},86:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},91:function(e,t,a){"use strict";var s=a(8),n=a(11),l=a(0),o=a.n(l),r=a(1),c=a.n(r),i=a(68),u=a.n(i),d=a(70),m={tag:d.m,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},p=function(e){var t=e.className,a=e.cssModule,l=e.noGutters,r=e.tag,c=e.form,i=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(d.i)(u()(t,l?"no-gutters":null,c?"form-row":"row"),a);return o.a.createElement(r,Object(s.a)({},i,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},96:function(e,t,a){"use strict";var s=a(8),n=a(11),l=a(0),o=a.n(l),r=a(1),c=a.n(r),i=a(68),u=a.n(i),d=a(70),m={tag:d.m,inverse:c.a.bool,color:c.a.string,block:Object(d.e)(c.a.bool,'Please use the props "body"'),body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,a=e.cssModule,l=e.color,r=e.block,c=e.body,i=e.inverse,m=e.outline,p=e.tag,f=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(d.i)(u()(t,"card",!!i&&"text-white",!(!r&&!c)&&"card-body",!!l&&(m?"border":"bg")+"-"+l),a);return o.a.createElement(p,Object(s.a)({},b,{className:g,ref:f}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=29.3704814e.chunk.js.map