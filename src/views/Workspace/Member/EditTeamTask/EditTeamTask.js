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
class EditTeamTask extends Component {
  render() {
    return (
     <div class="card  bg-primary  mb-3" >      
             <div class="card-body text-white">
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Title</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Title" value="Login bằng Fb"/>
                      
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." value="Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Priority</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">High</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Medium</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                        <Label className="form-check-label" check htmlFor="inline-radio3">Low</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>                     
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Start day </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" value="20/4/2019"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Deadline </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" value="24/4/2019"/>
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Assignee</Label>
                    </Col>
                   <Col xs="12" md="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Hùng</option>
                        <option value="2">Nhân</option>
                        <option value="3">Tâm</option>
                      </Input>
                    </Col>
                  </FormGroup>   
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Status</Label>
                    </Col>
                    <Col xs="12" md="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">done</option>
                        <option value="2">inprogress</option>
                        <option value="3">to do</option>
                      </Input>
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

export default EditTeamTask;
