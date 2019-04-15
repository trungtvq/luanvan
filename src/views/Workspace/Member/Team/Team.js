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
  Table,
  Progress
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'

class Team extends Component {
  render() {
    return (
          <div>
            <Card>             
              <CardBody>
                   <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Skill</th>
                    <th>Point</th>
                    <th>Current task</th>
                    <th>Task completed</th>
      
                   
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                 
                 
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                 
                 
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  
                  </tbody>
                </Table>
              </CardBody>
            </Card>


            <Card>  
             <CardHeader>
                    <i className="fa fa-align-justify"></i><strong>Find and add member</strong>
                      <Row>       
                        <Col xs="2" md="2">
                          <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                        </Col> 
                        <Col xs="0" md="0">
                          <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                        </Col> 
                      </Row>     

                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Skill</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="skill" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Point</Label>
                    </Col>
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Point min" />
                      <Input type="text" id="text-input" name="text-input" placeholder="Point max" />  
                    </Col>
                  </FormGroup>   
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Freelancer</Label>
                    </Col>
                    <Col xs="2" md="2">
                      <Input type="checkbox" id="text-input" name="text-input"  />  
                    </Col>
                  </FormGroup>   
                                                     
                </Form>
             </CardHeader>           
              <CardBody>
             
                   <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Skill</th>
                    <th>Point</th>
                    <th>Number Project</th>
                    <th></th>
      
                   
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                    </td>
                  </tr>
                 
                 
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                    </td>
                  </tr>
                 
                 
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                    </td>
                  </tr>
                  
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
           
    );
  }
}

export default Team;
