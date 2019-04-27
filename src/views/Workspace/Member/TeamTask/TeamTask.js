import React, { Component } from 'react';
import { 
Form,
FormGroup,
Label,
Card,
CardBody, 
CardFooter,
CardHeader,
Collapse,
Progress, 
Badge, 
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
ListGroup,
ListGroupItem,
PaginationLink,
Modal,
ModalHeader,
ModalBody,
ModalFooter, } from 'reactstrap';
import { Link } from 'react-router-dom';


class TeamTask extends Component {
   constructor(props) {
    super(props);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggle = this.toggle.bind(this);
   
    this.state = {
      collapse: true,
      fadeIn: true,
      data: [ 
              {
                "Title":"Login bằng Fb",
                "Description":"Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập",
                "Priority":"High",
                "Start":"20/4/2019",
                "Deadline":"24/4/2019",
                "Assignee":"Hùng",
                "Comment":"",
                "status":"done",
                "review":"",
              },
              {
                "Title":"Đổi mật khẩu",
                "Description":"Người dùng đổi mật khẩu của tài khoản mà mình tạo",
                "Priority":"Low",
                "Start":"20/4/2019",
                "Deadline":"24/4/2019",
                 "Assignee":"Tâm",
                "Comment":"Có cần gửi mà tới email liên kết để xác nhận không?",
                "status":"done",
                "review":"",
              },
              {
                "Title":"Thay đổi avatar",
                "Description":"Người dùng thay đổi avatar hiển thị ở giao diện chính",
                "Priority":"Low",
                "Start":"20/4/2019",
                "Deadline":"24/4/2019",
                 "Assignee":"Trung",
                "Comment":"",
                "status":"done",
                "review":"",
              },
              {
                "Title":"Thanh toán bằng paypal",
                "Description":"Người dùng sử dụng paypal để trả phí",
                "Priority":"Low",
                "Start":"20/4/2019",
                "Deadline":"24/4/2019",
                "Assignee":"",
                "Comment":"",
                "status":"done",
                "review":"",
              },
              
            ],
      modalAdd: false,
      modalEdit: false,
      
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

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
                    <th>Title <i class="fa fa-sort"></i></th>
                    <th>Description <i class="fa fa-sort"></i></th>
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Start day <i class="fa fa-sort"></i></th>
                    <th>Deadline <i class="fa fa-sort"></i></th>
                    <th>Assignee</th>                 
                    <th>Comment</th>
                    <th>Status</th>         
                    <th>Review</th>   
                    <th>
                      <div>
                            <Button color="primary" size="sm" className="mt-3" onClick={that.toggleAdd}><i class="fa fa-plus-square"></i>{this.props.buttonLabel}</Button>
                            <Modal size="lg" isOpen={that.state.modalAdd} toggle={that.toggleAdd} className={that.props.className}>
                              <ModalHeader toggle={that.toggleAdd}>Team Task</ModalHeader>
                              <ModalBody>
                                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Title</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="Title" />
                                        
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="textarea-input">Description</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                               placeholder="Content..." />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label>Priority</Label>
                                      </Col>
                                      <Col md="9">
                                        <FormGroup check inline>
                                          <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                          <Label className="form-check-label" check htmlFor="inline-radio1">High</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                          <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                          <Label className="form-check-label" check htmlFor="inline-radio2">Medium</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                          <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                                          <Label className="form-check-label" check htmlFor="inline-radio3">Low</Label>
                                        </FormGroup>
                                      </Col>
                                    </FormGroup>                     
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="date-input">Start  </Label>
                                      </Col>
                                      <Col xs="3" md="3">
                                        <Input type="time" id="timeStart" name="timeStart"/>
                                      </Col>
                                      <Col xs="3" md="3">
                                        <Input type="date" id="date-input" name="date-input" />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="date-input">Deadline </Label>
                                      </Col>
                                      <Col xs="3" md="3">
                                        <Input type="time" id="timeEnd" name="timeEnd"/>
                                      </Col>
                                      <Col xs="3" md="3">
                                        <Input type="date" id="date-input" name="date-input" />
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Assignee</Label>
                                      </Col>
                                     <Col xs="12" md="3">
                                        <Input type="select" name="select" id="select">
                                          <option value="0">Please select</option>
                                          <option value="1">Hùng</option>
                                          <option value="2">Nhân</option>
                                          <option value="3">Tâm</option>
                                        </Input>
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
                      <td>{item.Title}</td>
                      <td>{item.Description}</td>
                      <td>{item.Priority}</td>
                      <td>{item.Start}</td>
                      <td>{item.Deadline}</td>
                      <td>{item.Assignee}</td>
                      <td>{item.Comment}</td>
                      <td>{item.status}</td> 
                      <td>{item.review}</td>
                      <td>
                          <Button color="warning" size="sm" className="mt-3" onClick={that.toggleEdit}><i class="fa fa-edit"></i>{that.props.buttonLabel}</Button>
                            <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                              <ModalHeader toggle={that.toggleEdit}>Team task</ModalHeader>
                              <ModalBody>
                                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Title</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="Title" value="Login bằng Fb"/>
                                        
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="textarea-input">Description</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                               placeholder="Content..." value="Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập"/>
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label>Priority</Label>
                                      </Col>
                                      <Col md="9">
                                        <FormGroup check inline>
                                          <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                          <Label className="form-check-label" check htmlFor="inline-radio1">High</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                          <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                          <Label className="form-check-label" check htmlFor="inline-radio2">Medium</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                          <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                                          <Label className="form-check-label" check htmlFor="inline-radio3">Low</Label>
                                        </FormGroup>
                                      </Col>
                                    </FormGroup>                     
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="date-input">Start day </Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="date" id="date-input" name="date-input" placeholder="date" value="20/4/2019"/>
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="date-input">Deadline </Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="date" id="date-input" name="date-input" placeholder="date" value="24/4/2019"/>
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Assignee</Label>
                                      </Col>
                                     <Col xs="12" md="2">
                                        <Input type="select" name="select" id="select">
                                          <option value="0">Please select</option>
                                          <option value="1">Hùng</option>
                                          <option value="2">Nhân</option>
                                          <option value="3">Tâm</option>
                                        </Input>
                                      </Col>
                                    </FormGroup>   
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Status</Label>
                                      </Col>
                                      <Col xs="12" md="2">
                                        <Input type="select" name="select" id="select">
                                          <option value="0">Please select</option>
                                          <option value="1">done</option>
                                          <option value="2">inprogress</option>
                                          <option value="3">to do</option>
                                        </Input>
                                      </Col>
                                    </FormGroup>                                       
                                  </Form>               
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={that.toggleEdit}>Submit</Button>{' '}
                                <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                              </ModalFooter>
                            </Modal>                        
                          <Button type="submit" size="sm" color="success"><i class="fa fa-plus"></i></Button>
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

export default TeamTask;
