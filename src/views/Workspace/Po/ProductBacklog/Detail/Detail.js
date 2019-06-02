import React, { Component } from 'react';
import {
  Card, CardHeader, Badge, Button, Col,
  Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  ModalFooter
} from 'reactstrap';
import cookie from 'react-cookies';
import {
  getFromStorage,
  setInStorage
} from '../../../../../service/storage'
import DatePicker from "react-datepicker";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const proto = {};
proto.productbacklog = require('./../../../../../gRPC/productbacklog/productbacklog_grpc_web_pb');

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentData: [],
      modalAdd: false,
      modalEdit: false,
      modalSend: false,
      id: '',
      role: "",
      want: "",
      so: "",
      priority: '',
      estimation: '',
      sprint: '',
      status: "",
      title: "",
      startDate: new Date(),
      endDate: new Date(),
      backlogSendId:"",

      search:'',
      currentSearch:'',
      positionsort:''
    }
  };
  componentDidMount() {
    let end = this.state.endDate;
    end.setDate(end.getDate() + 15);
    this.setState({
      endDate: end
    })

    const productbacklogService = new proto.productbacklog.ProductBacklogClient('https://www.overlead.co');
    var metadata = {};
    var GetAllProductBacklogReq = new proto.productbacklog.GetAllProductBacklogReq();
    GetAllProductBacklogReq.setRequesterid(getFromStorage("userId"));
    GetAllProductBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllProductBacklogReq.setProjectid(getFromStorage("currentProject"));

    var response = productbacklogService.getAllProductBacklog(GetAllProductBacklogReq, metadata)
    let that = this
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        that.setState(prevState => ({
          data: [...prevState.data,
          {
            id: response.getProductbacklogid(),
            title: response.getTitle(),
            role: response.getRole(),
            want: response.getWant(),
            so: response.getSo(),
            priority: response.getPriority(),
            estimation: response.getEstimation(),
            sprint: response.getSprintid(),
            status: response.getStatusbacklog()
          }],
          currentData: [...prevState.currentData,
            {
              id: response.getProductbacklogid(),
              title: response.getTitle(),
              role: response.getRole(),
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
  toggleActionStatus = () => {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }
  toggleAdd = () => {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }

  toastId = null;
  notify = () => this.toastId = toast("Processing... please wait...", { autoClose: false });
  success = () => toast.update(this.toastId, { render: "Success", type: toast.TYPE.SUCCESS, autoClose: 3000 });
  failed = () => toast.update(this.toastId, { render: "Failed", type: toast.TYPE.ERROR, autoClose: 3000 });

  toggleEdit = (event) => {
    let id = event.currentTarget.dataset.id

    let title = event.currentTarget.dataset.title
    let role = event.currentTarget.dataset.role
    let want = event.currentTarget.dataset.want
    let so = event.currentTarget.dataset.so
    let priority = event.currentTarget.dataset.priority
    let estimation = event.currentTarget.dataset.estimation
    let sprint = event.currentTarget.dataset.sprint
    let status = event.currentTarget.dataset.status

    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit,
      updateId:id,
      title:title,
      role: role,
      want: want,
      so: so,
      priority: priority,
      estimation: estimation,
      sprint: sprint,
      status: status,  
      
      search:'',
      currentSearch:'',
      positionsort:''
    }));
  }
  toggleSend = () => {
    this.setState(prevState => ({
      modalSend: !prevState.modalSend
    }));
  }
  toggleSendOpen = (event) => {
    let id=event.currentTarget.dataset.id
    this.setState(prevState => ({
      modalSend: !prevState.modalSend,
      backlogSendId: id
    }));
  }
  onTextboxChangeRole = (event) => {
    this.setState({
      role: event.target.value,
    });
  }
  onTextboxChangeWant = (event) => {
    this.setState({
      want: event.target.value,
    });
  }
  onTextboxChangeSo = (event) => {
    this.setState({
      so: event.target.value,
    });
  }
  onTextboxChangePriority = (event) => {
    this.setState({
      priority: event.target.value,
    });
  }
  onTextboxChangeEstimation = (event) => {
    this.setState({
      estimation: event.target.value,
    });
  }
  onTextboxChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  onTextboxChangeSprint = (event) => {
    this.setState({
      sprint: event.target.value,
    });
  }

  onTextboxChangeStatus = (event) => {
    this.setState({
      status: event.target.value,
    });
  }

  onTextboxChangeSearch=(event)=>{
    this.setState({
      search: event.target.value,
    });
  }

  handleAdd = () => {
    console.log("handleAdd")
    const productbacklogService = new proto.productbacklog.ProductBacklogClient('https://www.overlead.co');
    //some data of request (get that from frontend)
    this.notify()
    var metadata = {};
    //make a request to server

    var AddNewProductBacklogReq = new proto.productbacklog.AddNewProductBacklogReq();
    AddNewProductBacklogReq.setTitle(this.state.title);
    AddNewProductBacklogReq.setRequesterid(getFromStorage("userId"));
    AddNewProductBacklogReq.setProjectid(getFromStorage("currentProject"));
    AddNewProductBacklogReq.setRole(this.state.role);
    AddNewProductBacklogReq.setWant(this.state.want);
    AddNewProductBacklogReq.setSo(this.state.so);
    AddNewProductBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    AddNewProductBacklogReq.setPriority(this.state.priority)
    AddNewProductBacklogReq.setEstimation(this.state.estimation)
    AddNewProductBacklogReq.setSprintid(this.state.sprint)
    AddNewProductBacklogReq.setStatusbacklog("To do")

    let that = this

    productbacklogService.addNewProductBacklog(AddNewProductBacklogReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error")
      } else { //if success
        //get response
        if (response.getStatus() == "SUCCESS") {
          this.toggleAdd()
          that.success()
          //check add when search
          if(this.state.title.indexOf(that.state.currentSearch) !== -1)
          {
            this.setState(prevState => ({
                currentData: [...prevState.currentData,
                {
                  id: response.getProductbacklogid(),
                  title: this.state.title,
                  role: this.state.role,
                  want: this.state.want,
                  so: this.state.so,
                  priority: this.state.priority,
                  estimation: this.state.estimation,
                  id: response.getProductbacklogid(),
                  sprint: this.state.sprint,
                  status: this.state.status
                }],
              }));
              
              if(this.state.positionSort=='nameUp')
              {
                this.handleSortTitleUp();
              }
              if(this.state.positionSort=='nameDown')
              {
                this.handleSortTitleDown();
              }
              if(this.state.positionSort=='asUp')
              {
                this.handleSortAsUp();
              }
              if(this.state.positionSort=='asDown')
              {
                this.handleSortAsDown();
              }
              if(this.state.positionSort=='priorityUp')
              {
                this.handleSortPriorityUp();
              }
              if(this.state.positionSort=='priorityDown')
              {
                this.handleSortPriorityDown();
              }
              if(this.state.positionSort=='estimationUp')
              {
                this.handleSortEstimationUp();
              }
              if(this.state.positionSort=='estimationDown')
              {
                this.handleSortEstimationDown();
              }
              if(this.state.positionSort=='sprintUp')
              {
                this.handleSortSprintUp();
              }
              if(this.state.positionSort=='sprintDown')
              {
                this.handleSortSprintDown();
              }
          }
        //
          this.setState(prevState => ({
            data: [...prevState.data,
            {
              id: response.getProductbacklogid(),
              title: this.state.title,
              role: this.state.role,
              want: this.state.want,
              so: this.state.so,
              priority: this.state.priority,
              estimation: this.state.estimation,
              id: response.getProductbacklogid(),
              sprint: this.state.sprint,
              status: this.state.status
            }],
              title: '',
              role: '',
              want: '',
              so: '',
              priority: '',
              estimation: '',
              sprint: '',
          }));
        } else {
          that.failed()
        }
      }
    });
  };
  handleDelete = (event) => {
    let id = event.currentTarget.dataset.id
    this.notify()
    console.log("handleDelete")

    const productbacklogService = new proto.productbacklog.ProductBacklogClient('https://www.overlead.co');

    var metadata = {};
    //make a request to server

    var DeleteProductBacklogReq = new proto.productbacklog.DeleteProductBacklogReq();
    DeleteProductBacklogReq.setRequesterid(getFromStorage("userId"));
    DeleteProductBacklogReq.setProjectid(getFromStorage("currentProject"));
    DeleteProductBacklogReq.setProductbacklogid(id);
    DeleteProductBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    let that = this
    productbacklogService.deleteProductBacklog(DeleteProductBacklogReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
          that.success()
          this.setState(prevState => ({ data: [...prevState.data.filter(function (e) { return e.id !== id; })] }));
        } else {
          that.failed()
        }
      }

    });
  };

  handleUpdate = (event) => {
    console.log("handleUpdate")
    this.notify()
    const productbacklogService = new proto.productbacklog.ProductBacklogClient('https://www.overlead.co');
    var metadata = {};
    console.log("so"+this.state.so)
    var UpdateProductBacklogReq = new proto.productbacklog.UpdateProductBacklogReq();
    UpdateProductBacklogReq.setRequesterid(getFromStorage("userId"));
    UpdateProductBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    UpdateProductBacklogReq.setProjectid(getFromStorage("currentProject"));
    UpdateProductBacklogReq.setProductbacklogid(this.state.updateId);
    UpdateProductBacklogReq.setRole(this.state.role);
    UpdateProductBacklogReq.setWant(this.state.want);
    UpdateProductBacklogReq.setSo(this.state.so);
    UpdateProductBacklogReq.setPriority(this.state.priority);
    UpdateProductBacklogReq.setEstimation(this.state.estimation);
    UpdateProductBacklogReq.setSprintid(this.state.sprint);
    UpdateProductBacklogReq.setStatusbacklog("To do");
    let that = this
    productbacklogService.updateProductBacklog(UpdateProductBacklogReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
          that.success()
          const tmpdata = this.state.data.map(p =>
            p.id == this.state.updateId
              ? {
                ...p,
                role: this.state.role,
                want: this.state.want,
                priority: this.state.priority,
                estimation: this.state.estimation,
                status: this.state.status,
                sprint: this.state.sprint,
                so: this.state.so,
                
              }
              : p
          );
          const tmpCurrentData = this.state.currentData.map(p =>
            p.id == this.state.updateId
              ? {
                ...p,
                role: this.state.role,
                want: this.state.want,
                priority: this.state.priority,
                estimation: this.state.estimation,
                status: this.state.status,
                sprint: this.state.sprint,
                so: this.state.so,
                
              }
              : p
          );
          {  
            if(this.state.positionSort=='nameUp')
            {
              this.handleSortTitleUp();
            }
            if(this.state.positionSort=='nameDown')
            {
              this.handleSortTitleDown();
            }
            if(this.state.positionSort=='asUp')
            {
              this.handleSortAsUp();
            }
            if(this.state.positionSort=='asDown')
            {
              this.handleSortAsDown();
            }
            if(this.state.positionSort=='priorityUp')
            {
              this.handleSortPriorityUp();
            }
            if(this.state.positionSort=='priorityDown')
            {
              this.handleSortPriorityDown();
            }
            if(this.state.positionSort=='estimationUp')
            {
              this.handleSortEstimationUp();
            }
            if(this.state.positionSort=='estimationDown')
            {
              this.handleSortEstimationDown();
            }
            if(this.state.positionSort=='sprintUp')
            {
              this.handleSortSprintUp();
            }
            if(this.state.positionSort=='sprintDown')
            {
              this.handleSortSprintDown();
            }
          }
          this.setState(prevState => ({ 
            data: tmpdata,
            currentData:tmpCurrentData,
            modalEdit:false,
          }));

        } else {
          that.failed()
        }
      }
    });
  };
  handleSend = () => {
    console.log(this.state.backlogSendId)
    const productbacklogService = new proto.productbacklog.ProductBacklogClient('https://www.overlead.co');
    this.notify()
    var metadata = {};
    //make a request to server


    let d = this.state.startDate;
    let start = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    d = this.state.endDate;
    let end = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    
    var SendToSprintBacklogReq = new proto.productbacklog.SendToSprintBacklogReq();
    SendToSprintBacklogReq.setRequesterid(getFromStorage("userId"));
    SendToSprintBacklogReq.setProjectid(getFromStorage("currentProject"));
    SendToSprintBacklogReq.setProductbacklogid(this.state.backlogSendId);
    SendToSprintBacklogReq.setStart(start);
    SendToSprintBacklogReq.setDeadline(end);
    SendToSprintBacklogReq.setTeamid(getFromStorage('teamId'));
    SendToSprintBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    let that=this
    productbacklogService.sendToSprintBacklog(SendToSprintBacklogReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
          that.success()
          that.setState(prevState => ({ 
            data: [...prevState.data.filter(function (e) { return e.id !== that.state.backlogSendId; })],
            currentData: [...prevState.currentData.filter(function (e) { return e.id !== that.state.backlogSendId; })] 
          }));
        } else {
         that.failed()
        }
      }

    });
  };
  onChangeStartDate = (date) => {
    this.setState({
      startDate: date
    });
  }
  onChangeEndDate = (date) => {
    this.setState({
      endDate: date
    });
  }

//search
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
//sort as
handleSortAsDown=()=>{
  let tmp = this.state.currentData.sort((a, b) => a.role.localeCompare(b.role))
  this.setState({
    currentData: tmp.reverse(),
    positionSort:'asDown',
  });
};
handleSortAsUp=()=>{
  this.setState({
    currentData: this.state.currentData.sort((a, b) => a.role.localeCompare(b.role)),
    positionSort:'asUp',
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
//show all
handleShowAll=()=>{
  this.setState({
    currentData: this.state.data,
    search: '',
  });
}
  render() {

    let that = this;
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
                    <th>
                      As a...
                      <i class="fa fa-arrow-up" onClick={that.handleSortAsUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortAsDown}></i>
                    </th>
                    <th>I want to be able to...</th>
                    <th>So that...</th>
                    <th>
                      Priority 
                      <i class="fa fa-arrow-up" onClick={that.handleSortPriorityUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortPriorityDown}></i>
                    </th>
                    <th>
                      Estimation 
                      <i class="fa fa-arrow-up" onClick={that.handleSortEstimationUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortEstimationDown}></i>
                    </th>
                    <th>
                      Sprint 
                      <i class="fa fa-arrow-up" onClick={that.handleSortSprintUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortSprintDown}></i>
                    </th>
                   
                    <th>
                      <div>
                        <Button color="primary" size="sm" className="mt-3" onClick={that.toggleAdd}><i class="fa fa-plus-square"></i>{this.props.buttonLabel}</Button>
                        <Modal size="lg" isOpen={that.state.modalAdd} toggle={that.toggleAdd} className={that.props.className}>
                          <ModalHeader toggle={that.toggleAdd}>ProductBacklog</ModalHeader>
                          <ModalBody>
                            <Form className="form-horizontal">
                            <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Title...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="title" name="title" placeholder="Title..." value={that.state.title} onChange={that.onTextboxChangeTitle} />
                                </Col>
                              </FormGroup>


                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">As a...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="as" name="as" placeholder="As a..." value={that.state.role} onChange={that.onTextboxChangeRole} />
                                </Col>
                              </FormGroup>

                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">I want to be able to...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="want" name="want" placeholder="I want to be able to..." value={that.state.want} onChange={that.onTextboxChangeWant} />
                                </Col>
                              </FormGroup>

                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="textarea-input">So that...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="textarea" name="so" id="so" rows="9"
                                    placeholder="Content..." value={that.state.so} onChange={that.onTextboxChangeSo} />
                                </Col>
                              </FormGroup>

                              {/* <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="date-input">Status </Label>
                                </Col>
                                <Col xs="12" md="2">
                                <Input type="text" name="priority" id="priority" rows="9" value="To do" />
                                     
                                </Col>
                              </FormGroup> */}

                              <FormGroup row>
                                <Col md="1">
                                  <Label htmlFor="text-input">Priority</Label>
                                </Col>
                                <Col xs="12" md="1">
                                  <Input type="text" name="priority" id="priority" rows="9" value={that.state.priority} onChange={that.onTextboxChangePriority} />
                                </Col>

                                <Col md="2">
                                </Col>

                                <Col md="1">
                                  <Label htmlFor="text-input">Estimation</Label>
                                </Col>
                                <Col xs="12" md="1">
                                  <Input type="text" name="estimation" id="estimation" rows="9" value={that.state.estimation} onChange={that.onTextboxChangeEstimation} />
                                </Col>

                                <Col md="2">
                                </Col>

                                <Col md="1">
                                  <Label htmlFor="text-input">Sprint</Label>
                                </Col>
                                <Col xs="12" md="1">
                                  <Input type="text" name="sprint" id="sprint" rows="9" value={that.state.sprint} onChange={that.onTextboxChangeSprint} />
                                </Col>
                              </FormGroup>
                            </Form>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={that.handleAdd}>Submit</Button>{' '}
                            <Button color="secondary" onClick={that.toggleAdd}>Cancel</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>{this.state.currentData.map(function (item, key) {

                  return (
                    <tr key={key}>
                      <td > {item.title}</td>
                      <td>{item.role}</td>
                      <td>{item.want}</td>
                      <td>{item.so}</td>
                      <td>{item.priority}</td>
                      <td>{item.estimation}</td>
                      <td>{item.sprint}</td>
                      {/* <td>{item.status}</td> */}
                      <td>
                        <div data-id={item.id}  onClick={that.toggleSendOpen}>
                        <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                        </div>
                        <Modal size="lg" isOpen={that.state.modalSend} toggle={that.toggleSend} className={that.props.className}>
                          <ModalHeader toggle={that.toggleSend}>ProductBacklog</ModalHeader>
                          <ModalBody>
                            <div class="card  bg-primary mb-3">
                              <div class="card-body">
                                <Form action="" className="form-horizontal">


                                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="date-input">Start </Label>
                                    </Col>
                                    <Col xs="3" md="3">
                                    <DatePicker

                                      selected={that.state.startDate}
                                      timeInputLabel="Time:"
                                      onChange={that.onChangeStartDate}
                                      dateFormat="dd/MM/yyyy h:mm aa"
                                      showTimeInput
                                      />

                                

                                    </Col>
                                  </FormGroup>

                                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="date-input">End </Label>
                                    </Col>

                                    <Col xs="3" md="3">
                                    <DatePicker
                                      selected={that.state.endDate}
                                      timeInputLabel="Time:"
                                      onChange={that.onChangeEndDate}
                                      dateFormat="dd/MM/yyyy h:mm aa"
                                      showTimeInput
                                      />
                                    </Col>

                                  </FormGroup>



                                </Form>
                              </div>
                            </div>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={that.handleSend}>Submit</Button>{' '}
                            <Button color="secondary" onClick={that.toggleSend}>Cancel</Button>
                          </ModalFooter>
                        </Modal>

                        {/* update */}
                        <div data-id={item.id} data-title={item.title} data-role={item.role} data-want={item.want} 
                             data-so={item.so} data-priority={item.priority} data-estimation={item.estimation} 
                             data-sprint={item.sprint} data-status={item.status}
                        onClick={that.toggleEdit}>
                          <Button color="warning" size="sm"><i class="fa fa-edit"></i>{that.props.buttonLabel}</Button>
                        </div>                        
                        <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                          <ModalHeader toggle={that.toggleEdit}>ProductBacklog</ModalHeader>
                          <ModalBody>
                            <Form className="form-horizontal">
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">As a...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="text-input" name="text-input" placeholder="As a......" value={that.state.role} onChange={that.onTextboxChangeRole} />

                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">I want to be able to...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="text-input" name="text-input" placeholder="I want to be able to..." value={that.state.want} onChange={that.onTextboxChangeWant} />

                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="textarea-input">So that...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                    placeholder="Content..." value={that.state.so}  onChange={that.onTextboxChangeSo}/>
                                </Col>
                              </FormGroup>
                              {/* <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="date-input">Status</Label>
                                </Col>
                                <Col xs="12" md="2">
                                <Input type="select" name="select" id="select" onChange={that.onTextboxChangeStatus}>
                                          <option value="0">Please select</option>
                                          <option value="Todo">Todo</option>
                                          <option value="Inprogress">Inprogress</option>
                                          <option value="Done">Done</option>
                                  </Input>                                                     
                                </Col>
                              </FormGroup> */}
                              <FormGroup row>
                                <Col md="1">
                                  <Label htmlFor="text-input">Priority</Label>
                                </Col>
                                <Col xs="12" md="1">
                                  <Input type="text" name="text-input" id="text-input" rows="9" value={that.state.priority} onChange={that.onTextboxChangePriority}/>
                                </Col>

                                <Col md="2">
                                </Col>

                                <Col md="1">
                                  <Label htmlFor="text-input">Estimation</Label>
                                </Col>
                                <Col xs="12" md="1">
                                  <Input type="text" name="text-input" id="text-input" rows="9" value={that.state.estimation} onChange={that.onTextboxChangeEstimation} />
                                </Col>

                                <Col md="2">
                                </Col>

                                <Col md="1">
                                  <Label htmlFor="text-input">Sprint</Label>
                                </Col>
                                <Col xs="12" md="1">
                                  <Input type="text" name="text-input" id="text-input" rows="9" value={that.state.sprint} onChange={that.onTextboxChangeSprint}/>
                                </Col>
                              </FormGroup>
                            </Form>
                          </ModalBody>
                          <ModalFooter>
                          <div data-id={item.id} onClick={that.handleUpdate}><Button color="primary">Submit</Button></div>{' '}
                            <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                          </ModalFooter>
                        </Modal>
                        

                        {/* delete */}
                        <div data-id={item.id} onClick={that.handleDelete}><Button size="sm" color="danger" ><i class="fa fa-trash"></i></Button></div>
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

export default Detail;
