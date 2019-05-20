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
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'

class CreateTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      requesterId: '',
      actionStatus: '',              //success or show error when action add delete update      
      modalAddMember: false,
      modalEditMember: false,
      modalAddTeam: false,
      modalEditTeam: false,
      modalActionStatus: false,
      updateName: '',
      name: '',
      as: '',
      want: '',
      updateId:'',
      so: '',

    }
  };
  //toggle member
  toggleAddMember=()=> {
    this.setState(prevState => ({
      modalAddMember: !prevState.modalAddMember
    }));
  }
  toggleEditMember=()=> {
    this.setState(prevState => ({
      modalEditMember: !prevState.modalEditMember
    }));
  }
  //toggle team
  toggleAddTeam=()=> {
    this.setState(prevState => ({
      modalAddTeam: !prevState.modalAddTeam
    }));
  }
  toggleEditTeam=()=> {
    this.setState(prevState => ({
      modalEditTeam: !prevState.modalEditTeam
    }));
  }
  //member
  handleAddMember = () => {}
  handleUpdateMember = () => {}
  handleDeleteMember = () => {}
  //team
  handleAddTeam = () => {}
  handleUpdateTeam = () => {}
  handleDeleteTeam = () => {}
  render() {
    return (
      <Row>
          <Col>  
           
            <div class="card border-primary mb-3">
              <div class="card-body">
                <Form  className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Team name</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="text" id="TeamName" name="TeamName" placeholder="Team name" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Description</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="textarea" id="Description" name="Description" placeholder="Description" />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Department</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="text" id="Department" name="Department" placeholder="Department" />
                    </Col>
                  </FormGroup>                                 
                </Form>
              </div>
              <div class="card-footer  border-primary">
                <Button size="sm" color="success"><i className="fa fa-dot-circle-o"></i> CreateTeam</Button>
              </div>
            </div>
         </Col>
      </Row>
         
    );
  }
}

export default CreateTeam;
