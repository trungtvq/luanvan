import React, { Component } from 'react';
import { Badge, 
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
CardHeader, 
Jumbotron,
Progress
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'

class ProjectDone extends Component {
  render() {
    return (
      <Container>
      <Demo/>
      <Row>
          <Col>  

        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Product Backlog</strong>
                
              </CardHeader>
              <CardBody>
                   <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                    <Col xs="2" md="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Sort by ID</option>
                        <option value="1">Sort by Sprint</option>
                        <option value="2">Sort by Status</option>    
                      </Input>
                    </Col>   
                    <Col xs="0" md="0">
                      <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                    </Col> 
                </Row>  
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>As a...</th>
                    <th>I want to be able to...</th>
                    <th>So that...</th>
                    <th>Priority</th>
                    <th>Estimation</th>
                    <th>Sprint </th>
                   
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Admin</td>
                    <td>See a list of all members and visitors</td>
                    <td>I can monitor site visits</td>
                    <td>1</td>
                    <td>3</td>
                    <td>1</td>
                   
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Admin</td>
                    <td>Add new categories</td>
                    <td>I can allow members to create engaging content</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                  
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Admin</td>
                    <td>Add new security groups</td>
                    <td>Security levels are approriate</td>
                    <td>3</td>
                    <td>4</td>
                    <td>1</td>
                   
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Admin</td>
                    <td>Add new key words</td>
                    <td>Content is easy to groups and search for</td>
                    <td>4</td>
                    <td>6</td>
                    <td>1</td>
                   
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Admin</td>
                    <td>Delete comment</td>
                    <td>Offensive content is removed</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                  
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Member</td>
                    <td>Update my account detail</td>
                    <td>I can be contacted by admin</td>
                    <td>5</td>
                    <td>3</td>
                    <td>2</td>
                  
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Member</td>
                    <td>Change my password </td>
                    <td>I can keep secure</td>
                    <td>5</td>
                    <td>1</td>
                    <td>2</td>
                   
                  </tr>
                   <tr>
                    <td>8</td>
                    <td>Member</td>
                    <td>Update my email preferences </td>
                    <td>I am not bombarded junk mail</td>
                    <td>6</td>
                    <td>2</td>
                    <td>2</td>
                   
                  </tr>
                   <tr>
                    <td>9</td>
                    <td>Visitor</td>
                    <td>Create an account </td>
                    <td>I can benifit from member discounts</td>
                    <td>7</td>
                    <td>1</td>
                    <td>3</td>
                   
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Visitor</td>
                    <td>Suggest improvements</td>
                    <td>I can contribute to the site usability </td>
                    <td>8</td>
                    <td>2</td>
                    <td>3</td>
                  
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Visitor</td>
                    <td>View member profile </td>
                    <td>I can know more about member </td>
                    <td>9</td>
                    <td>3</td>
                    <td>3</td>
                   
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
              </CardBody>
        </Card>    

        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Task</strong>
               
              </CardHeader>
              <CardBody>
              <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                    <Col xs="2" md="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Sort by Title</option>
                        <option value="1">Sort by Sprint</option>
                        <option value="2">Sort by IdBacklog</option>    
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
                    <th>Sprint</th>
                    <th>IdBacklog</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Start day</th>
                    <th>Deadline</th>
                    <th>Assignee</th>                 
                    <th>Comment</th>
                   
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
                    <td>Có cần xác thực email không?</td>
                  
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
                    <td>Có cần gửi mà tới email liên kết để xác nhận không?</td>
                    
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
              </CardBody>
        </Card>    

        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Member</strong>
                <h6>Porduct owner: Nguyễn Văn A</h6>
                <h6>Scrum master: Nguyễn Văn B</h6>
              </CardHeader>
              <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Task completed ontime</th>
                    <th>Task completed late</th>
                    <th>Issue</th>  
                    <th>Point</th>                
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hùng</td>
                      <td>10</td>
                      <td>5</td>
                      <td>3</td>
                      <td>6</td>      
                    </tr>
                   <tr>
                      <td>Tâm</td>
                      <td>10</td>
                      <td>5</td>
                      <td>3</td>
                      <td>6</td>      
                    </tr>
                    <tr>
                      <td>Trung</td>
                      <td>10</td>
                      <td>5</td>
                      <td>3</td>
                      <td>6</td>      
                    </tr>
                    <tr>
                      <td>Nhân</td>
                      <td>10</td>
                      <td>5</td>
                      <td>3</td>
                      <td>6</td>      
                    </tr>
                  </tbody>
                </Table>  
        </Card>    

          </Col>
        </Row>
        </Container>
    );
  }
}

export default ProjectDone;
