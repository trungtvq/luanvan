import React, { Component } from 'react';
import { 
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
PaginationLink, 
Card,
CardBody,
CardColumns,
CardHeader,
Collapse,
Progress,
Label,
Modal, ModalHeader, ModalBody, ModalFooter,
Form,
FormGroup
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import  { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,ResponsiveContainer
} from 'recharts';

const data = [
 
  {
    name: 'Date 1', expect: 590, real: 800, bug: 210,
  },
  {
    name: 'Date 2', expect: 868, real: 967, bug: 310,
  },
  {
    name: 'Date 3', expect: 1397, real: 1098, bug: 410,  
  },
  {
    name: 'Date 4', expect: 1480, real: 1200, bug: 510,
  },
  {
    name: 'Date 5', expect: 1520, real: 1108, bug: 610,
  },
  {
    name: 'Date 6', expect: 1590, real: 800, bug: 110,
  },
];

class TCol extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>

      <ComposedChart
      width={700}
      height={500}
        data={data}
        margin={{
          top: 20, right: 80, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" label={{ value: 'Date in spint', position: 'insideBottomRight', offset: 0 }} />
        <YAxis label={{ value: 'Task', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="expect" fill="#fbf313" stroke="#fbf313" />
        <Bar dataKey="real" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="bug" stroke="#ff7300" />
      </ComposedChart>
      </ResponsiveContainer>
    );
  }
}


const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleAddProblem = this.toggleAddProblem.bind(this);
    this.toggleComment = this.toggleComment.bind(this);
   
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
      modalAddProblem: false,
      modalComment: false,
    };
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleAddProblem() {
    this.setState(prevState => ({
      modalAddProblem: !prevState.modalAddProblem
    }));
  }

  toggleComment() {
    this.setState(prevState => ({
      modalComment: !prevState.modalComment
    }));
  }
  render() {
    return (
      <Row>
          <Col>    
              <div>

                <div class="card border-danger mb-3" >
                  <div class="card-header text-white bg-danger  mb-3">
                     <strong>Problem</strong>
                    </div>
                    <div class="card-body"> 
                      <Row>       
                          <Col xs="2" md="2">
                            <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                          </Col> 
                          <Col xs="0" md="0">
                            <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                          </Col> 
                      </Row>  
                    <Table responsive size="sm">
                      <thead>
                      <tr>
                        <th>Title <i class="fa fa-sort"></i></th>
                        <th>Description <i class="fa fa-sort"></i></th>
                        <th>Date</th>
                        <th>Comment</th>
                        <th>
                          <div>
                            <Button color="primary" size="sm" onClick={this.toggleAddProblem}><i class="fa fa-plus-circle"></i>{this.props.buttonLabel}</Button>
                            <Modal isOpen={this.state.modalAddProblem} toggle={this.toggleAddProblem} className={this.props.className}>
                              <ModalHeader toggle={this.toggleAddProblem}>Problem</ModalHeader>
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
                                        <Label htmlFor="text-input">Description</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="textarea" id="text-input" name="text-input" placeholder="Description" />
                                        
                                      </Col>
                                    </FormGroup>   
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="textarea-input">Comment</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" name="textarea-input" id="textarea-input" rows="9"
                                               placeholder="Comment" />
                                      </Col>
                                    </FormGroup>                     
                                  </Form>                              
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggleAddProblem}>Submit</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAddProblem}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                          </div>
                        </th>                  
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                       <td>Login</td>
                        <td>Server connect fail</td>  
                        <td>20/3/2019</td>                
                        <td>9h ago, i can't connect server</td>
                        <td>
                        
                          <Button color="warning" size="sm" onClick={this.toggleComment}><i class="fa fa-edit"></i>{this.props.buttonLabel}</Button>
                          <Modal isOpen={this.state.modalComment} toggle={this.toggleComment} className={this.props.className}>
                              <ModalHeader toggle={this.toggleComment}>Problem</ModalHeader>
                              <ModalBody>
                                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Title</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="Title" value="Login" />
                                        
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Description</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="textarea" id="text-input" name="text-input" placeholder="Description" value="Server connect fail"/>
                                        
                                      </Col>
                                    </FormGroup>   
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="textarea-input">Comment</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" name="textarea-input" id="textarea-input" rows="9"
                                               placeholder="Comment"/>
                                      </Col>
                                    </FormGroup>                     
                                  </Form>                              
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggleComment}>Submit</Button>{' '}
                                <Button color="secondary" onClick={this.toggleComment}>Cancel</Button>
                              </ModalFooter>
                          </Modal>
                          
                         <Button type="submit" size="sm" color="success"><i class="fa fa-check"></i></Button>
                        </td>
                      </tr>
                      <tr>
                       <td>Login</td>
                        <td>Do i need to send code in order to verify email</td>  
                        <td>19/3/2019</td>                
                        <td></td>
                        <td>
                          <Button color="warning" size="sm" onClick={this.toggleComment}><i class="fa fa-edit"></i>{this.props.buttonLabel}</Button>
                          <Modal isOpen={this.state.modalComment} toggle={this.toggleComment} className={this.props.className}>
                              <ModalHeader toggle={this.toggleComment}>Problem</ModalHeader>
                              <ModalBody>
                                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Title</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="Title" value="Login" />
                                        
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Description</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="textarea" id="text-input" name="text-input" placeholder="Description" value="Server connect fail"/>
                                        
                                      </Col>
                                    </FormGroup>   
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="textarea-input">Comment</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" name="textarea-input" id="textarea-input" rows="9"
                                               placeholder="Comment"/>
                                      </Col>
                                    </FormGroup>                     
                                  </Form>                              
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggleComment}>Submit</Button>{' '}
                                <Button color="secondary" onClick={this.toggleComment}>Cancel</Button>
                              </ModalFooter>
                          </Modal>
                          <Button type="submit" size="sm" color="success"><i class="fa fa-check"></i></Button>
                        </td>
                      </tr>
                       <tr>
                       <td>Sign up</td>
                        <td>Password have suggest</td>  
                        <td>21/3/2019</td>                
                        <td>Suggest password atleast 8 characters</td>
                        <td>
                        <Button color="warning" size="sm" onClick={this.toggleComment}><i class="fa fa-edit"></i>{this.props.buttonLabel}</Button>
                          <Modal isOpen={this.state.modalComment} toggle={this.toggleComment} className={this.props.className}>
                              <ModalHeader toggle={this.toggleComment}>Problem</ModalHeader>
                              <ModalBody>
                                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Title</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="Title" value="Login" />
                                        
                                      </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Description</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="textarea" id="text-input" name="text-input" placeholder="Description" value="Server connect fail"/>
                                        
                                      </Col>
                                    </FormGroup>   
                                     <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="textarea-input">Comment</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" name="textarea-input" id="textarea-input" rows="9"
                                               placeholder="Comment"/>
                                      </Col>
                                    </FormGroup>                     
                                  </Form>                              
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggleComment}>Submit</Button>{' '}
                                <Button color="secondary" onClick={this.toggleComment}>Cancel</Button>
                              </ModalFooter>
                          </Modal>
                         <Button type="submit" size="sm" color="success"><i class="fa fa-check"></i></Button>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                    </div>
              </div>    
              </div>    
 
                <Card>
                <CardHeader>
                  Sprint burndown             
                  </CardHeader>
                  <CardBody>
                  <TCol />
                  </CardBody>
                </Card>  
                
             <div class="card border-success mb-3" >
                <div class="card-header text-white bg-success mb-3">
                <strong>Task</strong>
                  <small> done</small>
                </div>
                <div class="card-body"> 
                    <Row>       
                        <Col xs="2" md="2">
                          <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                        </Col> 
                        <Col xs="0" md="0">
                          <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                        </Col> 
                    </Row>  
                    <Table responsive size="sm">
                      <thead>
                      <tr>
                        <th>Title <i class="fa fa-sort"></i></th>
                        <th>Sprint <i class="fa fa-sort"></i></th>
                        <th>IdBacklog <i class="fa fa-sort"></i></th>
                        <th>Description <i class="fa fa-sort"></i></th>
                        <th>Priority <i class="fa fa-sort"></i></th>
                        <th>Start day <i class="fa fa-sort"></i></th>
                        <th>Deadline <i class="fa fa-sort"></i></th>
                        <th>Assignee </th>                 
                        <th>Comment </th>
                        <th>Progress</th>
                       
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Login bằng Fb</td>
                        <td>2</td>
                        <td>6</td>
                        <td>Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập</td>
                        <td><Badge color="danger">High</Badge></td>
                        <td>20/4/2019</td>
                        <td>24/4/2019</td>
                        <td>Hùng</td>
                        <td></td>
                        <td>
                          <Progress value={100} />
                          <div className="text-center">100%</div>
                        </td>                                  
                       
                      </tr>
                       
                      </tbody>
                    </Table>      
              </div>
            </div>    

          <div class="card border-warning  mb-3" >
                <div class="card-header text-white bg-warning  mb-3">
                  <strong>Task</strong>
                  <small> inprogress</small>
                </div>
              <div class="card-body"> 
               <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                    <Col xs="0" md="0">
                      <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                    </Col> 
                </Row>  
               <Table responsive size="sm">
                  <thead>
                  <tr>
                    <th>Title <i class="fa fa-sort"></i></th>
                    <th>Sprint <i class="fa fa-sort"></i></th>
                    <th>IdBacklog <i class="fa fa-sort"></i></th>
                    <th>Description <i class="fa fa-sort"></i></th>
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Start day <i class="fa fa-sort"></i></th>
                    <th>Deadline <i class="fa fa-sort"></i></th>
                    <th>Assignee</th>                 
                    <th>Comment</th>
                    <th>Progress</th>
                    
                  </tr>
                  </thead>
                  <tbody>
                  
                   <tr>
                    <td>Login bằng email</td>
                     <td>2</td>
                      <td>7</td>
                    <td>Người dùng không cần tạo tài khoản mà sử dụng tài khoản email để đăng nhập</td>
                    <td><Badge color="danger">High</Badge></td>
                    <td>20/4/2019</td>
                    <td>23/4/2019</td>
                    <td>Nhân</td>
                    <td>Có cần xác thực email không?</td>
                    <td>
                      <Progress value={85} />
                      <div className="text-center">85%</div>
                    </td>                                  
                   
                  </tr>
                   <tr>
                    <td>Login bằng tài khoản</td>
                     <td>2</td>
                      <td>7</td>
                    <td>Người dùng tạo tài khoản và sử dụng tài khoản này để đăng nhập</td>
                    <td><Badge color="warning">Medium</Badge></td>
                    <td>21/4/2019</td>
                    <td>25/4/2019</td>
                    <td>Tâm</td>
                    <td></td>
                    <td>
                      <Progress value={10} />
                      <div className="text-center">10%</div>
                    </td>                                  
                  
                  </tr>
                  
                  </tbody>
                </Table>
              </div>
        </div>    

        <div class="card border-primary  mb-3" >
              <div class="card-header text-white bg-primary  mb-3">
                <strong>Project</strong>
                <small> to do</small>
              </div>
               <div class="card-body"> 
                   <Row>       
                        <Col xs="2" md="2">
                          <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                        </Col> 
                        <Col xs="0" md="0">
                          <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                        </Col> 
                   </Row>  
                   <Table responsive size="sm">
                      <thead>
                      <tr>
                        <th>Title <i class="fa fa-sort"></i></th>
                        <th>Sprint <i class="fa fa-sort"></i></th>
                        <th>IdBacklog <i class="fa fa-sort"></i></th>
                        <th>Description <i class="fa fa-sort"></i></th>
                        <th>Priority <i class="fa fa-sort"></i></th>
                        <th>Start day <i class="fa fa-sort"></i></th>
                        <th>Deadline <i class="fa fa-sort"></i></th>
                        <th>Assignee</th>                 
                        <th>Comment</th>
                        <th>Progress</th>
                      
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Đổi mật khẩu</td>
                         <td>2</td>
                          <td>7</td>
                        <td>Người dùng đổi mật khẩu của tài khoản mà mình tạo</td>
                        <td><Badge color="primary">Low</Badge></td>
                        <td>20/4/2019</td>
                        <td>24/4/2019</td>
                        <td></td>
                        <td>Có cần gửi mà tới email liên kết để xác nhận không?</td>
                        <td>
                          <Progress value={0} />
                          <div className="text-center">0%</div>
                        </td>                                  
                      
                      </tr>
                       <tr>
                        <td>Thay đổi avatar</td>
                         <td>2</td>
                          <td>8</td>
                        <td>Người dùng thay đổi avatar hiển thị ở giao diện chính</td>
                        <td><Badge color="primary">Low</Badge></td>
                        <td>20/4/2019</td>
                        <td>24/4/2019</td>
                        <td></td>
                        <td></td>
                        <td>
                          <Progress value={0} />
                          <div className="text-center">0%</div>
                        </td>                                  
                       
                      </tr>                  
                       <tr>
                        <td>Thanh toán bằng paypal</td>
                         <td>2</td>
                          <td>8</td>
                        <td>Người dùng sử dụng paypal để trả phí</td>
                        <td><Badge color="primary">Low</Badge></td>
                        <td>20/4/2019</td>
                        <td>24/4/2019</td>
                        <td></td>
                        <td></td>
                        <td>
                          <Progress value={0} />
                          <div className="text-center">0%</div>
                        </td>                                  
                        
                      </tr>
               
                      </tbody>
                   </Table>
              </div>
        </div>  

          </Col>
        </Row>
    );
  }
}

export default DashBoard;
