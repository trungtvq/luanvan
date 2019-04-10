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
  Table,
  Row,
} from 'reactstrap';
class DailySchedule extends Component {
  render() {
    return (
      <Row>
          <Col>             
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Date</th>
                    <th>IdBacklog</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Review </th>                   
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20/3/2019</td>
                      <td>1</td>
                      <td>Thiết kế giao diện nhập email</td>
                      <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>
                      <td></td>
                    </tr>
                    
                    <tr>
                      <td>21/3/2019</td>
                      <td>1</td>
                      <td>Viết api lấy dữ liệu từ input form</td>
                      <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>22/3/2019</td>
                      <td>1</td>
                      <td>Code api check mail có hợp lệ không</td>
                      <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>23/3/2019</td>
                      <td>2</td>
                      <td>Code api check mail có hợp lệ không</td>
                      <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">To do</option>
                        <option value="1">Inprogress</option>
                        <option value="2">Done</option>
                      </Input>
                    </td>
                      <td></td>
                    </tr>
                    
                  </tbody>
                </Table>           
      
            <Card>             
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">IdBacklog</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="IdBacklog" name="IdBacklog" placeholder="IdBacklog" />
                      
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Task</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="Task" id="Task" rows="9"
                             placeholder="Task..." />
                    </Col>
                  </FormGroup>
                                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </Col>
                  </FormGroup>
                  
                   <FormGroup row>
                    <Col md="3">
                      <Label>Status</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">To do</p>
                    </Col>
                  </FormGroup>                                       
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Add</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
         </Col>
      </Row>
         
    );
  }
}

export default DailySchedule;
