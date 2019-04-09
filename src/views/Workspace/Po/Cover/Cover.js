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
 Card,
CardHeader,
CardBody,
Progress,
Label,
 PaginationLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
class Cover extends Component {
  render() {
    return (
      <Row>
          <Col>         
            <Row>
              <Col>    
                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>User Story</strong>
                      </CardHeader>
                      <CardBody>
                        
                           
                                <Card>
                                      <CardHeader>
                                        <i className=""></i><strong>As admin</strong>
                                      </CardHeader>
                                      <CardBody>        
                                        <h6>I want to be able to:  See a list of all members and visitors</h6>
                                        <h6> So that:   I can monitor site visits</h6>
                                        <Row>
                                          <Col md="1">
                                            <Label htmlFor="text-input">Priority</Label>
                                          </Col>
                                          <Col xs="12" md="1">
                                            <Input type="text" name="text-input" id="text-input" rows="9"/>
                                          </Col>
                                         
                                          <Col md="2">                    
                                          </Col>
                                          <Col md="1">
                                            <Label htmlFor="text-input">Estimation</Label>
                                          </Col>
                                          <Col xs="12" md="1">
                                            <Input type="text" name="text-input" id="text-input" rows="9"/>                            
                                          </Col>

                                          <Col md="2">                   
                                          </Col>

                                          <Col md="1">
                                            <Label htmlFor="text-input">Sprint</Label>
                                          </Col>
                                          <Col xs="12" md="1">
                                            <Input type="text" name="text-input" id="text-input" rows="9"/>                            
                                          </Col>
                                        </Row>
                                      </CardBody>
                                </Card> 
                          

                          
                            
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
                     
                      </CardBody>
                </Card> 
              </Col>
               
               <Col>    
                <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Product backlog</strong>
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
          </Col>
        </Row>
    );
  }
}

export default Cover;
