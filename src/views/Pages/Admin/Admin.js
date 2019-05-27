import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  Col,
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
  Modal,
ModalHeader,
ModalBody,
ModalFooter,
Container
} from 'reactstrap';
import cookie from 'react-cookies';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import DatePicker from "react-datepicker";

const proto = {};

class Admin extends Component {
   constructor(props) {
    super(props);
    this.state = {
      data:[
        {
        }
      ],
      }
    };
  onTextboxChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  onTextboxChangeTask(event) {
    this.setState({
      task: event.target.value,
    });
  }
  onTextboxChangeTime(event) {
    this.setState({
      time: event.target.value,
    });
  }
  onTextboxChangeStatus(event) {
    this.setState({
      status: event.target.value,
    });
  }
  
  onTextboxChangeTimeStart(event) {
    this.setState({
      timeStart: event.target.value,
    });
  }
  onTextboxChangeDateStart(event) {
    this.setState({
      dateStart: event.target.value,
    });
  }
//update
  onTextboxChangeScheduleIdUpdate=(event)=> {
    this.setState({
      scheduleIdUpdate: event.target.value,
    });
  }
  onTextboxChangeTitleUpdate=(event)=> {
    this.setState({
      titleUpdate: event.target.value,
    });
  }
  onTextboxChangeTaskUpdate=(event)=> {
    this.setState({
      taskUpdate: event.target.value,
    });
  }
  onTextboxChangeTimeStartUpdate=(event)=> {
    this.setState({
      timeStartUpdate: event.target.value,
    });
  }
  onTextboxChangeDateStartUpdate=(event)=> {
    this.setState({
      dateStartUpdate: event.target.value,
    });
  }
  onTextboxChangeStatusUpdate=(event)=> {
    this.setState({
      statusUpdate: event.target.value,
    });
  }
  

  render() {
    let that=this;

   

    return (
      <div>  
      <AppAppBar/>
      <div><br></br></div>
      <div className="app flex-row align-items-center">
      <Container>
      <Row>
          <Col>                   
            <Card>           
                <table class="table table-lg">
                  <thead class="thead">
                  <tr class="bg-primary">
                    <th>Userid</th>
                    <th>PaypalName</th>
                    <th>Time pay</th>         
                  </tr>
                  </thead>
                   <tbody>{this.state.data.map(function(item, key) {
                     
                    if (item != null) {
                      let arr = item.time.split('-');
                      let time = ""
                      if (arr[1] > 12) {
                        arr[1] = arr[1] - 12
                        time = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
                      } else {
                        time = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
                      }
                    
               return (
                  <tr key = {key}>
                      <td>{item.Userid}</td>
                      <td>{item.PaypalName}</td>
                      <td>{time} {item.date}</td>
                  </tr>
                )
               }
             })}</tbody>
                </table>           
            </Card>  
           </Col>
        </Row>
        
        

        </Container>
        </div>
        <AppFooter />
        </div>
         
    );
  }
}

export default Admin;
