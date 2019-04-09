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
   
   <div>   
      <div>

       <Demo />
      </div>


   <Container>
      <Row>
          <Col>  
                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Web</strong>

                      </CardHeader>
                      <CardBody>
                         <Row>
                            <Col>  
                            <Link to="/DashBoard">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web bán giày</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   9:00 (3/01/2019)</h6>
                                        <h6>  End:   9:00 (23/05/2019)</h6>
                                        <Progress value={50} />
                                        <div className="text-center">50%</div>
                                      </CardBody>
                                </Card> 
                              </Link>
                            </Col>  

                            <Col>  
                            <Link to="/ProjectTodo">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web bán quần áo</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:30 (23/01/2019)</h6>
                                        <h6>  End:   8:30 (23/05/2019)</h6>
                                        <Progress value={0} />
                                        <div className="text-center">0%</div>
                                      </CardBody>
                                </Card> 
                            </Link>
                            </Col>  

                            <Col>  
                             <Link to="/DashBoard">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web bán đồ cổ</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   11:00 (23/01/2019)</h6>
                                        <h6>  End:   11:00 (23/05/2019)</h6>
                                        <Progress value={30} />
                                        <div className="text-center">30%</div>
                                      </CardBody>
                                </Card> 
                            </Link>
                            </Col>  

                            <Col>  
                             <Link to="/ProjectDone">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web coffee house</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:00 (23/01/2019)</h6>
                                        <h6>  End:   8:00 (23/05/2019)</h6>
                                        <Progress value={100} />
                                        <div className="text-center">100%</div>
                                      </CardBody>
                                </Card> 
                              </Link>
                            </Col>  
                         </Row>
                      </CardBody>
                </Card>    

                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Game</strong>
                       
                      </CardHeader>
                      <CardBody>
                         <Row>
                            <Col>  
                            <Link to="/DashBoard">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web bán giày</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   9:00 (3/01/2019)</h6>
                                        <h6>  End:   9:00 (23/05/2019)</h6>
                                        <Progress value={50} />
                                        <div className="text-center">50%</div>
                                      </CardBody>
                                </Card> 
                              </Link>
                            </Col>  

                            <Col>  
                            <Link to="/ProjectTodo">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web bán quần áo</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:30 (23/01/2019)</h6>
                                        <h6>  End:   8:30 (23/05/2019)</h6>
                                        <Progress value={0} />
                                        <div className="text-center">0%</div>
                                      </CardBody>
                                </Card> 
                            </Link>
                            </Col>  

                            <Col>  
                             <Link to="/DashBoard">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web bán đồ cổ</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   11:00 (23/01/2019)</h6>
                                        <h6>  End:   11:00 (23/05/2019)</h6>
                                        <Progress value={30} />
                                        <div className="text-center">30%</div>
                                      </CardBody>
                                </Card> 
                            </Link>
                            </Col>  

                            <Col>  
                             <Link to="/ProjectDone">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web coffee house</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:00 (23/01/2019)</h6>
                                        <h6>  End:   8:00 (23/05/2019)</h6>
                                        <Progress value={100} />
                                        <div className="text-center">100%</div>
                                      </CardBody>
                                </Card> 
                              </Link>
                            </Col>  
                         </Row>
                      </CardBody>
                </Card>    

                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Application</strong>
                  
                      </CardHeader>
                       <CardBody>
                         <Row>
                            <Col>  
                            <Link to="/DashBoard">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web bán giày</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   9:00 (3/01/2019)</h6>
                                        <h6>  End:   9:00 (23/05/2019)</h6>
                                        <Progress value={50} />
                                        <div className="text-center">50%</div>
                                      </CardBody>
                                </Card> 
                              </Link>
                            </Col>  

                            <Col>  
                            <Link to="/ProjectTodo">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web bán quần áo</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:30 (23/01/2019)</h6>
                                        <h6>  End:   8:30 (23/05/2019)</h6>
                                        <Progress value={0} />
                                        <div className="text-center">0%</div>
                                      </CardBody>
                                </Card> 
                            </Link>
                            </Col>  

                            <Col>  
                             <Link to="/DashBoard">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web bán đồ cổ</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   11:00 (23/01/2019)</h6>
                                        <h6>  End:   11:00 (23/05/2019)</h6>
                                        <Progress value={30} />
                                        <div className="text-center">30%</div>
                                      </CardBody>
                                </Card> 
                            </Link>
                            </Col>  

                            <Col>  
                             <Link to="/ProjectDone">
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>Web coffee house</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:00 (23/01/2019)</h6>
                                        <h6>  End:   8:00 (23/05/2019)</h6>
                                        <Progress value={100} />
                                        <div className="text-center">100%</div>
                                      </CardBody>
                                </Card> 
                              </Link>
                            </Col>  
                         </Row>
                      </CardBody>
                </Card>    
          </Col>
        </Row>
      </Container>
    </div>   
    );
  }
}

export default AllProject;
