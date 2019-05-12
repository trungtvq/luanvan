import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Table,
  Row,
  Modal,
ModalHeader,
ModalBody,
ModalFooter,
} from 'reactstrap';

const proto = {};
proto.dailyschedule = require('./../../../gRPC/dailyschedule/dailyschedule_grpc_web_pb');

class DailySchedule extends Component {
   constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);

    this.onTextboxChangeTitle = this.onTextboxChangeTitle.bind(this);
    this.onTextboxChangeTask = this.onTextboxChangeTask.bind(this);
    this.onTextboxChangeTime = this.onTextboxChangeTime.bind(this);
    this.onTextboxChangeStatus = this.onTextboxChangeStatus.bind(this);
    this.onTextboxChangeTimeStart = this.onTextboxChangeTimeStart.bind(this);
    this.onTextboxChangeDateStart = this.onTextboxChangeDateStart.bind(this);
 

    
    this.state = {
      data: [ 
              {
                "id":"1",
                "title":"Login1",
                "task":"Login bằng fb1",
                "timeStart":"02:20",
                "dateStart":"2019-05-05",
               
                "status":"",
              },
              {
                "id":"2",
                "title":"Login2",
                "task":"Login bằng fb2",
                "timeStart":"02:20",
                "dateStart":"2019-05-05",
                
                "status":"",
              },
              {
                "id":"3",
                "title":"Login3",
                "task":"Login bằng fb3",
                "timeStart":"02:20",
                "dateStart":"2019-05-05",
                
                "status":"",
              },
              {
                "id":"4",
                "title":"Login",
                "task":"Login bằng fb4",
                "timeStart":"02:20",
                "dateStart":"2019-05-05",
               
                "status":"",
              },
            
            ],
      modalEdit: false,
      modalActionStatus: false,     
      requesterId:'',
      projectId:'',
      cookie:'',
      actionStatus:'',              //success or show error when action add delete update
      
      //add
      title:'',
      task:'',
      timeStart:'',
      dateStart:'',
      status:'',
      //update
      scheduleIdUpdate:'',
      titleUpdate:'',
      taskUpdate:'',
      timeStartUpdate:'',
      dateStartUpdate:'',
      statusUpdate:'',
      //delete
      scheduleIdDelete:'',
      }
    };

  toggleEdit() {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }
  toggleActionStatus=()=> {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }
//add
  onTextboxChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  onTextboxChangeTask(event) {
    this.setState({
      task: event.target.value,
    });
  }
  onTextboxChangeTime(event) {
    this.setState({
      time: event.target.value,
    });
  }
  onTextboxChangeStatus(event) {
    this.setState({
      status: event.target.value,
    });
  }
  onTextboxChangeTimeStart(event) {
    this.setState({
      timeStart: event.target.value,
    });
  }
  onTextboxChangeDateStart(event) {
    this.setState({
      dateStart: event.target.value,
    });
  }
//update
  onTextboxChangeScheduleIdUpdate=(event)=> {
    this.setState({
      scheduleIdUpdate: event.target.value,
    });
  }
  onTextboxChangeTitleUpdate=(event)=> {
    this.setState({
      titleUpdate: event.target.value,
    });
  }
  onTextboxChangeTaskUpdate=(event)=> {
    this.setState({
      taskUpdate: event.target.value,
    });
  }
  onTextboxChangeTimeStartUpdate=(event)=> {
    this.setState({
      timeStartUpdate: event.target.value,
    });
  }
  onTextboxChangeDateStartUpdate=(event)=> {
    this.setState({
      dateStartUpdate: event.target.value,
    });
  }
  onTextboxChangeStatusUpdate=(event)=> {
    this.setState({
      statusUpdate: event.target.value,
    });
  }
  onGetUpdate=(scheduleIdUpdate,titleUpdate,taskUpdate,timeStartUpdate,dateStartUpdate,statusUpdate)=>{
    this.setState({
      scheduleIdUpdate:scheduleIdUpdate,
      titleUpdate:titleUpdate,
      taskUpdate:taskUpdate,
      timeStartUpdate:timeStartUpdate,
      dateStartUpdate:dateStartUpdate,
      statusUpdate:statusUpdate,
    });
    console.log("idParam: -------"+scheduleIdUpdate);
    console.log("id: -------"+this.state.scheduleIdUpdate);
  }
//delete
  onTextboxChangeScheduleIdDelete=(id)=> {
    this.setState({
      scheduleIdDelete: id,
    });
    console.log("first==="+this.state.scheduleIdDelete)
  }

  handleReset= (event) => {
    console.log('vao reset');
    this.setState({
      title:'',
    });
  }
  
  handleAdd = () => {
    //console.log("handleadd");
    const dailyscheduleService = new proto.dailyschedule.DailyscheduleClient('http://54.255.233.193:8084');
    //some data of request (get that from frontend)
    console.log(dailyscheduleService)
    //console.log("vao daily");
    var metadata = {};
    //make a request to server
  //   string requesterId = 1;
  //   string projectId = 2;
  
  //   string title=3; //uni
  //   string task=4;
  //   string time=5;
  //   string scheduleStatus = 6;
  // string cookie = 8;
    var AddNewDailyScheduleReq= new proto.dailyschedule.AddNewDailyScheduleReq();
    AddNewDailyScheduleReq.setRequesterid(this.state.requesterId);
    AddNewDailyScheduleReq.setProjectid(this.state.projectId);
    AddNewDailyScheduleReq.setTitle(this.state.title);
    AddNewDailyScheduleReq.setTask(this.state.task);
    AddNewDailyScheduleReq.setTime(this.state.timeStart+" "+this.state.dateStart);
    AddNewDailyScheduleReq.setSchedulestatus("to do");
    AddNewDailyScheduleReq.setCookie(this.state.cookie);

    var toto=dailyscheduleService.addNewDailySchedule(AddNewDailyScheduleReq, metadata, (err, response) => {
      console.log("AddNewDailyScheduleReq----------connect")
      if (err) { //if error
         console.log(err);
         console.log("error")
      } else { //if success
              //get response
              console.log("response--------------------------")
              console.log(response);
              console.log(response.getStatus())
              if(response.getStatus()=="SUCCESS")
              {
                this.setState(prevState=>({data:[...prevState.data,{id:response.getId(),title:this.state.title,task:this.state.task,timeStart:this.state.timeStart,dateStart:this.state.dateStart}]}));
                this.setState({
                  title:'',
                  task:'',
                  timeStart:'',
                  dateStart:'',
                  modalActionStatus:true,
                  actionStatus:'SUCCESS'
                });
              }else{
                this.setState({
                  modalActionStatus:true,
                  actionStatus:'FALSE',
                });
              }
               
              const ProfileRes = response[0];
            }
          });
          console.log(toto)
          
  };

  
  handleUpdate = () => {
    
    const dailyscheduleService = new proto.dailyschedule.DailyscheduleClient('http://54.255.233.193:8085');
    //some data of request (get that from frontend)
    console.log(dailyscheduleService)
    //console.log("vao daily");
    var metadata = {};
    //make a request to server
    // string requesterId = 1;
    // string projectId = 2;
    // string scheduleId = 3;
    // string title=4;
    // string task=5;
    // string time=6;
    // string scheduleStatus = 7;
    // string cookie = 8;
    var UpdateDailyScheduleReq= new proto.dailyschedule.UpdateDailyScheduleReq();
    UpdateDailyScheduleReq.setRequesterid(this.state.requesterId);
    UpdateDailyScheduleReq.setProjectid(this.state.projectId);
    UpdateDailyScheduleReq.setScheduleid(this.state.scheduleIdUpdate);
    UpdateDailyScheduleReq.setTitle(this.state.titleUpdate);
    UpdateDailyScheduleReq.setTask(this.state.taskUpdate);
    UpdateDailyScheduleReq.setTime(this.state.timeStartUpdate+" "+this.state.dateStartUpdate);
    UpdateDailyScheduleReq.setSchedulestatus(this.state.statusUpdate);
    UpdateDailyScheduleReq.setCookie(this.state.cookie);

    var toto=dailyscheduleService.updateDailySchedule(UpdateDailyScheduleReq, metadata, (err, response) => {
      console.log("UpdateDailyScheduleReqconnect")
      if (!err) { //if error
         console.log(err);
         console.log("error")
      } else { //if success
              //get response
              console.log("response")
              console.log(response);
             
              if(response.getStatus()=="SUCCESS")
              {
                this.setState({
                  actionStatus:"SUCCESS",

                });
                this.setState(prevState => ({
                  modalEdit: !prevState.modalEdit,
                  modalActionStatus:!prevState.modalActionStatus,
                  }));
                  const tmpdata = this.state.data.map(p =>
                    p.id === this.state.scheduleIdUpdate
                      ? { ...p, title: this.state.titleUpdate,task:this.state.taskUpdate,
                        timeStart:this.state.timeStartUpdate,dateStart:this.state.dateStartUpdate,status:this.state.statusUpdate}
                      : p
                  );
                 
                  this.setState({
                    data:tmpdata,
                  });
                 
                  
              }else{
                this.setState({
                  actionStatus:"FALSE",
                });
                this.setState(prevState => ({
                  modalEdit: !prevState.modalEdit,
                  modalActionStatus:!prevState.modalActionStatus,
                  }));
              }
             
            }
          });
          console.log(toto)
          console.log("ra daily");
  };
  handleDelete = (id) => {
    console.log("vào");

   


    const dailyscheduleService = new proto.dailyschedule.DailyscheduleClient('http://54.255.233.193:8085');
    //some data of request (get that from frontend)
    console.log(dailyscheduleService)
    console.log("vao daily");
    var metadata = {};
    //make a request to server
    // string requesterId = 1;
	  // string projectId=2;
	  // string scheduleId = 3;
    // string cookie = 4;
    var DeleteDailyScheduleReq= new proto.dailyschedule.DeleteDailyScheduleReq();
    DeleteDailyScheduleReq.setRequesterid(this.state.requesterId);
    DeleteDailyScheduleReq.setProjectid(this.state.projectId);
    DeleteDailyScheduleReq.setScheduleid(this.state.scheduleIdDelete);
    DeleteDailyScheduleReq.setCookie(this.state.cookie);

    var toto=dailyscheduleService.deleteDailySchedule(DeleteDailyScheduleReq, metadata, (err, response) => {
      console.log("connect")
      if (err) { //if error
         console.log(err);
         console.log("error")
      } else { //if success
              //get response
              console.log("response")
              console.log(response);
             if(response.getStatus()=="SUCCESS")
             {
              this.setState({
                actionStatus:"SUCCESS",
                modalActionStatus:true
              });
              this.setState(prevState=>({data:[...prevState.data.filter(function(e) { return e.id !== id; })]}));
             }else{
                  this.setState({
                    actionStatus:"FALSE",
                  });
                  this.setState(prevState => ({
                    modalActionStatus:!prevState.modalActionStatus,
                    }));
                }
             }
              
             
            
          });
      
  };

 resetform = () =>{
   this.setState(this.baseState);
   console.log('vào reset');
 }
  render() {
    const {
      data,
      modalEdit,
      title,
      task,
      status,
      timeStart,
      dateStart,
      
    } = this.state;
    let that=this;

   

    return (
      <Row>
          <Modal size="sm"  isOpen={that.state.modalActionStatus} toggle={that.toggleActionStatus} className={that.props.className}>
          <ModalBody>
            <center><h4>{that.state.actionStatus}</h4></center>
          </ModalBody>
          </Modal>
          <Col>  
            <Card>           
                <table class="table table-lg">
                  <thead class="thead">
                  <tr class="bg-primary">
                    <th>Title</th>
                    <th>Task</th>
                    <th>Time</th>
                   
                    <th>Status</th>  
                    <th> </th>                 
                  </tr>
                  </thead>
                   <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.title}</td>
                      <td>{item.task}</td>
                      <td>{item.timeStart} {item.dateStart}</td>
                      
                      <td>{item.status}</td>
                      <td>
                      <Button color="warning" size="sm" onClick={(event)=>{that.toggleEdit();that.onGetUpdate(item.id,item.title,item.task,item.timeStart,item.dateStart,item.status)}}>
                      <i class="fa fa-edit"></i>{that.props.buttonLabel}</Button>
                        <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                              <ModalHeader toggle={that.toggleEdit}>Daily schedule</ModalHeader>
                              <ModalBody>
                              <Form  className="form-horizontal">               
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Title</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="Title" name="Title" placeholder="Title" value={that.state.titleUpdate} onChange={that.onTextboxChangeTitleUpdate}/>
                                    
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="textarea-input">Task</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="textarea" name="Task" id="Task" rows="9"
                                          placeholder="Task..." value={that.state.taskUpdate} onChange={that.onTextboxChangeTaskUpdate}/>
                                  </Col>
                                </FormGroup>
                                                
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="date-input">Start </Label>
                                  </Col>
                                  <Col xs="3" md="3">
                                  
                                    <Input type="time" id="timeStart" name="timeStart" value={that.state.timeStartUpdate} onChange={that.onTextboxChangeTimeStartUpdate}/>
                                  </Col>
                                  <Col xs="3" md="3">
                                    <Input type="date" id="dateStart" name="dateStart" value={that.state.dateStartUpdate} onChange={that.onTextboxChangeDateStartUpdate}/>
                                  </Col>
                                </FormGroup>
                                
              

                                <FormGroup row>
                                  <Col md="3">
                                    <Label>Status</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                  <Input type="text" id="status" name="status" value={that.state.statusUpdate} onChange={that.onTextboxChangeStatusUpdate}/>
                                  </Col>
                                </FormGroup>                                       
                              </Form>                  
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={that.handleUpdate}>Submit</Button>{' '}
                                <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                              </ModalFooter>
                        </Modal>

                      <Button color="danger" size="sm" ><i class="fa fa-trash" onClick={(event) => {  that.handleDelete(item.id)}}></i></Button>
                      </td>
                  </tr>
                )
             
             })}</tbody>
                </table>           
            </Card>  
            <Card>             
              <CardBody>
                <Form  className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Title</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="Title" name="Title" placeholder="Title"  value={title} onChange={that.onTextboxChangeTitle}/>
                      
                    </Col>
                  </FormGroup>

                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Task</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="Task" id="Task" rows="9"
                             placeholder="Task..." value={task} onChange={that.onTextboxChangeTask}/>
                    </Col>
                  </FormGroup>
                                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Time </Label>
                    </Col>
                    <Col xs="3" md="3">
                      <Input type="time" id="timeStart" name="timeStart" value={timeStart} onChange={that.onTextboxChangeTimeStart}/>
                    </Col>
                    <Col xs="3" md="3">
                      <Input type="date" id="dateStart" name="dateStart" value={dateStart} onChange={that.onTextboxChangeDateStart}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Status</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">To do</p>
                    </Col>
                  </FormGroup>                                       
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={that.handleAdd}><i className="fa fa-dot-circle-o"></i> Add</Button>
              </CardFooter>
            </Card>
         </Col>
      </Row>
         
    );
  }
}

export default DailySchedule;
