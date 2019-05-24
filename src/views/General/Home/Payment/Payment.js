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
import PaypalExpressBtn from 'react-paypal-express-checkout';
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      accordion: [false, false, false,false],
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
    const onSuccess = (payment) => {
      // Congratulation, it came here means everything's fine!
          console.log("The payment was succeeded!", payment);
          // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log('The payment was cancelled!', data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  }

  let env = 'production'; // you can set here to 'production' or 'sandbox' for production
  let currency = 'USD'; // or you can set this value from your props or state
  let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

  const client = {
      sandbox:    'AQKhnQG0l9ZwRFNMSS6hF13HEZLjhv2RyyBw2zvR1JPOlmf9z_XAWn32hHOcVqHNAXZjq6-k6COcsxcr',
      production: 'AWcRHOMyUYPKN8weIIQnzA6KNwZg-xKYkns1NHAIWqpntVB_K5ri4NF2czIth54wW9KxnMtXuYv-7Wb_',
  }
    return (
      <div>  
      <AppAppBar/>
      <div><br></br></div>
     
      <Container>
      <Row>
          <Col>                      
          <div class="card border-primary mb-3">
              <div class="card-header text-white bg-primary">
                <center>
                  <h4><b>Select Payment Method </b></h4>
                </center>              
              </div>
              <div class="card-body">
                <div id="accordion">
                  <Card className="mb-0" className="card-accent-primary">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <center><h5 className="m-0 p-0">Credit Card</h5></center>
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
                     
                         
                          <center><button type="button" class="btn btn-success btn-lg">Submit</button></center>           
                                            
                      
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
                  <Card className="mb-0" className="card-accent-primary">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <center><h5 className="m-0 p-0">Net Banking</h5></center>
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
                          
                          <center><button type="button" class="btn btn-success btn-lg">CONTINUE</button></center> 
                         
                         
                        </Form>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0" className="card-accent-primary">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <center><h5 className="m-0 p-0">PayPal</h5></center>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                    <center>
                    <div>
                      <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                    </div>
                    </center>
                    </CardBody>
                      
                    {/* <CardBody>
                    
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
                      </CardBody>*/}
                    </Collapse> 
                  </Card>
                  <Card className="mb-0" className="card-accent-primary">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3)} aria-expanded={this.state.accordion[3]} aria-controls="collapseThree">
                        <center><h5 className="m-0 p-0">Debit Card</h5></center>
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
                           
                             
                             <center><button type="button" class="btn btn-success btn-lg">Submit</button></center>           
                                                   
                         
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
              </div>
            </div>
            
          </Col>
        </Row>
        
        

        </Container>
        <AppFooter />
        </div>
    );
  }
}

export default Payment;