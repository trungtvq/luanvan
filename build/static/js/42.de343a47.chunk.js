(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{100:function(e,t,a){"use strict";var n=a(15),l=a(17),r=a(3),m=a.n(r),c=a(2),o=a.n(c),s=a(76),i=a.n(s),d=a(78),E={tag:d.m,inverse:o.a.bool,color:o.a.string,block:Object(d.e)(o.a.bool,'Please use the props "body"'),body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},u=function(e){var t=e.className,a=e.cssModule,r=e.color,c=e.block,o=e.body,s=e.inverse,E=e.outline,u=e.tag,p=e.innerRef,g=Object(l.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),b=Object(d.i)(i()(t,"card",!!s&&"text-white",!(!c&&!o)&&"card-body",!!r&&(E?"border":"bg")+"-"+r),a);return m.a.createElement(u,Object(n.a)({},g,{className:b,ref:p}))};u.propTypes=E,u.defaultProps={tag:"div"},t.a=u},731:function(e,t,a){"use strict";a.r(t);var n=a(30),l=a(31),r=a(33),m=a(32),c=a(34),o=a(21),s=a(3),i=a.n(s),d=a(97),E=a(123),u=a(150),p=a(128),g=a(100),b=a(746),x=a(707),y=a(708),f=a(212),h=a(213),w=a(184),v=a(709),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).toggleAdd=a.toggleAdd.bind(Object(o.a)(Object(o.a)(a))),a.toggleEdit=a.toggleEdit.bind(Object(o.a)(Object(o.a)(a))),a.toggleSend=a.toggleSend.bind(Object(o.a)(Object(o.a)(a))),a.state={data:[{id:1,as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits",priority:1,estimation:3,sprint:1,status:"done"},{id:2,as:"admin",want:"Add new categories",so:"I can allow members to create engaging content",priority:2,estimation:1,sprint:1,status:"done"},{id:3,as:"admin",want:"Add new security groups",so:"Security levels are approriate",priority:3,estimation:4,sprint:1,status:"done"},{id:4,as:"admin",want:"Delete comment",so:"Offensive content is removed",priority:4,estimation:6,sprint:1,status:"done"},{id:5,as:"admin",want:"Add new key words",so:"Content is easy to groups and search for",priority:5,estimation:1,sprint:1,status:"done"},{id:6,as:"member",want:"Update my account detail",so:"I can be contacted by admin",priority:5,estimation:3,sprint:2,status:"done"}],modalAdd:!1,modalEdit:!1,modalSend:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"toggleAdd",value:function(){this.setState(function(e){return{modalAdd:!e.modalAdd}})}},{key:"toggleEdit",value:function(){this.setState(function(e){return{modalEdit:!e.modalEdit}})}},{key:"toggleSend",value:function(){this.setState(function(e){return{modalSend:!e.modalSend}})}},{key:"render",value:function(){this.state.data;var e=this;return i.a.createElement(d.a,null,i.a.createElement(E.a,null,i.a.createElement(d.a,null,i.a.createElement(E.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(E.a,{xs:"0",md:"0"},i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(g.a,null,i.a.createElement("div",{class:"table-responsive"},i.a.createElement("table",{class:"table table-lg"},i.a.createElement("thead",{class:"thead"},i.a.createElement("tr",{class:"bg-primary"},i.a.createElement("th",null,"ID ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"As a... ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"I want to be able to... ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"So that...  ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Priority ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Estimation ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Sprint ",i.a.createElement("i",{class:"fa fa-sort"})," "),i.a.createElement("th",null,"Status ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,i.a.createElement("div",null,i.a.createElement(p.a,{color:"primary",size:"sm",className:"mt-3",onClick:e.toggleAdd},i.a.createElement("i",{class:"fa fa-plus-square"}),this.props.buttonLabel),i.a.createElement(b.a,{size:"lg",isOpen:e.state.modalAdd,toggle:e.toggleAdd,className:e.props.className},i.a.createElement(x.a,{toggle:e.toggleAdd},"UserStory"),i.a.createElement(y.a,null,i.a.createElement(f.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"text-input"},"As a...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"As a..."}))),i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"text-input"},"I want to be able to...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"I want to be able to..."}))),i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"textarea-input"},"So that...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content..."}))),i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"date-input"},"Status ")),i.a.createElement(E.a,{xs:"12",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"texttext-input",placeholder:"text",value:"to do"}))),i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"1"},i.a.createElement(w.a,{htmlFor:"text-input"},"Priority")),i.a.createElement(E.a,{xs:"12",md:"1"},i.a.createElement(u.a,{type:"text",name:"text-input",id:"text-input",rows:"9"})),i.a.createElement(E.a,{md:"2"}),i.a.createElement(E.a,{md:"1"},i.a.createElement(w.a,{htmlFor:"text-input"},"Estimation")),i.a.createElement(E.a,{xs:"12",md:"1"},i.a.createElement(u.a,{type:"text",name:"text-input",id:"text-input",rows:"9"})),i.a.createElement(E.a,{md:"2"}),i.a.createElement(E.a,{md:"1"},i.a.createElement(w.a,{htmlFor:"text-input"},"Sprint")),i.a.createElement(E.a,{xs:"12",md:"1"},i.a.createElement(u.a,{type:"text",name:"text-input",id:"text-input",rows:"9"}))))),i.a.createElement(v.a,null,i.a.createElement(p.a,{color:"primary",onClick:e.toggleAdd},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:e.toggleAdd},"Cancel"))))))),i.a.createElement("tbody",null,this.state.data.map(function(t,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,t.id),i.a.createElement("td",null,t.as),i.a.createElement("td",null,t.want),i.a.createElement("td",null,t.so),i.a.createElement("td",null,i.a.createElement("center",null,t.priority)),i.a.createElement("td",null,i.a.createElement("center",null,t.estimation)),i.a.createElement("td",null,i.a.createElement("center",null,t.sprint)),i.a.createElement("td",null,i.a.createElement("center",null,t.status)),i.a.createElement("td",null,i.a.createElement(p.a,{type:"submit",size:"sm",color:"success",onClick:e.toggleSend},i.a.createElement("i",{class:"fa fa-share-square"})),i.a.createElement(b.a,{size:"lg",isOpen:e.state.modalSend,toggle:e.toggleSend,className:e.props.className},i.a.createElement(x.a,{toggle:e.toggleSend},"Project"),i.a.createElement(y.a,null,i.a.createElement("div",{class:"card  bg-primary mb-3"},i.a.createElement("div",{class:"card-body"},i.a.createElement(f.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"date-input"},"Start ")),i.a.createElement(E.a,{xs:"3",md:"3"},i.a.createElement(u.a,{type:"time",id:"timeStart",name:"timeStart"})),i.a.createElement(E.a,{xs:"3",md:"3"},i.a.createElement(u.a,{type:"date",id:"dateStart",name:"dateStart"}))),i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"date-input"},"End ")),i.a.createElement(E.a,{xs:"3",md:"3"},i.a.createElement(u.a,{type:"time",id:"timeEnd",name:"timeEnd"})),i.a.createElement(E.a,{xs:"3",md:"3"},i.a.createElement(u.a,{type:"date",id:"dateEnd",name:"dateEnd"}))))))),i.a.createElement(v.a,null,i.a.createElement(p.a,{color:"primary",onClick:e.toggleSend},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:e.toggleSend},"Cancel"))),i.a.createElement(p.a,{color:"warning",size:"sm",onClick:e.toggleEdit},i.a.createElement("i",{class:"fa fa-edit"}),e.props.buttonLabel),i.a.createElement(b.a,{size:"lg",isOpen:e.state.modalEdit,toggle:e.toggleEdit,className:e.props.className},i.a.createElement(x.a,{toggle:e.toggleEdit},"ProductBacklog"),i.a.createElement(y.a,null,i.a.createElement(f.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"text-input"},"As a...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"As a...",value:"admin"}))),i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"text-input"},"I want to be able to...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"I want to be able to...",value:"See a list of all members and visitors"}))),i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"textarea-input"},"So that...")),i.a.createElement(E.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content...",value:"I can monitor site visits"}))),i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"3"},i.a.createElement(w.a,{htmlFor:"date-input"},"Status")),i.a.createElement(E.a,{xs:"12",md:"2"},i.a.createElement(u.a,{type:"select",name:"status",id:"status",size:"sm"},i.a.createElement("option",{value:"0"},"done"),i.a.createElement("option",{value:"1"},"to do"),i.a.createElement("option",{value:"2"},"inprogress")))),i.a.createElement(h.a,{row:!0},i.a.createElement(E.a,{md:"1"},i.a.createElement(w.a,{htmlFor:"text-input"},"Priority")),i.a.createElement(E.a,{xs:"12",md:"1"},i.a.createElement(u.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:"1"})),i.a.createElement(E.a,{md:"2"}),i.a.createElement(E.a,{md:"1"},i.a.createElement(w.a,{htmlFor:"text-input"},"Estimation")),i.a.createElement(E.a,{xs:"12",md:"1"},i.a.createElement(u.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:"2"})),i.a.createElement(E.a,{md:"2"}),i.a.createElement(E.a,{md:"1"},i.a.createElement(w.a,{htmlFor:"text-input"},"Sprint")),i.a.createElement(E.a,{xs:"12",md:"1"},i.a.createElement(u.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:"3"}))))),i.a.createElement(v.a,null,i.a.createElement(p.a,{color:"primary",onClick:e.toggleEdit},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:e.toggleEdit},"Cancel"))),i.a.createElement(p.a,{type:"submit",size:"sm",color:"danger"},i.a.createElement("i",{class:"fa fa-trash"}))))})))))))}}]),t}(s.Component);t.default=S},97:function(e,t,a){"use strict";var n=a(15),l=a(17),r=a(3),m=a.n(r),c=a(2),o=a.n(c),s=a(76),i=a.n(s),d=a(78),E={tag:d.m,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},u=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,c=e.tag,o=e.form,s=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),E=Object(d.i)(i()(t,r?"no-gutters":null,o?"form-row":"row"),a);return m.a.createElement(c,Object(n.a)({},s,{className:E}))};u.propTypes=E,u.defaultProps={tag:"div"},t.a=u}}]);
//# sourceMappingURL=42.de343a47.chunk.js.map