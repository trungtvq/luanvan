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
      currentData: [],
      modalDetail: false,
      search:'',
      currentSearch:'',
      positionsort:''
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
            }],
            currentData: [...prevState.currentData,
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
//search
onTextboxChangeSearch=(event)=>{
  this.setState({
    search: event.target.value,
  });
}
handleSearch=()=>{
  let that=this;
  let tmp = that.state.data.filter(function (e)
  {
     return e.title.indexOf(that.state.search) !== -1; 
  });
  this.setState({
    currentData: tmp,
    currentSearch:this.state.search,
  });
};
//show all
handleShowAll=()=>{
  this.setState({
    currentData: this.state.data,
    search: '',
  });
}
//sort title
handleSortTitleDown=()=>{
  let tmp = this.state.currentData.sort((a, b) => a.title.localeCompare(b.title))
  this.setState({
    currentData: tmp.reverse(),
    positionSort:'titleDown',
  });
};
handleSortTitleUp=()=>{
  this.setState({
    currentData: this.state.currentData.sort((a, b) => a.title.localeCompare(b.title)),
    positionSort:'titleUp',
  });
};
//sort Priority 
handleSortPriorityDown=()=>{
let tmp = this.state.currentData.sort((a, b) => a.priority.localeCompare(b.priority))
this.setState({
  currentData: tmp.reverse(),
  positionSort:'priorityDown',
});
};
handleSortPriorityUp=()=>{
this.setState({
  currentData: this.state.currentData.sort((a, b) => a.priority.localeCompare(b.priority)),
  positionSort:'priorityUp',
});
};
//sort estimation
handleSortEstimationDown=()=>{
let tmp = this.state.currentData.sort((a, b) => a.estimation.localeCompare(b.estimation))
this.setState({
  currentData: tmp.reverse(),
  positionSort:'estimationDown',
});
};
handleSortEstimationUp=()=>{
this.setState({
  currentData: this.state.currentData.sort((a, b) => a.estimation.localeCompare(b.estimation)),
  positionSort:'estimationUp',
});
};
//sort sprint
handleSortSprintDown=()=>{
let tmp = this.state.currentData.sort((a, b) => a.sprint.localeCompare(b.sprint))
this.setState({
  currentData: tmp.reverse(),
  positionSort:'sprintDown',
});
};
handleSortSprintUp=()=>{
this.setState({
  currentData: this.state.currentData.sort((a, b) => a.sprint.localeCompare(b.sprint)),
  positionSort:'sprintUp',
});
};
//sort start
handleSortStartDown=()=>{
  let tmp = this.state.currentData.sort((a, b) => a.start.localeCompare(b.start))
  this.setState({
    currentData: tmp.reverse(),
    positionSort:'startDown',
  });
  };
handleSortStartUp=()=>{
  this.setState({
    currentData: this.state.currentData.sort((a, b) => a.start.localeCompare(b.start)),
    positionSort:'startUp',
  });
  };
//sort deadline
handleSortDeadlineDown=()=>{
  let tmp = this.state.currentData.sort((a, b) => a.deadline.localeCompare(b.deadline))
  this.setState({
    currentData: tmp.reverse(),
    positionSort:'deadlineDown',
  });
  };
handleSortDeadlineUp=()=>{
  this.setState({
    currentData: this.state.currentData.sort((a, b) => a.deadline.localeCompare(b.deadline)),
    positionSort:'deadlineUp',
  });
  };
  render() {
    let that=this;
    return (
      <Row>
          <Col>    
              <Row>
                <Col xs="2" md="2">
                  <Input type="text" id="text-input" name="text-input" placeholder="Search" value={that.state.search} onChange={that.onTextboxChangeSearch}/>
                </Col>
                <Col xs="0" md="0">
                  <Button type="submit" size="sm" color="success" onClick={that.handleSearch}><i class="fa fa-search"></i></Button>
                </Col>
                <Col xs="3" md="3">
                  <Button color="link" onClick={that.handleShowAll}>show all</Button>
                </Col>
              </Row>
              <Card>
              <div class="table-responsive"> 
                <table class="table table-lg">
                  <thead class="thead">
                  <tr class="bg-primary">
                    <th>
                      Title
                      <i class="fa fa-arrow-up" onClick={that.handleSortTitleUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortTitleDown}></i>
                    </th>
                    {/* <th>As a... <i class="fa fa-sort"></i></th>
                    <th>I want to be able to... <i class="fa fa-sort"></i></th>
                    <th>So that... <i class="fa fa-sort"></i></th> */}
                    <th>
                      Priority 
                      <i class="fa fa-arrow-up" onClick={that.handleSortPriorityUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortPriorityDown}></i>
                    </th>
                    <th>Estimation
                      <i class="fa fa-arrow-up" onClick={that.handleSortEstimationUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortEstimationDown}></i>
                    </th>
                    <th>Sprint 
                      <i class="fa fa-arrow-up" onClick={that.handleSortSprintUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortSprintDown}></i>
                    </th>
                    <th>Start 
                      <i class="fa fa-arrow-up" onClick={that.handleSortStartUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortStartDown}></i>
                    </th>
                    <th>Deadline 
                      <i class="fa fa-arrow-up" onClick={that.handleSortDeadlineUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortDeadlineDown}></i>
                    </th>
                    {/* <th>Status <i class="fa fa-sort"></i></th> */}
                    <th></th>
                  </tr>
                  </thead>
                    <tbody>{this.state.currentData.map(function(item, key) {    
               return (
                  <tr key = {key}>
                       <td data-id={item.id} data-role={item.role} data-want={item.want} 
                           data-so={item.so}  
                           onClick={that.toggleDetail}>
                          <u>{item.title}</u>
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
                      <td>{item.priority}</td>
                      <td>{item.estimation}</td>
                      <td>{item.sprint}</td>
                      <td>{item.start}</td>
                      <td>{item.deadline}</td>
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
