(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{971:function(t,a,e){"use strict";e.r(a);var n=e(13),l=e(14),i=e(16),o=e(15),d=e(17),r=e(5),c=e(1),s=e.n(c),h=e(106),g=e(180),u=e(908),b=e.n(u),m=function(t){function a(t){var e;return Object(n.a)(this,a),(e=Object(i.a)(this,Object(o.a)(a).call(this,t))).handleDragEnd=function(t,a,e){console.log("drag ended"),console.log("cardId: ".concat(t)),console.log("sourceLaneId: ".concat(a)),console.log("targetLaneId: ".concat(e))},e.toggle=e.toggle.bind(Object(r.a)(Object(r.a)(e))),e.state={collapse:!0,fadeIn:!0,boardData:{lanes:[{id:"To do",title:"Planned Tasks",label:"1",style:{width:350,color:"blue"},cards:[{id:"1",title:"Login b\u1eb1ng Fb",label:"High",cardStyle:{width:340,maxWidth:340,margin:"auto",marginBottom:5},description:"Ng\u01b0\u1eddi d\xf9ng kh\xf4ng c\u1ea7n t\u1ea1o t\xe0i kho\u1ea3n m\xe0 s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n fb \u0111\u1ec3 \u0111\u0103ng nh\u1eadp\t"}]},{id:"InProgress",title:"Work In Progress",label:"1",style:{width:350,color:"orange  "},cards:[{id:"2",title:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",label:"Low",cardStyle:{width:340,maxWidth:340,margin:"auto",marginBottom:5},description:"Ng\u01b0\u1eddi d\xf9ng \u0111\u1ed5i m\u1eadt kh\u1ea9u c\u1ee7a t\xe0i kho\u1ea3n m\xe0 m\xecnh t\u1ea1o"}]},{id:"Done",title:"DONE",style:{width:350,color:"green"},label:"1",cards:[{id:"3",title:"Thay \u0111\u1ed5i avatar",label:"Medium",cardStyle:{width:340,maxWidth:340,margin:"auto",marginBottom:5},description:"Ng\u01b0\u1eddi d\xf9ng thay \u0111\u1ed5i avatar hi\u1ec3n th\u1ecb \u1edf giao di\u1ec7n ch\xednh"}]}]}},e}return Object(d.a)(a,t),Object(l.a)(a,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h.a,null,s.a.createElement(g.a,null,s.a.createElement(b.a,{collapsibleLanes:!0,onCardAdd:this.handleCardAdd,data:this.state.boardData,draggable:!0,onDataChange:this.shouldReceiveNewData,eventBusHandle:this.setEventBus,handleDragStart:this.handleDragStart,handleDragEnd:this.handleDragEnd}))))}}]),a}(c.Component);a.default=m}}]);
//# sourceMappingURL=48.6afc67e2.chunk.js.map