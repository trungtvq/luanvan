(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{100:function(e,t,a){"use strict";var l=a(15),n=a(17),r=a(3),o=a.n(r),c=a(2),s=a.n(c),m=a(76),i=a.n(m),d=a(78),u={tag:d.m,inverse:s.a.bool,color:s.a.string,block:Object(d.e)(s.a.bool,'Please use the props "body"'),body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},E=function(e){var t=e.className,a=e.cssModule,r=e.color,c=e.block,s=e.body,m=e.inverse,u=e.outline,E=e.tag,p=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(d.i)(i()(t,"card",!!m&&"text-white",!(!c&&!s)&&"card-body",!!r&&(u?"border":"bg")+"-"+r),a);return o.a.createElement(E,Object(l.a)({},b,{className:g,ref:p}))};E.propTypes=u,E.defaultProps={tag:"div"},t.a=E},732:function(e,t,a){"use strict";a.r(t);var l=a(30),n=a(31),r=a(33),o=a(32),c=a(34),s=a(21),m=a(3),i=a.n(m),d=a(97),u=a(123),E=a(150),p=a(128),b=a(100),g=a(746),f=a(707),h=a(708),y=a(212),x=a(213),w=a(184),v=a(709),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).toggleAdd=a.toggleAdd.bind(Object(s.a)(Object(s.a)(a))),a.toggleEdit=a.toggleEdit.bind(Object(s.a)(Object(s.a)(a))),a.state={data:[{id:1,as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits"},{id:2,as:"admin",want:"Add new categories",so:"I can allow members to create engaging content"},{id:3,as:"admin",want:"Add new security groups",so:"Security levels are approriate"},{id:4,as:"admin",want:"Delete comment",so:"Offensive content is removed"},{id:5,as:"admin",want:"Add new key words",so:"Content is easy to groups and search for"},{id:6,as:"member",want:"Update my account detail",so:"I can be contacted by admin"}],modalAdd:!1,modalEdit:!1},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"toggleAdd",value:function(){this.setState(function(e){return{modalAdd:!e.modalAdd}})}},{key:"toggleEdit",value:function(){this.setState(function(e){return{modalEdit:!e.modalEdit}})}},{key:"render",value:function(){this.state.data;var e=this;return i.a.createElement(d.a,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(u.a,{xs:"2",md:"2"},i.a.createElement(E.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(u.a,{xs:"0",md:"0"},i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(b.a,null,i.a.createElement("div",{class:"table-responsive"},i.a.createElement("table",{class:"table table-lg"},i.a.createElement("thead",{class:"thead"},i.a.createElement("tr",{class:"bg-primary"},i.a.createElement("th",null,"As a...",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"I want to be able to... ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"So that... ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,i.a.createElement("div",null,i.a.createElement(p.a,{color:"primary",size:"sm",className:"mt-3",onClick:e.toggleAdd},i.a.createElement("i",{class:"fa fa-plus-square"}),this.props.buttonLabel),i.a.createElement(g.a,{size:"lg",isOpen:e.state.modalAdd,toggle:e.toggleAdd,className:e.props.className},i.a.createElement(f.a,{toggle:e.toggleAdd},"UserStory"),i.a.createElement(h.a,null,i.a.createElement(y.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(x.a,{row:!0},i.a.createElement(u.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"text-input"},"As a...")),i.a.createElement(u.a,{xs:"12",md:"9"},i.a.createElement(E.a,{type:"text",id:"text-input",name:"text-input",placeholder:"As a..."}))),i.a.createElement(x.a,{row:!0},i.a.createElement(u.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"text-input"},"I want to be able to...")),i.a.createElement(u.a,{xs:"12",md:"9"},i.a.createElement(E.a,{type:"text",id:"text-input",name:"text-input",placeholder:"I want to be able to..."}))),i.a.createElement(x.a,{row:!0},i.a.createElement(u.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"textarea-input"},"So that...")),i.a.createElement(u.a,{xs:"12",md:"9"},i.a.createElement(E.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content..."}))))),i.a.createElement(v.a,null,i.a.createElement(p.a,{color:"primary",onClick:e.toggleAdd},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:e.toggleAdd},"Cancel"))))))),i.a.createElement("tbody",null,this.state.data.map(function(t,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,t.as),i.a.createElement("td",null,t.want),i.a.createElement("td",null,t.so),i.a.createElement("td",null,i.a.createElement(p.a,{color:"warning",size:"sm",onClick:e.toggleEdit},i.a.createElement("i",{class:"fa fa-edit"}),e.props.buttonLabel),i.a.createElement(g.a,{size:"lg",isOpen:e.state.modalEdit,toggle:e.toggleEdit,className:e.props.className},i.a.createElement(f.a,{toggle:e.toggleEdit},"UserStory"),i.a.createElement(h.a,null,i.a.createElement(y.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(x.a,{row:!0},i.a.createElement(u.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"text-input"},"As a...")),i.a.createElement(u.a,{xs:"12",md:"9"},i.a.createElement(E.a,{type:"text",id:"text-input",name:"text-input",placeholder:"As a...",value:"admin"}))),i.a.createElement(x.a,{row:!0},i.a.createElement(u.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"text-input"},"I want to be able to...")),i.a.createElement(u.a,{xs:"12",md:"9"},i.a.createElement(E.a,{type:"text",id:"text-input",name:"text-input",placeholder:"I want to be able to...",value:"See a list of all members and visitors"}))),i.a.createElement(x.a,{row:!0},i.a.createElement(u.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"textarea-input"},"So that...")),i.a.createElement(u.a,{xs:"12",md:"9"},i.a.createElement(E.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content...",value:"I can monitor site visits"}))))),i.a.createElement(v.a,null,i.a.createElement(p.a,{color:"primary",onClick:e.toggleEdit},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:e.toggleEdit},"Cancel"))),i.a.createElement(p.a,{type:"submit",size:"sm",color:"danger"},i.a.createElement("i",{class:"fa fa-trash"}))))})))))))}}]),t}(m.Component);t.default=A},97:function(e,t,a){"use strict";var l=a(15),n=a(17),r=a(3),o=a.n(r),c=a(2),s=a.n(c),m=a(76),i=a.n(m),d=a(78),u={tag:d.m,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},E=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,c=e.tag,s=e.form,m=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),u=Object(d.i)(i()(t,r?"no-gutters":null,s?"form-row":"row"),a);return o.a.createElement(c,Object(l.a)({},m,{className:u}))};E.propTypes=u,E.defaultProps={tag:"div"},t.a=E}}]);
//# sourceMappingURL=43.26e52593.chunk.js.map