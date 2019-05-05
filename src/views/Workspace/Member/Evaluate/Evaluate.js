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
PaginationLink, } from 'reactstrap';
import { Link } from 'react-router-dom';

class Evaluate extends Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
   
    this.state = {
      collapse: true,
      fadeIn: true,
      
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  

  render() {
    return (
      <Row>
          <Col>                        
            <Card>     
                <div class="table-responsive">         
                <table class="table table-lg">
                  <thead class="thead">
                  <tr class="bg-primary">
                    <th>Title</th>
                    <th>Sprint</th>
                    <th>IdBacklog</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Start day</th>
                    <th>Deadline</th>
                    <th>Assignee</th>
                    <th>Point</th>                 
                    <th>Review</th>   
                    <th></th>   
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
                    <td></td>
                    <td></td>              
                                 
                  </tr>
                   <tr>
                    <td>Login bằng email</td>
                     <td>2</td>
                      <td>7</td>
                    <td>Người dùng không cần tạo tài khoản mà sử dụng tài khoản email để đăng nhập</td>
                    <td><Badge color="danger">High</Badge></td>
                    <td>20/4/2019</td>
                    <td>23/4/2019</td>
                    <td>Nhân</td>
                    <td></td>
                    <td>
                    </td>                                  
                    <td>
                                 
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
                    </td>                                  
                    <td>
                                    
                    </td>
                  </tr>
                   <tr>
                    <td>Đổi mật khẩu</td>
                     <td>2</td>
                      <td>7</td>
                    <td>Người dùng đổi mật khẩu của tài khoản mà mình tạo</td>
                    <td><Badge color="primary">Low</Badge></td>
                    <td>20/4/2019</td>
                    <td>24/4/2019</td>
                    <td></td>
                    <td></td>
                    <td>
                    </td>                                  
                    <td>
                             
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
                    </td>                                  
                    <td>
                                 
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
                    </td>                                  
                    <td>                          
                    </td>
                  </tr>
                  </tbody>
                </table>
                </div>
            </Card>
          </Col>
        </Row>
    );
  }
}

export default Evaluate;
