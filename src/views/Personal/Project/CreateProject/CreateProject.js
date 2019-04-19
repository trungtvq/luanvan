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
class CreateProject extends Component {


  
  render() {
    return (
      <Row>
          <Col>  
           
            <div class="card  bg-primary mb-3">
              <div class="card-body">
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Topic project</Label>
                    </Col>
                    <Col xs="5" md="5">
                      <Input type="text" id="IdBacklog" name="IdBacklog" placeholder="IdBacklog" />
                      
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Project Name</Label>
                    </Col>
                    <Col xs="5" md="5">
                      <Input type="text" id="ProjectName" name="ProjectName" placeholder="Project Name" />
                      
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Start </Label>
                    </Col>
                    <Col xs="5" md="5">
                      <Input type="date" id="Start" name="date-input" placeholder="Start" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">End </Label>
                    </Col>
                    <Col xs="5" md="5">
                      <Input type="date" id="End" name="date-input" placeholder="End" />
                    </Col>
                  </FormGroup>
                  
                  
                    <div class="card  mb-3">
                      <div class="card-body text-primary">
                              <h6><b>Member</b></h6>
                              <Table  responsive size="lg">
                                <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Role</th>
                                  <th>Skill</th>
                                  <th>Point</th>
                                 
                    
                                 
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                
                                </tr>
                               
                               
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  
                                </tr>
                               
                               
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  
                                </tr>

                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  
                                </tr>
                                
                                </tbody>
                              </Table>
                            </div>
                    </div>
                 

                  
                     <div class="card  mb-3">
                        <div class="card-header ">
                                  <i className="fa fa-align-justify"></i><strong>Find and add member</strong>
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
                                 <Table  responsive size="sm">
                                <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Role</th>
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
                                  <td></td>
                                  <td>
                                    <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                                  </td>
                                </tr>
                                
                                </tbody>
                              </Table>
                            </div>
                    </div> 
                                
                 
                  
                                                
                </Form>
              </div>
              <div class="card-footer  bg-primary">
                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Add</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </div>
            </div>
         </Col>
      </Row>
         
    );
  }
}

export default CreateProject;
