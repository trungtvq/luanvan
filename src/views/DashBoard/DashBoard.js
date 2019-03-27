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
Progress
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
   
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }
  render() {
    return (
      <Row>
          <Col>        
                <h2 >Problem</h2>     
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Comment</th>
                    <th></th>                  
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                   <td>Login</td>
                    <td>Server connect fail</td>  
                    <td>20/3/2019</td>                
                    <td>9h ago, i can't connect server</td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-heart"></i></Button>
                    </td>
                  </tr>
                  <tr>
                   <td>Login</td>
                    <td>Do i need to send code in order to verify email</td>  
                    <td>19/3/2019</td>                
                    <td></td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-heart"></i></Button>
                    </td>
                  </tr>
                   <tr>
                   <td>Sign up</td>
                    <td>Password have suggest</td>  
                    <td>21/3/2019</td>                
                    <td>Suggest password atleast 8 characters</td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-heart"></i></Button>
                    </td>
                  </tr>
                  </tbody>
                </Table>
               
                <Card>
                <CardHeader>
                  Sprint burndown             
                  </CardHeader>
                  <CardBody>
                  <TCol />
                  </CardBody>
                </Card>  
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Task <small>to do</small>
                    <div className="card-header-actions">
                      <Badge>NEW</Badge>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div id="accordion">
                      <Card className="mb-0">
                        <CardHeader id="headingOne">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                            <h5 className="m-0 p-0">Thanh toán bằng paypal</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                          <CardBody>
                           <Table hover bordered striped responsive size="sm">
                                  <thead>
                                  <tr>   
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Start day</th>
                                    <th>Deadline</th>
                                    <th>Assignee</th>                 
                                    <th>Comment</th>
                                    <th>Progress</th>             
                                  </tr>
                                  </thead>
                                  <tbody>
                                       <tr>                     
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
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="mb-0">
                        <CardHeader id="headingTwo">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                            <h5 className="m-0 p-0">Thay đổi avatar</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                          <CardBody>
                           <Table hover bordered striped responsive size="sm">
                                  <thead>
                                  <tr>   
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Start day</th>
                                    <th>Deadline</th>
                                    <th>Assignee</th>                 
                                    <th>Comment</th>
                                    <th>Progress</th>             
                                  </tr>
                                  </thead>
                                  <tbody>
                                       <tr>                     
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
                                  </tbody>
                                </Table>
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="mb-0">
                        <CardHeader id="headingThree">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                            <h5 className="m-0 p-0">Đổi mật khẩu</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                          <CardBody>
                           <Table hover bordered striped responsive size="sm">
                                  <thead>
                                  <tr>   
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Start day</th>
                                    <th>Deadline</th>
                                    <th>Assignee</th>                 
                                    <th>Comment</th>
                                    <th>Progress</th>             
                                  </tr>
                                  </thead>
                                  <tbody>
                                       <tr>                     
                                       
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
                                  </tbody>
                                </Table>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </div>
                  </CardBody>
                </Card>         

                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Task <small>inprogress</small>
                    <div className="card-header-actions">
                      <Badge>NEW</Badge>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div id="accordion">
                      <Card className="mb-0">
                        <CardHeader id="headingOne">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                            <h5 className="m-0 p-0">Login bằng tài khoản</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                          <CardBody>
                           <Table hover bordered striped responsive size="sm">
                                  <thead>
                                  <tr>   
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Start day</th>
                                    <th>Deadline</th>
                                    <th>Assignee</th>                 
                                    <th>Comment</th>
                                    <th>Progress</th>             
                                  </tr>
                                  </thead>
                                  <tbody>
                                       <tr>                     
                                             
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
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="mb-0">
                        <CardHeader id="headingTwo">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                            <h5 className="m-0 p-0">Login bằng email</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                          <CardBody>
                           <Table hover bordered striped responsive size="sm">
                                  <thead>
                                  <tr>   
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Start day</th>
                                    <th>Deadline</th>
                                    <th>Assignee</th>                 
                                    <th>Comment</th>
                                    <th>Progress</th>             
                                  </tr>
                                  </thead>
                                  <tbody>
                                       <tr>                     
                                        
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
                                  </tbody>
                                </Table>
                          </CardBody>
                        </Collapse>
                      </Card>
                     
                    </div>
                  </CardBody>
                </Card>  

                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Task <small>done</small>
                    <div className="card-header-actions">
                      <Badge>NEW</Badge>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div id="accordion">
                      <Card className="mb-0">
                        <CardHeader id="headingOne">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                            <h5 className="m-0 p-0">Login bằng tài fb</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                          <CardBody>
                           <Table hover bordered striped responsive size="sm">
                                  <thead>
                                  <tr>   
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Start day</th>
                                    <th>Deadline</th>
                                    <th>Assignee</th>                 
                                    <th>Comment</th>
                                    <th>Progress</th>             
                                  </tr>
                                  </thead>
                                  <tbody>
                                       <tr>                     
                                             
                   
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
                          </CardBody>
                        </Collapse>
                      </Card>
                      
                        
                     
                    </div>
                  </CardBody>
                </Card>              
          </Col>
        </Row>
    );
  }
}

export default DashBoard;
