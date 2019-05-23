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
  Breadcrumb
} from 'reactstrap';
import { Link } from 'react-router-dom';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';

class Payment extends Component {
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
                   <strong>
                   Purchasing Overlead....
                   </strong>     
              </CardHeader>
              <CardBody>
                   <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                  <Col md="3">
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text-input" id="text-input" name="text-input" placeholder=" email" />           
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Card number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="card number" />           
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Expiry data</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="MM/YY" />           
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Full name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Full name" />           
                    </Col>
                  </FormGroup>      
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Cv code</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Cv code" />           
                    </Col>
                  </FormGroup>        
                  <FormGroup row>
                  
                    <Col xs="12" md="4">
                      
                      <Input type="text" id="text-input" name="text-input" placeholder="Cv code" value="You will be charged US$99"/> 
                      
                    </Col>
                  </FormGroup>                     
                </Form>

              </CardBody>
              <CardFooter>
              <Link to="/Home/Payment">
                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Pay</Button>
              </Link>
              <Link to="/Home/Payment">
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Or pay by paypal</Button>
              </Link>
              </CardFooter>
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
