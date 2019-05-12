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
      modalAdd: false,
      modalEdit: false,
      modalSend: false,
      id:'',
      as:"",
      want:"",
      so:"",
      priority:'',
      estimation:'',
      sprint:'',
      status:"",
      }
    };

  toggleAdd=()=> {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }
  toggleEdit=()=>{
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }
  toggleSend=()=> {
    this.setState(prevState => ({
      modalSend: !prevState.modalSend
    }));
  }

  onTextboxChangeAs=(event)=> {
    this.setState({
      as: event.target.value,
    });
    
  }
  onTextboxChangeWant=(event)=> {
    this.setState({
      want: event.target.value,
    });
  }
  onTextboxChangeSo=(event)=> {
    this.setState({
      so: event.target.value,
    });
  }
  onTextboxChangePriority=(event)=> {
    this.setState({
      priority: event.target.value,
    });
  }
  onTextboxChangeEstimation=(event)=> {
    this.setState({
      estimation: event.target.value,
    });
  }
  
  onTextboxChangeSprint=(event)=> {
    this.setState({
      sprint: event.target.value,
    });
  }

  handleAdd = () => {
   
  };
  handleDelete = () => {
    
  };
  
  handleUpdate = () => {
   
  };
  handleSend = () => {
   
  };
//   componentDidMount() {
//     this.setState({inputValue: this.props.inputValue});
//  }
//  handleChangeUpdateAs = (e) => {
//   this.setState({as: e.target.value});
// }
  render() {
    const {
      data,
      id,
      as,
      want,
      so,
      priority,
      estimation,
      sprint,
      status,
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
                              <ModalHeader toggle={that.toggleAdd}>ProductBacklog</ModalHeader>
                              <ModalBody>
                                  <Form  className="form-horizontal">               
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">As a...</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="as" name="as" placeholder="As a..." value={as} onChange={that.onTextboxChangeAs}/>
                                        
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">I want to be able to...</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="want" name="want" placeholder="I want to be able to..." value={want} onChange={that.onTextboxChangeWant}/>
                                        
                                      </Col>
                                    </FormGroup>   
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="textarea-input">So that...</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="textarea" name="so" id="so" rows="9"
                                               placeholder="Content..." value={so} onChange={that.onTextboxChangeSo}/>
                                      </Col>
                                    </FormGroup>                     
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="date-input">Status </Label>
                                      </Col>
                                      <Col xs="12" md="2">
                                        <Input type="text" id="status" name="status" placeholder="text" value="to do"/>
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="1">
                                        <Label htmlFor="text-input">Priority</Label>
                                      </Col>
                                      <Col xs="12" md="1">
                                        <Input type="text" name="priority" id="priority" rows="9" value={priority} onChange={that.onTextboxChangePriority}/>
                                      </Col>
                                     
                                      <Col md="2">                    
                                      </Col>
                                     
                                      <Col md="1">
                                        <Label htmlFor="text-input">Estimation</Label>
                                      </Col>
                                      <Col xs="12" md="1">
                                        <Input type="text" name="estimation" id="estimation" rows="9" value={estimation} onChange={that.onTextboxChangeEstimation}/>                            
                                      </Col>

                                      <Col md="2">                   
                                      </Col>

                                      <Col md="1">
                                        <Label htmlFor="text-input">Sprint</Label>
                                      </Col>
                                      <Col xs="12" md="1">
                                        <Input type="text" name="sprint" id="sprint" rows="9" value={sprint} onChange={that.onTextboxChangeSprint}/>                            
                                      </Col>
                                    </FormGroup>                                          
                                  </Form>                        
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={that.handleAdd}>Submit</Button>{' '}
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
                        <Button type="submit" size="sm" color="success" onClick={that.toggleSend}><i class="fa fa-share-square"></i></Button>
                        <Modal size="lg" isOpen={that.state.modalSend} toggle={that.toggleSend} className={that.props.className}>
                                    <ModalHeader toggle={that.toggleSend}>ProductBacklog</ModalHeader>
                                    <ModalBody>
                                      <div class="card  bg-primary mb-3">
                                        <div class="card-body">
                                          <Form action=""  className="form-horizontal">               
                                            

                                            <FormGroup row>
                                              <Col md="3">
                                                <Label htmlFor="date-input">Start </Label>
                                              </Col>
                                              <Col xs="3" md="3">
                                              <Input type="time" id="timeStart" name="timeStart"/>
                                              </Col>
                                              <Col xs="3" md="3">
                                                <Input type="date" id="dateStart" name="dateStart" />
                                              </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                              <Col md="3">
                                                <Label htmlFor="date-input">End </Label>
                                              </Col>
                                              <Col xs="3" md="3">
                                              <Input type="time" id="timeEnd" name="timeEnd"/>
                                              </Col>
                                              <Col xs="3" md="3">
                                                <Input type="date" id="dateEnd" name="dateEnd" />
                                              </Col>
                                            </FormGroup>
                                            
                                            
                                                                               
                                          </Form>
                                        </div>
                                      </div>                         
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button color="primary" onClick={that.handleSend}>Submit</Button>{' '}
                                    <Button color="secondary" onClick={that.toggleSend}>Cancel</Button>
                                    </ModalFooter>
                        </Modal>
                        <Button color="warning" size="sm" onClick={that.toggleEdit}><i class="fa fa-edit"></i>{that.props.buttonLabel}</Button>
                            <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                              <ModalHeader toggle={that.toggleEdit}>ProductBacklog</ModalHeader>
                              <ModalBody>
                                  <Form  className="form-horizontal">               
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
                                <Button color="primary" onClick={that.handleUpdate}>Submit</Button>{' '}
                                <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                        <Button  size="sm" color="danger" onClick={that.handleDelete}><i class="fa fa-trash"></i></Button>
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
