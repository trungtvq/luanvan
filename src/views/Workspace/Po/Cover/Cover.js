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
                                        <Button type="submit" size="sm" color="success" align="center"><i class="fa fa-arrow-right"></i></Button>
                                      </CardBody>
                                </Card> 
                                
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
                                        <Button type="submit" size="sm" color="success" align="center"><i class="fa fa-arrow-right"></i></Button>
                                      </CardBody>
                                </Card> 

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
                                        <Button type="submit" size="sm" color="success" align="center"><i class="fa fa-arrow-right"></i></Button>
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
                                        <Button type="submit" size="sm" color="success" align="center"><i class="fa fa-arrow-left"></i></Button>
                                      </CardBody>
                                </Card> 
                                
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
                                        <Button type="submit" size="sm" color="success" align="center"><i class="fa fa-arrow-left"></i></Button>
                                      </CardBody>
                                </Card> 

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
                                        <Button type="submit" size="sm" color="success" align="center"><i class="fa fa-arrow-left"></i></Button>
                                      </CardBody>
                                </Card> 

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
