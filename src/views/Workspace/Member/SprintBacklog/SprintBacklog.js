import React, { Component } from 'react';
import { FormGroup, Label, Form, ModalFooter, ModalBody, ModalHeader, Modal, Card, Button, Col, Input, Row, } from 'reactstrap';
import {
  getFromStorage,
  setInStorage
} from '../../../../service/storage'
import {setSprintBacklogs} from '../../../../actions'
import { connect } from 'react-redux';

import { toast } from 'react-toastify';
import loadAllSprint from '../../../../service/gRPC/loadAllSprint'
import loadAllBacklog from '../../../../service/gRPC/loadAllBacklog'
const proto = {};
proto.sprintbacklog = require('./../../../../gRPC/sprintbacklog/sprintbacklog_grpc_web_pb');
proto.sprint = require('./../../../../gRPC/sprint/sprint_grpc_web_pb');

class SprintBacklog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentData: [],
      modalDetail: false,
      search: '',
      currentSearch: '',
      positionsort: '',
      modalChangeSprint: false,
      sprint: '',
      updateId: ''
    }
  };

  toastId = null;
  notify = () => this.toastId = toast("Processing... please wait...", { autoClose: false });
  success = () => toast.update(this.toastId, { render: "Success", type: toast.TYPE.SUCCESS, autoClose: 3000 });
  failed = () => toast.update(this.toastId, { render: "Failed", type: toast.TYPE.ERROR, autoClose: 3000 });

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
  toggleChangeSprintOpen = (event) => {
    let id = event.currentTarget.dataset.id
    let sprintId = event.currentTarget.dataset.sprint
    this.setState(prevState => ({
      modalChangeSprint: !prevState.modalChangeSprint,
      updateId: id,
      sprint: sprintId
    }));
  }
  toggleChangeSprint = () => {
    this.setState(prevState => ({
      modalChangeSprint: !prevState.modalChangeSprint,
    }));
  }


  



  handleComplete = () => {
  };
  //search
  onTextboxChangeSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  }
  handleSearch = () => {
    let that = this;
    let tmp = that.props.sprintbacklogs.filter(function (e) {
      return e.title.indexOf(that.state.search) !== -1;
    });
    this.setState({
      currentData: tmp,
      currentSearch: this.state.search,
    });
  };
  //show all
  handleShowAll = () => {
    this.setState({
      currentData: this.state.data,
      search: '',
    });
  }
  //sort title
  handleSortTitleDown = () => {
    let tmp = this.state.currentData.sort((a, b) => a.title.localeCompare(b.title))
    this.setState({
      currentData: tmp.reverse(),
      positionSort: 'titleDown',
    });
  };
  handleSortTitleUp = () => {
    this.setState({
      currentData: this.state.currentData.sort((a, b) => a.title.localeCompare(b.title)),
      positionSort: 'titleUp',
    });
  };
  //sort Priority 
  handleSortPriorityDown = () => {
    let tmp = this.state.currentData.sort(function (a, b) { return a.priority - b.priority });
    this.setState({
      currentData: tmp.reverse(),
      positionSort: 'priorityDown',
    });
  };
  handleSortPriorityUp = () => {
    this.setState({
      currentData: this.state.currentData.sort(function (a, b) { return a.priority - b.priority }),
      positionSort: 'priorityUp',
    });
  };
  //sort estimation
  handleSortEstimationDown = () => {
    let tmp = this.state.currentData.sort(function (a, b) { return a.estimation - b.estimation });
    this.setState({
      currentData: tmp.reverse(),
      positionSort: 'estimationDown',
    });
  };
  handleSortEstimationUp = () => {
    this.setState({
      currentData: this.state.currentData.sort(function (a, b) { return a.estimation - b.estimation }),
      positionSort: 'estimationUp',
    });
  };
  //sort sprint
  handleSortSprintDown = () => {
    let tmp = this.state.currentData.sort(function (a, b) { return a.sprint - b.sprint });
    this.setState({
      currentData: tmp.reverse(),
      positionSort: 'sprintDown',
    });
  };
  handleSortSprintUp = () => {
    this.setState({
      currentData: this.state.currentData.sort(function (a, b) { return a.sprint - b.sprint }),
      positionSort: 'sprintUp',
    });
  };
  //sort start
  handleSortStartDown = () => {
    let tmp = this.state.currentData.sort((a, b) => a.start.localeCompare(b.start))
    this.setState({
      currentData: tmp.reverse(),
      positionSort: 'startDown',
    });
  };
  handleSortStartUp = () => {
    this.setState({
      currentData: this.state.currentData.sort((a, b) => a.start.localeCompare(b.start)),
      positionSort: 'startUp',
    });
  };
  //sort deadline
  handleSortDeadlineDown = () => {
    let tmp = this.state.currentData.sort((a, b) => a.deadline.localeCompare(b.deadline))
    this.setState({
      currentData: tmp.reverse(),
      positionSort: 'deadlineDown',
    });
  };
  handleSortDeadlineUp = () => {
    this.setState({
      currentData: this.state.currentData.sort((a, b) => a.deadline.localeCompare(b.deadline)),
      positionSort: 'deadlineUp',
    });
  };

  handleUpdateSprint = () => {
    this.notify()
    console.log(this.state.updateId)
    console.log(this.state.sprint)
    const sprintbacklogService = new proto.sprintbacklog.SprintBacklogClient('https://www.overlead.co');
    var metadata = {};
    var UpdateSprintReq = new proto.sprintbacklog.UpdateSprintReq();
    UpdateSprintReq.setRequesterid(getFromStorage("userId"));
    UpdateSprintReq.setAccesstoken(getFromStorage("accessToken"));
    UpdateSprintReq.setBacklogid(this.state.updateId);
    UpdateSprintReq.setSprintid(this.state.sprint);
    UpdateSprintReq.setTeamid(getFromStorage("teamId"))
    
    let that = this
    let name=""
    this.props.sprints.map(p=>{
      if (p.id==that.state.sprint)
        name=p.num
    })
    UpdateSprintReq.setSprintname(name)
    sprintbacklogService.updateSprint(UpdateSprintReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error")
        this.failed()
      } else { //if success
        //get response
        if (response.getStatus() == "SUCCESS") {
          that.success()
          this.toggleChangeSprint()
          let tmpData = this.props.sprintbacklogs.map(p => {
            if (p.id == that.state.updateId) return { ...p, 
              sprintName: name,
              sprint: that.state.sprint }
            return p
          })
          that.setState({
            data: tmpData,
            currentData: tmpData
          })
          this.props.dispatch(setSprintBacklogs(tmpData))
          that.handleSearch()
        }
      }
    }
    )

  
  }
  componentDidMount(){
    let that=this
      this.setState({
        data:that.props.sprintbacklogs,
        currentData:that.props.sprintbacklogs
      })
  }
  onChangeSprint = (event) => {
    this.setState({
      sprint: event.target.value
    })
  }
  render() {
    console.log("render sprintbacklog")
    let that = this;
    let sprints = this.props.sprints
    let sprintbacklogs=this.state.currentData
    return (
      <Row>
        <Col>
          <Row>
            <Col xs="2" md="2">
              <Input type="text" id="text-input" name="text-input" placeholder="Search with title" value={that.state.search} onChange={that.onTextboxChangeSearch} />
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
                    {/* <th>Sprint 
                      <i class="fa fa-arrow-up" onClick={that.handleSortSprintUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortSprintDown}></i>
                    </th> */}
                    <th>Add Date
                      {/* <i class="fa fa-arrow-up" onClick={that.handleSortStartUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortStartDown}></i> */}
                    </th>
                    <th>
                      Sprint Name
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{
                  
                  sprintbacklogs!=undefined? sprintbacklogs.map(function (item, key) {
                  return (
                    <tr key={key}>
                      <td data-id={item.id} data-role={item.role} data-want={item.want}
                        data-so={item.so}
                        onClick={that.toggleDetail}>
                        <u>{item.title}</u>
                      </td>
                      <Modal size="lg" isOpen={that.state.modalDetail} toggle={that.toggleDetail} className={that.props.className}>
                        <ModalHeader toggle={that.toggleDetail}>Product Backlog</ModalHeader>
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
                      {/* <td>{item.sprint}</td> */}
                      <td>{item.start}</td>
                      {/* <td>{item.deadline}</td> */}
                      <td data-id={item.id} data-sprint={item.sprint} 
                          onClick={that.toggleChangeSprintOpen}>{item.sprintName}


                      </td>
                      <Modal size="lg" isOpen={that.state.modalChangeSprint} toggle={that.toggleChangeSprintOpen}>
                        <ModalHeader toggle={that.toggleChangeSprintOpen}>Move Sprint Backlog to</ModalHeader>
                        <ModalBody>
                          <Form className="form-horizontal">
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="text-input">Sprint</Label>
                              </Col>
                              <Col xs="12" md="9">
                                
                                   <Input type="select" name="select" id="select" onChange={that.onChangeSprint}>
                                     
                                     {
                                   that.state.sprint != undefined ?
                                    <option value={that.state.sprint}>{that.state.sprint}</option>:
                                    <option value=""></option>
                                    
                                   }

                                    {
                                      (sprints != null) ?
                                        sprints.map(p => {
                                          return (
                                            <option value={p.id}>{p.num}</option>
                                          )
                                        }) :null

                                    }
                                  </Input> 
                                
                                
                              </Col>
                            </FormGroup>


                          </Form>
                        </ModalBody>
                        <ModalFooter>
                          <div onClick={that.handleUpdateSprint}><Button color="primary">Submit</Button></div>{' '}
                          <Button color="secondary" onClick={that.toggleChangeSprint}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                      <td>

                        <div data-id={item.id} onClick={that.toggleChangeSprintOpen}>
                          <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"> Move to Sprint</i></Button>
                        </div>
                        <Button size="sm" color="warning" onClick={that.handleComplete}><i class="fa fa-check"></i></Button>
                        <Button size="sm" color="danger" onClick={that.handleBackToProductbacklog}><i class="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                  )

                }):<div >You do not have any sprint backlog yet</div>
              
              }</tbody>
              </table>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps")
  const { changeStatusProject } = state
  const currentProject  = changeStatusProject.projectId
  const {sprintbacklogs,sprints}= changeStatusProject
  return {
    currentProject,sprintbacklogs,sprints
  }
}
export default connect(mapStateToProps)(SprintBacklog);
