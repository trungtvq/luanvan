(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{863:function(e,t,a){"use strict";a.r(t);var l=a(8),n=a(14),r=a(15),c=a(18),m=a(16),s=a(17),o=a(0),i=a.n(o),E=a(108),d=a(117),u=a(127),h=a(118),f=a(864),p=a(232),b=a(166),g=a(217),x=a(114),y=a(126),v=a(241),P=a(167),C=a(111),k=a(209),w=a(121),j=a(619),A=a(837),D=[{name:"Date 1",expect:590,real:800,bug:210},{name:"Date 2",expect:868,real:967,bug:310},{name:"Date 3",expect:1397,real:1098,bug:410},{name:"Date 4",expect:1480,real:1200,bug:510},{name:"Date 5",expect:1520,real:1108,bug:610},{name:"Date 6",expect:1590,real:800,bug:110}],O=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(A.g,{width:"100%",height:400},i.a.createElement(A.d,{width:700,height:500,data:D,margin:{top:20,right:80,bottom:20,left:20}},i.a.createElement(A.c,{stroke:"#f5f5f5"}),i.a.createElement(A.i,{dataKey:"name",label:{value:"Date in spint",position:"insideBottomRight",offset:0}}),i.a.createElement(A.j,{label:{value:"Task",angle:-90,position:"insideLeft"}}),i.a.createElement(A.h,null),i.a.createElement(A.e,null),i.a.createElement(A.a,{type:"monotone",dataKey:"expect",fill:"#fbf313",stroke:"#fbf313"}),i.a.createElement(A.b,{dataKey:"real",barSize:20,fill:"#413ea0"}),i.a.createElement(A.f,{type:"monotone",dataKey:"bug",stroke:"#ff7300"})))}}]),t}(o.PureComponent),S=(j.CustomTooltips,function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggleAccordion=a.toggleAccordion.bind(Object(l.a)(Object(l.a)(a))),a.toggleAddProblem=a.toggleAddProblem.bind(Object(l.a)(Object(l.a)(a))),a.toggleComment=a.toggleComment.bind(Object(l.a)(Object(l.a)(a))),a.state={collapse:!1,accordion:[!0,!1,!1],custom:[!0,!1],status:"Closed",fadeIn:!0,timeout:300,modalAddProblem:!1,modalComment:!1},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"toggleAccordion",value:function(e){var t=this.state.accordion.map(function(t,a){return e===a&&!t});this.setState({accordion:t})}},{key:"toggleAddProblem",value:function(){this.setState(function(e){return{modalAddProblem:!e.modalAddProblem}})}},{key:"toggleComment",value:function(){this.setState(function(e){return{modalComment:!e.modalComment}})}},{key:"render",value:function(){return i.a.createElement(E.a,null,i.a.createElement(d.a,null,i.a.createElement("div",null,i.a.createElement("div",{className:"card border-danger mb-3"},i.a.createElement("div",{className:"card-header text-white bg-danger  mb-3"},i.a.createElement("strong",null,"Problem")),i.a.createElement("div",{className:"card-body"},i.a.createElement(E.a,null,i.a.createElement(d.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(d.a,{xs:"0",md:"0"},i.a.createElement(h.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(f.a,{responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Description ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Date"),i.a.createElement("th",null,"Comment"),i.a.createElement("th",null,i.a.createElement("div",null,i.a.createElement(h.a,{color:"primary",size:"sm",onClick:this.toggleAddProblem},i.a.createElement("i",{class:"fa fa-plus-circle"}),this.props.buttonLabel),i.a.createElement(p.a,{isOpen:this.state.modalAddProblem,toggle:this.toggleAddProblem,className:this.props.className},i.a.createElement(b.a,{toggle:this.toggleAddProblem},"Problem"),i.a.createElement(g.a,null,i.a.createElement(x.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(v.a,{htmlFor:"text-input"},"Title")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Title"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(v.a,{htmlFor:"text-input"},"Description")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"textarea",id:"text-input",name:"text-input",placeholder:"Description"}))),i.a.createElement(y.a,{row:!0},i.a.createElement(d.a,{md:"3"},i.a.createElement(v.a,{htmlFor:"textarea-input"},"Comment")),i.a.createElement(d.a,{xs:"12",md:"9"},i.a.createElement(u.a,{type:"text",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Comment"}))))),i.a.createElement(P.a,null,i.a.createElement(h.a,{color:"primary",onClick:this.toggleAddProblem},"Submit")," ",i.a.createElement(h.a,{color:"secondary",onClick:this.toggleAddProblem},"Cancel"))))))),i.a.createElement("tbody",null))))),i.a.createElement(C.a,null,i.a.createElement(k.a,null,"Sprint burndown"),i.a.createElement(w.a,null,i.a.createElement(O,null))),i.a.createElement("div",{class:"card border-success mb-3"},i.a.createElement("div",{class:"card-header text-white bg-success mb-3"},i.a.createElement("strong",null,"Task"),i.a.createElement("small",null," done")),i.a.createElement("div",{class:"card-body"},i.a.createElement(E.a,null,i.a.createElement(d.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(d.a,{xs:"0",md:"0"},i.a.createElement(h.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(f.a,{responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Sprint ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"IdBacklog ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Description ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Priority ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Start day ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Deadline ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Assignee "),i.a.createElement("th",null,"Comment "),i.a.createElement("th",null,"Progress"))),i.a.createElement("tbody",null)))),i.a.createElement("div",{class:"card border-warning  mb-3"},i.a.createElement("div",{class:"card-header text-white bg-warning  mb-3"},i.a.createElement("strong",null,"Task"),i.a.createElement("small",null," inprogress")),i.a.createElement("div",{class:"card-body"},i.a.createElement(E.a,null,i.a.createElement(d.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(d.a,{xs:"0",md:"0"},i.a.createElement(h.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(f.a,{responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Sprint ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"IdBacklog ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Description ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Priority ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Start day ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Deadline ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Assignee"),i.a.createElement("th",null,"Comment"),i.a.createElement("th",null,"Progress"))),i.a.createElement("tbody",null)))),i.a.createElement("div",{class:"card border-primary  mb-3"},i.a.createElement("div",{class:"card-header text-white bg-primary  mb-3"},i.a.createElement("strong",null,"Project"),i.a.createElement("small",null," to do")),i.a.createElement("div",{class:"card-body"},i.a.createElement(E.a,null,i.a.createElement(d.a,{xs:"2",md:"2"},i.a.createElement(u.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),i.a.createElement(d.a,{xs:"0",md:"0"},i.a.createElement(h.a,{type:"submit",size:"sm",color:"success"},i.a.createElement("i",{class:"fa fa-search"})))),i.a.createElement(f.a,{responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Sprint ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"IdBacklog ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Description ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Priority ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Start day ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Deadline ",i.a.createElement("i",{class:"fa fa-sort"})),i.a.createElement("th",null,"Assignee"),i.a.createElement("th",null,"Comment"),i.a.createElement("th",null,"Progress"))),i.a.createElement("tbody",null))))))}}]),t}(o.Component));t.default=S}}]);
//# sourceMappingURL=47.517d511d.chunk.js.map