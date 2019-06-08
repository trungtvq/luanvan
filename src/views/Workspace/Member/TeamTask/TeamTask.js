import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Card,
  Button,
  Col,
  Input,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { connect } from 'react-redux';

import cookie from 'react-cookies';
import Chat from '../../../../service/chat'

import DatePicker from "react-datepicker";
import {
  getFromStorage,
  setInStorage
} from '../../../../service/storage'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const proto = {};
proto.teamtask = require('./../../../../gRPC/teamtask/teamtask_grpc_web_pb');
proto.sprintbacklog = require('./../../../../gRPC/sprintbacklog/sprintbacklog_grpc_web_pb');

class TeamTask extends Component {
  constructor(props) {
    super(props);


    this.state = {
      collapse: true,
      fadeIn: true,
      startDate: new Date(),
      endDate: new Date(),
      data: [],
      modalAdd: false,
      modalEdit: false,
      title: '',
      description: '',
      priority: "",      
      assignee: "",
      comment: '',
      status: "",
      review: "",
      updateId:"",
      status:"",
      mem:getFromStorage('members'),
      sprintBacklog:"",
      sprint:"",

    };
  }
  toastId = null;

  notify = () => this.toastId = toast("Processing... please wait...", { autoClose: false });

  success = () => toast.update(this.toastId, { render: "Success", type: toast.TYPE.SUCCESS, autoClose: 3000 });
  failed = () => toast.update(this.toastId, { render: "Failed", type: toast.TYPE.ERROR, autoClose: 3000 });

  onChangeStartDate = (date) => {
    this.setState({
      startDate: date
    });
  }
  onChangeEndDate = (date) => {
    this.setState({
      endDate: date
    });
  }
  
  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }
  toggleAdd = () => {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }
  toggleAddOpen = () => {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd,
      title: '',
      description: '',
      priority: "",      
      assignee: "",
      comment: '',
      status: "",
      review: "",
      updateId:"",
      status:"",
    }));
  }
  toggleEdit = () => {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }
  toggleEditOpen = (event) => {
    let updateId=event.currentTarget.dataset.id
    let   title=event.currentTarget.dataset.title
    let  description=event.currentTarget.dataset.description
    let  start=event.currentTarget.dataset.start
    let   deadline=event.currentTarget.dataset.deadline
    let   priority=event.currentTarget.dataset.priority
    let   status=event.currentTarget.dataset.status
    let   assignee=event.currentTarget.dataset.assignee
    let sprintBacklog=event.currentTarget.dataset.sprintbacklog
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit,
      updateId,
      title,
      description,
      start,
      deadline,
      priority,
      status,
      assignee,
      sprintBacklog
    }));
  }

  onTextboxChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }
  onTextboxChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  }
  onTextboxChangePriority = (event) => {
    this.setState({
      priority: event.target.value,
    });

  }
  onTextboxChangeSprintBacklog = (event) => {
    this.setState({
      sprintBacklog: event.target.value,
    });

  }
  onTextboxChangeSprint = (event) => {
    this.setState({
      sprint: event.target.value,   
    });
    console.log(event.target.value)
    console.log(this.props.sprintbacklogs)
  }

 
  onTextboxChangeAssignee = (event) => {
    this.setState({
      assignee: event.target.value,
    });
  }
  onTextboxChangeComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  }
  onTextboxChangeReview = (event) => {
    this.setState({
      review: event.target.value,
    });
  }
  onTextboxChangeStatus = (event) => {
    this.setState({
      status: event.target.value,
    });
  }
  loadAllSprint=()=>{
    const sprintbacklogService = new proto.sprintbacklog.SprintBacklogClient('https://www.overlead.co');
    var metadata = {};
    var GetAllSprintBacklogReq = new proto.sprintbacklog.GetAllSprintBacklogReq();
    GetAllSprintBacklogReq.setRequesterid(getFromStorage("userId"));
    GetAllSprintBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllSprintBacklogReq.setProjectid(getFromStorage("currentProject"));
    GetAllSprintBacklogReq.setTeamid(getFromStorage("teamId"));
    let sprints=[]
    var response = sprintbacklogService.getAllSprintBacklog(GetAllSprintBacklogReq, metadata)
    let that = this
    
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        let arr = response.getStart().split('-');
        let start = ""
        let end = ""
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }



        arr = response.getDeadline().split('-')
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }

        sprints.push({
          id: response.getBacklogid(),
          title: response.getTitle(),
          role: response.getRole(),
          want: response.getWant(),
          so: response.getSo(),
          priority: response.getPriority(),
          estimation: response.getEstimation(),
          sprint: response.getSprintid(),
          status: response.getStatusbacklog(),
          start: start,
          deadline: end,
        })      
      }
    })
    response.on('status', function (status) {
      if (status.code!=0) console.log(status)
      setInStorage("sprintbacklog",sprints)

    });
    response.on('end', function (end) {
      console.log("end")
      console.log(end)
    });

  }
  loadAllTask=()=>{
    
    let end = this.state.endDate;
    end.setDate(end.getDate() + 15);
    this.setState({
      endDate: end
    })
//this.notify()
    let d = this.state.startDate;
    let start = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    d = this.state.endDate;
     end = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

    const teamtaskService = new proto.teamtask.TeamTaskClient('https://www.overlead.co');
    var metadata = {};

    var GetAllTeamTaskReq = new proto.teamtask.GetAllTeamTaskReq();
    GetAllTeamTaskReq.setRequesterid(getFromStorage("userId"));
    GetAllTeamTaskReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllTeamTaskReq.setProjectid(getFromStorage("currentProject"));
    GetAllTeamTaskReq.setTeamid(getFromStorage("teamId"));
    GetAllTeamTaskReq.setSprintid("this.state.sprintId");
    
    var response = teamtaskService.getAllTeamTask(GetAllTeamTaskReq, metadata)
    let that = this
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        let arr = response.getStart().split('-');
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }

        arr = response.getDeadline().split('-')
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }

        //processing assign array
          let str=response.getAssigneearray()
          str=str.slice(1,-1)
          arr=str.split(', ')

      

          // that.state.mem.map(p=>{
          //   if (arr.indexOf(p.id)!=-1){
          //     console.log("exist")
          //     arr[arr.indexOf(p.id)]=p.username
          //   }
          //   return p
          // })

        that.setState(prevState => ({
          data: [...prevState.data,
          {
            id: response.getTeamtaskid(),
            title: response.getTitle(),
            description: response.getDescription(),
            assignee: arr,
            priority: response.getPriority(),
            review: response.getReview(),
            comment: response.getComment(),
            status: response.getStatusteamtask(),
            start: start,
            deadline: end,
            sprintBacklog: response.getSprintbacklogid()
          }]
        }));

      }
    })
    response.on('status', function (status) {
      if (status.code!=0) console.log(status)
 
    });
    response.on('end', function (end) {
      console.log("end")
      console.log(end)
    });
  }
  componentDidMount() {   
    this.loadAllSprint()
    this.loadAllTask()

  }
  handleAdd = () => {
    console.log("handle add")
    let sprint=this.state.sprintBacklog
    console.log(getFromStorage("sprintbacklog").length>0)
    console.log(sprint=="")
    console.log(getFromStorage('sprints')[0])
    if (sprint=="" && getFromStorage("sprintbacklog").length>0){
      sprint=getFromStorage('sprints')[0].title
    }
    this.notify()
    let d = this.state.startDate;
    let start = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    d = this.state.endDate;
    let end = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

    const teamtaskService = new proto.teamtask.TeamTaskClient('https://www.overlead.co');
    var metadata = {};

    var AddNewTeamTaskReq = new proto.teamtask.AddNewTeamTaskReq();
    AddNewTeamTaskReq.setRequesterid(getFromStorage("userId"));
    AddNewTeamTaskReq.setAccesstoken(getFromStorage("accessToken"));
    AddNewTeamTaskReq.setProjectid(getFromStorage("currentProject"));
    AddNewTeamTaskReq.setTeamid(getFromStorage("teamId"));
    AddNewTeamTaskReq.setPriority(this.state.priority);
    AddNewTeamTaskReq.setStart(start);
    AddNewTeamTaskReq.setDeadline(end);
    AddNewTeamTaskReq.setAssigneearray(this.state.assignee)
    AddNewTeamTaskReq.setComment("");
    AddNewTeamTaskReq.setStatus("Todo");
    AddNewTeamTaskReq.setReview("");
    AddNewTeamTaskReq.setTitle(this.state.title);
    AddNewTeamTaskReq.setDescription(this.state.description);
    AddNewTeamTaskReq.setSprintid(this.state.sprint);
    AddNewTeamTaskReq.setSprintbacklogid(this.state.sprintbacklog);

    
    var response = teamtaskService.addNewTeamTask(AddNewTeamTaskReq, metadata)
    let that = this
    response.on('data', function (response) {
      console.log(response.getStatus())
      if (response.getStatus() == "SUCCESS") {
        that.toggleAdd()
        that.success()
        let arr = start.split('-');
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }



        arr = end.split('-')
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }

        that.setState(prevState => ({
          data: [...prevState.data,
          {
            id: response.getTeamtaskid(),
            title: that.state.title,
            description: that.state.description,
            assignee: that.state.assignee,
            priority: that.state.priority,
            review: "",
            comment: "",
            status: "Todo",
            start: start,
            deadline: end,
            sprintBacklog:sprint,
          }]
        }));

      }else{
        that.failed()
      }
    })
    response.on('status', function (status) {
      if (status.code!=0) console.log(status)

    });
    response.on('end', function (end) {
      console.log("end")
      console.log(end)
    });

  };
  handleDelete = (event) => {
    let id = event.currentTarget.dataset.id
    console.log("delete")
    const teamtaskService = new proto.teamtask.TeamTaskClient('https://www.overlead.co');
    this.notify()
    var metadata = {};
    var CancelTeamTaskReq = new proto.teamtask.CancelTeamTaskReq();
    CancelTeamTaskReq.setRequesterid(getFromStorage("userId"));
    CancelTeamTaskReq.setProjectid(getFromStorage("currentProject"));
    CancelTeamTaskReq.setAccesstoken(getFromStorage("accessToken"));
    CancelTeamTaskReq.setTeamtaskid(id)
    CancelTeamTaskReq.setTeamid(getFromStorage("teamId"))
    let that=this
    teamtaskService.cancelTeamTask(CancelTeamTaskReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error")
      } else { //if success
        //get response
        if (response.getStatus() == "SUCCESS") {
            that.success()
            let newData=that.state.data;
            that.setState({
              data:newData.filter(p=>{
                if (p.id==id) return false
                return true
              })
            })
        }else {
          that.failed()
        }
       
      }
    });
  };
  handleAssignToMe=(event)=>{
    let id = event.currentTarget.dataset.id
    console.log("handleAssignToMe")
    const teamtaskService = new proto.teamtask.TeamTaskClient('https://www.overlead.co');
    this.notify()
    var metadata = {};
    var RegisterTeamTaskReq = new proto.teamtask.RegisterTeamTaskReq();
    RegisterTeamTaskReq.setRequesterid(getFromStorage("userId"));
    RegisterTeamTaskReq.setProjectid(getFromStorage("currentProject"));
    RegisterTeamTaskReq.setAccesstoken(getFromStorage("accessToken"));
    RegisterTeamTaskReq.setTeamtaskid(id)
    RegisterTeamTaskReq.setTeamid(getFromStorage("teamId"))
    RegisterTeamTaskReq.setAssigner(getFromStorage("username"))
    let that=this
    teamtaskService.registerTeamTask(RegisterTeamTaskReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error")
      } else { //if success
        //get response
        if (response.getStatus() == "SUCCESS") {
            that.success()
            let newData=that.state.data;
            that.setState({
              data:newData.map(p=>{
                if (p.id==id){
                  return Object.assign(p,{assignee:getFromStorage("username")})
                } 
                return p
              })
            })
        }else {
          that.failed()
        }
       
      }
    });
  }
  
  //TODO: update at assign
  handleUpdate = () => {
    this.notify()
    let d = this.state.startDate;
    let start = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    d = this.state.endDate;
    let end = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

    const teamtaskService = new proto.teamtask.TeamTaskClient('https://www.overlead.co');
    var metadata = {};

    var UpdateTeamTaskReq = new proto.teamtask.UpdateTeamTaskReq();
    UpdateTeamTaskReq.setRequesterid(getFromStorage("userId"));
    UpdateTeamTaskReq.setAccesstoken(getFromStorage("accessToken"));
    UpdateTeamTaskReq.setProjectid(getFromStorage("currentProject"));
    UpdateTeamTaskReq.setTeamid(getFromStorage("teamId"));
    UpdateTeamTaskReq.setTeamtaskid(this.state.updateId);

    UpdateTeamTaskReq.setPriority(this.state.priority);
    UpdateTeamTaskReq.setStart(start);
    UpdateTeamTaskReq.setDeadline(end);
    UpdateTeamTaskReq.setAssigneearray(this.state.assignee)
    UpdateTeamTaskReq.setComment(this.state.comment);
    UpdateTeamTaskReq.setStatus(this.state.status);
    UpdateTeamTaskReq.setReview(this.state.review);
    UpdateTeamTaskReq.setTitle(this.state.title);
    UpdateTeamTaskReq.setDescription(this.state.description);
    UpdateTeamTaskReq.setSprintid(getFromStorage("currentSprintId"));
    UpdateTeamTaskReq.setSprintbacklogid(this.state.sprintBacklog)
    var response = teamtaskService.updateTeamTask(UpdateTeamTaskReq, metadata)
    let that = this
    response.on('data', function (response) {
      console.log(response.getStatus())
      if (response.getStatus() == "SUCCESS") {
        that.toggleEdit()
        that.success()
        let arr = start.split('-');
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }



        arr = end.split('-')
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }



        
        let newData=that.state.data        
        that.setState({
          data:newData.map(p=>{
            if (p.id==that.state.updateId)    {
              return {
                id: that.state.updateId,
                title: that.state.title,
                description: that.state.description,
                assignee: that.state.assignee,
                priority: that.state.priority,
                review: "",
                comment: "",
                status: that.state.status,
                start: start,
                deadline: end,
                sprintBacklog:that.state.sprintBacklog
              }
            }                 
            
            return p
          }) 
        });

      }else{
        that.failed()
      }
    })
    response.on('status', function (status) {
      if (status.code!=0) console.log(status)

    });
    response.on('end', function (end) {
      console.log("end")
      console.log(end)
    });

  };
 componentDidUpdate(){
   console.log("didupdate")
   console.log(this.state.sprintbacklog)
   console.log(this.state.sprint)
 }

  render() {    
    let that = this;
    let sprints=getFromStorage('sprints')
    console.log("sprints")
    console.log(sprints)
    return (
      <div>
        <Chat />
      <Row>
        <Col>
          <Row>
            <Col xs="2" md="2">
              <Input type="text" id="text-input" name="text-input" placeholder="Search" />
            </Col>

            <Col xs="0" md="0">
              <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
            </Col>
          </Row>
          <Card>
            <div class="table-responsive">
              <table class="table table-lg">
                <thead class="thead">
                  <tr class="bg-primary">
                    <th>Title <i class="fa fa-sort"></i></th>
                    <th>Description <i class="fa fa-sort"></i></th>
                    <th>Sprint <i class="fa fa-sort"></i></th>
                    <th>Sprint Backlog <i class="fa fa-sort"></i></th>

                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Start day <i class="fa fa-sort"></i></th>
                    <th>Deadline <i class="fa fa-sort"></i></th>
                    <th>Assignee</th>
                    <th>Comment</th>
                    <th>Status</th>
                    <th>Review</th>
                    <th>
                      <div>
                        <Button color="primary" size="sm" className="mt-3" onClick={that.toggleAddOpen}><i class="fa fa-plus-square"></i>{this.props.buttonLabel}</Button>
                       
                        <Modal size="lg" isOpen={that.state.modalAdd} toggle={that.toggleAdd} className={that.props.className}>
                          <ModalHeader toggle={that.toggleAdd}>Team Task</ModalHeader>
                          <ModalBody>
                            <Form className="form-horizontal">
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">title</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="title" name="title" placeholder="title" value={that.state.title} onChange={that.onTextboxChangeTitle} />

                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="textarea-input">description</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="textarea" name="description" id="description" rows="9"
                                    placeholder="Content..." value={that.state.description} onChange={that.onTextboxChangeDescription} />
                                </Col>
                              </FormGroup>

                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Sprint</Label>
                                </Col>
                                <Col xs="12" md="3">
                                  <Input type="select" name="select" id="select"  onChange={that.onTextboxChangeSprint}>                                    
                                    { 
                                      (sprints!=undefined)?
                                      sprints.map(p=>{
                                        return(
                                          <option value={p.id}>{p.num}</option>
                                        )
                                      }):
                                      
                                        <option disable={true} value="">not have any sprint</option>
                                      
                                    }
                                  </Input>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Sprint Backlog</Label>
                                </Col>
                                <Col xs="12" md="3">
                                  <Input type="select" name="select" id="select"  onChange={that.onTextboxChangeSprintBacklog}>                                    
                                    { 
                                      (that.props.sprintbacklogs!=undefined)?
                                      that.props.sprintbacklogs.map(p=>
                                        p.sprint==that.state.sprint? 
                                          <option value={p.title}>{p.title}</option>
                                        :null
                                    ):
                                      
                                        <option disable={true} value="">not have any sprint backlog</option>
                                      
                                    }
                                  </Input>
                                </Col>
                              </FormGroup>


                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">priority</Label>
                                </Col>
                                <Col xs="12" md="3">
                                  <Input type="select" name="select" id="select"  onChange={that.onTextboxChangePriority}>
                                    <option value="0">Please select</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                  </Input>
                                </Col>
                              </FormGroup>

                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="date-input">Start  </Label>
                                </Col>
                                <Col xs="3" md="3">
                                  <DatePicker

                                    selected={that.state.startDate}
                                    timeInputLabel="Time:"
                                    onChange={that.onChangeStartDate}
                                    dateFormat="dd/MM/yyyy h:mm aa"
                                    showTimeInput
                                  /> </Col>
                              </FormGroup>

                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="date-input">Deadline </Label>
                                </Col>
                                <Col xs="3" md="3">
                                  <DatePicker


                                    selected={that.state.endDate}
                                    timeInputLabel="Time:"
                                    onChange={that.onChangeEndDate}
                                    dateFormat="dd/MM/yyyy h:mm aa"
                                    showTimeInput
                                  /> </Col>
                              </FormGroup>

                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Assignee</Label>
                                </Col>
                                <Col xs="12" md="3">
                                  <Input type="select" name="select" id="select" onChange={that.onTextboxChangeAssignee}>
                                  <option value="0">Please select</option>
                                    { (that.state.mem!=undefined)?
                                      that.state.mem.map(p=>{
                                        return(
                                          <option value={p.username}>{p.username}</option>
                                        )
                                      }):{
                                        
                                      }
                                    }
                                  </Input>
                                </Col>
                              </FormGroup>
                            </Form>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={that.handleAdd}>Submit</Button>{' '}
                            <Button color="secondary" onClick={that.toggleAdd}>Cancel</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                    </th>
                  </tr>
                </thead>





                <tbody>{this.state.data.map(function (item, key) {

                  return (
                    <tr key={key}>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.sprintBacklog}</td>
                      <td>{item.priority}</td>
                      <td>{item.start}</td>
                      <td>{item.deadline}</td>
                      <td>{item.assignee}</td>
                      <td>{item.comment}</td>
                      <td>{item.status}</td>
                      <td>{item.review}</td>
                      <td>
                        <div>
                          <div data-id={item.id} 
                           data-title={item.title} data-description={item.description}
                            data-priority={item.priority} data-start={item.start} data-deadline={item.deadline}
                             data-assignee={item.assignee}  data-comment={item.comment}
                              data-status={item.status} data-review={item.review} data-sprintbacklog={item.sprintBacklog} onClick={that.toggleEditOpen}>
                          <Button color="warning" size="sm" S ><i class="fa fa-edit"></i>{that.props.buttonLabel}</Button>
                          </div>
                          <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                            <ModalHeader toggle={that.toggleEdit}>Team task</ModalHeader>
                            <ModalBody>
                              <Form action="" className="form-horizontal">
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Title</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="title" value={that.state.title} onChange={that.onTextboxChangeTitle}/>

                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="textarea-input">Description</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                      placeholder="Content..." value={that.state.description} onChange={that.onTextboxChangeDescription} />
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Sprint</Label>
                                </Col>
                                <Col xs="12" md="3">
                                  <Input type="select" name="select" id="select" onChange={that.onTextboxChangeSprint}>
                                  <option value={that.state.sprintBacklog}>{that.state.sprintBacklog}</option>
             
                                    { (sprints!=undefined)?
                                      sprints.map(p=>{
                                        return(
                                          <option value={p.id}>{p.num}</option>
                                        )
                                      }):
                                      
                                        <option disable={true} value="">not have any sprint</option>
                                      
                                    }
                                  </Input>
                                </Col>
                              </FormGroup>

                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Sprint Backlog</Label>
                                </Col>
                                <Col xs="12" md="3">
                                  <Input type="select" name="select" id="select"  onChange={that.onTextboxChangeSprintBacklog}>                                    
                                    { 
                                      (that.props.sprintbacklogs!=undefined)?
                                      that.props.sprintbacklogs.map(p=>
                                        p.sprint==that.state.sprint? 
                                          <option value={p.title}>{p.title}</option>
                                        :null
                                    ):
                                      
                                        <option disable={true} value="">not have any sprint backlog</option>
                                      
                                    }
                                  </Input>
                                </Col>
                              </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label>Priority</Label>
                                  </Col>
                                  <Col md="3">
                                    <Input type="select" name="select" id="select" onChange={that.onTextboxChangePriority}>
                                      <option value={that.state.priority}>{that.state.priority}</option>
                                      <option value="High">High</option>
                                      <option value="Medium">Medium</option>
                                      <option value="Low">Low</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="date-input">Start time</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <DatePicker


                                      selected={that.state.startDate}
                                      timeInputLabel="Time:"
                                      onChange={that.onChangeStartDate}
                                      dateFormat="dd/MM/yyyy h:mm aa"
                                      showTimeInput
                                    /></Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="date-input">Deadline </Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <DatePicker


                                      selected={that.state.endDate}
                                      timeInputLabel="Time:"
                                      onChange={that.onChangeEndDate}
                                      dateFormat="dd/MM/yyyy h:mm aa"
                                      showTimeInput
                                    />    </Col>
                                </FormGroup>
                                <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Assignee</Label>
                                      </Col>
                                     <Col xs="12" md="3">
                                        <Input type="select" name="select" id="select" onChange={that.onTextboxChangeAssignee}>
                                        <option value={that.state.assignee}>{that.state.assignee}</option>
                                    { (that.state.mem!=undefined)?
                                      that.state.mem.map(p=>{
                                        return(
                                          <option value={p.username}>{p.username}</option>
                                        )
                                      }):{
                                        
                                      }
                                    }
                                        </Input>
                                      </Col>
                                    </FormGroup>   
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Status</Label>
                                  </Col>
                                  <Col xs="12" md="3">
                                    <Input type="select" name="select" id="select" onChange={that.onTextboxChangeStatus}>
                                      <option value={that.state.status}>{that.state.status}</option>
                                      <option value="done">done</option>
                                      <option value="inprogress">inprogress</option>
                                      <option value="Todo">to do</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                              </Form>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="primary" onClick={that.handleUpdate}>Submit</Button>{' '}
                              <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                            </ModalFooter>
                          </Modal>
                        </div>
                        <div data-id={item.id} onClick={that.handleAssignToMe}>
                        <Button size="sm" color="success"><i class="fa fa-plus"> Assign to me</i></Button>
                        </div>
                        <div data-id={item.id} onClick={that.handleDelete}>

                        <Button size="sm" color="danger"><i class="fa fa-minus"> Delete</i></Button>
                        </div>
                      </td>
                    </tr>
                  )

                })}</tbody>
              </table>
            </div>
          </Card>
        </Col>
      </Row>
      
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("mapStateToProps")
  const { changeStatusProject } = state
  const currentProject  = changeStatusProject.projectId
  const {sprintbacklogs,sprints}= changeStatusProject
  return {
    currentProject,sprintbacklogs,sprints
  }
}
export default connect(mapStateToProps)(TeamTask);
