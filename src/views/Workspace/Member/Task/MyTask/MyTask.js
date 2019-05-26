import React, { Component } from 'react';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import DualListBox from 'react-dual-listbox';
import { 
Form,
FormGroup,
Label,
Card,
CardBody, 
CardFooter,
CardHeader,
Collapse,
Progress, 
Badge, 
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
ListGroup,
ListGroupItem,
PaginationLink, } from 'reactstrap';
import {
  getFromStorage,
  setInStorage
} from '../../../../../service/storage'
const proto = {};
proto.mytask = require('../../../../../gRPC/mytask/mytask_grpc_web_pb');

    
class MyTask extends Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
   
    this.state = {
      collapse: true,
      fadeIn: true,
      selected: ['one'],
       data: [],
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount(){
    
//this.notify()

const mytaskService = new proto.mytask.MytaskClient('https://www.overlead.co');
var metadata = {};

var GetAllMyTaskReq = new proto.mytask.GetAllMyTaskReq();
GetAllMyTaskReq.setRequesterid(getFromStorage("userId"));
GetAllMyTaskReq.setAccesstoken(getFromStorage("accessToken"));
GetAllMyTaskReq.setProjectid(getFromStorage("currentProject"));
GetAllMyTaskReq.setTeamid(getFromStorage("teamId"));
GetAllMyTaskReq.setUsername(getFromStorage("username"));


var response = mytaskService.getAllMyTask(GetAllMyTaskReq, metadata)
let that = this
let start=""
let end=""
response.on('data', function (response) {
  if (response.getStatus() == "SUCCESS") {
    let arr = response.getStart().split('-');
    if (arr[1] > 12) {
      arr[1] = arr[1] - 12
      start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
    } else {
      start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
    }

    arr = response.getDeadline().split('-')
    if (arr[1] > 12) {
      arr[1] = arr[1] - 12
      end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
    } else {
      end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
    }

   
  

  

    that.setState(prevState => ({
      data: [...prevState.data,
      {
        id: response.getTeamtaskid(),
        title: response.getTitle(),
        description: response.getDescription(),
        priority: response.getPriority(),
        review: response.getReview(),
        comment: response.getComment(),
        status: response.getStatustask(),
        start: start,
        deadline: end
      }]
    }));

  }
})
response.on('status', function (status) {
  console.log("status")
  if (status.code==0){
   // that.success()

  }
  else
{      //  that.failed(status)
}      
});
response.on('end', function (end) {
  console.log("end")
  console.log(end)
});
  }

  render() {

        return (
           <Row>
          <Col>         
         
            
            <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                   
                    <Col xs="0" md="0">
                      <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                    </Col> 
            </Row>  
           <Card> 
           <div class="table-responsive"> 
            <table class="table table-lg">
                  <thead class="thead">
                  <tr class="bg-primary">
                    <th>Title <i class="fa fa-sort"></i></th>
                    <th>Description <i class="fa fa-sort"></i></th>
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Start day <i class="fa fa-sort"></i></th>
                    <th>Deadline <i class="fa fa-sort"></i></th>   
                    <th>Comment</th>
                    <th>Status</th>   
                    
                  </tr>
                  </thead>
                   <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.priority}</td>
                      <td>{item.start}</td>
                      <td>{item.deadline}</td>
                      <td>{item.comment}</td>
                      <td>{item.status}</td> 
                     
                  </tr>
                )
             
             })}</tbody>
                </table>
            </div>
           </Card>
            </Col>
            </Row>
        );
    }
}

export default MyTask;
