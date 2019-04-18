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
class Edit extends Component {
  render() {
    return (
       <div class="card  bg-primary  mb-3" >      
             <div class="card-body text-white">
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">As a...</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="As a..." value="admin"/>
                      
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">I want to be able to...</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="I want to be able to..." value="See a list of all members and visitors" />
                      
                    </Col>
                  </FormGroup>   
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">So that...</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." value="I can monitor site visits"/>
                    </Col>
                  </FormGroup>                     
                </Form>
              </div>
              <div class="card-footer bg-transparent ">
                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </div>
            </div>
    );
  }
}

export default Edit;
