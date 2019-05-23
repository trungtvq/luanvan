import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
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
  DropdownItem, 
  DropdownMenu, 
  DropdownToggle, 
  Nav, 
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  Progress,
  Form,
  FormGroup,
  Label,
  CardFooter,
  Breadcrumb,
  Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      accordion: [true, false, false,false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }
  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  } 
  render() {
    return (
      <div>  
      <AppAppBar/>
      <div><br></br></div>
     
      <Container>
      <Row>
          <Col>                      
          <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Credit Card</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <Form  className="form-horizontal">   
                      <center><h5><b><font color="green">Personal Information</font></b></h5></center>            
                        <FormGroup row>
                        <Col md="3">
                            <Label htmlFor="text-input">Email</Label>
                          </Col>
                          <Col xs="12" md="6">
                            <Input type="text-input" id="text-input" name="text-input" placeholder=" Email" />           
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Col md="3">
                            <Label htmlFor="text-input">First name</Label>
                          </Col>
                          <Col xs="12" md="6">
                            <Input type="text-input" id="firstName" name="firstName" placeholder=" First name" />           
                          </Col>
                        </FormGroup>
                        <center><h5><b><font color="green">Credit Card Info</font></b></h5></center>     
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Name of card</Label>
                          </Col>
                          <Col xs="12" md="6">
                            <Input type="text" id="NameOfCard" name="NameOfCard" placeholder="Name of card" />           
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Card number</Label>
                          </Col>
                          <Col xs="12" md="6">
                            <Input type="text" id="CardNumber" name="CardNumber" placeholder="0000-0000-0000-0000" />           
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Expiration</Label>
                          </Col>
                          <Col xs="12" md="6">
                            <Input type="date" id="Expiration" name="Expiration" placeholder="Expiration" />           
                          </Col>
                        </FormGroup>      
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Cvv number</Label>
                          </Col>
                          <Col xs="12" md="6">
                            <Input type="text" id="text-input" name="text-input" placeholder="xxxx" />           
                          </Col>
                        </FormGroup>        
                        <FormGroup row>
                          <Col md="3">
                          <button type="button" class="btn btn-success btn-lg">Submit</button>          
                          </Col>                         
                        </FormGroup> 
                        <FormGroup row>
                          <Col md="1">
                            <input type="checkbox"></input>
                          </Col>
                          <Col xs="12" md="9">
                          <h6><font color="green">By checking this box, I agree to the Terms & Conditions & Privacy Policy.</font></h6>
                          </Col>
                          </FormGroup> 
                      </Form>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Net Banking</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <Form  className="form-horizontal">                        
                        <FormGroup row>
                        <Col xs="12" md="3">
                            <input type="checkbox"></input> ACB
                        </Col>
                        <Col xs="12" md="3">
                            <input type="checkbox"></input> OCB
                        </Col>
                        <Col xs="12" md="3">
                            <input type="checkbox"></input> TPBank  
                        </Col>
                        <Col xs="12" md="3">
                            <input type="checkbox"></input> SeABank
                        </Col>
                        <Col xs="12" md="3">
                            <input type="checkbox"></input> Oceanbank
                        </Col>
                        <Col xs="12" md="3">
                            <input type="checkbox"></input> Agribank
                        </Col>
                        <Col xs="12" md="3">
                            <input type="checkbox"></input> GPBank
                        </Col>
                        <Col xs="12" md="3">
                            <input type="checkbox"></input> BacABank
                        </Col>

                        </FormGroup> 
                          <FormGroup row>
                          <Col xs="12" md="5">
                           <button type="button" class="btn btn-success btn-lg">CONTINUE</button>
                          </Col>
                          </FormGroup> 
                        </Form>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">PayPal</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <Form  className="form-horizontal">   
                          <center><h5><b><font color="green">PAYPAL</font></b></h5></center>  
                          <center><h6>Already Have A PayPal Account?</h6></center> 
                          <center><h5><b>Login</b></h5></center>           
                            <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Email</Label>
                              </Col>
                              <Col xs="12" md="6">
                                <Input type="text-input" id="text-input" name="text-input" placeholder=" name@email.com" />           
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Password</Label>
                              </Col>
                              <Col xs="12" md="6">
                                <Input type="password" id="Password" name="Password" placeholder="Password" />           
                              </Col>
                            </FormGroup>
                           
                            <FormGroup row>
                            
                              <Col md="3">
                                <input type="checkbox"></input>
                              </Col>
                              <Col xs="12" md="3">
                              <h6><font color="green">Remember me?</font></h6>
                              </Col>
                              
                            </FormGroup> 
                        
                              <center><button type="button" class="btn btn-success btn-lg">Login</button></center>
                           
                          </Form>       

                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3)} aria-expanded={this.state.accordion[3]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Debit Card</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[3]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <Form  className="form-horizontal">   
                          
                            <center><h5><b><font color="green">Credit Card Info</font></b></h5></center>     
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="text-input">Name of card</Label>
                              </Col>
                              <Col xs="12" md="6">
                                <Input type="text" id="NameOfCard" name="NameOfCard" placeholder="Name of card" />           
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="text-input">Card number</Label>
                              </Col>
                              <Col xs="12" md="6">
                                <Input type="text" id="CardNumber" name="CardNumber" placeholder="0000-0000-0000-0000" />           
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="text-input">Expiration</Label>
                              </Col>
                              <Col xs="12" md="6">
                                <Input type="date" id="Expiration" name="Expiration" placeholder="Expiration" />           
                              </Col>
                            </FormGroup>      
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="text-input">Cvv number</Label>
                              </Col>
                              <Col xs="12" md="6">
                                <Input type="text" id="text-input" name="text-input" placeholder="xxxx" />           
                              </Col>
                            </FormGroup>        
                            <FormGroup row>
                              <Col md="3">
                              <button type="button" class="btn btn-success btn-lg">Submit</button>          
                              </Col>                         
                            </FormGroup> 
                            <FormGroup row>
                              <Col md="1">
                                <input type="checkbox"></input>
                              </Col>
                              <Col xs="12" md="9">
                              <h6><font color="green">By checking this box, I agree to the Terms & Conditions & Privacy Policy.</font></h6>
                              </Col>
                              </FormGroup> 
                          </Form>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
            
          </Col>
        </Row>
        
        

        </Container>
        <AppFooter />
        </div>
    );
  }
}

export default Payment;
