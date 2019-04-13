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
       data: [ 
              {
                "Title":"Login bằng Fb",
                "Description":"Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập",
                "Priority":"High",
                "Start ":"20/4/2019",
                "Deadline":"24/4/2019",
                "Comment":"",
                "status":"done",
              },
              {
                "Title":"Đổi mật khẩu",
                "Description":"Người dùng đổi mật khẩu của tài khoản mà mình tạo",
                "Priority":"Low",
                "Start ":"20/4/2019",
                "Deadline":"24/4/2019",
                "Comment":"Có cần gửi mà tới email liên kết để xác nhận không?",
                "status":"done",
              },
              {
                "Title":"Thay đổi avatar",
                "Description":"Người dùng thay đổi avatar hiển thị ở giao diện chính",
                "Priority":"Low",
                "Start ":"20/4/2019",
                "Deadline":"24/4/2019",
                "Comment":"",
                "status":"done",
              },
              {
                "Title":"Thanh toán bằng paypal",
                "Description":"Người dùng sử dụng paypal để trả phí",
                "Priority":"Low",
                "Start ":"20/4/2019",
                "Deadline":"24/4/2019",
                "Comment":"",
                "status":"done",
              },
              
            ],
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
                   
                    <Col xs="0" md="0">
                      <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                    </Col> 
            </Row>     
            <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Title <i class="fa fa-sort"></i></th>
                    <th>Description <i class="fa fa-sort"></i></th>
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Start day <i class="fa fa-sort"></i></th>
                    <th>Deadline <i class="fa fa-sort"></i></th>   
                    <th>Comment</th>
                    <th>Status</th>   
                    <th></th>
                  </tr>
                  </thead>
                   <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.Title}</td>
                      <td>{item.Description}</td>
                      <td><Badge color="danger">{item.Priority}</Badge></td>
                      <td>{item.Start}</td>
                      <td>{item.Deadline}</td>
                      <td>{item.Comment}</td>
                      <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">{item.status}</option>
                        <option value="1">to do</option>
                        <option value="2">inprogress</option>
                         <option value="2">done</option>
                      </Input>
                      </td> 
                        <td>
                        <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      </td>
                  </tr>
                )
             
             })}</tbody>
                </Table>
           
            </Col>
            </Row>
        );
    }
}

export default MyTask;
