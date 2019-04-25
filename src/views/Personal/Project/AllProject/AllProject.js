import React, { Component } from 'react';
import { Badge, 
Button, 
Col, 
Container, 
Input, 
InputGroup, 
InputGroupAddon, 
InputGroupText, 
Row, 
Table, 
Pagination, 
PaginationItem, 
PaginationLink, 
Card, 
CardBody, 
CardHeader, 
Jumbotron,
Progress,
Navbar,

NavbarBrand,

NavbarToggler,

Collapse,

Nav,

NavItem,

NavLink,

UncontrolledDropdown,

DropdownToggle,

DropdownMenu,

DropdownItem,

Modal,

ModalHeader,

ModalBody,

Form,

FormGroup,

Label,

ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import Demo from '../../../../homeNav'


class AllProject extends Component {
  constructor(props) {
    super(props);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleEditTopic = this.toggleEditTopic.bind(this);

    

    this.state = {
      modalAdd: false,
      modalEdit: false,
      modalEditTopic: false,
      }
    };

  toggleAdd() {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }
  toggleEdit() {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }
  toggleEditTopic() {
    this.setState(prevState => ({
      modalEditTopic: !prevState.modalEditTopic
    }));
  }
  render() {
    let that=this;
    return (
  
    <div>
      <Demo/>
      <Container>


      <Row>
          <Col>  
                <Card>
                      <CardHeader>
                        <strong>Web </strong>                            

                            <Row>       
                              <Col xs="2" md="2">
                                <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                              </Col> 
                              <Col xs="2" md="2">
                                <Input type="select" name="select" id="select">
                                  <option value="0">Sort by Name</option>
                                  <option value="1">Sort by Time start</option>
                                  <option value="2">Sort by Progress</option>    
                                </Input>
                              </Col>   
                              <Col xs="0" md="0">
                                <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                              </Col> 
                            </Row>  

                            <div className="card-header-actions">
                                  <div className="card-header-action btn btn-setting" onClick={that.toggleAdd}><i className="icon-plus"></i>{this.props.buttonLabel}</div>
                                  <Modal size="lg" isOpen={that.state.modalAdd} toggle={that.toggleAdd} className={that.props.className}>
                                  <ModalHeader toggle={that.toggleAdd}>Project</ModalHeader>
                                  <ModalBody>
                                    <div class="card  bg-primary mb-3">
                                      <div class="card-body">
                                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                          <FormGroup row>
                                            <Col md="3">
                                              <Label htmlFor="text-input">Topic project</Label>
                                            </Col>
                                            <Col xs="4" md="4">
                                              <Input type="text" id="TopicProject" name="TopicP roject" placeholder="New Topic" value="web"/>
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
                                                <div class="card-body text-dark">
                                                      <strong>Find and add member</strong>
                                                      <Row>       
                                                              <Col xs="2" md="2">
                                                                <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                                                              </Col> 
                                                              <Col xs="0" md="0">
                                                                <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                                                              </Col> 
                                                      </Row>     

                                                      <Form  action="" method="post" encType="multipart/form-data" className="form-horizontal">               
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
                                    </div>                         
                                  </ModalBody>
                                  <ModalFooter>
                                  <Button color="primary" onClick={that.toggleAdd}>Submit</Button>{' '}
                                  <Button color="secondary" onClick={that.toggleAdd}>Cancel</Button>
                                  </ModalFooter>
                                  </Modal>
                              <div className="card-header-action btn btn-setting" onClick={that.toggleEditTopic}><i className="icon-settings"></i>{this.props.buttonLabel}</div>
                              <Modal size="lg" isOpen={that.state.modalEditTopic} toggle={that.toggleEditTopic} className={that.props.className}>
                                  <ModalBody>
                                    <div class="card  bg-primary mb-3">
                                      <div class="card-body">
                                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                          <FormGroup row>
                                            <Col md="3">
                                              <Label htmlFor="text-input">Topic project</Label>
                                            </Col>
                                            <Col xs="4" md="4">
                                              <Input type="text" id="TopicProject" name="TopicP roject" placeholder="New Topic" value="web"/>
                                            </Col>
                                          </FormGroup>                                                        
                                        </Form>
                                      </div>
                                    </div>                         
                                  </ModalBody>
                                  <ModalFooter>
                                  <Button color="primary" onClick={that.toggleEditTopic}>Submit</Button>{' '}
                                  <Button color="secondary" onClick={that.toggleEditTopic}>Cancel</Button>
                                  </ModalFooter>
                                  </Modal>
                              <div className="card-header-action btn btn-setting"><i className="icon-trash"></i>{this.props.buttonLabel}</div>
                             
                            </div>
                      </CardHeader>
                      <CardBody>
                         <Row>
                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán giày</strong>
                                        </Link>
                                        <div className="card-header-actions">
                                        <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-trash"></i>{this.props.buttonLabel}</div>
                                        <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-settings"></i>{this.props.buttonLabel}</div>
                                        <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                                          <ModalHeader toggle={that.toggleEdit}>Project</ModalHeader>
                                          <ModalBody>
                                            <div class="card  bg-primary mb-3">
                                              <div class="card-body">
                                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                                  <FormGroup row>
                                                    <Col md="3">
                                                      <Label htmlFor="text-input">Topic project</Label>
                                                    </Col>
                                                    <Col xs="4" md="4">
                                                      <Input type="text" id="TopicProject" name="TopicP roject" placeholder="New Topic" value="web"/>
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
                                                        <div class="card-body text-dark">
                                                              <strong>Find and add member</strong>
                                                              <Row>       
                                                                      <Col xs="2" md="2">
                                                                        <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                                                                      </Col> 
                                                                      <Col xs="0" md="0">
                                                                        <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                                                                      </Col> 
                                                              </Row>     

                                                              <Form  action="" method="post" encType="multipart/form-data" className="form-horizontal">               
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
                                            </div>                         
                                          </ModalBody>
                                          <ModalFooter>
                                            <Button color="primary" onClick={that.toggleEdit}>Submit</Button>{' '}
                                            <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                                          </ModalFooter>
                                        </Modal>
                    
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   9:00 (3/01/2019)</h6>
                                        <h6>  End:   9:00 (23/05/2019)</h6>
                                        <Progress value={50} />
                                        <div className="text-center">50%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  

                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/ProjectTodo">
                                        <i className=""></i><strong>Web bán quần áo</strong>
                                         </Link>
                                          <div className="card-header-actions">
                                        <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-trash"></i>{this.props.buttonLabel}</div>
                                        <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-settings"></i>{this.props.buttonLabel}</div>
                                        <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                                          <ModalHeader toggle={that.toggleEdit}>Project</ModalHeader>
                                          <ModalBody>
                                            <div class="card  bg-primary mb-3">
                                              <div class="card-body">
                                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                                  <FormGroup row>
                                                    <Col md="3">
                                                      <Label htmlFor="text-input">Topic project</Label>
                                                    </Col>
                                                    <Col xs="4" md="4">
                                                      <Input type="text" id="TopicProject" name="TopicP roject" placeholder="New Topic" value="web"/>
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
                                                        <div class="card-body text-dark">
                                                              <strong>Find and add member</strong>
                                                              <Row>       
                                                                      <Col xs="2" md="2">
                                                                        <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                                                                      </Col> 
                                                                      <Col xs="0" md="0">
                                                                        <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                                                                      </Col> 
                                                              </Row>     

                                                              <Form  action="" method="post" encType="multipart/form-data" className="form-horizontal">               
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
                                            </div>                         
                                          </ModalBody>
                                          <ModalFooter>
                                            <Button color="primary" onClick={that.toggleEdit}>Submit</Button>{' '}
                                            <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                                          </ModalFooter>
                                        </Modal>                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:30 (23/01/2019)</h6>
                                        <h6>  End:   8:30 (23/05/2019)</h6>
                                        <Progress value={0} />
                                        <div className="text-center">0%</div>
                                      </CardBody>
                                </Card> 
                           
                            </Col>  

                            <Col>  
                            
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán đồ cổ</strong>
                                       </Link>
                                        <div className="card-header-actions">
                                        <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-trash"></i>{this.props.buttonLabel}</div>
                                        <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-settings"></i>{this.props.buttonLabel}</div>
                                        <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                                          <ModalHeader toggle={that.toggleEdit}>Project</ModalHeader>
                                          <ModalBody>
                                            <div class="card  bg-primary mb-3">
                                              <div class="card-body">
                                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                                  <FormGroup row>
                                                    <Col md="3">
                                                      <Label htmlFor="text-input">Topic project</Label>
                                                    </Col>
                                                    <Col xs="4" md="4">
                                                      <Input type="text" id="TopicProject" name="TopicP roject" placeholder="New Topic" value="web"/>
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
                                                        <div class="card-body text-dark">
                                                              <strong>Find and add member</strong>
                                                              <Row>       
                                                                      <Col xs="2" md="2">
                                                                        <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                                                                      </Col> 
                                                                      <Col xs="0" md="0">
                                                                        <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                                                                      </Col> 
                                                              </Row>     

                                                              <Form  action="" method="post" encType="multipart/form-data" className="form-horizontal">               
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
                                            </div>                         
                                          </ModalBody>
                                          <ModalFooter>
                                            <Button color="primary" onClick={that.toggleEdit}>Submit</Button>{' '}
                                            <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                                          </ModalFooter>
                                        </Modal>                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   11:00 (23/01/2019)</h6>
                                        <h6>  End:   11:00 (23/05/2019)</h6>
                                        <Progress value={30} />
                                        <div className="text-center">30%</div>
                                      </CardBody>
                                </Card> 
                          
                            </Col>  

                            <Col>  
                             
                                <Card>
                                      <CardHeader>
                                      <Link to="/ProjectDone">
                                        <i className=""></i><strong>Web coffee house</strong>
                                      </Link>
                                       <div className="card-header-actions">
                                        <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-trash"></i>{this.props.buttonLabel}</div>
                                        <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-settings"></i>{this.props.buttonLabel}</div>
                                        <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                                          <ModalHeader toggle={that.toggleEdit}>Project</ModalHeader>
                                          <ModalBody>
                                            <div class="card  bg-primary mb-3">
                                              <div class="card-body">
                                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                                  <FormGroup row>
                                                    <Col md="3">
                                                      <Label htmlFor="text-input">Topic project</Label>
                                                    </Col>
                                                    <Col xs="4" md="4">
                                                      <Input type="text" id="TopicProject" name="TopicP roject" placeholder="New Topic" value="web"/>
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
                                                        <div class="card-body text-dark">
                                                              <strong>Find and add member</strong>
                                                              <Row>       
                                                                      <Col xs="2" md="2">
                                                                        <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                                                                      </Col> 
                                                                      <Col xs="0" md="0">
                                                                        <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                                                                      </Col> 
                                                              </Row>     

                                                              <Form  action="" method="post" encType="multipart/form-data" className="form-horizontal">               
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
                                            </div>                         
                                          </ModalBody>
                                          <ModalFooter>
                                            <Button color="primary" onClick={that.toggleEdit}>Submit</Button>{' '}
                                            <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                                          </ModalFooter>
                                        </Modal>                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:00 (23/01/2019)</h6>
                                        <h6>  End:   8:00 (23/05/2019)</h6>
                                        <Progress value={100} />
                                        <div className="text-center">100%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  
                         </Row>
                      </CardBody>
                </Card>    

                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Game</strong>
                          
                            <Row>       
                              <Col xs="2" md="2">
                                <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                              </Col> 
                              <Col xs="2" md="2">
                                <Input type="select" name="select" id="select">
                                  <option value="0">Sort by Name</option>
                                  <option value="1">Sort by Time start</option>
                                  <option value="2">Sort by Progress</option>    
                                </Input>
                              </Col>   
                              <Col xs="0" md="0">
                                <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                              </Col> 
                            </Row>
                      </CardHeader>
                      <CardBody>
                         <Row>
                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán giày</strong>
                                        </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   9:00 (3/01/2019)</h6>
                                        <h6>  End:   9:00 (23/05/2019)</h6>
                                        <Progress value={50} />
                                        <div className="text-center">50%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  

                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/ProjectTodo">
                                        <i className=""></i><strong>Web bán quần áo</strong>
                                         </Link>
                                          <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:30 (23/01/2019)</h6>
                                        <h6>  End:   8:30 (23/05/2019)</h6>
                                        <Progress value={0} />
                                        <div className="text-center">0%</div>
                                      </CardBody>
                                </Card> 
                           
                            </Col>  

                            <Col>  
                            
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán đồ cổ</strong>
                                       </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   11:00 (23/01/2019)</h6>
                                        <h6>  End:   11:00 (23/05/2019)</h6>
                                        <Progress value={30} />
                                        <div className="text-center">30%</div>
                                      </CardBody>
                                </Card> 
                          
                            </Col>  

                            <Col>  
                             
                                <Card>
                                      <CardHeader>
                                      <Link to="/ProjectDone">
                                        <i className=""></i><strong>Web coffee house</strong>
                                      </Link>
                                       <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:00 (23/01/2019)</h6>
                                        <h6>  End:   8:00 (23/05/2019)</h6>
                                        <Progress value={100} />
                                        <div className="text-center">100%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  
                         </Row>
                      </CardBody>
                </Card>    

                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Application</strong>
                                
                          <Row>       
                            <Col xs="2" md="2">
                              <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                            </Col> 
                            <Col xs="2" md="2">
                              <Input type="select" name="select" id="select">
                                <option value="0">Sort by Name</option>
                                <option value="1">Sort by Time start</option>
                                <option value="2">Sort by Progress</option>    
                              </Input>
                            </Col>   
                            <Col xs="0" md="0">
                              <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                            </Col> 
                          </Row>
                            </CardHeader>
                          <CardBody>
                         <Row>
                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán giày</strong>
                                        </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   9:00 (3/01/2019)</h6>
                                        <h6>  End:   9:00 (23/05/2019)</h6>
                                        <Progress value={50} />
                                        <div className="text-center">50%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  

                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/ProjectTodo">
                                        <i className=""></i><strong>Web bán quần áo</strong>
                                         </Link>
                                          <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:30 (23/01/2019)</h6>
                                        <h6>  End:   8:30 (23/05/2019)</h6>
                                        <Progress value={0} />
                                        <div className="text-center">0%</div>
                                      </CardBody>
                                </Card> 
                           
                            </Col>  

                            <Col>  
                            
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán đồ cổ</strong>
                                       </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   11:00 (23/01/2019)</h6>
                                        <h6>  End:   11:00 (23/05/2019)</h6>
                                        <Progress value={30} />
                                        <div className="text-center">30%</div>
                                      </CardBody>
                                </Card> 
                          
                            </Col>  

                            <Col>  
                             
                                <Card>
                                      <CardHeader>
                                      <Link to="/ProjectDone">
                                        <i className=""></i><strong>Web coffee house</strong>
                                      </Link>
                                       <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:00 (23/01/2019)</h6>
                                        <h6>  End:   8:00 (23/05/2019)</h6>
                                        <Progress value={100} />
                                        <div className="text-center">100%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  
                         </Row>
                      </CardBody>
                </Card>    
          </Col>
        </Row>

      </Container>  
      <AppFooter /> 
    </div>  
    
     
    );
  }
}

export default AllProject;
