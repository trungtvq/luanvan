(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,t,a){"use strict";var l=a(15),i=a(18),s=a(3),o=a.n(s),r=a(2),d=a.n(r),n=a(89),c=a.n(n),u=a(91),h={tag:u.m,noGutters:d.a.bool,className:d.a.string,cssModule:d.a.object,form:d.a.bool},y=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,r=e.tag,d=e.form,n=Object(i.a)(e,["className","cssModule","noGutters","tag","form"]),h=Object(u.i)(c()(t,s?"no-gutters":null,d?"form-row":"row"),a);return o.a.createElement(r,Object(l.a)({},n,{className:h}))};y.propTypes=h,y.defaultProps={tag:"div"},t.a=y},118:function(e,t,a){"use strict";var l=a(15),i=a(18),s=a(3),o=a.n(s),r=a(2),d=a.n(r),n=a(89),c=a.n(n),u=a(91),h={tag:u.m,inverse:d.a.bool,color:d.a.string,block:Object(u.e)(d.a.bool,'Please use the props "body"'),body:d.a.bool,outline:d.a.bool,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},y=function(e){var t=e.className,a=e.cssModule,s=e.color,r=e.block,d=e.body,n=e.inverse,h=e.outline,y=e.tag,p=e.innerRef,g=Object(i.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),S=Object(u.i)(c()(t,"card",!!n&&"text-white",!(!r&&!d)&&"card-body",!!s&&(h?"border":"bg")+"-"+s),a);return o.a.createElement(y,Object(l.a)({},g,{className:S,ref:p}))};y.propTypes=h,y.defaultProps={tag:"div"},t.a=y},137:function(e,t,a){"use strict";var l=a(15),i=a(18),s=a(3),o=a.n(s),r=a(2),d=a.n(r),n=a(89),c=a.n(n),u=a(91),h={tag:u.m,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},y=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,r=e.tag,d=Object(i.a)(e,["className","cssModule","innerRef","tag"]),n=Object(u.i)(c()(t,"card-body"),a);return o.a.createElement(r,Object(l.a)({},d,{className:n,ref:s}))};y.propTypes=h,y.defaultProps={tag:"div"},t.a=y},161:function(e,t,a){"use strict";var l=a(15),i=a(18),s=a(3),o=a.n(s),r=a(2),d=a.n(r),n=a(89),c=a.n(n),u=a(91),h={tag:u.m,className:d.a.string,cssModule:d.a.object},y=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(i.a)(e,["className","cssModule","tag"]),d=Object(u.i)(c()(t,"card-footer"),a);return o.a.createElement(s,Object(l.a)({},r,{className:d}))};y.propTypes=h,y.defaultProps={tag:"div"},t.a=y},289:function(e,t,a){"use strict";function l(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return l})},321:function(e,t,a){"use strict";a.r(t);var l=a(133),i=a(289),s=a(24),o=a(25),r=a(27),d=a(26),n=a(28),c=a(29),u=a(3),h=a.n(u),y=a(105),p=a(845),g=a(822),S=a(139),m=a(118),f=a(140),D=a(821),R=a(245),b=a(246),T=a(173),E=a(159),q=a(823),k=a(137),w=a(161),C={};C.dailyschedule=a(619);var M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).toggleActionStatus=function(){a.setState(function(e){return{modalActionStatus:!e.modalActionStatus}})},a.onTextboxChangeScheduleIdUpdate=function(e){a.setState({scheduleIdUpdate:e.target.value})},a.onTextboxChangeTitleUpdate=function(e){a.setState({titleUpdate:e.target.value})},a.onTextboxChangeTaskUpdate=function(e){a.setState({taskUpdate:e.target.value})},a.onTextboxChangeTimeStartUpdate=function(e){a.setState({timeStartUpdate:e.target.value})},a.onTextboxChangeDateStartUpdate=function(e){a.setState({dateStartUpdate:e.target.value})},a.onTextboxChangeStatusUpdate=function(e){a.setState({statusUpdate:e.target.value})},a.onGetUpdate=function(e,t,l,i,s,o){a.setState({scheduleIdUpdate:e,titleUpdate:t,taskUpdate:l,timeStartUpdate:i,dateStartUpdate:s,statusUpdate:o}),console.log("idParam: -------"+e),console.log("id: -------"+a.state.scheduleIdUpdate)},a.onTextboxChangeScheduleIdDelete=function(e){a.setState({scheduleIdDelete:e}),console.log("first==="+a.state.scheduleIdDelete)},a.handleReset=function(e){console.log("vao reset"),a.setState({title:""})},a.handleAdd=function(){var e=new C.dailyschedule.DailyscheduleClient("http://overlead.co:8084");console.log(e);var t=new C.dailyschedule.AddNewDailyScheduleReq;t.setRequesterid(a.state.requesterId),t.setProjectid(a.state.projectId),t.setTitle(a.state.title),t.setTask(a.state.task),t.setTime(a.state.timeStart+" "+a.state.dateStart),t.setSchedulestatus("to do"),t.setCookie(a.state.cookie);var l=e.addNewDailySchedule(t,{},function(e,t){if(console.log("AddNewDailyScheduleReq----------connect"),e)console.log(e),console.log("error");else{console.log("response--------------------------"),console.log(t),console.log(t.getStatus()),"SUCCESS"==t.getStatus()?(a.setState(function(e){return{data:[].concat(Object(i.a)(e.data),[{id:t.getId(),title:a.state.title,task:a.state.task,timeStart:a.state.timeStart,dateStart:a.state.dateStart}])}}),a.setState({title:"",task:"",timeStart:"",dateStart:"",modalActionStatus:!0,actionStatus:"SUCCESS"})):a.setState({modalActionStatus:!0,actionStatus:"FALSE"});t[0]}});console.log(l)},a.handleUpdate=function(){var e=new C.dailyschedule.DailyscheduleClient("https://trungcs.com");console.log(e);var t=new C.dailyschedule.UpdateDailyScheduleReq;t.setRequesterid(a.state.requesterId),t.setProjectid(a.state.projectId),t.setScheduleid(a.state.scheduleIdUpdate),t.setTitle(a.state.titleUpdate),t.setTask(a.state.taskUpdate),t.setTime(a.state.timeStartUpdate+" "+a.state.dateStartUpdate),t.setSchedulestatus(a.state.statusUpdate),t.setCookie(a.state.cookie);var i=e.updateDailySchedule(t,{},function(e,t){if(console.log("UpdateDailyScheduleReqconnect"),e)if(console.log("response"),console.log(t),"SUCCESS"==t.getStatus()){a.setState({actionStatus:"SUCCESS"}),a.setState(function(e){return{modalEdit:!e.modalEdit,modalActionStatus:!e.modalActionStatus}});var i=a.state.data.map(function(e){return e.id===a.state.scheduleIdUpdate?Object(l.a)({},e,{title:a.state.titleUpdate,task:a.state.taskUpdate,timeStart:a.state.timeStartUpdate,dateStart:a.state.dateStartUpdate,status:a.state.statusUpdate}):e});a.setState({data:i})}else a.setState({actionStatus:"FALSE"}),a.setState(function(e){return{modalEdit:!e.modalEdit,modalActionStatus:!e.modalActionStatus}});else console.log(e),console.log("error")});console.log(i),console.log("ra daily")},a.handleDelete=function(e){console.log("v\xe0o");var t=new C.dailyschedule.DailyscheduleClient("https://trungcs.com");console.log(t),console.log("vao daily");var l=new C.dailyschedule.DeleteDailyScheduleReq;l.setRequesterid(a.state.requesterId),l.setProjectid(a.state.projectId),l.setScheduleid(a.state.scheduleIdDelete),l.setCookie(a.state.cookie);t.deleteDailySchedule(l,{},function(t,l){console.log("connect"),t?(console.log(t),console.log("error")):(console.log("response"),console.log(l),"SUCCESS"==l.getStatus()?(a.setState({actionStatus:"SUCCESS",modalActionStatus:!0}),a.setState(function(t){return{data:Object(i.a)(t.data.filter(function(t){return t.id!==e}))}})):(a.setState({actionStatus:"FALSE"}),a.setState(function(e){return{modalActionStatus:!e.modalActionStatus}})))})},a.resetform=function(){a.setState(a.baseState),console.log("v\xe0o reset")},a.toggleEdit=a.toggleEdit.bind(Object(c.a)(Object(c.a)(a))),a.onTextboxChangeTitle=a.onTextboxChangeTitle.bind(Object(c.a)(Object(c.a)(a))),a.onTextboxChangeTask=a.onTextboxChangeTask.bind(Object(c.a)(Object(c.a)(a))),a.onTextboxChangeTime=a.onTextboxChangeTime.bind(Object(c.a)(Object(c.a)(a))),a.onTextboxChangeStatus=a.onTextboxChangeStatus.bind(Object(c.a)(Object(c.a)(a))),a.onTextboxChangeTimeStart=a.onTextboxChangeTimeStart.bind(Object(c.a)(Object(c.a)(a))),a.onTextboxChangeDateStart=a.onTextboxChangeDateStart.bind(Object(c.a)(Object(c.a)(a))),a.state={data:[{id:"1",title:"Login1",task:"Login b\u1eb1ng fb1",timeStart:"02:20",dateStart:"2019-05-05",status:""},{id:"2",title:"Login2",task:"Login b\u1eb1ng fb2",timeStart:"02:20",dateStart:"2019-05-05",status:""},{id:"3",title:"Login3",task:"Login b\u1eb1ng fb3",timeStart:"02:20",dateStart:"2019-05-05",status:""},{id:"4",title:"Login",task:"Login b\u1eb1ng fb4",timeStart:"02:20",dateStart:"2019-05-05",status:""}],modalEdit:!1,modalActionStatus:!1,requesterId:"",projectId:"",cookie:"",actionStatus:"",title:"",task:"",timeStart:"",dateStart:"",status:"",scheduleIdUpdate:"",titleUpdate:"",taskUpdate:"",timeStartUpdate:"",dateStartUpdate:"",statusUpdate:"",scheduleIdDelete:""},a}return Object(n.a)(t,e),Object(o.a)(t,[{key:"toggleEdit",value:function(){this.setState(function(e){return{modalEdit:!e.modalEdit}})}},{key:"onTextboxChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onTextboxChangeTask",value:function(e){this.setState({task:e.target.value})}},{key:"onTextboxChangeTime",value:function(e){this.setState({time:e.target.value})}},{key:"onTextboxChangeStatus",value:function(e){this.setState({status:e.target.value})}},{key:"onTextboxChangeTimeStart",value:function(e){this.setState({timeStart:e.target.value})}},{key:"onTextboxChangeDateStart",value:function(e){this.setState({dateStart:e.target.value})}},{key:"render",value:function(){var e=this.state,t=(e.data,e.modalEdit,e.title),a=e.task,l=(e.status,e.timeStart),i=e.dateStart,s=this;return h.a.createElement(y.a,null,h.a.createElement(p.a,{size:"sm",isOpen:s.state.modalActionStatus,toggle:s.toggleActionStatus,className:s.props.className},h.a.createElement(g.a,null,h.a.createElement("center",null,h.a.createElement("h4",null,s.state.actionStatus)))),h.a.createElement(S.a,null,h.a.createElement(m.a,null,h.a.createElement("table",{class:"table table-lg"},h.a.createElement("thead",{class:"thead"},h.a.createElement("tr",{class:"bg-primary"},h.a.createElement("th",null,"Title"),h.a.createElement("th",null,"Task"),h.a.createElement("th",null,"Time"),h.a.createElement("th",null,"Status"),h.a.createElement("th",null," "))),h.a.createElement("tbody",null,this.state.data.map(function(e,t){return h.a.createElement("tr",{key:t},h.a.createElement("td",null,e.title),h.a.createElement("td",null,e.task),h.a.createElement("td",null,e.timeStart," ",e.dateStart),h.a.createElement("td",null,e.status),h.a.createElement("td",null,h.a.createElement(f.a,{color:"warning",size:"sm",onClick:function(t){s.toggleEdit(),s.onGetUpdate(e.id,e.title,e.task,e.timeStart,e.dateStart,e.status)}},h.a.createElement("i",{class:"fa fa-edit"}),s.props.buttonLabel),h.a.createElement(p.a,{size:"lg",isOpen:s.state.modalEdit,toggle:s.toggleEdit,className:s.props.className},h.a.createElement(D.a,{toggle:s.toggleEdit},"Daily schedule"),h.a.createElement(g.a,null,h.a.createElement(R.a,{className:"form-horizontal"},h.a.createElement(b.a,{row:!0},h.a.createElement(S.a,{md:"3"},h.a.createElement(T.a,{htmlFor:"text-input"},"Title")),h.a.createElement(S.a,{xs:"12",md:"9"},h.a.createElement(E.a,{type:"text",id:"Title",name:"Title",placeholder:"Title",value:s.state.titleUpdate,onChange:s.onTextboxChangeTitleUpdate}))),h.a.createElement(b.a,{row:!0},h.a.createElement(S.a,{md:"3"},h.a.createElement(T.a,{htmlFor:"textarea-input"},"Task")),h.a.createElement(S.a,{xs:"12",md:"9"},h.a.createElement(E.a,{type:"textarea",name:"Task",id:"Task",rows:"9",placeholder:"Task...",value:s.state.taskUpdate,onChange:s.onTextboxChangeTaskUpdate}))),h.a.createElement(b.a,{row:!0},h.a.createElement(S.a,{md:"3"},h.a.createElement(T.a,{htmlFor:"date-input"},"Start ")),h.a.createElement(S.a,{xs:"3",md:"3"},h.a.createElement(E.a,{type:"time",id:"timeStart",name:"timeStart",value:s.state.timeStartUpdate,onChange:s.onTextboxChangeTimeStartUpdate})),h.a.createElement(S.a,{xs:"3",md:"3"},h.a.createElement(E.a,{type:"date",id:"dateStart",name:"dateStart",value:s.state.dateStartUpdate,onChange:s.onTextboxChangeDateStartUpdate}))),h.a.createElement(b.a,{row:!0},h.a.createElement(S.a,{md:"3"},h.a.createElement(T.a,null,"Status")),h.a.createElement(S.a,{xs:"12",md:"9"},h.a.createElement(E.a,{type:"text",id:"status",name:"status",value:s.state.statusUpdate,onChange:s.onTextboxChangeStatusUpdate}))))),h.a.createElement(q.a,null,h.a.createElement(f.a,{color:"primary",onClick:s.handleUpdate},"Submit")," ",h.a.createElement(f.a,{color:"secondary",onClick:s.toggleEdit},"Cancel"))),h.a.createElement(f.a,{color:"danger",size:"sm"},h.a.createElement("i",{class:"fa fa-trash",onClick:function(t){s.handleDelete(e.id)}}))))})))),h.a.createElement(m.a,null,h.a.createElement(k.a,null,h.a.createElement(R.a,{className:"form-horizontal"},h.a.createElement(b.a,{row:!0},h.a.createElement(S.a,{md:"3"},h.a.createElement(T.a,{htmlFor:"text-input"},"Title")),h.a.createElement(S.a,{xs:"12",md:"9"},h.a.createElement(E.a,{type:"text",id:"Title",name:"Title",placeholder:"Title",value:t,onChange:s.onTextboxChangeTitle}))),h.a.createElement(b.a,{row:!0},h.a.createElement(S.a,{md:"3"},h.a.createElement(T.a,{htmlFor:"textarea-input"},"Task")),h.a.createElement(S.a,{xs:"12",md:"9"},h.a.createElement(E.a,{type:"textarea",name:"Task",id:"Task",rows:"9",placeholder:"Task...",value:a,onChange:s.onTextboxChangeTask}))),h.a.createElement(b.a,{row:!0},h.a.createElement(S.a,{md:"3"},h.a.createElement(T.a,{htmlFor:"date-input"},"Time ")),h.a.createElement(S.a,{xs:"3",md:"3"},h.a.createElement(E.a,{type:"time",id:"timeStart",name:"timeStart",value:l,onChange:s.onTextboxChangeTimeStart})),h.a.createElement(S.a,{xs:"3",md:"3"},h.a.createElement(E.a,{type:"date",id:"dateStart",name:"dateStart",value:i,onChange:s.onTextboxChangeDateStart}))),h.a.createElement(b.a,{row:!0},h.a.createElement(S.a,{md:"3"},h.a.createElement(T.a,null,"Status")),h.a.createElement(S.a,{xs:"12",md:"9"},h.a.createElement("p",{className:"form-control-static"},"To do"))))),h.a.createElement(w.a,null,h.a.createElement(f.a,{type:"submit",size:"sm",color:"primary",onClick:s.handleAdd},h.a.createElement("i",{className:"fa fa-dot-circle-o"})," Add")))))}}]),t}(u.Component);t.default=M},619:function(e,t,a){var l={};l.web=a(42);var i={};i.dailyschedule=a(620),i.dailyschedule.DailyscheduleClient=function(e,t,a){a||(a={}),a.format="text",this.client_=new l.web.GrpcWebClientBase(a),this.hostname_=e,this.credentials_=t,this.options_=a},i.dailyschedule.DailyschedulePromiseClient=function(e,t,a){a||(a={}),a.format="text",this.client_=new l.web.GrpcWebClientBase(a),this.hostname_=e,this.credentials_=t,this.options_=a};var s=new l.web.AbstractClientBase.MethodInfo(i.dailyschedule.DailyScheduleRes,function(e){return e.serializeBinary()},i.dailyschedule.DailyScheduleRes.deserializeBinary);i.dailyschedule.DailyscheduleClient.prototype.addNewDailySchedule=function(e,t,a){return this.client_.rpcCall(this.hostname_+"/dailyschedule.Dailyschedule/addNewDailySchedule",e,t||{},s,a)},i.dailyschedule.DailyschedulePromiseClient.prototype.addNewDailySchedule=function(e,t){return this.client_.unaryCall(this.hostname_+"/dailyschedule.Dailyschedule/addNewDailySchedule",e,t||{},s)};var o=new l.web.AbstractClientBase.MethodInfo(i.dailyschedule.DailyScheduleRes,function(e){return e.serializeBinary()},i.dailyschedule.DailyScheduleRes.deserializeBinary);i.dailyschedule.DailyscheduleClient.prototype.updateDailySchedule=function(e,t,a){return this.client_.rpcCall(this.hostname_+"/dailyschedule.Dailyschedule/updateDailySchedule",e,t||{},o,a)},i.dailyschedule.DailyschedulePromiseClient.prototype.updateDailySchedule=function(e,t){return this.client_.unaryCall(this.hostname_+"/dailyschedule.Dailyschedule/updateDailySchedule",e,t||{},o)};var r=new l.web.AbstractClientBase.MethodInfo(i.dailyschedule.DailyScheduleRes,function(e){return e.serializeBinary()},i.dailyschedule.DailyScheduleRes.deserializeBinary);i.dailyschedule.DailyscheduleClient.prototype.deleteDailySchedule=function(e,t,a){return this.client_.rpcCall(this.hostname_+"/dailyschedule.Dailyschedule/deleteDailySchedule",e,t||{},r,a)},i.dailyschedule.DailyschedulePromiseClient.prototype.deleteDailySchedule=function(e,t){return this.client_.unaryCall(this.hostname_+"/dailyschedule.Dailyschedule/deleteDailySchedule",e,t||{},r)};var d=new l.web.AbstractClientBase.MethodInfo(i.dailyschedule.DailyScheduleRes,function(e){return e.serializeBinary()},i.dailyschedule.DailyScheduleRes.deserializeBinary);i.dailyschedule.DailyscheduleClient.prototype.getAllDailySchedule=function(e,t){return this.client_.serverStreaming(this.hostname_+"/dailyschedule.Dailyschedule/getAllDailySchedule",e,t||{},d)},i.dailyschedule.DailyschedulePromiseClient.prototype.getAllDailySchedule=function(e,t){return this.client_.serverStreaming(this.hostname_+"/dailyschedule.Dailyschedule/getAllDailySchedule",e,t||{},d)},e.exports=i.dailyschedule},620:function(e,t,a){var l=a(43),i=l,s=Function("return this")();i.exportSymbol("proto.dailyschedule.AddNewDailyScheduleReq",null,s),i.exportSymbol("proto.dailyschedule.DailyScheduleRes",null,s),i.exportSymbol("proto.dailyschedule.DeleteDailyScheduleReq",null,s),i.exportSymbol("proto.dailyschedule.GetAllDailyScheduleReq",null,s),i.exportSymbol("proto.dailyschedule.UpdateDailyScheduleReq",null,s),proto.dailyschedule.AddNewDailyScheduleReq=function(e){l.Message.initialize(this,e,0,-1,null,null)},i.inherits(proto.dailyschedule.AddNewDailyScheduleReq,l.Message),i.DEBUG&&!COMPILED&&(proto.dailyschedule.AddNewDailyScheduleReq.displayName="proto.dailyschedule.AddNewDailyScheduleReq"),l.Message.GENERATE_TO_OBJECT&&(proto.dailyschedule.AddNewDailyScheduleReq.prototype.toObject=function(e){return proto.dailyschedule.AddNewDailyScheduleReq.toObject(e,this)},proto.dailyschedule.AddNewDailyScheduleReq.toObject=function(e,t){var a={requesterid:t.getRequesterid(),projectid:t.getProjectid(),title:t.getTitle(),task:t.getTask(),time:t.getTime(),schedulestatus:t.getSchedulestatus(),cookie:t.getCookie()};return e&&(a.$jspbMessageInstance=t),a}),proto.dailyschedule.AddNewDailyScheduleReq.deserializeBinary=function(e){var t=new l.BinaryReader(e),a=new proto.dailyschedule.AddNewDailyScheduleReq;return proto.dailyschedule.AddNewDailyScheduleReq.deserializeBinaryFromReader(a,t)},proto.dailyschedule.AddNewDailyScheduleReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var a=t.readString();e.setRequesterid(a);break;case 2:a=t.readString();e.setProjectid(a);break;case 3:a=t.readString();e.setTitle(a);break;case 4:a=t.readString();e.setTask(a);break;case 5:a=t.readString();e.setTime(a);break;case 6:a=t.readString();e.setSchedulestatus(a);break;case 8:a=t.readString();e.setCookie(a);break;default:t.skipField()}}return e},proto.dailyschedule.AddNewDailyScheduleReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.dailyschedule.AddNewDailyScheduleReq.prototype.serializeBinary=function(){var e=new l.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.dailyschedule.AddNewDailyScheduleReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRequesterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getTitle()).length>0&&e.writeString(3,t),(t=this.getTask()).length>0&&e.writeString(4,t),(t=this.getTime()).length>0&&e.writeString(5,t),(t=this.getSchedulestatus()).length>0&&e.writeString(6,t),(t=this.getCookie()).length>0&&e.writeString(8,t)},proto.dailyschedule.AddNewDailyScheduleReq.prototype.cloneMessage=function(){return l.Message.cloneMessage(this)},proto.dailyschedule.AddNewDailyScheduleReq.prototype.getRequesterid=function(){return l.Message.getFieldProto3(this,1,"")},proto.dailyschedule.AddNewDailyScheduleReq.prototype.setRequesterid=function(e){l.Message.setField(this,1,e)},proto.dailyschedule.AddNewDailyScheduleReq.prototype.getProjectid=function(){return l.Message.getFieldProto3(this,2,"")},proto.dailyschedule.AddNewDailyScheduleReq.prototype.setProjectid=function(e){l.Message.setField(this,2,e)},proto.dailyschedule.AddNewDailyScheduleReq.prototype.getTitle=function(){return l.Message.getFieldProto3(this,3,"")},proto.dailyschedule.AddNewDailyScheduleReq.prototype.setTitle=function(e){l.Message.setField(this,3,e)},proto.dailyschedule.AddNewDailyScheduleReq.prototype.getTask=function(){return l.Message.getFieldProto3(this,4,"")},proto.dailyschedule.AddNewDailyScheduleReq.prototype.setTask=function(e){l.Message.setField(this,4,e)},proto.dailyschedule.AddNewDailyScheduleReq.prototype.getTime=function(){return l.Message.getFieldProto3(this,5,"")},proto.dailyschedule.AddNewDailyScheduleReq.prototype.setTime=function(e){l.Message.setField(this,5,e)},proto.dailyschedule.AddNewDailyScheduleReq.prototype.getSchedulestatus=function(){return l.Message.getFieldProto3(this,6,"")},proto.dailyschedule.AddNewDailyScheduleReq.prototype.setSchedulestatus=function(e){l.Message.setField(this,6,e)},proto.dailyschedule.AddNewDailyScheduleReq.prototype.getCookie=function(){return l.Message.getFieldProto3(this,8,"")},proto.dailyschedule.AddNewDailyScheduleReq.prototype.setCookie=function(e){l.Message.setField(this,8,e)},proto.dailyschedule.UpdateDailyScheduleReq=function(e){l.Message.initialize(this,e,0,-1,null,null)},i.inherits(proto.dailyschedule.UpdateDailyScheduleReq,l.Message),i.DEBUG&&!COMPILED&&(proto.dailyschedule.UpdateDailyScheduleReq.displayName="proto.dailyschedule.UpdateDailyScheduleReq"),l.Message.GENERATE_TO_OBJECT&&(proto.dailyschedule.UpdateDailyScheduleReq.prototype.toObject=function(e){return proto.dailyschedule.UpdateDailyScheduleReq.toObject(e,this)},proto.dailyschedule.UpdateDailyScheduleReq.toObject=function(e,t){var a={requesterid:t.getRequesterid(),projectid:t.getProjectid(),scheduleid:t.getScheduleid(),title:t.getTitle(),task:t.getTask(),time:t.getTime(),schedulestatus:t.getSchedulestatus(),cookie:t.getCookie()};return e&&(a.$jspbMessageInstance=t),a}),proto.dailyschedule.UpdateDailyScheduleReq.deserializeBinary=function(e){var t=new l.BinaryReader(e),a=new proto.dailyschedule.UpdateDailyScheduleReq;return proto.dailyschedule.UpdateDailyScheduleReq.deserializeBinaryFromReader(a,t)},proto.dailyschedule.UpdateDailyScheduleReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var a=t.readString();e.setRequesterid(a);break;case 2:a=t.readString();e.setProjectid(a);break;case 3:a=t.readString();e.setScheduleid(a);break;case 4:a=t.readString();e.setTitle(a);break;case 5:a=t.readString();e.setTask(a);break;case 6:a=t.readString();e.setTime(a);break;case 7:a=t.readString();e.setSchedulestatus(a);break;case 8:a=t.readString();e.setCookie(a);break;default:t.skipField()}}return e},proto.dailyschedule.UpdateDailyScheduleReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.serializeBinary=function(){var e=new l.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.dailyschedule.UpdateDailyScheduleReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRequesterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getScheduleid()).length>0&&e.writeString(3,t),(t=this.getTitle()).length>0&&e.writeString(4,t),(t=this.getTask()).length>0&&e.writeString(5,t),(t=this.getTime()).length>0&&e.writeString(6,t),(t=this.getSchedulestatus()).length>0&&e.writeString(7,t),(t=this.getCookie()).length>0&&e.writeString(8,t)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.cloneMessage=function(){return l.Message.cloneMessage(this)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.getRequesterid=function(){return l.Message.getFieldProto3(this,1,"")},proto.dailyschedule.UpdateDailyScheduleReq.prototype.setRequesterid=function(e){l.Message.setField(this,1,e)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.getProjectid=function(){return l.Message.getFieldProto3(this,2,"")},proto.dailyschedule.UpdateDailyScheduleReq.prototype.setProjectid=function(e){l.Message.setField(this,2,e)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.getScheduleid=function(){return l.Message.getFieldProto3(this,3,"")},proto.dailyschedule.UpdateDailyScheduleReq.prototype.setScheduleid=function(e){l.Message.setField(this,3,e)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.getTitle=function(){return l.Message.getFieldProto3(this,4,"")},proto.dailyschedule.UpdateDailyScheduleReq.prototype.setTitle=function(e){l.Message.setField(this,4,e)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.getTask=function(){return l.Message.getFieldProto3(this,5,"")},proto.dailyschedule.UpdateDailyScheduleReq.prototype.setTask=function(e){l.Message.setField(this,5,e)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.getTime=function(){return l.Message.getFieldProto3(this,6,"")},proto.dailyschedule.UpdateDailyScheduleReq.prototype.setTime=function(e){l.Message.setField(this,6,e)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.getSchedulestatus=function(){return l.Message.getFieldProto3(this,7,"")},proto.dailyschedule.UpdateDailyScheduleReq.prototype.setSchedulestatus=function(e){l.Message.setField(this,7,e)},proto.dailyschedule.UpdateDailyScheduleReq.prototype.getCookie=function(){return l.Message.getFieldProto3(this,8,"")},proto.dailyschedule.UpdateDailyScheduleReq.prototype.setCookie=function(e){l.Message.setField(this,8,e)},proto.dailyschedule.DeleteDailyScheduleReq=function(e){l.Message.initialize(this,e,0,-1,null,null)},i.inherits(proto.dailyschedule.DeleteDailyScheduleReq,l.Message),i.DEBUG&&!COMPILED&&(proto.dailyschedule.DeleteDailyScheduleReq.displayName="proto.dailyschedule.DeleteDailyScheduleReq"),l.Message.GENERATE_TO_OBJECT&&(proto.dailyschedule.DeleteDailyScheduleReq.prototype.toObject=function(e){return proto.dailyschedule.DeleteDailyScheduleReq.toObject(e,this)},proto.dailyschedule.DeleteDailyScheduleReq.toObject=function(e,t){var a={requesterid:t.getRequesterid(),projectid:t.getProjectid(),scheduleid:t.getScheduleid(),cookie:t.getCookie()};return e&&(a.$jspbMessageInstance=t),a}),proto.dailyschedule.DeleteDailyScheduleReq.deserializeBinary=function(e){var t=new l.BinaryReader(e),a=new proto.dailyschedule.DeleteDailyScheduleReq;return proto.dailyschedule.DeleteDailyScheduleReq.deserializeBinaryFromReader(a,t)},proto.dailyschedule.DeleteDailyScheduleReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var a=t.readString();e.setRequesterid(a);break;case 2:a=t.readString();e.setProjectid(a);break;case 3:a=t.readString();e.setScheduleid(a);break;case 4:a=t.readString();e.setCookie(a);break;default:t.skipField()}}return e},proto.dailyschedule.DeleteDailyScheduleReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.dailyschedule.DeleteDailyScheduleReq.prototype.serializeBinary=function(){var e=new l.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.dailyschedule.DeleteDailyScheduleReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRequesterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getScheduleid()).length>0&&e.writeString(3,t),(t=this.getCookie()).length>0&&e.writeString(4,t)},proto.dailyschedule.DeleteDailyScheduleReq.prototype.cloneMessage=function(){return l.Message.cloneMessage(this)},proto.dailyschedule.DeleteDailyScheduleReq.prototype.getRequesterid=function(){return l.Message.getFieldProto3(this,1,"")},proto.dailyschedule.DeleteDailyScheduleReq.prototype.setRequesterid=function(e){l.Message.setField(this,1,e)},proto.dailyschedule.DeleteDailyScheduleReq.prototype.getProjectid=function(){return l.Message.getFieldProto3(this,2,"")},proto.dailyschedule.DeleteDailyScheduleReq.prototype.setProjectid=function(e){l.Message.setField(this,2,e)},proto.dailyschedule.DeleteDailyScheduleReq.prototype.getScheduleid=function(){return l.Message.getFieldProto3(this,3,"")},proto.dailyschedule.DeleteDailyScheduleReq.prototype.setScheduleid=function(e){l.Message.setField(this,3,e)},proto.dailyschedule.DeleteDailyScheduleReq.prototype.getCookie=function(){return l.Message.getFieldProto3(this,4,"")},proto.dailyschedule.DeleteDailyScheduleReq.prototype.setCookie=function(e){l.Message.setField(this,4,e)},proto.dailyschedule.GetAllDailyScheduleReq=function(e){l.Message.initialize(this,e,0,-1,null,null)},i.inherits(proto.dailyschedule.GetAllDailyScheduleReq,l.Message),i.DEBUG&&!COMPILED&&(proto.dailyschedule.GetAllDailyScheduleReq.displayName="proto.dailyschedule.GetAllDailyScheduleReq"),l.Message.GENERATE_TO_OBJECT&&(proto.dailyschedule.GetAllDailyScheduleReq.prototype.toObject=function(e){return proto.dailyschedule.GetAllDailyScheduleReq.toObject(e,this)},proto.dailyschedule.GetAllDailyScheduleReq.toObject=function(e,t){var a={requesterid:t.getRequesterid(),projectid:t.getProjectid(),cookie:t.getCookie()};return e&&(a.$jspbMessageInstance=t),a}),proto.dailyschedule.GetAllDailyScheduleReq.deserializeBinary=function(e){var t=new l.BinaryReader(e),a=new proto.dailyschedule.GetAllDailyScheduleReq;return proto.dailyschedule.GetAllDailyScheduleReq.deserializeBinaryFromReader(a,t)},proto.dailyschedule.GetAllDailyScheduleReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var a=t.readString();e.setRequesterid(a);break;case 2:a=t.readString();e.setProjectid(a);break;case 3:a=t.readString();e.setCookie(a);break;default:t.skipField()}}return e},proto.dailyschedule.GetAllDailyScheduleReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.dailyschedule.GetAllDailyScheduleReq.prototype.serializeBinary=function(){var e=new l.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.dailyschedule.GetAllDailyScheduleReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRequesterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getCookie()).length>0&&e.writeString(3,t)},proto.dailyschedule.GetAllDailyScheduleReq.prototype.cloneMessage=function(){return l.Message.cloneMessage(this)},proto.dailyschedule.GetAllDailyScheduleReq.prototype.getRequesterid=function(){return l.Message.getFieldProto3(this,1,"")},proto.dailyschedule.GetAllDailyScheduleReq.prototype.setRequesterid=function(e){l.Message.setField(this,1,e)},proto.dailyschedule.GetAllDailyScheduleReq.prototype.getProjectid=function(){return l.Message.getFieldProto3(this,2,"")},proto.dailyschedule.GetAllDailyScheduleReq.prototype.setProjectid=function(e){l.Message.setField(this,2,e)},proto.dailyschedule.GetAllDailyScheduleReq.prototype.getCookie=function(){return l.Message.getFieldProto3(this,3,"")},proto.dailyschedule.GetAllDailyScheduleReq.prototype.setCookie=function(e){l.Message.setField(this,3,e)},proto.dailyschedule.DailyScheduleRes=function(e){l.Message.initialize(this,e,0,-1,null,null)},i.inherits(proto.dailyschedule.DailyScheduleRes,l.Message),i.DEBUG&&!COMPILED&&(proto.dailyschedule.DailyScheduleRes.displayName="proto.dailyschedule.DailyScheduleRes"),l.Message.GENERATE_TO_OBJECT&&(proto.dailyschedule.DailyScheduleRes.prototype.toObject=function(e){return proto.dailyschedule.DailyScheduleRes.toObject(e,this)},proto.dailyschedule.DailyScheduleRes.toObject=function(e,t){var a={error:t.getError(),status:t.getStatus(),scheduleid:t.getScheduleid(),title:t.getTitle(),task:t.getTask(),time:t.getTime(),note:t.getNote(),schedulestatus:t.getSchedulestatus()};return e&&(a.$jspbMessageInstance=t),a}),proto.dailyschedule.DailyScheduleRes.deserializeBinary=function(e){var t=new l.BinaryReader(e),a=new proto.dailyschedule.DailyScheduleRes;return proto.dailyschedule.DailyScheduleRes.deserializeBinaryFromReader(a,t)},proto.dailyschedule.DailyScheduleRes.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var a=t.readString();e.setError(a);break;case 2:a=t.readString();e.setStatus(a);break;case 3:a=t.readString();e.setScheduleid(a);break;case 4:a=t.readString();e.setTitle(a);break;case 5:a=t.readString();e.setTask(a);break;case 7:a=t.readString();e.setTime(a);break;case 8:a=t.readString();e.setNote(a);break;case 9:a=t.readString();e.setSchedulestatus(a);break;default:t.skipField()}}return e},proto.dailyschedule.DailyScheduleRes.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.dailyschedule.DailyScheduleRes.prototype.serializeBinary=function(){var e=new l.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.dailyschedule.DailyScheduleRes.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getError()).length>0&&e.writeString(1,t),(t=this.getStatus()).length>0&&e.writeString(2,t),(t=this.getScheduleid()).length>0&&e.writeString(3,t),(t=this.getTitle()).length>0&&e.writeString(4,t),(t=this.getTask()).length>0&&e.writeString(5,t),(t=this.getTime()).length>0&&e.writeString(7,t),(t=this.getNote()).length>0&&e.writeString(8,t),(t=this.getSchedulestatus()).length>0&&e.writeString(9,t)},proto.dailyschedule.DailyScheduleRes.prototype.cloneMessage=function(){return l.Message.cloneMessage(this)},proto.dailyschedule.DailyScheduleRes.prototype.getError=function(){return l.Message.getFieldProto3(this,1,"")},proto.dailyschedule.DailyScheduleRes.prototype.setError=function(e){l.Message.setField(this,1,e)},proto.dailyschedule.DailyScheduleRes.prototype.getStatus=function(){return l.Message.getFieldProto3(this,2,"")},proto.dailyschedule.DailyScheduleRes.prototype.setStatus=function(e){l.Message.setField(this,2,e)},proto.dailyschedule.DailyScheduleRes.prototype.getScheduleid=function(){return l.Message.getFieldProto3(this,3,"")},proto.dailyschedule.DailyScheduleRes.prototype.setScheduleid=function(e){l.Message.setField(this,3,e)},proto.dailyschedule.DailyScheduleRes.prototype.getTitle=function(){return l.Message.getFieldProto3(this,4,"")},proto.dailyschedule.DailyScheduleRes.prototype.setTitle=function(e){l.Message.setField(this,4,e)},proto.dailyschedule.DailyScheduleRes.prototype.getTask=function(){return l.Message.getFieldProto3(this,5,"")},proto.dailyschedule.DailyScheduleRes.prototype.setTask=function(e){l.Message.setField(this,5,e)},proto.dailyschedule.DailyScheduleRes.prototype.getTime=function(){return l.Message.getFieldProto3(this,7,"")},proto.dailyschedule.DailyScheduleRes.prototype.setTime=function(e){l.Message.setField(this,7,e)},proto.dailyschedule.DailyScheduleRes.prototype.getNote=function(){return l.Message.getFieldProto3(this,8,"")},proto.dailyschedule.DailyScheduleRes.prototype.setNote=function(e){l.Message.setField(this,8,e)},proto.dailyschedule.DailyScheduleRes.prototype.getSchedulestatus=function(){return l.Message.getFieldProto3(this,9,"")},proto.dailyschedule.DailyScheduleRes.prototype.setSchedulestatus=function(e){l.Message.setField(this,9,e)},i.object.extend(t,proto.dailyschedule)}}]);
//# sourceMappingURL=36.88231b86.chunk.js.map