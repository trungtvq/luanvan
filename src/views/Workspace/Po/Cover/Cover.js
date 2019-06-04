import {
  getFromStorage,
  setInStorage
} from '../../../../service/storage'
import React, { Component } from 'react';
import {
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
  Card,
  CardHeader,
  CardBody,
  Progress,
  Label,
  Modal,
  ModalBody,
  PaginationLink,
} from 'reactstrap';
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
const proto = {};
proto.userstory = require('../../../../gRPC/userstory/userstory_grpc_web_pb');
proto.productbacklog = require('../../../../gRPC/productbacklog/productbacklog_grpc_web_pb');

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUserStory: [],
      dataProductBacklog: [],
      actionStatus: '',    //success or fail when action handleSave
      modalActionStatus: false,

      priorityUserstory: '',
      estimationUserstory: '',
      sprintUserstory: '',

      priorityProductBacklog: '',
      estimationProductBacklog: '',
      sprintProductBacklog: '',

      title: '',
    }
  };
  //userstory
  onTextboxChangePriorityUserstory = (event, title) => {
    const tmpdata = this.state.dataUserStory.map(p =>
      p.title == title
        ? {
          ...p, priority: event.target.value
        }
        : p
    );
    this.setState(prevState => ({
      dataUserStory: tmpdata,
    }));
  }
  onTextboxChangeEstimationUserstory = (event, title) => {
    const tmpdata = this.state.dataUserStory.map(p =>
      p.title == title
        ? {
          ...p, estimation: event.target.value
        }
        : p
    );
    this.setState(prevState => ({
      dataUserStory: tmpdata,
    }));
  }
  onTextboxChangeSprintUserstory = (event, title) => {
    const tmpdata = this.state.dataUserStory.map(p =>
      p.title == title
        ? {
          ...p, sprint: event.target.value
        }
        : p
    );
    this.setState(prevState => ({
      dataUserStory: tmpdata,
    }));
  }
  //ProductBacklog
  onTextboxChangePriorityProductBacklog = (event, title) => {
    const tmpdata = this.state.dataProductBacklog.map(p =>
      p.title == title
        ? {
          ...p, priority: event.target.value
        }
        : p
    );
    this.setState(prevState => ({
      dataProductBacklog: tmpdata,

    }));
  }
  onTextboxChangeEstimationProductBacklog = (event, title) => {
    const tmpdata = this.state.dataProductBacklog.map(p =>
      p.title == title
        ? {
          ...p, estimation: event.target.value
        }
        : p
    );
    this.setState(prevState => ({
      dataProductBacklog: tmpdata,

    }));
  }
  onTextboxChangeSprintProductBacklog = (event, title) => {
    const tmpdata = this.state.dataProductBacklog.map(p =>
      p.title == title
        ? {
          ...p, sprint: event.target.value
        }
        : p
    );
    this.setState(prevState => ({
      dataProductBacklog: tmpdata,

    }));
  }

  loadUserstory = () => {
    const userstoryService = new proto.userstory.UserStoryClient('https://www.overlead.co');
    var metadata = {};
    var GetAllUserStoryReq = new proto.userstory.GetAllUserStoryReq();
    GetAllUserStoryReq.setRequesterid(getFromStorage("userId"));
    GetAllUserStoryReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllUserStoryReq.setProjectid(getFromStorage("currentProject"));

    var response = userstoryService.getAllUserStory(GetAllUserStoryReq, metadata)
    let that = this
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        that.setState(prevState => ({
          dataUserStory: [...prevState.dataUserStory,
          {
            id: response.getId(),
            title: response.getName(),
            as: response.getRole(),
            want: response.getWant(),
            so: response.getSo()
          }]
        }));

      }
    })
    response.on('status', function (status) {
      if (status.code!=0) console.log(status)

    });
    response.on('end', function (end) {
      console.log("end")
      console.log(end)
    });
  }

  loadProductbacklog = () => {
    const productbacklogService = new proto.productbacklog.ProductBacklogClient('https://www.overlead.co');
    var GetAllProductBacklogReq = new proto.productbacklog.GetAllProductBacklogReq();
    GetAllProductBacklogReq.setRequesterid(getFromStorage("userId"));
    GetAllProductBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllProductBacklogReq.setProjectid(getFromStorage("currentProject"));
    let metadata = {}
    var response = productbacklogService.getAllProductBacklog(GetAllProductBacklogReq, metadata)
    let that = this
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        that.setState(prevState => ({
          dataProductBacklog: [...prevState.dataProductBacklog,
          {
            id: response.getProductbacklogid(),
            title: response.getTitle(),
            as: response.getRole(),
            want: response.getWant(),
            so: response.getSo(),
            priority: response.getPriority(),
            estimation: response.getEstimation(),
            sprint: response.getSprintid(),
            status: response.getStatusbacklog()
          }]
        }));

      }
    })
    response.on('status', function (status) {
      if (status.code!=0) console.log(status)

    });
    response.on('end', function (end) {
      console.log("end")
      console.log(end)
    });
  }

  componentDidMount() {
    this.loadUserstory();
    this.loadProductbacklog();
  }
  toggleActionStatus = () => {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }


  handleStoryToBacklog = (item) => {
    console.log("toBacklog")
    const userstoryService = new proto.userstory.UserStoryClient('https://www.overlead.co');
    var metadata = {};
    this.notify();
    let that = this
    var SendToProductBacklogReq = new proto.userstory.SendToProductBacklogReq();
    SendToProductBacklogReq.setRequesterid(getFromStorage("userId"));
    SendToProductBacklogReq.setProjectid(getFromStorage("currentProject"));
    SendToProductBacklogReq.setId(item.id);
    SendToProductBacklogReq.setPriority(item.priority);
    SendToProductBacklogReq.setEstimation(item.estimation);
    SendToProductBacklogReq.setStatusbacklog(item.status);
    SendToProductBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    SendToProductBacklogReq.setSprint(item.sprint);

    userstoryService.sendToProductBacklog(SendToProductBacklogReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
          that.success();
          this.setState(prevState => ({
            dataUserStory: [...prevState.dataUserStory.filter(function (e) { return e.id != item.id; })],
            dataProductBacklog: [...prevState.dataProductBacklog, { id: item.id, title: item.title, as: item.as, want: item.want, so: item.so, priority: item.priority, estimation: item.estimation, sprint: item.sprint }]
          }));
          this.setState({
            priorityUserstory: '',
            estimationUserstory: '',
            sprintUserstory: '',
          });
        
        } else {
          that.failed();

        }
      }
    });
  

  }
  handleBacklogToStory = (item) => {
    console.log("to US")
    this.notify();
    let that=this;
    const productbacklogService = new proto.productbacklog.ProductBacklogClient('https://www.overlead.co');
    var metadata = {};
    var SendToSprintBacklogReq = new proto.productbacklog.SendToSprintBacklogReq();
    SendToSprintBacklogReq.setRequesterid(getFromStorage("userId"));
    SendToSprintBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    SendToSprintBacklogReq.setProjectid(getFromStorage("currentProject"));
    SendToSprintBacklogReq.setProductbacklogid(item.id);
    productbacklogService.sendToUserStory(SendToSprintBacklogReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
          this.success();
          this.setState(prevState => ({
            dataProductBacklog:
              [...prevState.dataProductBacklog.filter(function (e) { return e.id != item.id; })],
            dataUserStory:
              [...prevState.dataUserStory,
              {
                id: item.id,
                title: item.title,
                as: item.as,
                want: item.want,
                so: item.so,
                priority: '',
                estimation: '', sprint: ''
              }]
          })); 
         
        
        } else {
         that.failed();

        }
      }
    });
  };
  toastId = null;
  notify = () => this.toastId = toast("Processing... please wait...", { autoClose: false });
  success = () => toast.update(this.toastId, { render: "Success", type: toast.TYPE.SUCCESS, autoClose: 3000 });
  failed = () => toast.update(this.toastId, { render: "Failed", type: toast.TYPE.ERROR, autoClose: 3000 });
  render() {
    let that = this;
    return (
      <Row>
        <Modal size="sm" isOpen={that.state.modalActionStatus} toggle={that.toggleActionStatus} className={that.props.className}>
          <ModalBody>
            <center><h4>{that.state.actionStatus}</h4></center>
          </ModalBody>
        </Modal>
        <Col>
          <Row>
            <Col>
              <div class="card border-primary mb-3">
                <div class="card-header bg-primary">USER STORY</div>
                <div class="card-body">
                  {this.state.dataUserStory.map(function (item, key) {
                    return (
                      <Card>
                        <CardHeader>
                          <i className=""></i><strong>As: {item.as}</strong>
                        </CardHeader>
                        <CardBody>
                          <h6>I want: {item.want}</h6>
                          <h6>So that:  {item.so}</h6>
                          <div class="row">
                            <div class="col col-lg-2 col-md-2 col-sm-2">
                              <Label htmlFor="text-input">Priority</Label>
                            </div>
                            <div class="col col-lg-4 col-md-4 col-sm-4">
                              <Input type="text" name="text-input" id="text-input" rows="9" value={item.priority} onChange={e => { that.onTextboxChangePriorityUserstory(e, item.title) }} />
                            </div>



                            <div class="col col-lg-2 col-md-2 col-sm-2">
                              <Label htmlFor="text-input">Estimation</Label>
                            </div>
                            <div class="col col-lg-4 col-md-4 col-sm-4">
                              <Input type="text" name="text-input" id="text-input" placeholder="hour" rows="9" value={item.estimation} onChange={e => { that.onTextboxChangeEstimationUserstory(e, item.title) }} />
                            </div>



                            {/* <div class="col col-lg-1 col-md-1 col-sm-1">
                              <Label htmlFor="text-input">Sprint</Label>
                            </div>
                            <div class="col col-lg-2 col-md-2 col-sm-2">
                              <Input type="text" name="text-input" id="text-input" rows="9" value={item.sprint} onChange={e => { that.onTextboxChangeSprintUserstory(e, item.title) }} />
                            </div> */}
                          </div>
                          <Button size="sm" color="success" align="center" onClick={() => { that.handleStoryToBacklog(item) }}><i class="fa fa-arrow-right"></i></Button>
                        </CardBody>
                      </Card>
                    )
                  })}

                </div>
              </div>
            </Col>

            <Col>
              <div class="card border-primary mb-3">
                <div class="card-header bg-primary">
                  PRODUCT BACKLOG
                  </div>
                <div class="card-body">
                  {this.state.dataProductBacklog.map(function (item, key) {
                    return (
                      <Card>
                        <CardHeader>
                          <i className=""></i><strong>As {item.as}</strong>
                        </CardHeader>
                        <CardBody>
                          <h6>I want :  {item.want}</h6>
                          <h6> So that:   {item.so}</h6>

                          <div class="row">

                            <div class="col col-lg-2 col-md-2 col-sm-2">
                              <Label htmlFor="text-input">Priority</Label>
                            </div>
                            <div class="col col-lg-4 col-md-4 col-sm-4">
                              <Input type="text" name="text-input" id="text-input" rows="9" value={item.priority} onChange={e => { that.onTextboxChangePriorityProductBacklog(e, item.title) }} />
                            </div>


                            <div class="col col-lg-2 col-md-2 col-sm-2">
                              <Label htmlFor="text-input">Estimation</Label>
                            </div>
                            <div class="col col-lg-4 col-md-4 col-sm-4">
                              <Input type="text" name="text-input" id="text-input" rows="9" value={item.estimation} onChange={e => { that.onTextboxChangeEstimationProductBacklog(e, item.title) }} />
                            </div>


                           
                          </div>
                          <Button size="sm" color="success" align="center" onClick={() => { that.handleBacklogToStory(item) }}><i class="fa fa-arrow-left"></i></Button>
                        </CardBody>
                      </Card>
                    )
                  })}


                </div>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    );
  }
}

export default Cover;
