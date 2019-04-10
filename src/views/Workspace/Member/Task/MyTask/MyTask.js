import React, { Component } from 'react';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import DualListBox from 'react-dual-listbox';
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
const options = [
    { value: 'one', label: 'Login bằng Fb' },
    { value: 'two', label: 'Đổi mật khẩu' },
    ]
    
class MyTask extends Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
   
    this.state = {
      collapse: true,
      fadeIn: true,
      selected: ['one'],
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  

  render() {
        return (
           <Row>
          <Col>  
         
         
           
            <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                    <Col xs="2" md="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Sort by Title</option>
                        <option value="1">Sort by Priority</option>   
                      </Input>
                    </Col>   
                    <Col xs="0" md="0">
                      <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                    </Col> 
            </Row>     
            <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Start day</th>
                    <th>Deadline</th>
                    <th>Comment</th>
                    <th>Status</th>   
                  
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Login bằng Fb</td>
                    <td>Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập</td>
                    <td><Badge color="danger">High</Badge></td>
                    <td>20/4/2019</td>
                    <td>24/4/2019</td>
                    <td></td>
                    <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>
                                                                   
                  </tr>
                   <tr>
                    <td>Đổi mật khẩu</td>
                    <td>Người dùng đổi mật khẩu của tài khoản mà mình tạo</td>
                    <td><Badge color="primary">Low</Badge></td>
                    <td>20/4/2019</td>
                    <td>24/4/2019</td>
                   
                    <td>Có cần gửi mà tới email liên kết để xác nhận không?</td>
                     <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>
                                         
                  </tr>
                   <tr>
                    <td>Thay đổi avatar</td>
                    <td>Người dùng thay đổi avatar hiển thị ở giao diện chính</td>
                    <td><Badge color="primary">Low</Badge></td>
                    <td>20/4/2019</td>
                    <td>24/4/2019</td>
                    
                    <td></td>
                    <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>
                                               
                  </tr>                  
                   <tr>
                    <td>Thanh toán bằng paypal</td>
                    <td>Người dùng sử dụng paypal để trả phí</td>
                    <td><Badge color="primary">Low</Badge></td>
                    <td>20/4/2019</td>
                    <td>24/4/2019</td>                
                    <td></td>                   
                    <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>
                    
                  </tr>
                  </tbody>
                </Table>
           
            </Col>
            </Row>
        );
    }
}

export default MyTask;
