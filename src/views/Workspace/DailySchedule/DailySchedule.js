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
    this.onTextboxChangeNote = this.onTextboxChangeNote.bind(this);
    this.onTextboxChangeTime = this.onTextboxChangeTime.bind(this);
    this.onTextboxChangeStatus = this.onTextboxChangeStatus.bind(this);
    this.onTextboxChangeTimeStart = this.onTextboxChangeTimeStart.bind(this);
    this.onTextboxChangeDateStart = this.onTextboxChangeDateStart.bind(this);
 

    
    this.state = {
      data: [ 
              {
                "title":"Login",
                "task":"Login bằng fb",
                "time":"2:20 23/3/1019",
                "note":"có gửi code về đt",
                "status":"",
              },
              {
                "title":"Login",
                "task":"Login bằng fb",
                "time":"2:20 23/3/1019",
                "note":"có gửi code về đt",
                "status":"",
              },
              {
                "title":"Login",
                "task":"Login bằng fb",
                "time":"2:20 23/3/1019",
                "note":"có gửi code về đt",
                "status":"",
              },
              {
                "title":"Login",
                "task":"Login bằng fb",
                "time":"2:20 23/3/1019",
                "note":"có gửi code về đt",
                "status":"",
              },
            
            ],
      modalEdit: false,
      requesterId:'',
      projectId:'',
      cookie:'',
      
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
  onTextboxChangeNote(event) {
    this.setState({
      note: event.target.value,
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

  handleReset= (event) => {
    console.log('vao reset');
    this.setState({
      title:'',
    });
  }
  
  handleAdd = () => {
    //console.log("handleadd");
    const dailyscheduleService = new proto.dailyschedule.DailyscheduleClient('http://54.255.233.193:8085');
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
    AddNewDailyScheduleReq.setSchedulestatus(this.state.status);
    AddNewDailyScheduleReq.setCookie(this.state.cookie);

    var toto=dailyscheduleService.addNewDailySchedule(AddNewDailyScheduleReq, metadata, (err, response) => {
      console.log("connect")
      if (err) { //if error
         console.log(err);
         console.log("error")
      } else { //if success
              //get response
              console.log("response--------------------------")
              console.log(response);
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
      console.log("connect")
      if (err) { //if error
         console.log(err);
         console.log("error")
      } else { //if success
              //get response
              console.log("response")
              console.log(response);
              // console.log("get avatar")
              // console.log(response.getStatus())
              
              const ProfileRes = response[0];
            }
          });
          console.log(toto)
          console.log("ra daily");
  };
  handleDelete = () => {
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
              // console.log("get avatar")
              // console.log(response.getStatus())
              
              const ProfileRes = response[0];
            }
          });
          console.log(toto)
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
      time,
      note,
      status,
      timeStart,
      dateStart,
      
    } = this.state;
    let that=this;

   

    return (
      <Row>
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
                      <td>{item.time}</td>
                      
                      <td>{item.status}</td>
                      <td>
                      <Button color="warning" size="sm" onClick={that.toggleEdit}><i class="fa fa-edit"></i>{that.props.buttonLabel}</Button>
                        <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                              <ModalHeader toggle={that.toggleEdit}>Daily schedule</ModalHeader>
                              <ModalBody>
                              <Form  className="form-horizontal">               
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">IdBacklog</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="IdBacklog" name="IdBacklog" placeholder="IdBacklog" />
                                    
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="textarea-input">Task</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="textarea" name="Task" id="Task" rows="9"
                                          placeholder="Task..." />
                                  </Col>
                                </FormGroup>
                                                
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="date-input">Start </Label>
                                  </Col>
                                  <Col xs="3" md="3">
                                    <Input type="time" id="timeStart" name="timeStart" />
                                  </Col>
                                  <Col xs="3" md="3">
                                    <Input type="date" id="dateStart" name="dateStart" />
                                  </Col>
                                </FormGroup>
                                
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Note</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="note" name="note" placeholder="Note" />
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
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={that.handleUpdate('requesterId11','projectId','scheduleId','title','task','time','scheduleStatus','cookie')}>Submit</Button>{' '}
                                <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                              </ModalFooter>
                        </Modal>

                      <Button color="danger" size="sm" ><i class="fa fa-trash" onClick={that.handleDelete('requesterId','projectId','scheduleId','cookie') }></i></Button>
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
                      <Label htmlFor="text-input">Note</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="note" name="note" placeholder="Note" value={note} onChange={that.onTextboxChangeNote}/>
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
                <Button type="submit" size="sm" color="primary" onClick={that.handleAdd('requesterId','projectId','title','task','time','scheduleStatus','cookie')}><i className="fa fa-dot-circle-o"></i> Add</Button>
                <Button  size="sm" color="danger"><i className="fa fa-ban" onClick={that.resetform()}></i> Reset</Button>
              </CardFooter>
            </Card>
         </Col>
      </Row>
         
    );
  }
}

export default DailySchedule;
