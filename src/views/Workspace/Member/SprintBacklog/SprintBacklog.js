import React, { Component } from 'react';
import { Form,ModalBody,ModalHeader,Modal,Label,FormGroup,Card,CardHeader,Badge, Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, } from 'reactstrap';
import cookie from 'react-cookies';
import {
  getFromStorage,
  setInStorage
} from '../../../../service/storage'
const proto = {};
proto.sprintbacklog = require('./../../../../gRPC/sprintbacklog/sprintbacklog_grpc_web_pb');

class SprintBacklog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalDetail: false,
      }
    };
  toggleDetail = (event) => {
      let role = event.currentTarget.dataset.role
      let want = event.currentTarget.dataset.want
      let so = event.currentTarget.dataset.so
      this.setState(prevState => ({
        modalDetail: !prevState.modalDetail,
        role: role,
        want: want,
        so: so,
      }));
  }

    componentDidMount() {  
      const sprintbacklogService = new proto.sprintbacklog.SprintBacklogClient('https://www.overlead.co');
      var metadata = {};
      var GetAllSprintBacklogReq = new proto.sprintbacklog.GetAllSprintBacklogReq();
      GetAllSprintBacklogReq.setRequesterid(getFromStorage("userId"));
      GetAllSprintBacklogReq.setAccesstoken(getFromStorage("accessToken"));
      GetAllSprintBacklogReq.setProjectid(getFromStorage("currentProject"));
      GetAllSprintBacklogReq.setTeamid(getFromStorage("teamId"));
      
      var response = sprintbacklogService.getAllSprintBacklog(GetAllSprintBacklogReq, metadata)
      let that = this
      response.on('data', function (response) {
        if (response.getStatus() == "SUCCESS") {
          let arr = response.getStart().split('-');
          let start = ""
          let end = ""
          if (arr[1] > 12) {
            arr[1] = arr[1] - 12
            start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
          } else {
            start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
          }



          arr = response.getDeadline().split('-')
          if (arr[1] > 12) {
            arr[1] = arr[1] - 12
            end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
          } else {
            end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
          }


          that.setState(prevState => ({
            data: [...prevState.data,
            {
              id: response.getBacklogid(),
            title: response.getTitle(),
            role: response.getRole(),
            want: response.getWant(),
            so: response.getSo(),
            priority: response.getPriority(),
            estimation: response.getEstimation(),
            sprint: response.getSprintid(),
            status: response.getStatusbacklog(),
            start: start,
            deadline: end
            }]
          }));
  
        }
      })
      response.on('status', function (status) {
        if (status.code!=0) console.log(status)
        setInStorage("sprints",that.state.data)

      });
      response.on('end', function (end) {
        console.log("end")
        console.log(end)
      });
  
  
  
    }
    handleBackToProductbacklog = () => {
      
    };
    handleComplete = () => {
      
    };
  render() {
    let that=this;
    return (
      <Row>
          <Col>    
              <Card>
              <div class="table-responsive"> 
                <table class="table table-lg">
                  <thead class="thead">
                  <tr class="bg-primary">
                    <th>Title... <i class="fa fa-sort"></i></th>
                    {/* <th>As a... <i class="fa fa-sort"></i></th>
                    <th>I want to be able to... <i class="fa fa-sort"></i></th>
                    <th>So that... <i class="fa fa-sort"></i></th> */}
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Estimation <i class="fa fa-sort"></i></th>
                    <th>Sprint <i class="fa fa-sort"></i></th>
                    <th>Start <i class="fa fa-sort"></i></th>
                    <th>Deadline <i class="fa fa-sort"></i></th>
                    {/* <th>Status <i class="fa fa-sort"></i></th> */}
                    <th></th>
                  </tr>
                  </thead>
                    <tbody>{this.state.data.map(function(item, key) {    
               return (
                  <tr key = {key}>
                       <td data-id={item.id} data-role={item.role} data-want={item.want} 
                           data-so={item.so}  
                           onClick={that.toggleDetail}>
                          <u><center>{item.title}</center></u>
                        </td>
                        <Modal size="lg" isOpen={that.state.modalDetail} toggle={that.toggleDetail} className={that.props.className}>
                          <ModalHeader toggle={that.toggleDetail}>ProductBacklog</ModalHeader>
                          <ModalBody>
                            <Form className="form-horizontal">
                                <h5>As a {that.state.role} </h5>
                                <h5>I want to be able to {that.state.want}</h5>
                                <p>So that {that.state.so}</p>                       
                            </Form>
                          </ModalBody>
                        </Modal>
                      {/* <td>{item.role}</td>
                      <td>{item.want}</td>
                      <td>{item.so}</td> */}
                      <td><center>{item.priority}</center></td>
                      <td><center>{item.estimation}</center></td>
                      <td><center>{item.sprint}</center></td>
                      <td><center>{item.start}</center></td>
                      <td><center>{item.deadline}</center></td>
                      <td>                        
                      <Button size="sm" color="danger" onClick={that.handleBackToProductbacklog}><i class="fa fa-trash"></i></Button>
                      <Button size="sm" color="success" onClick={that.handleComplete}><i class="fa fa-check"></i></Button>
                      </td>
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

export default SprintBacklog;
