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
proto.sprint = require('./../../../../../gRPC/sprint/sprint_grpc_web_pb');

class AllSprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentData: [],
      modalAdd: false,
      modalEdit: false,
      modalDetail: false,
      modalSend: false,


      title: '',
      num: "",
      goal: "",
      status: "",
      updateId: "",
      startDate: new Date(),
      endDate: new Date(),
      currentSprintId: "",
      currentSprintName:"",

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
    this.loadAllSprint()
  }
  loadAllSprint = () => {
    console.log("loadAllSprint")
    const sprintService = new proto.sprint.SprintClient('https://www.overlead.co');
    var metadata = {};
    var GetAllSprintReq = new proto.sprint.GetAllSprintReq();
    GetAllSprintReq.setRequesterid(getFromStorage("userId"));
    GetAllSprintReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllSprintReq.setProjectid(getFromStorage("currentProject"));

    var response = sprintService.getAllSprint(GetAllSprintReq, metadata)
    let that = this
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        let arr = response.getStart().split('-');
        let start = ""
        let end = ""
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
        } else {
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
        }
        arr = response.getEnd().split('-')
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
        } else {
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
        }


        that.setState(prevState => ({
          data: [...prevState.data,
          {
            id: response.getId(),
            title: response.getTitle(),
            num: response.getNum(),
            goal: response.getGoal(),
            status: response.getStatussprint(),
            start,
            end,
          }],
          currentData: [...prevState.currentData,
            {
              id: response.getId(),
              title: response.getTitle(),
              num: response.getNum(),
              goal: response.getGoal(),
              status: response.getStatussprint(),
              start,
              end,
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
      updateId: id,
      title: title,
      role: role,
      want: want,
      so: so,
      priority: priority,
      estimation: estimation,
      sprint: sprint,
      status: status,
    }));
  }
  toastId = null;
  notify = () => this.toastId = toast("Processing... please wait...", { autoClose: false });
  success = () => toast.update(this.toastId, { render: "Success", type: toast.TYPE.SUCCESS, autoClose: 3000 });
  failed = () => toast.update(this.toastId, { render: "Failed", type: toast.TYPE.ERROR, autoClose: 3000 });

  onActiveSprint = (event) => {
    console.log("onActiveSprint")
    this.notify()
    let id = event.currentTarget.dataset.id
    let name= event.currentTarget.dataset.name
    //active sprint by query to server
    const sprintService = new proto.sprint.SprintClient('https://www.overlead.co');
 
    var metadata = {};
    var DeleteSprintReq = new proto.sprint.DeleteSprintReq();
    DeleteSprintReq.setRequesterid(getFromStorage("userId"));
    DeleteSprintReq.setProjectid(getFromStorage("currentProject"));
    DeleteSprintReq.setAccesstoken(getFromStorage("accessToken"));

    DeleteSprintReq.setSprintid(id);
    

    let that = this
    sprintService.setCurrentSprint(DeleteSprintReq, metadata, (err, response) => {
      if (err) { 
        console.log(err);
      } else { 
        console.log(response)
        if (response.getStatus() == "SUCCESS") {
            that.success()
            setInStorage('currentSprintId',id)
            setInStorage('currentSprintName',name)
            that.setState({
              currentSprintName:name,
              currentSprintId:id,   
          });

        } else {
          console.log(response.getStatus())
          that.failed()
        }
      }
    });
  }

  onTextboxChangeNum = (event) => {
    this.setState({
      num: event.target.value,
    });
  }
  onTextboxChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }



  onTextboxChangeStatus = (event) => {
    this.setState({
      status: event.target.value,
    });
  }
  onTextboxChangeGoal = (event) => {
    this.setState({
      goal: event.target.value
    })
  }
  handleAdd = () => {
    console.log("handleAdd")
    const sprintService = new proto.sprint.SprintClient('https://www.overlead.co');
    //some data of request (get that from frontend)
    this.notify()
    var metadata = {};
    let d = this.state.startDate;
    let start = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    d = this.state.endDate;
    let end = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    var AddNewSprintReq = new proto.sprint.AddNewSprintReq();
    AddNewSprintReq.setRequesterid(getFromStorage("userId"));
    AddNewSprintReq.setProjectid(getFromStorage("currentProject"));
    AddNewSprintReq.setAccesstoken(getFromStorage("accessToken"));

    AddNewSprintReq.setTitle(this.state.title);
    AddNewSprintReq.setNum(this.state.num)
    AddNewSprintReq.setGoal(this.state.goal)
    AddNewSprintReq.setStart(start)
    AddNewSprintReq.setEnd(end)

    let that = this
    sprintService.addNewSprint(AddNewSprintReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error")
      } else { //if success
        //get response
        if (response.getStatus() == "SUCCESS") {
          that.success()
          let arr = start.split('-');
          if (arr[1] > 12) {
            arr[1] = arr[1] - 12
            start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10) + 1) + "/" + arr[4]
          } else {
            start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10) + 1) + "/" + arr[4]
          }



          arr = end.split('-')
          if (arr[1] > 12) {
            arr[1] = arr[1] - 12
            end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10) + 1) + "/" + arr[4]
          } else {
            end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10) + 1) + "/" + arr[4]
          }
           //check add when search
           if(this.state.title.indexOf(that.state.currentSearch) !== -1)
           {
             this.setState(prevState => ({
                 currentData: [...prevState.currentData,
                  {
                    id: response.getId(),
                    title: that.state.title,
                    num: that.state.num,
                    goal: that.state.goal,
                    start: start,
                    end: end,
                  }],
               }));
               
               if(this.state.positionSort=='titleUp')
               {
                 this.handleSortTitleUp();
               }
               if(this.state.positionSort=='titleDown')
               {
                 this.handleSortTitleDown();
               }
               if(this.state.positionSort=='startUp')
               {
                 this.handleSortStartUp();
               }
               if(this.state.positionSort=='startDown')
               {
                 this.handleSortStartDown();
               }
               if(this.state.positionSort=='endUp')
               {
                 this.handleSortEndUp();
               }
               if(this.state.positionSort=='endDown')
               {
                 this.handleSortEndDown();
               }
           }
         //
          that.setState(prevState => ({
            modalAdd: !prevState.modalAdd,
            data: [...prevState.data,
            {
              id: response.getId(),
              title: that.state.title,
              num: that.state.num,
              goal: that.state.goal,
              start: start,
              end: end,
            }],

            title: '',
            num: '',
            goal: '',
          }));

        } else {
          that.failed()
        }
      }
    });
  };
  handleDelete = (event) => {
    let id = event.currentTarget.dataset.id

    console.log("handleDelete")

    const sprintService = new proto.sprint.SprintClient('https://www.overlead.co');

    var metadata = {};
    //make a request to server

    var DeletesprintReq = new proto.sprint.DeletesprintReq();
    DeletesprintReq.setRequesterid(getFromStorage("userId"));
    DeletesprintReq.setProjectid(getFromStorage("currentProject"));
    DeletesprintReq.setsprintid(id);
    DeletesprintReq.setAccesstoken(getFromStorage("accessToken"));

    sprintService.deletesprint(DeletesprintReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {

          this.setState({
            actionStatus: "SUCCESS",
            modalActionStatus: true,
          });
          this.setState(prevState => ({ 
            data: [...prevState.data.filter(function (e) { return e.id !== id; })],
            currentData: [...prevState.data.filter(function (e) { return e.id !== id; })],
          }));
        } else {
          this.setState({
            actionStatus: "FALSE",
          });
          this.setState(prevState => ({
            modalActionStatus: !prevState.modalActionStatus,
          }));
        }
      }

    });
  };
  handleUpdate = (event) => {
    console.log("handleUpdate")

    const sprintService = new proto.sprint.SprintClient('https://www.overlead.co');
    var metadata = {};
    console.log("so" + this.state.so)
    var UpdatesprintReq = new proto.sprint.UpdatesprintReq();
    UpdatesprintReq.setRequesterid(getFromStorage("userId"));
    UpdatesprintReq.setAccesstoken(getFromStorage("accessToken"));
    UpdatesprintReq.setProjectid(getFromStorage("currentProject"));
    UpdatesprintReq.setsprintid(this.state.updateId);
    UpdatesprintReq.setRole(this.state.role);
    UpdatesprintReq.setWant(this.state.want);
    UpdatesprintReq.setSo(this.state.so);
    UpdatesprintReq.setPriority(this.state.priority);
    UpdatesprintReq.setEstimation(this.state.estimation);
    UpdatesprintReq.setSprintid(this.state.sprint);
    UpdatesprintReq.setStatusbacklog("To do");
    sprintService.updatesprint(UpdatesprintReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
          console.log(response)
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
          const tmpCurrentData = this.state.data.map(p =>
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
          this.setState(prevState => ({
            modalEdit: !prevState.modalEdit,
            modalActionStatus: !prevState.modalActionStatus,
            actionStatus: "SUCCESS",
            data: tmpdata,
            currentData: tmpCurrentData,
          }));

          {
            if(this.state.positionSort=='titleUp')
            {
              this.handleSortTitleUp();
            }
            if(this.state.positionSort=='titleDown')
            {
              this.handleSortTitleDown();
            }
            if(this.state.positionSort=='startUp')
            {
              this.handleSortStartUp();
            }
            if(this.state.positionSort=='startDown')
            {
              this.handleSortStartDown();
            }
            if(this.state.positionSort=='endUp')
            {
              this.handleSortEndUp();
            }
            if(this.state.positionSort=='endDown')
            {
              this.handleSortEndDown();
            }
          }
        

        } else {
          this.setState({
            actionStatus: "FALSE",
          });
          this.setState(prevState => ({
            modalEdit: !prevState.modalEdit,
            modalActionStatus: !prevState.modalActionStatus,
          }));
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
  onTextboxChangeSearch=(event)=>{
    this.setState({
      search: event.target.value,
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
handleSortEndDown=()=>{
  let tmp = this.state.currentData.sort((a, b) => a.end.localeCompare(b.end))
  this.setState({
    currentData: tmp.reverse(),
    positionSort:'endDown',
  });
  };
handleSortEndUp=()=>{
  this.setState({
    currentData: this.state.currentData.sort((a, b) => a.end.localeCompare(b.end)),
    positionSort:'endUp',
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
                    <th>Sprint ID </th>
                    <th>Title 
                      <i class="fa fa-arrow-up" onClick={that.handleSortTitleUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortTitleDown}></i>
                    </th>
                    <th>Start at 
                      <i class="fa fa-arrow-up" onClick={that.handleSortStartUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortStartDown}></i>
                    </th>
                    {/* <th>So that...  <i class="fa fa-sort"></i></th> */}
                    <th>End at 
                      <i class="fa fa-arrow-up" onClick={that.handleSortEndUp}></i>
                      <i class="fa fa-arrow-down" onClick={that.handleSortEndDown}></i>
                    </th>
                    <th>Goal </th>
                    <th>Status </th>

                    <th>
                      <div>
                        <Button color="primary" size="sm" className="mt-3" onClick={that.toggleAdd}><i class="fa fa-plus-square"></i>{this.props.buttonLabel}</Button>
                        <Modal size="lg" isOpen={that.state.modalAdd} toggle={that.toggleAdd} className={that.props.className}>
                          <ModalHeader toggle={that.toggleAdd}>sprint</ModalHeader>
                          <ModalBody>
                            <Form className="form-horizontal">

                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Sprint ID</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="as" name="as" placeholder="Unique id in project" value={that.state.num} onChange={that.onTextboxChangeNum} />
                                </Col>
                              </FormGroup>

                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Title...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="title" name="title" placeholder="Let's it remember you" value={that.state.title} onChange={that.onTextboxChangeTitle} />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Start at:</Label>
                                </Col>
                                <Col xs="12" md="9">
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
                                  <Label htmlFor="text-input">End at:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <DatePicker

                                    selected={that.state.endDate}
                                    timeInputLabel="Time:"
                                    onChange={that.onChangeEndDate}
                                    dateFormat="dd/MM/yyyy h:mm aa"
                                    showTimeInput
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="textarea-input">Goal</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                    placeholder="Which you want when end this sprint" value={that.state.goal} onChange={that.onTextboxChangeGoal} />
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
                      <td>{item.num}</td>
                      <td>{item.title}</td>
                      <td>{item.start}</td>
                      <td>{item.end}</td>
                      <td>{item.goal}</td>
                      <td>{item.id == getFromStorage('currentSprintId')? "Actived" : "not active"}</td>
                      <td>
                        <div data-id={item.id} data-name={item.num} onClick={that.onActiveSprint}>
                          <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                        </div>


                        {/* update */}
                        <div data-id={item.id} data-title={item.title} data-role={item.role} data-want={item.want}
                          data-so={item.so} data-priority={item.priority} data-estimation={item.estimation}
                          data-sprint={item.sprint} data-status={item.status}
                          onClick={that.toggleEdit}>
                          <Button color="warning" size="sm"><i class="fa fa-edit"></i>{that.props.buttonLabel}</Button>
                        </div>
                        <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                          <ModalHeader toggle={that.toggleEdit}>sprint</ModalHeader>
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
                                    placeholder="Content..." value={that.state.so} onChange={that.onTextboxChangeSo} />
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
                                  <Input type="text" name="text-input" id="text-input" rows="9" value={that.state.priority} onChange={that.onTextboxChangePriority} />
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
                                  <Input type="text" name="text-input" id="text-input" rows="9" value={that.state.sprint} onChange={that.onTextboxChangeSprint} />
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

export default AllSprint;
