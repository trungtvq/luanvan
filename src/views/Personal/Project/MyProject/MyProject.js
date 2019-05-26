import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTeam,setProject } from '../../../../actions'
import { addProject, deleteProject, updateProject } from '../../../../actions'

import {
  Badge,
  Button,
  Col,
  Container,
  Input,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Progress,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,

  Label,

  ModalFooter
} from 'reactstrap';
import Chat from '../../../../service/chat'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'
import {
  getFromStorage,
  setInStorage
} from '../../../../service/storage'
const proto = {};
proto.myproject = require('../../../../gRPC/myproject/myproject_grpc_web_pb');
proto.team = require('../../../../gRPC/team/team_grpc_web_pb');

proto.chat = require('../../../../gRPC/chat/chat_grpc_web_pb');


class MyProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {},
      modalAdd: false,
      modalEdit: false,
      modalTranferOwner: false,
      startDate: new Date(),
      endDate: new Date(),
      actionStatus: '',      
      modalActionStatus: false,        //success or show error when action add delete update    


      topic: '',
      ProjectName: '',
      timeStart: '',
      dateStart: '',
      timeEnd: '',
      dateEnd: '',
      isPrivate: "false",

      items: 10,
      loadingState: false,
      data: [
      ],
    }
  };
  toggleActionStatus = () => {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }

  forceUpdateHandler = () => {
    this.forceUpdate();
  };
 
  componentDidMount() {
    console.log("getAllProjectPagePj")
    let end = this.state.endDate;
    end.setDate(end.getDate() + 15);
    this.setState({
      endDate: end
    })

    // let dispatch = this.props.dispatch
    // const myprojectService = new proto.myproject.MyprojectClient('https://www.overlead.co');
    // var metadata = {};
    // var GetAllProjectReq = new proto.myproject.GetAllProjectReq();
    // GetAllProjectReq.setRequesterid(getFromStorage("userId"));
    // GetAllProjectReq.setCookie(getFromStorage("accessToken"));
    // var response = myprojectService.getAllProject(GetAllProjectReq, metadata)

    // response.on('data', function (response) {
    //   if (response.getStatus() == "SUCCESS") {
    //     dispatch(addProject(response.getProjectid(), response.getTopic(), response.getProjectname(), response.getStart(), response.getEnd(), response.getPrivate(), response.getProgress()))

    //   }
    // });
    // response.on('status', function (status) {
    //   console.log("status code myproject:"+status.code);
    // });
    // response.on('end', function (end) {
    //   console.log("end")
    //   console.log(end)
    // });
  }


  toggleAdd = () => {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }
  toggleEdit = () => {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit,
    }));
  }
  setProjectUpdateId = (event) => {
    this.setState({
      updateId: event.currentTarget.dataset.id,
      topic : event.currentTarget.dataset.topic,
      ProjectName : event.currentTarget.dataset.projectname,
    });
  }
  toggleTranferOwner = () => {
    this.setState(prevState => ({
      modalTranferOwner: !prevState.modalTranferOwner
    }));
  }


  onTextboxChangeTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  }
  onTextboxChangeProjectName = (event) => {
    this.setState({
      ProjectName: event.target.value,
    });
  }
  onTextboxChangetimeStart = (event) => {
    this.setState({
      timeStart: event.target.value,
    });
  }
  onTextboxChangedateStart = (event) => {
    this.setState({
      dateStart: event.target.value,
    });
  }
  onTextboxChangetimeEnd = (event) => {
    this.setState({
      timeEnd: event.target.value,
    });
  }
  onTextboxChangedateEnd = (event) => {
    this.setState({
      dateEnd: event.target.value,
    });
  }
  onTextboxChangePrivate = () => {
    this.setState({
      isPrivate: this.state.isPrivate == "false" ? "true" : "false",
    });
  }

  handleUpdate = (event) => {
    const myprojectService = new proto.myproject.MyprojectClient('https://www.overlead.co');
    let idProject = event.currentTarget.dataset.id
    console.log(idProject)
    let d = this.state.startDate;
    let start = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    d = this.state.endDate;
    let end = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    var metadata = {};
    var UpdateProjectReq = new proto.myproject.UpdateProjectReq();
    UpdateProjectReq.setRequesterid(getFromStorage("userId"));
    UpdateProjectReq.setProjectid(this.state.updateId);
    UpdateProjectReq.setTopic(this.state.topic);

    UpdateProjectReq.setProjectname(this.state.ProjectName);
    UpdateProjectReq.setStart(start);
    UpdateProjectReq.setEnd(end);
    UpdateProjectReq.setPrivate(this.state.isPrivate);
    UpdateProjectReq.setCookie(getFromStorage("accessToken"));
    let dispatch = this.props.dispatch
    //    id,topic,name,start,end,isPrivate,progress

    myprojectService.updateProject(UpdateProjectReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error updateProject")
      } else { //if success
        console.log(response.getStatus())
        if (response.getStatus() == "SUCCESS"){
          dispatch(updateProject(this.state.updateId, this.state.topic, this.state.ProjectName, start, end, this.state.isPrivate, this.state.progress))
          this.toggleEdit()
          this.setState(prevState => ({
            modalActionStatus: !prevState.modalActionStatus,
            actionStatus: "SUCCESS",
          }));
         
        }else {
          this.setState({
            actionStatus: "FAIL",
          });
          this.setState(prevState => ({
            modalActionStatus: !prevState.modalActionStatus,
          }));
        }
         

      }
    });
  }

  handleDelete = (event) => {
    let id = event.currentTarget.dataset.id
    console.log("delete")
    console.log(id)
    const myprojectService = new proto.myproject.MyprojectClient('https://www.overlead.co');

    var metadata = {};
    var DeleteProjectReq = new proto.myproject.DeleteProjectReq();
    //AddNewProjectReq.setIdOwner("tienbede");
    DeleteProjectReq.setRequesterid(getFromStorage("userId"));
    DeleteProjectReq.setProjectid(id);
    DeleteProjectReq.setCookie(getFromStorage("accessToken"));
    let dispatch = this.props.dispatch
    myprojectService.deleteProject(DeleteProjectReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error")
      } else { //if success
        //get response
        console.log(response.getStatus())
        if (response.getStatus() == "SUCCESS") {
          dispatch(deleteProject(id))
          this.setState({
            actionStatus: "SUCCESS",
            modalActionStatus: true,
          });
        }else {
          this.setState({
            actionStatus: "FAIL",
          });
          this.setState(prevState => ({
            modalActionStatus: !prevState.modalActionStatus,
          }));
        }
       
      }
    });
  };
  setCurrentProject = (event) => {
    let idp = event.currentTarget.dataset.id
    let pn = event.currentTarget.dataset.name

    setInStorage('currentProject', idp)
    setInStorage('currentProjectName', pn)

    this.props.dispatch(setProject(idp,event.currentTarget.dataset.name))
    this.loadAllTeam()
  }
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
  loadAllTeam = () => {
    console.log("getAllTeam")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var GetAllTeamReq = new proto.team.GetAllTeamReq();
    GetAllTeamReq.setRequesterid(getFromStorage("userId"));
    GetAllTeamReq.setProjectid(getFromStorage("currentProject"));
    GetAllTeamReq.setAccesstoken(getFromStorage("accessToken"));
    let response = teamService.getAllTeam(GetAllTeamReq, metadata)
    console.log("currenProject"+getFromStorage("currentProject"))
    let that = this
    let lastTeam = ''
    let lastName=''
    let validTeam = false
    response.on('data', function (response) {
        if (response.getStatus() == "SUCCESS") {
            console.log("hasTeam"+response.getTeamid())

            if (getFromStorage('teamId') == response.getTeamid())
                validTeam = true
            else {
                lastTeam = response.getTeamid()
                lastName= response.getName()
            }

        }
    })
    response.on('status', function (status) {
        console.log("status"+status.code)
        if (validTeam == false) {
            if (lastTeam != '') {
                setInStorage('teamId', lastTeam)
                that.props.dispatch(setTeam(lastTeam,lastName))
            }    
        }
        else {
            that.props.dispatch(setTeam(getFromStorage('teamId'),getFromStorage('teamName')))
        }
    });
    response.on('end', function (end) {

    });
    
}
  render() {
    let that = this;


    console.log("render")


    return (
     
      <div>
        <Modal size="sm" isOpen={that.state.modalActionStatus} toggle={that.toggleActionStatus} className={that.props.className}>
          <ModalBody>
            <center><h4>{that.state.actionStatus}</h4></center>
          </ModalBody>
        </Modal>
        <Demo />
        <Chat />
        <div><br /></div>
        <Container>
          <Row>
            <Col>
              <Row>
                {
                
                  this.props.project.map(function (i, key) {
                    let item = i;

                    if (item != null) {
                      let arr = item.start.split('-');
                      let start = ""
                      let end = ""
                      if (arr[1] > 12) {
                        arr[1] = arr[1] - 12
                        start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
                      } else {
                        start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
                      }



                      arr = item.end.split('-')
                      if (arr[1] > 12) {
                        arr[1] = arr[1] - 12
                        end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
                      } else {
                        end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
                      }
                      return (
                        <Col xs="12" sm="3" md="3">
                          <Card>
                            <CardHeader>
                              <Link to="/DashBoard">
                                <i className=""></i><strong data-id={item.id} data-name={item.projectName} onClick={that.setCurrentProject}>{item.projectName}</strong>
                              </Link>
                              <div className="card-header-actions">
                                <div className="card-header-action btn btn-setting" data-id={item.id} onClick={that.handleDelete}><i className="icon-trash"></i>{that.props.buttonLabel}</div>
                                <div data-projectname={item.projectName} data-id={item.id} data-topic={item.topic}  onClick={that.setProjectUpdateId}><div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-settings"></i>{that.props.buttonLabel}</div></div>
                                
                                <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                                  <ModalHeader toggle={that.toggleEdit}>Project</ModalHeader>
                                  <ModalBody>
                                    <div class="card  bg-primary mb-3">
                                      <div class="card-body">
                                        <Form className="form-horizontal">

                                          <FormGroup row>
                                            <Col md="3">
                                              <Label htmlFor="text-input">Topic</Label>
                                            </Col>
                                            <Col xs="5" md="5">
                                              <Input type="text" id="topic" name="topic" placeholder="topic" value={that.state.topic} onChange={that.onTextboxChangeTopic} />
                                            </Col>
                                          </FormGroup>


                                          <FormGroup row>
                                            <Col md="3">
                                              <Label htmlFor="text-input">Project Name</Label>
                                            </Col>
                                            <Col xs="5" md="5">
                                              <Input type="text" id="ProjectName" name="ProjectName" placeholder="Project Name" value={that.state.ProjectName} onChange={that.onTextboxChangeProjectName} />

                                            </Col>
                                          </FormGroup>

                                          <FormGroup row>
                                            <Col md="3">
                                              <Label htmlFor="date-input">Start </Label>
                                            </Col>

                                            <Col xs="3" md="3">
                                              {/* <Input type="date" id="dateStart" name="dateStart" value={that.state.dateStart} onChange={that.onTextboxChangedateStart}/>	 */}
                                              {/* <DatePicker dateFormat="dd/MM/yyyy"  selected={that.state.startDate}  onChange={that.onChangeStartDate} /> */}
                                              <DatePicker

                                                selected={that.state.startDate}
                                                timeInputLabel="Time:"
                                                onChange={that.onChangeStartDate}
                                                dateFormat="dd/MM/yyyy h:mm aa"
                                                showTimeInput
                                              />
                                            </Col>
                                          </FormGroup>

                                          <FormGroup row>
                                            <Col md="3">
                                              <Label htmlFor="date-input">End </Label>
                                            </Col>

                                            <Col xs="3" md="3">
                                              {/* <Input type="date" id="dateEnd" name="dateEnd"  value={that.state.dateEnd} onChange={that.onTextboxChangedateEnd}/>	 */}
                                              {/* <DatePicker dateFormat="dd/MM/yyyy"  selected={that.state.endDate}  onChange={that.onChangeEndDate} /> */}
                                              <DatePicker


                                                selected={that.state.endDate}
                                                timeInputLabel="Time:"
                                                onChange={that.onChangeEndDate}
                                                dateFormat="dd/MM/yyyy h:mm aa"
                                                showTimeInput
                                              />
                                            </Col>
                                          </FormGroup>

                                          <FormGroup row>
                                            <Col md="5">
                                              <Label htmlFor="date-input">Private </Label>
                                            </Col>
                                            <Col xs="5" md="5">
                                              <Input type="checkbox" id="Private" name="Private" value={that.state.isPrivate} onChange={that.onTextboxChangePrivate} />
                                            </Col>
                                          </FormGroup>
                                        </Form>
                                      </div>
                                    </div>
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button color="primary" onClick={that.handleUpdate}>Submit</Button>{' '}
                                    <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                                  </ModalFooter>
                                </Modal>
                              </div>
                            </CardHeader>
                            <CardBody>
                              <h6>Owner: {item.ownerName}</h6>
                              <h6>Private: {item.private}</h6>
                              <h6>Start:  {start}</h6>
                              <h6>  End:  {end}</h6>
                              <Progress value={item.progress} />
                              <div className="text-center">{item.progress}%</div>
                            </CardBody>
                            <CardFooter>
                              <center>
                                <Button className="button-center" type="submit" size="sm" color="success" onClick={that.toggleTranferOwner}><i class="fa fa-share"></i></Button>
                                <Modal size="lg" isOpen={that.state.modalTranferOwner} toggle={that.toggleTranferOwner} className={that.props.className}>
                                  <ModalHeader toggle={that.toggleTranferOwner}>item.projectName</ModalHeader>
                                  <ModalBody>
                                    <div class="card  bg-primary mb-3">
                                      <div class="card-body">
                                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                          <FormGroup row>
                                            <Col md="3">
                                              <Label htmlFor="text-input">Owner Tranfer To</Label>
                                            </Col>
                                            <Col xs="5" md="5">
                                              <Input type="text" id="TranferOwner" name="TranferOwner" placeholder=" Name" />
                                            </Col>
                                          </FormGroup>
                                        </Form>
                                      </div>
                                    </div>
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button color="primary" onClick={that.toggleTranferOwner}>Submit</Button>{' '}
                                    <Button color="secondary" onClick={that.toggleTranferOwner}>Cancel</Button>
                                  </ModalFooter>
                                </Modal>
                              </center>
                            </CardFooter>
                          </Card>
                        </Col>
                      )
                    }

                  })}

              </Row>
            </Col>
          </Row>
        </Container>
      </div>


    );
  }
}
function mapStateToProps(state) {
  console.log("mapStateToProps")
  const { updateProjectLoaded, changeStatusLogin } = state
  const { project, needUpdate } = updateProjectLoaded
  const { name } = changeStatusLogin
  return {
    project, name, needUpdate
  }
}
export default connect(mapStateToProps)(MyProject);
