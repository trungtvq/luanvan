(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{676:function(e,t,a){"use strict";a.r(t);var l=a(21),n=a(30),r=a(31),c=a(33),m=a(32),o=a(34),s=a(3),i=a.n(s),E=a(88),d=a(86),u=a(100),p=a(91),h=a(155),g=a(691),f=a(669),b=a(670),x=a(113),y=a(132),C=a(114),v=a(671),k=a(92),w=a(104),P=a(99),N=a(655),S=a(188),D=a(461),T=a(651),z=[{name:"Date 1",expect:590,real:800,bug:210},{name:"Date 2",expect:868,real:967,bug:310},{name:"Date 3",expect:1397,real:1098,bug:410},{name:"Date 4",expect:1480,real:1200,bug:510},{name:"Date 5",expect:1520,real:1108,bug:610},{name:"Date 6",expect:1590,real:800,bug:110}],O=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(T.g,{width:"100%",height:400},i.a.createElement(T.d,{width:700,height:500,data:z,margin:{top:20,right:80,bottom:20,left:20}},i.a.createElement(T.c,{stroke:"#f5f5f5"}),i.a.createElement(T.i,{dataKey:"name",label:{value:"Date in spint",position:"insideBottomRight",offset:0}}),i.a.createElement(T.j,{label:{value:"Task",angle:-90,position:"insideLeft"}}),i.a.createElement(T.h,null),i.a.createElement(T.e,null),i.a.createElement(T.a,{type:"monotone",dataKey:"expect",fill:"#fbf313",stroke:"#fbf313"}),i.a.createElement(T.b,{dataKey:"real",barSize:20,fill:"#413ea0"}),i.a.createElement(T.f,{type:"monotone",dataKey:"bug",stroke:"#ff7300"})))}}]),t}(s.PureComponent),j=(D.CustomTooltips,function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggleAccordion=a.toggleAccordion.bind(Object(l.a)(Object(l.a)(a))),a.toggleAddProblem=a.toggleAddProblem.bind(Object(l.a)(Object(l.a)(a))),a.toggleComment=a.toggleComment.bind(Object(l.a)(Object(l.a)(a))),a.state={collapse:!1,accordion:[!0,!1,!1],custom:[!0,!1],status:"Closed",fadeIn:!0,timeout:300,modalAddProblem:!1,modalComment:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"toggleAccordion",value:function(e){var t=this.state.accordion.map(function(t,a){return e===a&&!t});this.setState({accordion:t})}},{key:"toggleAddProblem",value:function(){this.setState(function(e){return{modalAddProblem:!e.modalAddProblem}})}},{key:"toggleComment",value:function(){this.setState(function(e){return{modalComment:!e.modalComment}})}},{key:"render",value:function(){return i.a.createElement(E.a,null,i.a.createElement(d.a,null,i.a.createElement("div",null,i.a.createElement("div",{class:"card border-danger mb-3"},i.a.createElement("div",{class:"card-header text-white bg-danger  mb-3"},i.a.createElement("strong",null,"Problem")),i.a.createElement("div",{class:"card-body"},i.a.createElement(E.a,null,i.a.createElement(d.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(d.a,{xs:"0",md:"0"},i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(h.a,{responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Description ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Date"),i.a.createElement("th",null,"Comment"),i.a.createElement("th",null,i.a.createElement("div",null,i.a.createElement(p.a,{color:"primary",size:"sm",onClick:this.toggleAddProblem},i.a.createElement("i",{class:"fa fa-plus-circle"}),this.props.buttonLabel),i.a.createElement(g.a,{isOpen:this.state.modalAddProblem,toggle:this.toggleAddProblem,className:this.props.className},i.a.createElement(f.a,{toggle:this.toggleAddProblem},"Problem"),i.a.createElement(b.a,null,i.a.createElement(x.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"text-input"},"Title")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Title"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"text-input"},"Description")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"textarea",id:"text-input",name:"text-input",placeholder:"Description"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"textarea-input"},"Comment")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Comment"}))))),i.a.createElement(v.a,null,i.a.createElement(p.a,{color:"primary",onClick:this.toggleAddProblem},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:this.toggleAddProblem},"Cancel"))))))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Login"),i.a.createElement("td",null,"Server connect fail"),i.a.createElement("td",null,"20/3/2019"),i.a.createElement("td",null,"9h ago, i can't connect server"),i.a.createElement("td",null,i.a.createElement(p.a,{color:"warning",size:"sm",onClick:this.toggleComment},i.a.createElement("i",{class:"fa fa-edit"}),this.props.buttonLabel),i.a.createElement(g.a,{isOpen:this.state.modalComment,toggle:this.toggleComment,className:this.props.className},i.a.createElement(f.a,{toggle:this.toggleComment},"Problem"),i.a.createElement(b.a,null,i.a.createElement(x.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"text-input"},"Title")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Title",value:"Login"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"text-input"},"Description")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"textarea",id:"text-input",name:"text-input",placeholder:"Description",value:"Server connect fail"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"textarea-input"},"Comment")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Comment"}))))),i.a.createElement(v.a,null,i.a.createElement(p.a,{color:"primary",onClick:this.toggleComment},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:this.toggleComment},"Cancel"))),i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-check"})))),i.a.createElement("tr",null,i.a.createElement("td",null,"Login"),i.a.createElement("td",null,"Do i need to send code in order to verify email"),i.a.createElement("td",null,"19/3/2019"),i.a.createElement("td",null),i.a.createElement("td",null,i.a.createElement(p.a,{color:"warning",size:"sm",onClick:this.toggleComment},i.a.createElement("i",{class:"fa fa-edit"}),this.props.buttonLabel),i.a.createElement(g.a,{isOpen:this.state.modalComment,toggle:this.toggleComment,className:this.props.className},i.a.createElement(f.a,{toggle:this.toggleComment},"Problem"),i.a.createElement(b.a,null,i.a.createElement(x.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"text-input"},"Title")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Title",value:"Login"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"text-input"},"Description")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"textarea",id:"text-input",name:"text-input",placeholder:"Description",value:"Server connect fail"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"textarea-input"},"Comment")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Comment"}))))),i.a.createElement(v.a,null,i.a.createElement(p.a,{color:"primary",onClick:this.toggleComment},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:this.toggleComment},"Cancel"))),i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-check"})))),i.a.createElement("tr",null,i.a.createElement("td",null,"Sign up"),i.a.createElement("td",null,"Password have suggest"),i.a.createElement("td",null,"21/3/2019"),i.a.createElement("td",null,"Suggest password atleast 8 characters"),i.a.createElement("td",null,i.a.createElement(p.a,{color:"warning",size:"sm",onClick:this.toggleComment},i.a.createElement("i",{class:"fa fa-edit"}),this.props.buttonLabel),i.a.createElement(g.a,{isOpen:this.state.modalComment,toggle:this.toggleComment,className:this.props.className},i.a.createElement(f.a,{toggle:this.toggleComment},"Problem"),i.a.createElement(b.a,null,i.a.createElement(x.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"text-input"},"Title")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Title",value:"Login"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"text-input"},"Description")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"textarea",id:"text-input",name:"text-input",placeholder:"Description",value:"Server connect fail"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(C.a,{htmlFor:"textarea-input"},"Comment")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Comment"}))))),i.a.createElement(v.a,null,i.a.createElement(p.a,{color:"primary",onClick:this.toggleComment},"Submit")," ",i.a.createElement(p.a,{color:"secondary",onClick:this.toggleComment},"Cancel"))),i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-check"}))))))))),i.a.createElement(k.a,null,i.a.createElement(w.a,null,"Sprint burndown"),i.a.createElement(P.a,null,i.a.createElement(O,null))),i.a.createElement("div",{class:"card border-success mb-3"},i.a.createElement("div",{class:"card-header text-white bg-success mb-3"},i.a.createElement("strong",null,"Task"),i.a.createElement("small",null," done")),i.a.createElement("div",{class:"card-body"},i.a.createElement(E.a,null,i.a.createElement(d.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(d.a,{xs:"0",md:"0"},i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(h.a,{responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Sprint ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"IdBacklog ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Description ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Priority ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Start day ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Deadline ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Assignee "),i.a.createElement("th",null,"Comment "),i.a.createElement("th",null,"Progress"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Login b\u1eb1ng Fb"),i.a.createElement("td",null,"2"),i.a.createElement("td",null,"6"),i.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n fb \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),i.a.createElement("td",null,i.a.createElement(N.a,{color:"danger"},"High")),i.a.createElement("td",null,"20/4/2019"),i.a.createElement("td",null,"24/4/2019"),i.a.createElement("td",null,"H\xf9ng"),i.a.createElement("td",null),i.a.createElement("td",null,i.a.createElement(S.a,{value:100}),i.a.createElement("div",{className:"text-center"},"100%"))))))),i.a.createElement("div",{class:"card border-warning  mb-3"},i.a.createElement("div",{class:"card-header text-white bg-warning  mb-3"},i.a.createElement("strong",null,"Task"),i.a.createElement("small",null," inprogress")),i.a.createElement("div",{class:"card-body"},i.a.createElement(E.a,null,i.a.createElement(d.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(d.a,{xs:"0",md:"0"},i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(h.a,{responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Sprint ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"IdBacklog ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Description ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Priority ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Start day ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Deadline ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Assignee"),i.a.createElement("th",null,"Comment"),i.a.createElement("th",null,"Progress"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Login b\u1eb1ng email"),i.a.createElement("td",null,"2"),i.a.createElement("td",null,"7"),i.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n email \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),i.a.createElement("td",null,i.a.createElement(N.a,{color:"danger"},"High")),i.a.createElement("td",null,"20/4/2019"),i.a.createElement("td",null,"23/4/2019"),i.a.createElement("td",null,"Nh\xe2n"),i.a.createElement("td",null,"C\xf3 c\u1ea7n x\xe1c th\u1ef1c email kh\xf4ng?"),i.a.createElement("td",null,i.a.createElement(S.a,{value:85}),i.a.createElement("div",{className:"text-center"},"85%"))),i.a.createElement("tr",null,i.a.createElement("td",null,"Login b\u1eb1ng t\xe0i kho\u1ea3n"),i.a.createElement("td",null,"2"),i.a.createElement("td",null,"7"),i.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng t\u1ea1o t\xe0i kho\u1ea3n v\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n n\xe0y \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"),i.a.createElement("td",null,i.a.createElement(N.a,{color:"warning"},"Medium")),i.a.createElement("td",null,"21/4/2019"),i.a.createElement("td",null,"25/4/2019"),i.a.createElement("td",null,"T\xe2m"),i.a.createElement("td",null),i.a.createElement("td",null,i.a.createElement(S.a,{value:10}),i.a.createElement("div",{className:"text-center"},"10%"))))))),i.a.createElement("div",{class:"card border-primary  mb-3"},i.a.createElement("div",{class:"card-header text-white bg-primary  mb-3"},i.a.createElement("strong",null,"Project"),i.a.createElement("small",null," to do")),i.a.createElement("div",{class:"card-body"},i.a.createElement(E.a,null,i.a.createElement(d.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(d.a,{xs:"0",md:"0"},i.a.createElement(p.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(h.a,{responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Sprint ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"IdBacklog ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Description ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Priority ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Start day ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Deadline ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Assignee"),i.a.createElement("th",null,"Comment"),i.a.createElement("th",null,"Progress"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"\u0110\u1ed5i m\u1eadt kh\u1ea9u"),i.a.createElement("td",null,"2"),i.a.createElement("td",null,"7"),i.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng \u0111\u1ed5i m\u1eadt kh\u1ea9u c\u1ee7a t\xe0i kho\u1ea3n m\xe0 m\xecnh t\u1ea1o"),i.a.createElement("td",null,i.a.createElement(N.a,{color:"primary"},"Low")),i.a.createElement("td",null,"20/4/2019"),i.a.createElement("td",null,"24/4/2019"),i.a.createElement("td",null),i.a.createElement("td",null,"C\xf3 c\u1ea7n g\u1eedi m\xe0 t\u1edbi email li\xean k\u1ebft \u0111\u1ec3 x\xe1c nh\u1eadn kh\xf4ng?"),i.a.createElement("td",null,i.a.createElement(S.a,{value:0}),i.a.createElement("div",{className:"text-center"},"0%"))),i.a.createElement("tr",null,i.a.createElement("td",null,"Thay \u0111\u1ed5i avatar"),i.a.createElement("td",null,"2"),i.a.createElement("td",null,"8"),i.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng thay \u0111\u1ed5i avatar hi\u1ec3n th\u1ecb \u1edf giao di\u1ec7n ch\xednh"),i.a.createElement("td",null,i.a.createElement(N.a,{color:"primary"},"Low")),i.a.createElement("td",null,"20/4/2019"),i.a.createElement("td",null,"24/4/2019"),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null,i.a.createElement(S.a,{value:0}),i.a.createElement("div",{className:"text-center"},"0%"))),i.a.createElement("tr",null,i.a.createElement("td",null,"Thanh to\xe1n b\u1eb1ng paypal"),i.a.createElement("td",null,"2"),i.a.createElement("td",null,"8"),i.a.createElement("td",null,"Ng\u01b0\u1eddi d\xf9ng s\u1eed d\u1ee5ng paypal \u0111\u1ec3 tr\u1ea3 ph\xed"),i.a.createElement("td",null,i.a.createElement(N.a,{color:"primary"},"Low")),i.a.createElement("td",null,"20/4/2019"),i.a.createElement("td",null,"24/4/2019"),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null,i.a.createElement(S.a,{value:0}),i.a.createElement("div",{className:"text-center"},"0%")))))))))}}]),t}(s.Component));t.default=j}}]);
//# sourceMappingURL=46.c26f5b99.chunk.js.map