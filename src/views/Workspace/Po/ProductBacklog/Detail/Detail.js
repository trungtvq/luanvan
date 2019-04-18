import React, { Component } from 'react';
import { Card,CardHeader,Badge, Button, Col, 
  Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, 
  Modal, 
  ModalHeader, 
  ModalBody,
  Form,
  FormGroup,
  Label,
  ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
class Detail extends Component {
   constructor(props) {
    super(props);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.state = {
      data: [ 
              {
                "id":1,
                "as":"admin",
                "want":"See a list of all members and visitors",
                "so":"I can monitor site visits",
                "priority":1,
                "estimation":3,
                "sprint":1,
                "status":"done",
              },
              {
                "id":2,
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
                 "priority":2,
                "estimation":1,
                "sprint":1,
                "status":"done",
              },
              {
                "id":3,
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
                 "priority":3,
                "estimation":4,
                "sprint":1,
                "status":"done",
              },
              {
                "id":4,
                "as":"admin",
                "want":"Delete comment",
                "so":"Offensive content is removed",
                 "priority":4,
                "estimation":6,
                "sprint":1,
                "status":"done",
              },
              {
                "id":5,
                "as":"admin",
                "want":"Add new key words",
                "so":"Content is easy to groups and search for",
                "priority":5,
                "estimation":1,
                "sprint":1,
                "status":"done",
              },
              {
                "id":6,
                "as":"member",
                "want":"Update my account detail",
                "so":"I can be contacted by admin",
                "priority":5,
                "estimation":3,
                "sprint":2,
                "status":"done",
              }
            ],
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

  render() {
    const {
      data
    } = this.state;
    let that=this;
    return (
      <Row>
          <Col>        

                <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                    
                    <Col xs="0" md="0">
                      <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                    </Col> 
                </Row>   
                 <Card>
                <div class="table-responsive"> 
                 <table class="table table-lg">
                  <thead class="thead">
                  <tr class="bg-primary">
                    <th>ID <i class="fa fa-sort"></i></th>
                    <th>As a... <i class="fa fa-sort"></i></th>
                    <th>I want to be able to... <i class="fa fa-sort"></i></th>
                    <th>So that...  <i class="fa fa-sort"></i></th>
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Estimation <i class="fa fa-sort"></i></th>
                    <th>Sprint <i class="fa fa-sort"></i> </th>
                    <th>Status < i class="fa fa-sort"></i></th>
                    <th>
                      <div>
                            <Button color="primary" size="sm" className="mt-3" onClick={that.toggleAdd}><i class="fa fa-plus-square"></i>{this.props.buttonLabel}</Button>
                            <Modal size="lg" isOpen={that.state.modalAdd} toggle={that.toggleAdd} className={that.props.className}>
                              <ModalHeader toggle={that.toggleAdd}>UserStory</ModalHeader>
                              <ModalBody>
                                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">As a...</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="As a..." />
                                        
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">I want to be able to...</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="I want to be able to..." />
                                        
                                      </Col>
                                    </FormGroup>   
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="textarea-input">So that...</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                               placeholder="Content..." />
                                      </Col>
                                    </FormGroup>                     
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="date-input">Status </Label>
                                      </Col>
                                      <Col xs="12" md="2">
                                        <Input type="text" id="text-input" name="texttext-input" placeholder="text" value="to do"/>
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="1">
                                        <Label htmlFor="text-input">Priority</Label>
                                      </Col>
                                      <Col xs="12" md="1">
                                        <Input type="text" name="text-input" id="text-input" rows="9"/>
                                      </Col>
                                     
                                      <Col md="2">                    
                                      </Col>
                                     
                                      <Col md="1">
                                        <Label htmlFor="text-input">Estimation</Label>
                                      </Col>
                                      <Col xs="12" md="1">
                                        <Input type="text" name="text-input" id="text-input" rows="9"/>                            
                                      </Col>

                                      <Col md="2">                   
                                      </Col>

                                      <Col md="1">
                                        <Label htmlFor="text-input">Sprint</Label>
                                      </Col>
                                      <Col xs="12" md="1">
                                        <Input type="text" name="text-input" id="text-input" rows="9"/>                            
                                      </Col>
                                    </FormGroup>                                          
                                  </Form>                        
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={that.toggleAdd}>Submit</Button>{' '}
                                <Button color="secondary" onClick={that.toggleAdd}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.as}</td>
                      <td>{item.want}</td>
                      <td>{item.so}</td>
                      <td><center>{item.priority}</center></td>
                      <td><center>{item.estimation}</center></td>
                      <td><center>{item.sprint}</center></td>
                      <td><center>{item.status}</center></td>
                      <td>
                        <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                        <Button color="warning" size="sm" onClick={that.toggleEdit}><i class="fa fa-edit"></i>{that.props.buttonLabel}</Button>
                            <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                              <ModalHeader toggle={that.toggleEdit}>ProductBacklog</ModalHeader>
                              <ModalBody>
                                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">As a...</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="As a..." value="admin"/>
                                        
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">I want to be able to...</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="I want to be able to..." value="See a list of all members and visitors" />
                                        
                                      </Col>
                                    </FormGroup>   
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="textarea-input">So that...</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                               placeholder="Content..." value="I can monitor site visits"/>
                                      </Col>
                                    </FormGroup>                     
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="date-input">Status</Label>
                                      </Col>
                                      <Col xs="12" md="2">
                                        <Input type="select" name="status" id="status" size="sm">
                                          <option value="0">done</option>
                                          <option value="1">to do</option>
                                          <option value="2">inprogress</option>
                                          
                                        </Input>
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="1">
                                        <Label htmlFor="text-input">Priority</Label>
                                      </Col>
                                      <Col xs="12" md="1">
                                        <Input type="text" name="text-input" id="text-input" rows="9" value="1"/>
                                      </Col>
                                     
                                      <Col md="2">                    
                                      </Col>
                                     
                                      <Col md="1">
                                        <Label htmlFor="text-input">Estimation</Label>
                                      </Col>
                                      <Col xs="12" md="1">
                                        <Input type="text" name="text-input" id="text-input" rows="9" value="2"/>                            
                                      </Col>

                                      <Col md="2">                   
                                      </Col>

                                      <Col md="1">
                                        <Label htmlFor="text-input">Sprint</Label>
                                      </Col>
                                      <Col xs="12" md="1">
                                        <Input type="text" name="text-input" id="text-input" rows="9" value="3"/>                            
                                      </Col>
                                    </FormGroup>                                          
                                  </Form>                      
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={that.toggleEdit}>Submit</Button>{' '}
                                <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                        <Button type="submit" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                      </td>
                  </tr>
                )
             
             })}</tbody>
                </table>
                </div>
              </Card>
              
          </Col>
        </Row>
    );
  }
}

export default Detail;
