import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
class Add extends Component {
  render() {
    return (
      <Card>             
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">As a...</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="As a..." />
                      
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">I want to be able to...</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="I want to be able to..." />
                      
                    </Col>
                  </FormGroup>   
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">So that...</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>                     
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date setting </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </Col>
                  </FormGroup>
                   <FormGroup row>
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
                  </FormGroup>                                          
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
    );
  }
}

export default Add;