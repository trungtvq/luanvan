(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{114:function(t,e,a){"use strict";var n=a(11),o=a(12),r=a(24),s=a(8),i=a(0),l=a.n(i),c=a(1),d=a.n(c),u=a(21),m=a.n(u),p=a(89),g={children:d.a.node,inline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(t){function e(e){var a;return(a=t.call(this,e)||this).getRef=a.getRef.bind(Object(s.a)(Object(s.a)(a))),a.submit=a.submit.bind(Object(s.a)(Object(s.a)(a))),a}Object(r.a)(e,t);var a=e.prototype;return a.getRef=function(t){this.props.innerRef&&this.props.innerRef(t),this.ref=t},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var t=this.props,e=t.className,a=t.cssModule,r=t.inline,s=t.tag,i=t.innerRef,c=Object(o.a)(t,["className","cssModule","inline","tag","innerRef"]),d=Object(p.j)(m()(e,!!r&&"form-inline"),a);return l.a.createElement(s,Object(n.a)({},c,{ref:i,className:d}))},e}(i.Component);h.propTypes=g,h.defaultProps={tag:"form"},e.a=h},126:function(t,e,a){"use strict";var n=a(11),o=a(12),r=a(0),s=a.n(r),i=a(1),l=a.n(i),c=a(21),d=a.n(c),u=a(89),m={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:u.n,className:l.a.string,cssModule:l.a.object},p=function(t){var e=t.className,a=t.cssModule,r=t.row,i=t.disabled,l=t.check,c=t.inline,m=t.tag,p=Object(o.a)(t,["className","cssModule","row","disabled","check","inline","tag"]),g=Object(u.j)(d()(e,!!r&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!i)&&"disabled"),a);return s.a.createElement(m,Object(n.a)({},p,{className:g}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},166:function(t,e,a){"use strict";var n=a(11),o=a(12),r=a(0),s=a.n(r),i=a(1),l=a.n(i),c=a(21),d=a.n(c),u=a(89),m={tag:u.n,wrapTag:u.n,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},p=function(t){var e,a=t.className,r=t.cssModule,i=t.children,l=t.toggle,c=t.tag,m=t.wrapTag,p=t.closeAriaLabel,g=t.charCode,h=t.close,S=Object(o.a)(t,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),b=Object(u.j)(d()(a,"modal-header"),r);if(!h&&l){var E="number"===typeof g?String.fromCharCode(g):g;e=s.a.createElement("button",{type:"button",onClick:l,className:Object(u.j)("close",r),"aria-label":p},s.a.createElement("span",{"aria-hidden":"true"},E))}return s.a.createElement(m,Object(n.a)({},S,{className:b}),s.a.createElement(c,{className:Object(u.j)("modal-title",r)},i),h||e)};p.propTypes=m,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},e.a=p},167:function(t,e,a){"use strict";var n=a(11),o=a(12),r=a(0),s=a.n(r),i=a(1),l=a.n(i),c=a(21),d=a.n(c),u=a(89),m={tag:u.n,className:l.a.string,cssModule:l.a.object},p=function(t){var e=t.className,a=t.cssModule,r=t.tag,i=Object(o.a)(t,["className","cssModule","tag"]),l=Object(u.j)(d()(e,"modal-footer"),a);return s.a.createElement(r,Object(n.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},867:function(t,e,a){"use strict";a.r(e);var n=a(104),o=a(38),r=a(143),s=a(14),i=a(15),l=a(18),c=a(16),d=a(17),u=a(8),m=a(0),p=a.n(m),g=a(25),h=a(3),S=a(108),b=a(117),E=a(127),f=a(118),w=a(111),x=a(232),C=a(166),j=a(217),y=a(114),v=a(126),D=a(241),k=a(167),O=(a(37),a(2)),T=a(40),P=(a(198),{});P.productbacklog=a(393);var U=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).toggleActionStatus=function(){a.setState(function(t){return{modalActionStatus:!t.modalActionStatus}})},a.toggleAdd=function(){a.setState(function(t){return{modalAdd:!t.modalAdd}})},a.toastId=null,a.notify=function(){return a.toastId=Object(T.a)("Processing... please wait...",{autoClose:!1})},a.success=function(){return T.a.update(a.toastId,{render:"Success",type:T.a.TYPE.SUCCESS,autoClose:3e3})},a.failed=function(){return T.a.update(a.toastId,{render:"Failed",type:T.a.TYPE.ERROR,autoClose:3e3})},a.toggleEdit=function(t){var e=t.currentTarget.dataset.id,n=t.currentTarget.dataset.title,o=t.currentTarget.dataset.role,r=t.currentTarget.dataset.want,s=t.currentTarget.dataset.so,i=t.currentTarget.dataset.priority,l=t.currentTarget.dataset.estimation,c=t.currentTarget.dataset.sprint,d=t.currentTarget.dataset.status;a.setState(function(t){return{modalEdit:!t.modalEdit,updateId:e,title:n,role:o,want:r,so:s,priority:i,estimation:l,sprint:c,status:d,search:"",currentSearch:"",positionsort:""}})},a.toggleSend=function(){a.setState(function(t){return{modalSend:!t.modalSend}})},a.onTextboxChangeRole=function(t){a.setState({role:t.target.value})},a.onTextboxChangeWant=function(t){a.setState({want:t.target.value})},a.onTextboxChangeSo=function(t){a.setState({so:t.target.value})},a.onTextboxChangePriority=function(t){a.setState({priority:t.target.value})},a.onTextboxChangeEstimation=function(t){a.setState({estimation:t.target.value})},a.onTextboxChangeTitle=function(t){a.setState({title:t.target.value})},a.onTextboxChangeSprint=function(t){a.setState({sprint:t.target.value})},a.onTextboxChangeStatus=function(t){a.setState({status:t.target.value})},a.onTextboxChangeSearch=function(t){a.setState({search:t.target.value})},a.handleAdd=function(){var t=new P.productbacklog.ProductBacklogClient("https://www.overlead.co");a.notify();var e=new P.productbacklog.AddNewProductBacklogReq;e.setTitle(a.state.title),e.setRequesterid(Object(O.a)("userId")),e.setProjectid(Object(O.a)("currentProject")),e.setRole(a.state.role),e.setWant(a.state.want),e.setSo(a.state.so),e.setAccesstoken(Object(O.a)("accessToken")),e.setPriority(a.state.priority),e.setEstimation(a.state.estimation),e.setSprintid(a.state.sprint),e.setStatusbacklog("To do");var n=Object(u.a)(Object(u.a)(a));t.addNewProductBacklog(e,{},function(t,e){t?(console.log(t),console.log("error")):"SUCCESS"==e.getStatus()?(a.toggleAdd(),n.success(),-1!==a.state.title.indexOf(n.state.currentSearch)&&(a.setState(function(t){var n,s;return{currentData:[].concat(Object(r.a)(t.currentData),[(n={id:e.getProductbacklogid(),title:a.state.title,role:a.state.role,want:a.state.want,so:a.state.so,priority:a.state.priority,estimation:a.state.estimation},Object(o.a)(n,"id",e.getProductbacklogid()),Object(o.a)(n,"sprint",a.state.sprint),Object(o.a)(n,"status",a.state.status),n)]),data:[].concat(Object(r.a)(t.data),[(s={id:e.getProductbacklogid(),title:a.state.title,role:a.state.role,want:a.state.want,so:a.state.so,priority:a.state.priority,estimation:a.state.estimation},Object(o.a)(s,"id",e.getProductbacklogid()),Object(o.a)(s,"sprint",a.state.sprint),Object(o.a)(s,"status",a.state.status),s)]),title:"",role:"",want:"",so:"",priority:"",estimation:"",sprint:""}}),"titleUp"==a.state.positionSort&&a.handleSortTitleUp(),"titleDown"==a.state.positionSort&&a.handleSortTitleDown(),"asUp"==a.state.positionSort&&a.handleSortAsUp(),"asDown"==a.state.positionSort&&a.handleSortAsDown(),"priorityUp"==a.state.positionSort&&a.handleSortPriorityUp(),"priorityDown"==a.state.positionSort&&a.handleSortPriorityDown(),"estimationUp"==a.state.positionSort&&a.handleSortEstimationUp(),"estimationDown"==a.state.positionSort&&a.handleSortEstimationDown(),"sprintUp"==a.state.positionSort&&a.handleSortSprintUp(),"sprintDown"==a.state.positionSort&&a.handleSortSprintDown())):n.failed()})},a.handleDelete=function(t){a.notify();var e=new P.productbacklog.ProductBacklogClient("https://www.overlead.co"),n=new P.productbacklog.DeleteProductBacklogReq;n.setRequesterid(Object(O.a)("userId")),n.setProjectid(Object(O.a)("currentProject")),n.setProductbacklogid(t),n.setAccesstoken(Object(O.a)("accessToken"));var o=Object(u.a)(Object(u.a)(a));e.deleteProductBacklog(n,{},function(e,n){e?console.log(e):"SUCCESS"==n.getStatus()?(o.success(),a.setState(function(e){return{data:Object(r.a)(e.data.filter(function(e){return e.id!==t})),currentData:Object(r.a)(e.currentData.filter(function(e){return e.id!==t}))}})):o.failed()})},a.handleUpdate=function(t){console.log("handleUpdate"),a.notify();var e=new P.productbacklog.ProductBacklogClient("https://www.overlead.co");console.log("so"+a.state.so);var o=new P.productbacklog.UpdateProductBacklogReq;o.setRequesterid(Object(O.a)("userId")),o.setAccesstoken(Object(O.a)("accessToken")),o.setProjectid(Object(O.a)("currentProject")),o.setProductbacklogid(a.state.updateId),o.setRole(a.state.role),o.setWant(a.state.want),o.setSo(a.state.so),o.setPriority(a.state.priority),o.setEstimation(a.state.estimation),o.setSprintid(a.state.sprint),o.setStatusbacklog("To do");var r=Object(u.a)(Object(u.a)(a));e.updateProductBacklog(o,{},function(t,e){if(t)console.log(t);else if("SUCCESS"==e.getStatus()){r.success();var o=a.state.data.map(function(t){return t.id==a.state.updateId?Object(n.a)({},t,{role:a.state.role,want:a.state.want,priority:a.state.priority,estimation:a.state.estimation,status:a.state.status,sprint:a.state.sprint,so:a.state.so}):t});"titleUp"==a.state.positionSort&&a.handleSortTitleUp(),"titleDown"==a.state.positionSort&&a.handleSortTitleDown(),"asUp"==a.state.positionSort&&a.handleSortAsUp(),"asDown"==a.state.positionSort&&a.handleSortAsDown(),"priorityUp"==a.state.positionSort&&a.handleSortPriorityUp(),"priorityDown"==a.state.positionSort&&a.handleSortPriorityDown(),"estimationUp"==a.state.positionSort&&a.handleSortEstimationUp(),"estimationDown"==a.state.positionSort&&a.handleSortEstimationDown(),"sprintUp"==a.state.positionSort&&a.handleSortSprintUp(),"sprintDown"==a.state.positionSort&&a.handleSortSprintDown(),a.setState(function(t){return{data:o,currentData:o,modalEdit:!1}})}else r.failed()})},a.handleSend=function(t){var e=new P.productbacklog.ProductBacklogClient("https://www.overlead.co");a.notify();var n=a.state.startDate,o=n.getMinutes()+"-"+n.getHours()+"-"+n.getDate()+"-"+n.getMonth()+"-"+n.getFullYear(),s=(n=a.state.endDate).getMinutes()+"-"+n.getHours()+"-"+n.getDate()+"-"+n.getMonth()+"-"+n.getFullYear(),i=new P.productbacklog.SendToSprintBacklogReq;i.setRequesterid(Object(O.a)("userId")),i.setProjectid(Object(O.a)("currentProject")),i.setProductbacklogid(t),i.setStart(o),i.setDeadline(s),i.setTeamid(Object(O.a)("teamId")),i.setAccesstoken(Object(O.a)("accessToken"));var l=Object(u.a)(Object(u.a)(a));e.sendToSprintBacklog(i,{},function(e,a){if(e)console.log(e);else if("SUCCESS"==a.getStatus()){l.success();var n=o.split("-");n[1]>12?(n[1]=n[1]-12,o=(1==n[1].length?"0"+n[1]:n[1])+":"+(1==n[0].length?"0"+n[0]:n[0])+"PM\xa0\xa0"+n[2]+"/"+(parseInt(n[3],10)+1)+"/"+n[4]):o=(1==n[1].length?"0"+n[1]:n[1])+":"+(1==n[0].length?"0"+n[0]:n[0])+"AM\xa0\xa0"+n[2]+"/"+(parseInt(n[3],10)+1)+"/"+n[4];var s={};console.log(t),l.setState(function(e){return{data:Object(r.a)(e.data.filter(function(e){return e.id!=t||(s=Object.assign({},e,{start:o}),!1)})),currentData:Object(r.a)(e.currentData.filter(function(e){return e.id!==t}))}});var i=l.props.sprintbacklogs;void 0==i&&(i=[]),s!={}&&i.push(s),l.props.dispatch(Object(h.w)(i))}else l.failed()})},a.onChangeStartDate=function(t){a.setState({startDate:t})},a.onChangeEndDate=function(t){a.setState({endDate:t})},a.handleSearch=function(){var t=Object(u.a)(Object(u.a)(a)),e=t.state.data.filter(function(e){return-1!==e.title.indexOf(t.state.search)});a.setState({currentData:e,currentSearch:a.state.search})},a.handleSortTitleDown=function(){var t=a.state.currentData.sort(function(t,e){return t.title.localeCompare(e.title)});a.setState({currentData:t.reverse(),positionSort:"titleDown"})},a.handleSortTitleUp=function(){a.setState({currentData:a.state.currentData.sort(function(t,e){return t.title.localeCompare(e.title)}),positionSort:"titleUp"})},a.handleSortAsDown=function(){var t=a.state.currentData.sort(function(t,e){return t.role.localeCompare(e.role)});a.setState({currentData:t.reverse(),positionSort:"asDown"})},a.handleSortAsUp=function(){a.setState({currentData:a.state.currentData.sort(function(t,e){return t.role.localeCompare(e.role)}),positionSort:"asUp"})},a.handleSortPriorityDown=function(){var t=a.state.currentData.sort(function(t,e){return t.priority-e.priority});a.setState({currentData:t.reverse(),positionSort:"priorityDown"})},a.handleSortPriorityUp=function(){a.setState({currentData:a.state.currentData.sort(function(t,e){return t.priority-e.priority}),positionSort:"priorityUp"})},a.handleSortEstimationDown=function(){var t=a.state.currentData.sort(function(t,e){return t.estimation-e.estimation});a.setState({currentData:t.reverse(),positionSort:"estimationDown"})},a.handleSortEstimationUp=function(){a.setState({currentData:a.state.currentData.sort(function(t,e){return t.estimation-e.estimation}),positionSort:"estimationUp"})},a.handleSortSprintDown=function(){var t=a.state.currentData.sort(function(t,e){return t.sprint-e.sprint});a.setState({currentData:t.reverse(),positionSort:"sprintDown"})},a.handleSortSprintUp=function(){a.setState({currentData:a.state.currentData.sort(function(t,e){return t.sprint-e.sprint}),positionSort:"sprintUp"})},a.handleShowAll=function(){a.setState({currentData:a.state.data,search:""})},a.state={data:[],currentData:[],modalAdd:!1,modalEdit:!1,modalSend:!1,id:"",role:"",want:"",so:"",priority:"",estimation:"",sprint:"",status:"",title:"",startDate:new Date,endDate:new Date,backlogSendId:"",search:"",currentSearch:"",positionsort:""},a}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this.state.endDate;t.setDate(t.getDate()+15),this.setState({endDate:t});var e=new P.productbacklog.ProductBacklogClient("https://www.overlead.co"),a=new P.productbacklog.GetAllProductBacklogReq;a.setRequesterid(Object(O.a)("userId")),a.setAccesstoken(Object(O.a)("accessToken")),a.setProjectid(Object(O.a)("currentProject"));var n=e.getAllProductBacklog(a,{}),o=this;n.on("data",function(t){"SUCCESS"==t.getStatus()&&o.setState(function(e){return{data:[].concat(Object(r.a)(e.data),[{id:t.getProductbacklogid(),title:t.getTitle(),role:t.getRole(),want:t.getWant(),so:t.getSo(),priority:t.getPriority(),estimation:t.getEstimation(),sprint:t.getSprintid(),status:t.getStatusbacklog()}]),currentData:[].concat(Object(r.a)(e.currentData),[{id:t.getProductbacklogid(),title:t.getTitle(),role:t.getRole(),want:t.getWant(),so:t.getSo(),priority:t.getPriority(),estimation:t.getEstimation(),sprint:t.getSprintid(),status:t.getStatusbacklog()}])}})}),n.on("status",function(t){0!=t.code&&console.log(t)}),n.on("end",function(t){console.log("end"),console.log(t)})}},{key:"componentDidUpdate",value:function(){console.log("didupdate"),console.log(this.state.data)}},{key:"render",value:function(){console.log(this.state.data),console.log(this.state.data);var t=this;return p.a.createElement(S.a,null,p.a.createElement(b.a,null,p.a.createElement(S.a,null,p.a.createElement(b.a,{xs:"2",md:"2"},p.a.createElement(E.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search",value:t.state.search,onChange:t.onTextboxChangeSearch})),p.a.createElement(b.a,{xs:"0",md:"0"},p.a.createElement(f.a,{type:"submit",size:"sm",color:"success",onClick:t.handleSearch},p.a.createElement("i",{class:"fa fa-search"}))),p.a.createElement(b.a,{xs:"3",md:"3"},p.a.createElement(f.a,{color:"link",onClick:t.handleShowAll},"show all"))),p.a.createElement(w.a,null,p.a.createElement("div",{class:"table-responsive"},p.a.createElement("table",{class:"table table-lg"},p.a.createElement("thead",{class:"thead"},p.a.createElement("tr",{class:"bg-primary"},p.a.createElement("th",null,"Title",p.a.createElement("i",{class:"fa fa-arrow-up",onClick:t.handleSortTitleUp}),p.a.createElement("i",{class:"fa fa-arrow-down",onClick:t.handleSortTitleDown})),p.a.createElement("th",null,"As a...",p.a.createElement("i",{class:"fa fa-arrow-up",onClick:t.handleSortAsUp}),p.a.createElement("i",{class:"fa fa-arrow-down",onClick:t.handleSortAsDown})),p.a.createElement("th",null,"I want to be able to..."),p.a.createElement("th",null,"So that..."),p.a.createElement("th",null,"Priority",p.a.createElement("i",{class:"fa fa-arrow-up",onClick:t.handleSortPriorityUp}),p.a.createElement("i",{class:"fa fa-arrow-down",onClick:t.handleSortPriorityDown})),p.a.createElement("th",null,"Estimation",p.a.createElement("i",{class:"fa fa-arrow-up",onClick:t.handleSortEstimationUp}),p.a.createElement("i",{class:"fa fa-arrow-down",onClick:t.handleSortEstimationDown})),p.a.createElement("th",null,p.a.createElement("div",null,p.a.createElement(f.a,{color:"primary",size:"sm",className:"mt-3",onClick:t.toggleAdd},p.a.createElement("i",{class:"fa fa-plus-square"}),this.props.buttonLabel),p.a.createElement(x.a,{size:"lg",isOpen:t.state.modalAdd,toggle:t.toggleAdd,className:t.props.className},p.a.createElement(C.a,{toggle:t.toggleAdd},"ProductBacklog"),p.a.createElement(j.a,null,p.a.createElement(y.a,{className:"form-horizontal"},p.a.createElement(v.a,{row:!0},p.a.createElement(b.a,{md:"3"},p.a.createElement(D.a,{htmlFor:"text-input"},"Title...")),p.a.createElement(b.a,{xs:"12",md:"9"},p.a.createElement(E.a,{type:"text",id:"title",name:"title",placeholder:"Title...",value:t.state.title,onChange:t.onTextboxChangeTitle}))),p.a.createElement(v.a,{row:!0},p.a.createElement(b.a,{md:"3"},p.a.createElement(D.a,{htmlFor:"text-input"},"As a...")),p.a.createElement(b.a,{xs:"12",md:"9"},p.a.createElement(E.a,{type:"text",id:"as",name:"as",placeholder:"As a...",value:t.state.role,onChange:t.onTextboxChangeRole}))),p.a.createElement(v.a,{row:!0},p.a.createElement(b.a,{md:"3"},p.a.createElement(D.a,{htmlFor:"text-input"},"I want to be able to...")),p.a.createElement(b.a,{xs:"12",md:"9"},p.a.createElement(E.a,{type:"text",id:"want",name:"want",placeholder:"I want to be able to...",value:t.state.want,onChange:t.onTextboxChangeWant}))),p.a.createElement(v.a,{row:!0},p.a.createElement(b.a,{md:"3"},p.a.createElement(D.a,{htmlFor:"textarea-input"},"So that...")),p.a.createElement(b.a,{xs:"12",md:"9"},p.a.createElement(E.a,{type:"textarea",name:"so",id:"so",rows:"9",placeholder:"Content...",value:t.state.so,onChange:t.onTextboxChangeSo}))),p.a.createElement(v.a,{row:!0},p.a.createElement(b.a,{md:"1"},p.a.createElement(D.a,{htmlFor:"text-input"},"Priority")),p.a.createElement(b.a,{xs:"12",md:"1"},p.a.createElement(E.a,{type:"text",name:"priority",id:"priority",rows:"9",value:t.state.priority,onChange:t.onTextboxChangePriority})),p.a.createElement(b.a,{md:"2"}),p.a.createElement(b.a,{md:"1"},p.a.createElement(D.a,{htmlFor:"text-input"},"Estimation")),p.a.createElement(b.a,{xs:"12",md:"1"},p.a.createElement(E.a,{type:"text",name:"estimation",id:"estimation",rows:"9",value:t.state.estimation,onChange:t.onTextboxChangeEstimation})),p.a.createElement(b.a,{md:"2"}),p.a.createElement(b.a,{md:"1"},p.a.createElement(D.a,{htmlFor:"text-input"},"Sprint")),p.a.createElement(b.a,{xs:"12",md:"1"},p.a.createElement(E.a,{type:"text",name:"sprint",id:"sprint",rows:"9",value:t.state.sprint,onChange:t.onTextboxChangeSprint}))))),p.a.createElement(k.a,null,p.a.createElement(f.a,{color:"primary",onClick:t.handleAdd},"Submit")," ",p.a.createElement(f.a,{color:"secondary",onClick:t.toggleAdd},"Cancel"))))))),p.a.createElement("tbody",null,this.state.currentData.map(function(e,a){return p.a.createElement("tr",{key:a},p.a.createElement("td",null," ",e.title),p.a.createElement("td",null,e.role),p.a.createElement("td",null,e.want),p.a.createElement("td",null,e.so),p.a.createElement("td",null,e.priority),p.a.createElement("td",null,e.estimation),p.a.createElement("td",null,p.a.createElement("div",{"data-id":e.id,onClick:function(){return t.handleSend(e.id)}},p.a.createElement(f.a,{type:"submit",size:"sm",color:"success"},p.a.createElement("i",{class:"fa fa-share-square"}," Move to Sprint Backlog"))),p.a.createElement("div",{"data-id":e.id,"data-title":e.title,"data-role":e.role,"data-want":e.want,"data-so":e.so,"data-priority":e.priority,"data-estimation":e.estimation,"data-sprint":e.sprint,"data-status":e.status,onClick:t.toggleEdit},p.a.createElement(f.a,{color:"warning",size:"sm"},p.a.createElement("i",{class:"fa fa-edit"}),t.props.buttonLabel)),p.a.createElement(x.a,{size:"lg",isOpen:t.state.modalEdit,toggle:t.toggleEdit,className:t.props.className},p.a.createElement(C.a,{toggle:t.toggleEdit},"ProductBacklog"),p.a.createElement(j.a,null,p.a.createElement(y.a,{className:"form-horizontal"},p.a.createElement(v.a,{row:!0},p.a.createElement(b.a,{md:"3"},p.a.createElement(D.a,{htmlFor:"text-input"},"As a...")),p.a.createElement(b.a,{xs:"12",md:"9"},p.a.createElement(E.a,{type:"text",id:"text-input",name:"text-input",placeholder:"As a......",value:t.state.role,onChange:t.onTextboxChangeRole}))),p.a.createElement(v.a,{row:!0},p.a.createElement(b.a,{md:"3"},p.a.createElement(D.a,{htmlFor:"text-input"},"I want to be able to...")),p.a.createElement(b.a,{xs:"12",md:"9"},p.a.createElement(E.a,{type:"text",id:"text-input",name:"text-input",placeholder:"I want to be able to...",value:t.state.want,onChange:t.onTextboxChangeWant}))),p.a.createElement(v.a,{row:!0},p.a.createElement(b.a,{md:"3"},p.a.createElement(D.a,{htmlFor:"textarea-input"},"So that...")),p.a.createElement(b.a,{xs:"12",md:"9"},p.a.createElement(E.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Content...",value:t.state.so,onChange:t.onTextboxChangeSo}))),p.a.createElement(v.a,{row:!0},p.a.createElement(b.a,{md:"1"},p.a.createElement(D.a,{htmlFor:"text-input"},"Priority")),p.a.createElement(b.a,{xs:"12",md:"1"},p.a.createElement(E.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:t.state.priority,onChange:t.onTextboxChangePriority})),p.a.createElement(b.a,{md:"2"}),p.a.createElement(b.a,{md:"1"},p.a.createElement(D.a,{htmlFor:"text-input"},"Estimation")),p.a.createElement(b.a,{xs:"12",md:"1"},p.a.createElement(E.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:t.state.estimation,onChange:t.onTextboxChangeEstimation})),p.a.createElement(b.a,{md:"2"}),p.a.createElement(b.a,{md:"1"},p.a.createElement(D.a,{htmlFor:"text-input"},"Sprint")),p.a.createElement(b.a,{xs:"12",md:"1"},p.a.createElement(E.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:t.state.sprint,onChange:t.onTextboxChangeSprint}))))),p.a.createElement(k.a,null,p.a.createElement("div",{"data-id":e.id,onClick:t.handleUpdate},p.a.createElement(f.a,{color:"primary"},"Submit"))," ",p.a.createElement(f.a,{color:"secondary",onClick:t.toggleEdit},"Cancel"))),p.a.createElement("div",{"data-id":e.id,onClick:function(){return t.handleDelete(e.id)}},p.a.createElement(f.a,{size:"sm",color:"danger"},p.a.createElement("i",{class:"fa fa-trash"})))))})))))))}}]),e}(m.Component);e.default=Object(g.b)(function(t){console.log("mapStateToProps");var e=t.changeStatusProject;return{currentProject:e.projectId,sprintbacklogs:e.sprintbacklogs,sprints:e.sprints}})(U)}}]);
//# sourceMappingURL=38.0cba8c7e.chunk.js.map