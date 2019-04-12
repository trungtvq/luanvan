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


class TeamTask extends Component {
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

                <Link to="/Member/AddTeamTask">
                  <Button color="primary" className="mt-3" active tabIndex={-1}><i class="fa fa-plus-circle"></i></Button>
                </Link>  
                <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                    <Col xs="2" md="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Sort by Title</option>
                        <option value="1">Sort by Priority</option>
                        <option value="2">Sort by Assignee</option>    
                      </Input>
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
                    <th>Assignee</th>                 
                    <th>Comment</th>
                    <th>Status</th>         
                    <th>Review</th>                  
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Login bằng Fb</td>
                    <td>Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập</td>
                    <td><Badge color="danger">High</Badge></td>
                    <td>20/4/2019</td>
                    <td>24/4/2019</td>
                    <td>Hùng</td>
                    <td></td>

                    <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">Inprogress</option>
                        <option value="1">to do</option>
                        <option value="2">Done</option>
                      </Input>
                    </td> 
                     <td></td>                                             
                  </tr>
                   <tr>
                    <td>Login bằng email</td>
                    <td>Người dùng không cần tạo tài khoản mà sử dụng tài khoản email để đăng nhập</td>
                    <td><Badge color="danger">High</Badge></td>
                    <td>20/4/2019</td>
                    <td>23/4/2019</td>
                    <td>Nhân</td>
                    <td>Có cần xác thực email không?</td>
                     <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">Inprogress</option>
                        <option value="1">To do</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>  
                     <td></td>                             
                  </tr>
                   <tr>
                    <td>Login bằng tài khoản</td>
                    <td>Người dùng tạo tài khoản và sử dụng tài khoản này để đăng nhập</td>
                    <td><Badge color="warning">Medium</Badge></td>
                    <td>21/4/2019</td>
                    <td>25/4/2019</td>
                    <td>Tâm</td>
                    <td></td>
                     <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">Inprogress</option>
                        <option value="1">To do</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>   
                     <td></td>                            
                  </tr>
                   <tr>
                    <td>Đổi mật khẩu</td>
                    <td>Người dùng đổi mật khẩu của tài khoản mà mình tạo</td>
                    <td><Badge color="primary">Low</Badge></td>
                    <td>20/4/2019</td>
                    <td>24/4/2019</td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Register</Button>
                    </td>
                    <td>Có cần gửi mà tới email liên kết để xác nhận không?</td>
                    <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>   
                     <td></td>                       
                  </tr>
                   <tr>
                    <td>Thay đổi avatar</td>
                    <td>Người dùng thay đổi avatar hiển thị ở giao diện chính</td>
                    <td><Badge color="primary">Low</Badge></td>
                    <td>20/4/2019</td>
                    <td>24/4/2019</td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Register</Button>
                    </td>
                    <td></td>
                     <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>      
                     <td></td>                         
                  </tr>                  
                   <tr>
                    <td>Thanh toán bằng paypal</td>
                    <td>Người dùng sử dụng paypal để trả phí</td>
                    <td><Badge color="primary">Low</Badge></td>
                    <td>20/4/2019</td>
                    <td>24/4/2019</td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Register</Button>
                    </td>
                    <td></td>
                     <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>
                     <td></td>
                  </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>           
          </Col>
        </Row>
    );
  }
}

export default TeamTask;
