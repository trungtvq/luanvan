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
Progress,
Navbar,

NavbarBrand,

NavbarToggler,

Collapse,

Nav,

NavItem,

NavLink,

UncontrolledDropdown,

DropdownToggle,

DropdownMenu,

DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'
 

class AllProject extends Component {
  render() {
    return (
    <Container>

      <div>

       <Demo />
      </div>

      <p></p>
  
      <Row>
          <Col>  
                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Project</strong>
                        <small> done</small>
                      </CardHeader>
                      <CardBody>
                       <Table hover bordered striped responsive size="sm">
                          <thead>
                          <tr>
                           
                            <th>Title</th>
                            <th>Description</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Status</th>
                                          
                          </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link to="/ProjectDone">
                                  App android game caro
                                </Link>
                              </td>
                              <td>Tạo ra app anroid đánh cờ caro trực tuyến</td>
                              <td>8:00 23/03/2019</td>
                              <td>8:00 23/05/2019</td>
                              <td>
                              <Progress value={100} />
                              <div className="text-center">100%</div>
                            </td>    
                            </tr>
                            <tr>
                              <td>App android chat</td>
                              <td>Tạo ra app anroid chat realtime</td>
                              <td>9:00 23/03/2019</td>
                              <td>9:00 20/05/2019</td>
                              <td>
                              <Progress value={100} />
                              <div className="text-center">100%</div>
                            </td>    
                            </tr>
                             <tr>
                              <td>Web bán giày</td>
                              <td>Tạo ra web bán giày thể thao, hỗ trợ mua bán online</td>
                              <td>8:00 23/01/2019</td>
                              <td>8:00 23/05/2019</td>
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
                        <i className="fa fa-align-justify"></i><strong>Project</strong>
                        <small> ongoing</small>
                      </CardHeader>
                      <CardBody>
                       <Table hover bordered striped responsive size="sm">
                          <thead>
                          <tr>
                           
                            <th>Title</th>
                            <th>Description</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Status</th>
                                          
                          </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link to="/Dashboard">
                                  App android game caro
                                </Link>
                              </td>
                              <td>Tạo ra app anroid đánh cờ caro trực tuyến</td>
                              <td>8:00 23/03/2019</td>
                              <td>8:00 23/05/2019</td>
                              <td>
                              <Progress value={50} />
                              <div className="text-center">50%</div>
                            </td>    
                            </tr>
                            <tr>
                              <td>App android chat</td>
                              <td>Tạo ra app anroid chat realtime</td>
                              <td>9:00 23/03/2019</td>
                              <td>9:00 20/05/2019</td>
                              <td>
                              <Progress value={30} />
                              <div className="text-center">30%</div>
                            </td>    
                            </tr>
                             <tr>
                              <td>Web bán giày</td>
                              <td>Tạo ra web bán giày thể thao, hỗ trợ mua bán online</td>
                              <td>8:00 23/01/2019</td>
                              <td>8:00 23/05/2019</td>
                              <td>
                              <Progress value={80} />
                              <div className="text-center">80%</div>
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
                      <Table hover bordered striped responsive size="sm">
                          <thead>
                          <tr>
                           
                            <th>Title</th>
                            <th>Description</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Status</th>
                                          
                          </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                 <Link to="/ProjectTodo">
                                  App android game caro
                                </Link>
                              </td>
                              <td>Tạo ra app anroid đánh cờ caro trực tuyến</td>
                              <td>8:00 23/03/2019</td>
                              <td>8:00 23/05/2019</td>
                              <td>
                              <Progress value={0} />
                              <div className="text-center">0%</div>
                            </td>    
                            </tr>
                            <tr>
                              <td>App android chat</td>
                              <td>Tạo ra app anroid chat realtime</td>
                              <td>9:00 23/03/2019</td>
                              <td>9:00 20/05/2019</td>
                              <td>
                              <Progress value={0} />
                              <div className="text-center">0%</div>
                            </td>    
                            </tr>
                             <tr>
                              <td>Web bán giày</td>
                              <td>Tạo ra web bán giày thể thao, hỗ trợ mua bán online</td>
                              <td>8:00 23/01/2019</td>
                              <td>8:00 23/05/2019</td>
                              <td>
                              <Progress value={0} />
                              <div className="text-center">0%</div>
                            </td>    
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

export default AllProject;
