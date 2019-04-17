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
   constructor(props) {
    super(props);
    this.state = {
      data: [ 
              {
                "date":"20/3/2019",
                "idBacklog":1,
                "task":"Thiết kế giao diện nhập email",
                "status":"done",
                "review":"",
              },
              {
                "date":"21/3/2019",
                "idBacklog":1,
                "task":"Viết api lấy dữ liệu từ input form",
                "status":"done",
                "review":"",
              },
              {
                "date":"22/3/2019",
                "idBacklog":1,
                "task":"Code api check mail có hợp lệ không",
                "status":"done",
                "review":"",
              },
              {
                "date":"23/3/2019",
                "idBacklog":2,
                "task":"Code api check mail có hợp lệ không",
                "status":"to do",
                "review":"",
              },
            
            
            ],
      }
    };

  render() {
    return (
      <Row>
          <Col>  
            <Card>           
                <Table responsive size="lg">
                  <thead>
                  <tr>
                    <th>Date</th>
                    <th>IdBacklog</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Review </th>  
                    <th> </th>                 
                  </tr>
                  </thead>
                   <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.date}</td>
                      <td>{item.idBacklog}</td>
                      <td>{item.task}</td>
                       <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">{item.status}</option>
                        <option value="1">to do</option>
                        <option value="2">inprogress</option>
                         <option value="2">done</option>
                      </Input>
                      </td> 
                      <td>{item.review}</td>
                      <td>
                        <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      </td>
                     
                  </tr>
                )
             
             })}</tbody>
                </Table>           
            </Card>  
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
