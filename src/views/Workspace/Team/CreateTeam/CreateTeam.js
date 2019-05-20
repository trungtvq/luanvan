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
    let that = this;
    return (
          <div>
              <div class="card border-primary mb-3">
                  <div class="card-header border-primary">
                  <div class="card-header ">
                          <div class="row justify-content-md-center">
                          </div>
                          <div class="row">
                            <div class="col">
                            <strong>List team</strong>
                            </div>
                            <div class="col-md-auto">
                          
                            </div>
                            <div class="col col-lg-2">
                            <Button color="primary" size="sm" className="mt-3" onClick={that.toggleAddTeam}><i class="fa fa-plus-square"></i>{this.props.buttonLabel}</Button>
                           
                            </div>
                          </div>
                          </div>
                  </div>
                  <div class="card-body">

                  <div class="card border-primary  mb-3">
                          <div class="card-header bg-success">
                          <div class="row justify-content-md-center">
                          </div>
                          <div class="row">
                            <div class="col">
                            <strong>Team A</strong>
                            </div>
                            <div class="col-md-auto">
                          
                            </div>
                            <div class="col col-lg-2">
                            <Button color="warning" size="sm" className="mt-3" onClick={that.toggleEditTeam}><i class="fa fa-edit"></i>{this.props.buttonLabel}</Button>
                            <Button color="danger" size="sm" className="mt-3" onClick={that.handleDeleteTeam}><i class="fa fa-trash"></i>{this.props.buttonLabel}</Button>

                            </div>
                          </div>
                                         
                          </div>
                          <div class="card-body">
                          <Table hover bordered striped responsive size="sm">
                              <thead>
                              <tr>
                                <th>Name</th>                               
                                <th>Point</th>
                                <th>Current task</th>
                                <th>Task completed</th>
                                <th>
                                  <div>
                                    <center><Button color="primary" size="sm" className="mt-3" onClick={that.toggleAddMember}><i class="fa fa-plus-square"></i>{this.props.buttonLabel}</Button></center>
                                    <Modal size="lg" isOpen={that.state.modalAddMember} toggle={that.toggleAddMember}>
                                      <ModalHeader toggle={that.toggleAddMember}>Member</ModalHeader>
                                      <ModalBody>
                                        
                                          <Form className="form-horizontal">               
                                            <FormGroup row>
                                              <Col md="3">
                                                <Label htmlFor="text-input">User name</Label>
                                              </Col>
                                              <Col xs="5" md="5">
                                                <Input type="text" id="text-input" name="text-input" placeholder="User name" />
                                              </Col>
                                            </FormGroup>
                                                                  
                                          </Form>
                                      
                                      </ModalBody>
                                      {/* <div data-id={item.id} onClick={that.handleAddMember}> */}
                                      <ModalFooter>                                   
                                          <Button color="primary" >Submit</Button>
                                      </ModalFooter>
                                      {/* </div> */}
                                    </Modal>
                                  </div>
                                </th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td></td>
                                <td></td>                                
                                <td></td>                               
                                <td></td>
                                <td>
                                <center>
                                {/* <div data-id={item.id} data-name={item.name} onClick={that.toggleEdit}> */}
                                  <Button color="warning" size="sm">
                                    <i class="fa fa-edit"></i>
                                  </Button>
                                {/* </div> */}
                                  <Modal size="lg" isOpen={that.state.modalEditMember} toggle={that.toggleEditMember} >
                                    <ModalHeader toggle={that.toggleEditMember}>Member</ModalHeader>
                                    <ModalBody>
                                      <Form className="form-horizontal">
                                        <FormGroup row>
                                          <Col md="3">
                                            <Label htmlFor="text-input">Name</Label>
                                          </Col>
                                          <Col xs="12" md="9">
                                            <Input type="text" id="name" name="name" placeholder="name" disabled={true} value={that.state.updateName} />

                                          </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                          <Col md="3">
                                            <Label htmlFor="text-input">As a...</Label>
                                          </Col>
                                          <Col xs="12" md="9">
                                            <Input type="text" id="role" name="role" placeholder="As a..." value={that.state.role} onChange={that.onTextboxChangerole} />

                                          </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                          <Col md="3">
                                            <Label htmlFor="text-input">I want to be able to...</Label>
                                          </Col>
                                          <Col xs="12" md="9">
                                            <Input type="text" id="want" name="want" placeholder="I want to be able to..." value={that.state.want} onChange={that.onTextboxChangewant} />

                                          </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                          <Col md="3">
                                            <Label htmlFor="textarea-input">So that...</Label>
                                          </Col>
                                          <Col xs="12" md="9">
                                            <Input type="textarea" name="so" id="so" rows="9"
                                              placeholder="Content..." value={that.state.so} onChange={that.onTextboxChangeso} />
                                          </Col>
                                        </FormGroup>
                                      </Form>
                                    </ModalBody>
                                    {/* <div data-id={item.id} onClick={that.handleUpdateMember}> */}
                                    <ModalFooter>                                   
                                        <Button color="primary" >Submit</Button>
                                    </ModalFooter>
                                    {/* </div> */}
                                  </Modal>

                                  {/* <div data-id={item.id} onClick={that.handleDelete}>  */}
                                  <Button type="submit" size="sm" color="danger">
                                    <i class="fa fa-trash"></i></Button>
                                  {/* </div> */}
                                  </center>
                                  </td>
                              </tr>

                            </tbody>
                          </Table>
                      </div>
                    </div>
                

                  
                
                </div>
              </div>

             


            {/* <div class="card border-primary mb-3">
                <div class="card-header bg-primary">
                  <strong>Find and add member</strong>
                      <Row>       
                        <Col xs="2" md="2">
                          <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                        </Col> 
                        <Col xs="0" md="0">
                          <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                        </Col> 
                      </Row>     

                      <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Skill</Label>
                          </Col>
                          <Col xs="5" md="5">
                            <Input type="text" id="text-input" name="text-input" placeholder="skill" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Point</Label>
                          </Col>
                          <Col xs="2" md="2">
                            <Input type="text" id="text-input" name="text-input" placeholder="Point min" />
                            <Input type="text" id="text-input" name="text-input" placeholder="Point max" />  
                          </Col>
                        </FormGroup>   
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Freelancer</Label>
                          </Col>
                          <Col xs="2" md="2">
                            <Input type="checkbox" id="text-input" name="text-input"  />  
                          </Col>
                        </FormGroup>                                          
                      </Form>
                </div>           
                <div class="card-body">
                    <Table hover bordered striped responsive size="sm">
                      <thead>
                      <tr>
                        <th>Name</th>
                        <th>Skill</th>
                        <th>Point</th>
                        <th>Number Project</th>
                        <th></th>
          
                       
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td></td>
                       
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                        </td>
                      </tr>
                     
                     
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                        </td>
                      </tr>
                     
                     
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                        </td>
                      </tr>

                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                        </td>
                      </tr>
                      
                      </tbody>
                    </Table>
                </div>
            </div> */}
          </div>
           
    );
  }
}

export default CreateTeam;
