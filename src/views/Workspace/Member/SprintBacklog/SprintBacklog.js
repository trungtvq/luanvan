import React, { Component } from 'react';
import { Card,CardHeader,Badge, Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, } from 'reactstrap';
import cookie from 'react-cookies';
const proto = {};
proto.sprintbacklog = require('./../../../../gRPC/sprintbacklog/sprintbacklog_grpc_web_pb');

class SprintBacklog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      }
    };
    componentDidMount() {
  
      const sprintbacklogService = new proto.sprintbacklog.SprintBacklogClient('https://www.overlead.co');
      var metadata = {};
      var GetAllSprintBacklogReq = new proto.sprintbacklog.GetAllSprintBacklogReq();
      GetAllSprintBacklogReq.setRequesterid(cookie.load("userId"));
      GetAllSprintBacklogReq.setAccesstoken(cookie.load("accessToken"));
      GetAllSprintBacklogReq.setProjectid(cookie.load("currentProject"));
  
      var response = sprintbacklogService.getAllSprintBacklog(GetAllSprintBacklogReq, metadata)
      let that = this
      response.on('data', function (response) {
        if (response.getStatus() == "SUCCESS") {
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
            start: response.getStart(),
            deadline: response.getDeadline()
            }]
          }));
  
        }
      })
      response.on('status', function (status) {
        console.log("status")
        console.log(status.code);
        console.log(status.details);
        console.log(status.metadata);
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
                    <th>As a... <i class="fa fa-sort"></i></th>
                    <th>I want to be able to... <i class="fa fa-sort"></i></th>
                    <th>So that... <i class="fa fa-sort"></i></th>
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Estimation <i class="fa fa-sort"></i></th>
                    <th>Sprint <i class="fa fa-sort"></i></th>
                    <th>Start <i class="fa fa-sort"></i></th>
                    <th>Deadline <i class="fa fa-sort"></i></th>
                    <th>Status <i class="fa fa-sort"></i></th>
                    <th></th>
                  </tr>
                  </thead>
                    <tbody>{this.state.data.map(function(item, key) {    
               return (
                  <tr key = {key}>
                      <td>{item.title}</td>
                      <td>{item.role}</td>
                      <td>{item.want}</td>
                      <td>{item.so}</td>
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
