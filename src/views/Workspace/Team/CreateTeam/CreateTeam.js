import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  Container,
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
  Row,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress,
} from 'reactstrap';
import { setTeam, removeLogin, setProject } from '../../../../actions'
import { connect } from 'react-redux'

import cookie from 'react-cookies';
import {
  getFromStorage,
  setInStorage
} from '../../../../service/storage'
const proto = {};
proto.team = require('../../../../gRPC/team/team_grpc_web_pb');

class CreateTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requesterId: '',
      actionStatus: '',              //success or show error when action add delete update      
      modalActionStatus: false,
     
      name:'',
      description:'',
      department:'',
    }
  };
  onTextboxChangename=(event)=> {
    this.setState({
      name: event.target.value,
    });
  }
  onTextboxChangedescription=(event)=> {
    this.setState({
      description: event.target.value,
    });
  }
  onTextboxChangdepartment=(event)=> {
    this.setState({
      department: event.target.value,
    });
  }
  toggleActionStatus = () => {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }
  
  loadAllMember = (id) => {
    console.log("loadAllMember")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var GetAllMemberReq = new proto.team.GetAllMemberReq();
    GetAllMemberReq.setRequesterid(getFromStorage("userId"));
    GetAllMemberReq.setTeamid(id);
    GetAllMemberReq.setAccesstoken(getFromStorage("accessToken"));

    let that = this
    setInStorage('members', [])
    let response = teamService.getAllMember(GetAllMemberReq, metadata)

    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        let mem = getFromStorage('members')
        mem.push({ id: response.getId(), name: response.getName(), username: response.getUsername() })
        setInStorage('members', mem)
      }
    })
    response.on('status', function (status) {
      console.log("status")
      console.log(status.code);
      console.log(status.details);
      console.log(status.metadata);
      console.log(getFromStorage('members'))
    });
    response.on('end', function (end) {
      console.log("end")
      console.log(end)
    });
  }
  loadAllTeam = () => {
    console.log("getAllTeam")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    let teams = []

    var GetAllTeamReq = new proto.team.GetAllTeamReq();
    GetAllTeamReq.setRequesterid(getFromStorage("userId"));
    GetAllTeamReq.setProjectid(getFromStorage("currentProject"));
    GetAllTeamReq.setAccesstoken(getFromStorage("accessToken"));
    let response = teamService.getAllTeam(GetAllTeamReq, metadata)
    console.log("currenProject" + getFromStorage("currentProject"))
    let that = this
    let lastTeam = ''
    let lastName = ''
    let validTeam = false
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        teams.push({
          id: response.getTeamid(),
          name: response.getName()
        })
        if (getFromStorage('teamId') == response.getTeamid())
          validTeam = true
        else {
          lastTeam = response.getTeamid()
          lastName = response.getName()
        }

      }
    })
    response.on('status', function (status) {
      setInStorage('teams', teams)
      if (validTeam == false) {
        if (lastTeam != '') {
          setInStorage('teamId', lastTeam)
          that.props.dispatch(setTeam(lastTeam, lastName))
          that.loadAllMember(lastTeam)
        }
      }
      else {
        that.props.dispatch(setTeam(getFromStorage('teamId'), getFromStorage('teamName')))
        that.loadAllMember(getFromStorage('teamId'))

      }
    });
    response.on('end', function (end) {

    });

  }
  //team
  handleAddTeam = () => {
    console.log("handleAddTeam")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var AddNewTeamReq = new proto.team.AddNewTeamReq();
    AddNewTeamReq.setRequesterid(getFromStorage("userId"));
    AddNewTeamReq.setProjectid(getFromStorage("currentProject"));
    AddNewTeamReq.setName(this.state.name);
    AddNewTeamReq.setDescription(this.state.description);
    AddNewTeamReq.setDepartment(this.state.department);
    AddNewTeamReq.setAccesstoken(getFromStorage("accessToken"));
    let that=this
    teamService.addNewTeam(AddNewTeamReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
            this.setState({
              name:'',
              description:'',
              department:'',
              modalActionStatus: true,
              actionStatus: 'SUCCESS'
            });
            that.loadAllTeam()
        } else {
          this.setState({
            modalActionStatus: true,
            actionStatus: 'FAIL',
          });
        }
      }
    });
  }
 
  render() {
    return (
        <Row>
          <Modal size="sm" isOpen={this.state.modalActionStatus} toggle={this.toggleActionStatus} className={this.props.className}>
            <ModalBody>
              <center><h4>{this.state.actionStatus}</h4></center>
            </ModalBody>
          </Modal>
          <Col>  
           
            <div class="card border-primary mb-3">
              <div class="card-body">
                <Form  className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Team name</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="text" id="TeamName" name="TeamName" placeholder="Team name" value={this.state.name} onChange={this.onTextboxChangename}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Description</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="textarea" id="Description" name="Description" placeholder="Description" value={this.state.description} onChange={this.onTextboxChangedescription}/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Department</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="text" id="Department" name="Department" placeholder="Department" value={this.state.department} onChange={this.onTextboxChangdepartment}/>
                    </Col>
                  </FormGroup>                                 
                </Form>
              </div>
              <div class="card-footer  border-primary">
                <Button size="sm" color="success" onClick={this.handleAddTeam}><i className="fa fa-dot-circle-o"></i> CreateTeam</Button>
              </div>
            </div>
         </Col>
      </Row>
         
    );
  }
}

function mapStateToProps(state) {
  const {  updateProjectLoaded, changeStatusProject } = state
 
  const { project } = updateProjectLoaded
  const { projectId, teamId, teamName } = changeStatusProject
  return {
    project, projectId, teamId, teamName
  }
}
export default connect(mapStateToProps)(CreateTeam);