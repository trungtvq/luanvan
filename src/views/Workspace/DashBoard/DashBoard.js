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
Label
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
  }r
  render() {
    return (
      <Row>
          <Col>    
              <div>    
                <Card>
                    <CardHeader >
                      <i className="fa fa-align-justify"></i><strong>Problem</strong>
                    </CardHeader>
                    <CardBody> 
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
                         <Button type="submit" size="sm" color="success"><i class="fa fa-check"></i></Button>
                        </td>
                      </tr>
                      <tr>
                       <td>Login</td>
                        <td>Do i need to send code in order to verify email</td>  
                        <td>19/3/2019</td>                
                        <td></td>
                        <td>
                         <Button type="submit" size="sm" color="success"><i class="fa fa-check"></i></Button>
                        </td>
                      </tr>
                       <tr>
                       <td>Sign up</td>
                        <td>Password have suggest</td>  
                        <td>21/3/2019</td>                
                        <td>Suggest password atleast 8 characters</td>
                        <td>
                         <Button type="submit" size="sm" color="success"><i class="fa fa-check"></i></Button>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                    </CardBody>
              </Card>    
              </div>    
 
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
                <i className="fa fa-align-justify"></i><strong>Task</strong>
                <small> done</small>
              </CardHeader>
              <CardBody>
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
      
              </CardBody>
            </Card>    

        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Task</strong>
                <small> inprogress</small>
              </CardHeader>
              <CardBody>
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
              </CardBody>
        </Card>    

        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Project</strong>
                <small> to do</small>
              </CardHeader>
                <CardBody>
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
              </CardBody>
        </Card>  

          </Col>
        </Row>
    );
  }
}

export default DashBoard;
