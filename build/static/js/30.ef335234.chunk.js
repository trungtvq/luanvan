(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{114:function(t,e,r){"use strict";var o=r(8),i=r(10),n=r(86),a=r.n(n),l=r(0),s=r.n(l),c=r(1),p=r.n(c),g=r(68),u=r.n(g),k=r(70),d=p.a.oneOfType([p.a.number,p.a.string]),b=p.a.oneOfType([p.a.bool,p.a.number,p.a.string,p.a.shape({size:p.a.oneOfType([p.a.bool,p.a.number,p.a.string]),push:Object(k.e)(d,'Please use the prop "order"'),pull:Object(k.e)(d,'Please use the prop "order"'),order:d,offset:d})]),S={tag:k.m,xs:b,sm:b,md:b,lg:b,xl:b,className:p.a.string,cssModule:p.a.object,widths:p.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},B=function(t,e,r){return!0===r||""===r?t?"col":"col-"+e:"auto"===r?t?"col-auto":"col-"+e+"-auto":t?"col-"+r:"col-"+e+"-"+r},h=function(t){var e=t.className,r=t.cssModule,n=t.widths,l=t.tag,c=Object(i.a)(t,["className","cssModule","widths","tag"]),p=[];n.forEach(function(e,o){var i=t[e];if(delete c[e],i||""===i){var n=!o;if(a()(i)){var l,s=n?"-":"-"+e+"-",g=B(n,e,i.size);p.push(Object(k.i)(u()(((l={})[g]=i.size||""===i.size,l["order"+s+i.order]=i.order||0===i.order,l["offset"+s+i.offset]=i.offset||0===i.offset,l)),r))}else{var d=B(n,e,i);p.push(d)}}}),p.length||p.push("col");var g=Object(k.i)(u()(e,p),r);return s.a.createElement(l,Object(o.a)({},c,{className:g}))};h.propTypes=S,h.defaultProps=f,e.a=h},138:function(t,e,r){"use strict";var o=r(8),i=r(10),n=r(19),a=r(18),l=r(0),s=r.n(l),c=r(1),p=r.n(c),g=r(68),u=r.n(g),k=r(70),d={active:p.a.bool,"aria-label":p.a.string,block:p.a.bool,color:p.a.string,disabled:p.a.bool,outline:p.a.bool,tag:k.m,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),onClick:p.a.func,size:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,close:p.a.bool},b=function(t){function e(e){var r;return(r=t.call(this,e)||this).onClick=r.onClick.bind(Object(a.a)(Object(a.a)(r))),r}Object(n.a)(e,t);var r=e.prototype;return r.onClick=function(t){this.props.disabled?t.preventDefault():this.props.onClick&&this.props.onClick(t)},r.render=function(){var t=this.props,e=t.active,r=t["aria-label"],n=t.block,a=t.className,l=t.close,c=t.cssModule,p=t.color,g=t.outline,d=t.size,b=t.tag,S=t.innerRef,f=Object(i.a)(t,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof f.children&&(f.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var B="btn"+(g?"-outline":"")+"-"+p,h=Object(k.i)(u()(a,{close:l},l||"btn",l||B,!!d&&"btn-"+d,!!n&&"btn-block",{active:e,disabled:this.props.disabled}),c);f.href&&"button"===b&&(b="a");var y=l?"Close":null;return s.a.createElement(b,Object(o.a)({type:"button"===b&&f.onClick?"button":void 0},f,{className:h,ref:S,onClick:this.onClick,"aria-label":r||y}))},e}(s.a.Component);b.propTypes=d,b.defaultProps={color:"secondary",tag:"button"},e.a=b},166:function(t,e,r){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",function(){return o})},800:function(t,e,r){var o={};o.web=r(22);var i={};i.sprintbacklog=r(801),i.sprintbacklog.SprintBacklogClient=function(t,e,r){r||(r={}),r.format="text",this.client_=new o.web.GrpcWebClientBase(r),this.hostname_=t,this.credentials_=e,this.options_=r},i.sprintbacklog.SprintBacklogPromiseClient=function(t,e,r){r||(r={}),r.format="text",this.client_=new o.web.GrpcWebClientBase(r),this.hostname_=t,this.credentials_=e,this.options_=r};var n=new o.web.AbstractClientBase.MethodInfo(i.sprintbacklog.SprintBacklogRes,function(t){return t.serializeBinary()},i.sprintbacklog.SprintBacklogRes.deserializeBinary);i.sprintbacklog.SprintBacklogClient.prototype.deleteSprintBacklog=function(t,e,r){return this.client_.rpcCall(this.hostname_+"/sprintbacklog.SprintBacklog/deleteSprintBacklog",t,e||{},n,r)},i.sprintbacklog.SprintBacklogPromiseClient.prototype.deleteSprintBacklog=function(t,e){return this.client_.unaryCall(this.hostname_+"/sprintbacklog.SprintBacklog/deleteSprintBacklog",t,e||{},n)};var a=new o.web.AbstractClientBase.MethodInfo(i.sprintbacklog.GetAllSprintBacklogRes,function(t){return t.serializeBinary()},i.sprintbacklog.GetAllSprintBacklogRes.deserializeBinary);i.sprintbacklog.SprintBacklogClient.prototype.getAllSprintBacklog=function(t,e){return this.client_.serverStreaming(this.hostname_+"/sprintbacklog.SprintBacklog/getAllSprintBacklog",t,e||{},a)},i.sprintbacklog.SprintBacklogPromiseClient.prototype.getAllSprintBacklog=function(t,e){return this.client_.serverStreaming(this.hostname_+"/sprintbacklog.SprintBacklog/getAllSprintBacklog",t,e||{},a)},t.exports=i.sprintbacklog},801:function(t,e,r){var o=r(23),i=o,n=Function("return this")();i.exportSymbol("proto.sprintbacklog.DeleteSprintBacklogReq",null,n),i.exportSymbol("proto.sprintbacklog.GetAllSprintBacklogReq",null,n),i.exportSymbol("proto.sprintbacklog.GetAllSprintBacklogRes",null,n),i.exportSymbol("proto.sprintbacklog.SprintBacklogRes",null,n),proto.sprintbacklog.DeleteSprintBacklogReq=function(t){o.Message.initialize(this,t,0,-1,null,null)},i.inherits(proto.sprintbacklog.DeleteSprintBacklogReq,o.Message),i.DEBUG&&!COMPILED&&(proto.sprintbacklog.DeleteSprintBacklogReq.displayName="proto.sprintbacklog.DeleteSprintBacklogReq"),o.Message.GENERATE_TO_OBJECT&&(proto.sprintbacklog.DeleteSprintBacklogReq.prototype.toObject=function(t){return proto.sprintbacklog.DeleteSprintBacklogReq.toObject(t,this)},proto.sprintbacklog.DeleteSprintBacklogReq.toObject=function(t,e){var r={requesterid:e.getRequesterid(),projectid:e.getProjectid(),backlogid:e.getBacklogid(),accesstoken:e.getAccesstoken()};return t&&(r.$jspbMessageInstance=e),r}),proto.sprintbacklog.DeleteSprintBacklogReq.deserializeBinary=function(t){var e=new o.BinaryReader(t),r=new proto.sprintbacklog.DeleteSprintBacklogReq;return proto.sprintbacklog.DeleteSprintBacklogReq.deserializeBinaryFromReader(r,e)},proto.sprintbacklog.DeleteSprintBacklogReq.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var r=e.readString();t.setRequesterid(r);break;case 2:r=e.readString();t.setProjectid(r);break;case 3:r=e.readString();t.setBacklogid(r);break;case 4:r=e.readString();t.setAccesstoken(r);break;default:e.skipField()}}return t},proto.sprintbacklog.DeleteSprintBacklogReq.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.serializeBinary=function(){var t=new o.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getRequesterid()).length>0&&t.writeString(1,e),(e=this.getProjectid()).length>0&&t.writeString(2,e),(e=this.getBacklogid()).length>0&&t.writeString(3,e),(e=this.getAccesstoken()).length>0&&t.writeString(4,e)},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.getRequesterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.setRequesterid=function(t){o.Message.setField(this,1,t)},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.setProjectid=function(t){o.Message.setField(this,2,t)},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.getBacklogid=function(){return o.Message.getFieldProto3(this,3,"")},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.setBacklogid=function(t){o.Message.setField(this,3,t)},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.getAccesstoken=function(){return o.Message.getFieldProto3(this,4,"")},proto.sprintbacklog.DeleteSprintBacklogReq.prototype.setAccesstoken=function(t){o.Message.setField(this,4,t)},proto.sprintbacklog.SprintBacklogRes=function(t){o.Message.initialize(this,t,0,-1,null,null)},i.inherits(proto.sprintbacklog.SprintBacklogRes,o.Message),i.DEBUG&&!COMPILED&&(proto.sprintbacklog.SprintBacklogRes.displayName="proto.sprintbacklog.SprintBacklogRes"),o.Message.GENERATE_TO_OBJECT&&(proto.sprintbacklog.SprintBacklogRes.prototype.toObject=function(t){return proto.sprintbacklog.SprintBacklogRes.toObject(t,this)},proto.sprintbacklog.SprintBacklogRes.toObject=function(t,e){var r={status:e.getStatus(),backlogid:e.getBacklogid()};return t&&(r.$jspbMessageInstance=e),r}),proto.sprintbacklog.SprintBacklogRes.deserializeBinary=function(t){var e=new o.BinaryReader(t),r=new proto.sprintbacklog.SprintBacklogRes;return proto.sprintbacklog.SprintBacklogRes.deserializeBinaryFromReader(r,e)},proto.sprintbacklog.SprintBacklogRes.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var r=e.readString();t.setStatus(r);break;case 3:r=e.readString();t.setBacklogid(r);break;default:e.skipField()}}return t},proto.sprintbacklog.SprintBacklogRes.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.sprintbacklog.SprintBacklogRes.prototype.serializeBinary=function(){var t=new o.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.sprintbacklog.SprintBacklogRes.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getStatus()).length>0&&t.writeString(1,e),(e=this.getBacklogid()).length>0&&t.writeString(3,e)},proto.sprintbacklog.SprintBacklogRes.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.sprintbacklog.SprintBacklogRes.prototype.getStatus=function(){return o.Message.getFieldProto3(this,1,"")},proto.sprintbacklog.SprintBacklogRes.prototype.setStatus=function(t){o.Message.setField(this,1,t)},proto.sprintbacklog.SprintBacklogRes.prototype.getBacklogid=function(){return o.Message.getFieldProto3(this,3,"")},proto.sprintbacklog.SprintBacklogRes.prototype.setBacklogid=function(t){o.Message.setField(this,3,t)},proto.sprintbacklog.GetAllSprintBacklogReq=function(t){o.Message.initialize(this,t,0,-1,null,null)},i.inherits(proto.sprintbacklog.GetAllSprintBacklogReq,o.Message),i.DEBUG&&!COMPILED&&(proto.sprintbacklog.GetAllSprintBacklogReq.displayName="proto.sprintbacklog.GetAllSprintBacklogReq"),o.Message.GENERATE_TO_OBJECT&&(proto.sprintbacklog.GetAllSprintBacklogReq.prototype.toObject=function(t){return proto.sprintbacklog.GetAllSprintBacklogReq.toObject(t,this)},proto.sprintbacklog.GetAllSprintBacklogReq.toObject=function(t,e){var r={requesterid:e.getRequesterid(),projectid:e.getProjectid(),accesstoken:e.getAccesstoken()};return t&&(r.$jspbMessageInstance=e),r}),proto.sprintbacklog.GetAllSprintBacklogReq.deserializeBinary=function(t){var e=new o.BinaryReader(t),r=new proto.sprintbacklog.GetAllSprintBacklogReq;return proto.sprintbacklog.GetAllSprintBacklogReq.deserializeBinaryFromReader(r,e)},proto.sprintbacklog.GetAllSprintBacklogReq.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var r=e.readString();t.setRequesterid(r);break;case 2:r=e.readString();t.setProjectid(r);break;case 3:r=e.readString();t.setAccesstoken(r);break;default:e.skipField()}}return t},proto.sprintbacklog.GetAllSprintBacklogReq.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.sprintbacklog.GetAllSprintBacklogReq.prototype.serializeBinary=function(){var t=new o.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.sprintbacklog.GetAllSprintBacklogReq.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getRequesterid()).length>0&&t.writeString(1,e),(e=this.getProjectid()).length>0&&t.writeString(2,e),(e=this.getAccesstoken()).length>0&&t.writeString(3,e)},proto.sprintbacklog.GetAllSprintBacklogReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.sprintbacklog.GetAllSprintBacklogReq.prototype.getRequesterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.sprintbacklog.GetAllSprintBacklogReq.prototype.setRequesterid=function(t){o.Message.setField(this,1,t)},proto.sprintbacklog.GetAllSprintBacklogReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.sprintbacklog.GetAllSprintBacklogReq.prototype.setProjectid=function(t){o.Message.setField(this,2,t)},proto.sprintbacklog.GetAllSprintBacklogReq.prototype.getAccesstoken=function(){return o.Message.getFieldProto3(this,3,"")},proto.sprintbacklog.GetAllSprintBacklogReq.prototype.setAccesstoken=function(t){o.Message.setField(this,3,t)},proto.sprintbacklog.GetAllSprintBacklogRes=function(t){o.Message.initialize(this,t,0,-1,null,null)},i.inherits(proto.sprintbacklog.GetAllSprintBacklogRes,o.Message),i.DEBUG&&!COMPILED&&(proto.sprintbacklog.GetAllSprintBacklogRes.displayName="proto.sprintbacklog.GetAllSprintBacklogRes"),o.Message.GENERATE_TO_OBJECT&&(proto.sprintbacklog.GetAllSprintBacklogRes.prototype.toObject=function(t){return proto.sprintbacklog.GetAllSprintBacklogRes.toObject(t,this)},proto.sprintbacklog.GetAllSprintBacklogRes.toObject=function(t,e){var r={title:e.getTitle(),backlogid:e.getBacklogid(),role:e.getRole(),want:e.getWant(),so:e.getSo(),statusbacklog:e.getStatusbacklog(),priority:e.getPriority(),estimation:e.getEstimation(),sprintid:e.getSprintid(),start:e.getStart(),deadline:e.getDeadline(),status:e.getStatus()};return t&&(r.$jspbMessageInstance=e),r}),proto.sprintbacklog.GetAllSprintBacklogRes.deserializeBinary=function(t){var e=new o.BinaryReader(t),r=new proto.sprintbacklog.GetAllSprintBacklogRes;return proto.sprintbacklog.GetAllSprintBacklogRes.deserializeBinaryFromReader(r,e)},proto.sprintbacklog.GetAllSprintBacklogRes.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var r=e.readString();t.setTitle(r);break;case 2:r=e.readString();t.setBacklogid(r);break;case 3:r=e.readString();t.setRole(r);break;case 4:r=e.readString();t.setWant(r);break;case 5:r=e.readString();t.setSo(r);break;case 11:r=e.readString();t.setStatusbacklog(r);break;case 6:r=e.readString();t.setPriority(r);break;case 7:r=e.readString();t.setEstimation(r);break;case 8:r=e.readString();t.setSprintid(r);break;case 12:r=e.readString();t.setStart(r);break;case 10:r=e.readString();t.setDeadline(r);break;case 9:r=e.readString();t.setStatus(r);break;default:e.skipField()}}return t},proto.sprintbacklog.GetAllSprintBacklogRes.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.serializeBinary=function(){var t=new o.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getTitle()).length>0&&t.writeString(1,e),(e=this.getBacklogid()).length>0&&t.writeString(2,e),(e=this.getRole()).length>0&&t.writeString(3,e),(e=this.getWant()).length>0&&t.writeString(4,e),(e=this.getSo()).length>0&&t.writeString(5,e),(e=this.getStatusbacklog()).length>0&&t.writeString(11,e),(e=this.getPriority()).length>0&&t.writeString(6,e),(e=this.getEstimation()).length>0&&t.writeString(7,e),(e=this.getSprintid()).length>0&&t.writeString(8,e),(e=this.getStart()).length>0&&t.writeString(12,e),(e=this.getDeadline()).length>0&&t.writeString(10,e),(e=this.getStatus()).length>0&&t.writeString(9,e)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getTitle=function(){return o.Message.getFieldProto3(this,1,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setTitle=function(t){o.Message.setField(this,1,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getBacklogid=function(){return o.Message.getFieldProto3(this,2,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setBacklogid=function(t){o.Message.setField(this,2,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getRole=function(){return o.Message.getFieldProto3(this,3,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setRole=function(t){o.Message.setField(this,3,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getWant=function(){return o.Message.getFieldProto3(this,4,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setWant=function(t){o.Message.setField(this,4,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getSo=function(){return o.Message.getFieldProto3(this,5,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setSo=function(t){o.Message.setField(this,5,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getStatusbacklog=function(){return o.Message.getFieldProto3(this,11,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setStatusbacklog=function(t){o.Message.setField(this,11,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getPriority=function(){return o.Message.getFieldProto3(this,6,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setPriority=function(t){o.Message.setField(this,6,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getEstimation=function(){return o.Message.getFieldProto3(this,7,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setEstimation=function(t){o.Message.setField(this,7,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getSprintid=function(){return o.Message.getFieldProto3(this,8,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setSprintid=function(t){o.Message.setField(this,8,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getStart=function(){return o.Message.getFieldProto3(this,12,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setStart=function(t){o.Message.setField(this,12,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getDeadline=function(){return o.Message.getFieldProto3(this,10,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setDeadline=function(t){o.Message.setField(this,10,t)},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.getStatus=function(){return o.Message.getFieldProto3(this,9,"")},proto.sprintbacklog.GetAllSprintBacklogRes.prototype.setStatus=function(t){o.Message.setField(this,9,t)},i.object.extend(e,proto.sprintbacklog)},839:function(t,e,r){"use strict";r.r(e);var o=r(166),i=r(11),n=r(12),a=r(14),l=r(13),s=r(15),c=r(0),p=r.n(c),g=r(92),u=r(114),k=r(96),d=r(138),b=r(3),S=r.n(b),f={};f.sprintbacklog=r(800);var B=function(t){function e(t){var r;return Object(i.a)(this,e),(r=Object(a.a)(this,Object(l.a)(e).call(this,t))).handleDelete=function(){},r.state={data:[]},r}return Object(s.a)(e,t),Object(n.a)(e,[{key:"componentDidMount",value:function(){var t=new f.sprintbacklog.SprintBacklogClient("https://www.overlead.co"),e=new f.sprintbacklog.GetAllSprintBacklogReq;e.setRequesterid(S.a.load("userId")),e.setAccesstoken(S.a.load("accessToken")),e.setProjectid(S.a.load("currentProject"));var r=t.getAllSprintBacklog(e,{}),i=this;r.on("data",function(t){"SUCCESS"==t.getStatus()&&i.setState(function(e){return{data:[].concat(Object(o.a)(e.data),[{id:t.getBacklogid(),title:t.getTitle(),role:t.getRole(),want:t.getWant(),so:t.getSo(),priority:t.getPriority(),estimation:t.getEstimation(),sprint:t.getSprintid(),status:t.getStatusbacklog(),start:t.getStart(),deadline:t.getDeadline()}])}})}),r.on("status",function(t){console.log("status"),console.log(t.code),console.log(t.details),console.log(t.metadata)}),r.on("end",function(t){console.log("end"),console.log(t)})}},{key:"render",value:function(){var t=this;return p.a.createElement(g.a,null,p.a.createElement(u.a,null,p.a.createElement(k.a,null,p.a.createElement("div",{class:"table-responsive"},p.a.createElement("table",{class:"table table-lg"},p.a.createElement("thead",{class:"thead"},p.a.createElement("tr",{class:"bg-primary"},p.a.createElement("th",null,"Title... ",p.a.createElement("i",{class:"fa fa-sort"})),p.a.createElement("th",null,"As a... ",p.a.createElement("i",{class:"fa fa-sort"})),p.a.createElement("th",null,"I want to be able to... ",p.a.createElement("i",{class:"fa fa-sort"})),p.a.createElement("th",null,"So that... ",p.a.createElement("i",{class:"fa fa-sort"})),p.a.createElement("th",null,"Priority ",p.a.createElement("i",{class:"fa fa-sort"})),p.a.createElement("th",null,"Estimation ",p.a.createElement("i",{class:"fa fa-sort"})),p.a.createElement("th",null,"Sprint ",p.a.createElement("i",{class:"fa fa-sort"})),p.a.createElement("th",null,"Start ",p.a.createElement("i",{class:"fa fa-sort"})),p.a.createElement("th",null,"Deadline ",p.a.createElement("i",{class:"fa fa-sort"})),p.a.createElement("th",null))),p.a.createElement("tbody",null,this.state.data.map(function(e,r){return p.a.createElement("tr",{key:r},p.a.createElement("td",null,e.title),p.a.createElement("td",null,e.role),p.a.createElement("td",null,e.want),p.a.createElement("td",null,e.so),p.a.createElement("td",null,p.a.createElement("center",null,e.priority)),p.a.createElement("td",null,p.a.createElement("center",null,e.estimation)),p.a.createElement("td",null,p.a.createElement("center",null,e.sprint)),p.a.createElement("td",null,p.a.createElement("center",null,e.start)),p.a.createElement("td",null,p.a.createElement("center",null,e.deadline)),p.a.createElement("td",null,p.a.createElement(d.a,{type:"submit",size:"sm",color:"danger",onClick:t.handleDelete},p.a.createElement("i",{class:"fa fa-trash"}))))})))))))}}]),e}(c.Component);e.default=B},86:function(t,e){t.exports=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}},92:function(t,e,r){"use strict";var o=r(8),i=r(10),n=r(0),a=r.n(n),l=r(1),s=r.n(l),c=r(68),p=r.n(c),g=r(70),u={tag:g.m,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},k=function(t){var e=t.className,r=t.cssModule,n=t.noGutters,l=t.tag,s=t.form,c=Object(i.a)(t,["className","cssModule","noGutters","tag","form"]),u=Object(g.i)(p()(e,n?"no-gutters":null,s?"form-row":"row"),r);return a.a.createElement(l,Object(o.a)({},c,{className:u}))};k.propTypes=u,k.defaultProps={tag:"div"},e.a=k},96:function(t,e,r){"use strict";var o=r(8),i=r(10),n=r(0),a=r.n(n),l=r(1),s=r.n(l),c=r(68),p=r.n(c),g=r(70),u={tag:g.m,inverse:s.a.bool,color:s.a.string,block:Object(g.e)(s.a.bool,'Please use the props "body"'),body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},k=function(t){var e=t.className,r=t.cssModule,n=t.color,l=t.block,s=t.body,c=t.inverse,u=t.outline,k=t.tag,d=t.innerRef,b=Object(i.a)(t,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),S=Object(g.i)(p()(e,"card",!!c&&"text-white",!(!l&&!s)&&"card-body",!!n&&(u?"border":"bg")+"-"+n),r);return a.a.createElement(k,Object(o.a)({},b,{className:S,ref:d}))};k.propTypes=u,k.defaultProps={tag:"div"},e.a=k}}]);
//# sourceMappingURL=30.ef335234.chunk.js.map