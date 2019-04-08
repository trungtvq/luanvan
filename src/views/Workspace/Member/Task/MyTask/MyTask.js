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
          <Form> 
           <FormGroup row>
                    <Col md="2">
                    </Col>
                    <Col md="6">
                      <Button type="submit" size="sm" color="danger"><i className="fa fa-dot-circle-o"></i> Inprogress</Button>
                    </Col>         
                    <Col xs="12" md="1">
                      <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Done</Button>
                    </Col>
            </FormGroup>
          </Form>
            <DualListBox
                options={options}
                selected={this.state.selected}
                onChange={(selected) => {
                    this.setState({ selected });
                }}
            />

            <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Start day</th>
                    <th>Deadline</th>
                    <th>Comment</th>
                    <th>Progress</th>   
                    <th></th>
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
                      <Progress value={100} />
                      <div className="text-center">100%</div>
                    </td>
                      <td>
                      <Button disabled type="submit" size="sm" color="success" ><i class="fa fa-arrow-up"></i></Button>
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
                      <Progress value={20} />
                      <div className="text-center">20%</div>
                    </td>      
                    <td>
                      <Button disabled type="submit" size="sm" color="success"><i class="fa fa-arrow-up"></i></Button>
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
                      <Progress value={0} />
                      <div className="text-center">0%</div>
                    </td>  
                    <td>
                      <Button type="submit" size="sm" color="success"><i class="fa fa-arrow-up"></i></Button>
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
                      <Progress value={0} />
                      <div className="text-center">0%</div>
                    </td>
                    <td>
                      <Button type="submit" size="sm" color="success"><i class="fa fa-arrow-up"></i></Button>
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
