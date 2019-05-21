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

import cookie from 'react-cookies';
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
  
  //team
  handleAddTeam = () => {
    console.log("handleAddTeam")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var AddNewTeamReq = new proto.team.AddNewTeamReq();
    AddNewTeamReq.setRequesterid(cookie.load("userId"));
    AddNewTeamReq.setProjectid(cookie.load("currentProject"));
    AddNewTeamReq.setName(this.state.name);
    AddNewTeamReq.setDescription(this.state.description);
    AddNewTeamReq.setDepartment(this.state.department);
    AddNewTeamReq.setAccesstoken(cookie.load("accessToken"));

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
        
        } else {
          this.setState({
            modalActionStatus: true,
            actionStatus: 'FALSE',
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

export default CreateTeam;
