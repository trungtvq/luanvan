import React, { Component } from 'react';
import { Card, Badge, Button, Col, Container, Input, InputGroup, 
  InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, 
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  ModalFooter,

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
              },
              {
                "id":2,
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
              },
              {
                "id":3,
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
              },
              {
                "id":4,
                "as":"admin",
                "want":"Delete comment",
                "so":"Offensive content is removed",
              },
              {
                "id":5,
                "as":"admin",
                "want":"Add new key words",
                "so":"Content is easy to groups and search for",
              },
              {
                "id":6,
                "as":"member",
                "want":"Update my account detail",
                "so":"I can be contacted by admin",
              }
            ],
      modalAdd: false,
      modalEdit: false,
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
                      <th>As a...<i class="fa fa-sort"></i></th>
                      <th>I want to be able to... <i class="fa fa-sort"></i></th>
                      <th>So that... <i class="fa fa-sort"></i></th>
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
                        <td>
                         
                            <Button color="warning" size="sm" onClick={that.toggleEdit}><i class="fa fa-edit"></i>{that.props.buttonLabel}</Button>
                            <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                              <ModalHeader toggle={that.toggleEdit}>UserStory</ModalHeader>
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
            </  Card>  
          </Col>
        </Row>
    );
  }
}

export default Detail;
