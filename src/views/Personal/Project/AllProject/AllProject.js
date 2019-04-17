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

 

class AllProject extends Component {
  render() {
    return (
   <Row>
    <Col>  
   <div>   
      <Row>
          <Col>  
                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Web</strong>

                            <Row>       
                              <Col xs="2" md="2">
                                <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                              </Col> 
                              <Col xs="2" md="2">
                                <Input type="select" name="select" id="select">
                                  <option value="0">Sort by Name</option>
                                  <option value="1">Sort by Time start</option>
                                  <option value="2">Sort by Progress</option>    
                                </Input>
                              </Col>   
                              <Col xs="0" md="0">
                                <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                              </Col> 
                            </Row>  
                      </CardHeader>
                      <CardBody>
                         <Row>
                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán giày</strong>
                                        </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   9:00 (3/01/2019)</h6>
                                        <h6>  End:   9:00 (23/05/2019)</h6>
                                        <Progress value={50} />
                                        <div className="text-center">50%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  

                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/ProjectTodo">
                                        <i className=""></i><strong>Web bán quần áo</strong>
                                         </Link>
                                          <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:30 (23/01/2019)</h6>
                                        <h6>  End:   8:30 (23/05/2019)</h6>
                                        <Progress value={0} />
                                        <div className="text-center">0%</div>
                                      </CardBody>
                                </Card> 
                           
                            </Col>  

                            <Col>  
                            
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán đồ cổ</strong>
                                       </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   11:00 (23/01/2019)</h6>
                                        <h6>  End:   11:00 (23/05/2019)</h6>
                                        <Progress value={30} />
                                        <div className="text-center">30%</div>
                                      </CardBody>
                                </Card> 
                          
                            </Col>  

                            <Col>  
                             
                                <Card>
                                      <CardHeader>
                                      <Link to="/ProjectDone">
                                        <i className=""></i><strong>Web coffee house</strong>
                                      </Link>
                                       <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:00 (23/01/2019)</h6>
                                        <h6>  End:   8:00 (23/05/2019)</h6>
                                        <Progress value={100} />
                                        <div className="text-center">100%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  
                         </Row>
                      </CardBody>
                </Card>    

                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Game</strong>
                          
                            <Row>       
                              <Col xs="2" md="2">
                                <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                              </Col> 
                              <Col xs="2" md="2">
                                <Input type="select" name="select" id="select">
                                  <option value="0">Sort by Name</option>
                                  <option value="1">Sort by Time start</option>
                                  <option value="2">Sort by Progress</option>    
                                </Input>
                              </Col>   
                              <Col xs="0" md="0">
                                <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                              </Col> 
                            </Row>
                      </CardHeader>
                      <CardBody>
                         <Row>
                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán giày</strong>
                                        </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   9:00 (3/01/2019)</h6>
                                        <h6>  End:   9:00 (23/05/2019)</h6>
                                        <Progress value={50} />
                                        <div className="text-center">50%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  

                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/ProjectTodo">
                                        <i className=""></i><strong>Web bán quần áo</strong>
                                         </Link>
                                          <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:30 (23/01/2019)</h6>
                                        <h6>  End:   8:30 (23/05/2019)</h6>
                                        <Progress value={0} />
                                        <div className="text-center">0%</div>
                                      </CardBody>
                                </Card> 
                           
                            </Col>  

                            <Col>  
                            
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán đồ cổ</strong>
                                       </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   11:00 (23/01/2019)</h6>
                                        <h6>  End:   11:00 (23/05/2019)</h6>
                                        <Progress value={30} />
                                        <div className="text-center">30%</div>
                                      </CardBody>
                                </Card> 
                          
                            </Col>  

                            <Col>  
                             
                                <Card>
                                      <CardHeader>
                                      <Link to="/ProjectDone">
                                        <i className=""></i><strong>Web coffee house</strong>
                                      </Link>
                                       <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:00 (23/01/2019)</h6>
                                        <h6>  End:   8:00 (23/05/2019)</h6>
                                        <Progress value={100} />
                                        <div className="text-center">100%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  
                         </Row>
                      </CardBody>
                </Card>    

                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Application</strong>
                                
                          <Row>       
                            <Col xs="2" md="2">
                              <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                            </Col> 
                            <Col xs="2" md="2">
                              <Input type="select" name="select" id="select">
                                <option value="0">Sort by Name</option>
                                <option value="1">Sort by Time start</option>
                                <option value="2">Sort by Progress</option>    
                              </Input>
                            </Col>   
                            <Col xs="0" md="0">
                              <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                            </Col> 
                          </Row>
                            </CardHeader>
                          <CardBody>
                         <Row>
                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán giày</strong>
                                        </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   9:00 (3/01/2019)</h6>
                                        <h6>  End:   9:00 (23/05/2019)</h6>
                                        <Progress value={50} />
                                        <div className="text-center">50%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  

                            <Col>  
                           
                                <Card>
                                      <CardHeader>
                                       <Link to="/ProjectTodo">
                                        <i className=""></i><strong>Web bán quần áo</strong>
                                         </Link>
                                          <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:30 (23/01/2019)</h6>
                                        <h6>  End:   8:30 (23/05/2019)</h6>
                                        <Progress value={0} />
                                        <div className="text-center">0%</div>
                                      </CardBody>
                                </Card> 
                           
                            </Col>  

                            <Col>  
                            
                                <Card>
                                      <CardHeader>
                                       <Link to="/DashBoard">
                                        <i className=""></i><strong>Web bán đồ cổ</strong>
                                       </Link>
                                        <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   11:00 (23/01/2019)</h6>
                                        <h6>  End:   11:00 (23/05/2019)</h6>
                                        <Progress value={30} />
                                        <div className="text-center">30%</div>
                                      </CardBody>
                                </Card> 
                          
                            </Col>  

                            <Col>  
                             
                                <Card>
                                      <CardHeader>
                                      <Link to="/ProjectDone">
                                        <i className=""></i><strong>Web coffee house</strong>
                                      </Link>
                                       <div className="card-header-actions">
                                         <a href="/Project/Setting" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                                        </div>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>Start:   8:00 (23/01/2019)</h6>
                                        <h6>  End:   8:00 (23/05/2019)</h6>
                                        <Progress value={100} />
                                        <div className="text-center">100%</div>
                                      </CardBody>
                                </Card> 
                              
                            </Col>  
                         </Row>
                      </CardBody>
                </Card>    
          </Col>
        </Row>

    </div>  
    
          </Col>   
          </Row>
    );
  }
}

export default AllProject;
