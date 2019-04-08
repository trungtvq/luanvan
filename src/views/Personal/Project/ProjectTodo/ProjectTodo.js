import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  Container,
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
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'

class ProjectTodo extends Component {
  render() {
    return (
      <Container>
      <Demo/>
      <Card>             
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Add member</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="user name" />
                      
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectSm">Role</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                        <option value="0">Please select</option>
                        <option value="1">Master</option>
                        <option value="2">Member</option>
                       
                      </Input>
                    </Col>
                  </FormGroup>
                                                   
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Add</Button>
                <Link to="/Dashboard">
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Go to dash board</Button>
                </Link>
              </CardFooter>
            </Card>
            </Container>
    );
  }
}

export default ProjectTodo;
