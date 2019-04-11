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

class Velocity extends Component {
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
          
          <Form>
                 <FormGroup row>
                 <Col md="4">
                      <Card>
                        <CardHeader>
                          To do
                          <div className="card-header-actions">
                            {/*eslint-disable-next-line*/}
                     
                            <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                            {/*eslint-disable-next-line*/}
                          </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse} id="collapseExample">
                          <CardBody>
                          <ListGroup>
                              <ListGroupItem>Người dùng đổi mật khẩu của tài khoản mà mình tạo</ListGroupItem>
                              <ListGroupItem>Người dùng thay đổi avatar hiển thị ở giao diện chính</ListGroupItem>
                              <ListGroupItem>Người dùng sử dụng paypal để trả phí</ListGroupItem>                            
                            </ListGroup>
                          </CardBody>
                        </Collapse>
                      </Card>    
                  </Col>
                                   
                    <Col md="0.5">                    
                    </Col>
                   
                    <Col md="4">
                      <Card>
                        <CardHeader>
                          Inprogress
                          <div className="card-header-actions">
                            {/*eslint-disable-next-line*/}
                     
                            <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                            {/*eslint-disable-next-line*/}
                          </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse} id="collapseExample">
                          <CardBody>
                            <ListGroup>
                              <ListGroupItem>Người dùng không cần tạo tài khoản mà sử dụng tài khoản email để đăng nhập</ListGroupItem>
                              <ListGroupItem>Người dùng tạo tài khoản và sử dụng tài khoản này để đăng nhập</ListGroupItem>                                                   
                            </ListGroup>
                          </CardBody>
                        </Collapse>
                      </Card>    
                  </Col>

                    <Col md="0.5">                   
                    </Col>

                    <Col md="4">
                      <Card>
                        <CardHeader>
                          Done
                          <div className="card-header-actions">
                            {/*eslint-disable-next-line*/}
                     
                            <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                            {/*eslint-disable-next-line*/}
                          </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse} id="collapseExample">
                          <CardBody>
                            <ListGroup>
                              <ListGroupItem>Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập</ListGroupItem>
                            </ListGroup>
                          </CardBody>
                        </Collapse>
                      </Card>    
                  </Col>
                  
                 </FormGroup>                                          
                </Form>

                
          </Col>
        </Row>
    );
  }
}

export default Velocity;
