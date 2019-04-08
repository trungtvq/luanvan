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
                    <th>Title</th>
                    <th>Description</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Status</th>
                    <th>Issue </th>                   
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20/3/2019</td>
                      <td>Đăng kí bằng mail</td>
                      <td>Thiết kế giao diện nhập email</td>
                      <td>8:00</td>
                      <td>9:00</td>
                      <td>done</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20/3/2019</td>
                      <td>Đăng kí bằng mail</td>
                      <td>Kết nối database</td>
                      <td>9:00</td>
                      <td>10:00</td>
                      <td>done</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20/3/2019</td>
                      <td>Đăng kí bằng mail</td>
                      <td>Viết api lấy dữ liệu từ input form</td>
                      <td>10:00</td>
                      <td>11:00</td>
                      <td>inprogress</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20/3/2019</td>
                      <td>Đăng kí bằng mail</td>
                      <td>Code api check mail có hợp lệ không</td>
                      <td>13:00</td>
                      <td>14:00</td>
                      <td>to do</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20/3/2019</td>
                      <td>Đăng kí bằng mail</td>
                      <td>Code api check mail có hợp lệ không</td>
                      <td>13:00</td>
                      <td>14:00</td>
                      <td>to do</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20/3/2019</td>
                      <td>Đăng kí bằng mail</td>
                      <td>Code kiểm tra email đã đăng kí chưa</td>
                      <td>14:00</td>
                      <td>15:00</td>
                      <td>to do</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20/3/2019</td>
                      <td>Đăng kí bằng mail</td>
                      <td>Code api lưu email vào database</td>
                      <td>14:00</td>
                      <td>15:00</td>
                      <td>to do</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20/3/2019</td>
                      <td>Đăng kí bằng mail</td>
                      <td>Test code và fix bug</td>
                      <td>15:00</td>
                      <td>17:00</td>
                      <td>to do</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>           
      
            <Card>             
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Title</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Title" />
                      
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
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
                      <Label htmlFor="date-input">Start </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="time" id="time-input" name="time-input" placeholder="time" />
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">End </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="time" id="time-input" name="time-input" placeholder="time" />
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
