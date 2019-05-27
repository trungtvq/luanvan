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

import { connect } from 'react-redux'
import DatePicker from "react-datepicker";

import cookie from 'react-cookies';


class CreateSprint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requesterId: '',
      actionStatus: '',              //success or show error when action add delete update      
      modalActionStatus: false,
     
      name:'',
      goal:'',
      startDate: new Date(),
      endDate: new Date(),
    }
  };
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
  onTextboxChanggoal=(event)=> {
    this.setState({
      goal: event.target.value,
    });
  }
  toggleActionStatus = () => {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }
  
  
  handleAddSprint = () => {
  }
  componentDidMount() {
    let end = this.state.endDate;
    end.setDate(end.getDate() + 15);
    this.setState({
      endDate: end
    })
  }
  render() {
    let that=this;
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
                      <Label htmlFor="text-input">Sprint name</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="text" id="name" name="name" placeholder="Sprint name" value={this.state.name} onChange={this.onTextboxChangename}/>
                    </Col>
                  </FormGroup>

                
                
                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="date-input">Start </Label>
                                    </Col>
                                    <Col xs="3" md="3">
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
                    <Col md="3">
                      <Label htmlFor="text-input">goal</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="text" id="goal" name="goal" placeholder="goal" value={this.state.goal} onChange={this.onTextboxChanggoal}/>
                    </Col>
                  </FormGroup>                                 
                </Form>
              </div>
              <div class="card-footer  border-primary">
                <Button size="sm" color="success" onClick={this.handleAddSprint}><i className="fa fa-dot-circle-o"></i> CreateSprint</Button>
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
export default connect(mapStateToProps)(CreateSprint);