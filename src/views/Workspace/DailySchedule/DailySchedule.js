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
  Input,
  Label,
  Row,
} from 'reactstrap';
import DatePicker from "react-datepicker";

import {
  getFromStorage,
  setInStorage
} from '../../../service/storage'
import { toast } from 'react-toastify';
import Chat from '../../../service/chat'

const proto = {};
proto.dailyschedule = require('./../../../gRPC/dailyschedule/dailyschedule_grpc_web_pb');

class DailySchedule extends Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);

    this.state = {
      data: [],
      modalEdit: false,
      modalActionStatus: false,
      actionStatus: '',              //success or show error when action add delete update

      //add
      title: '',
      description: '',      
      updateId: '',
      startDate: new Date(),
    }
  };

  toastId = null;
  notify = () => this.toastId = toast("Processing... please wait...", { autoClose: false });
  success = () => toast.update(this.toastId, { render: "Success", type: toast.TYPE.SUCCESS, autoClose: 3000 });
  failed = () => toast.update(this.toastId, { render: "Failed", type: toast.TYPE.ERROR, autoClose: 3000 });

  toggleEdit = () => {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }
  toggleActionStatus = () => {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }
  onTextboxChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }
  onTextboxChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  }
  onTextboxChangeTime = (event) => {
    this.setState({
      time: event.target.value,
    });
  }
  onTextboxChangeStatus = (event) => {
   let id=event.target.id
   let status=event.target.value
    this.setState({
      status: event.target.value,      
    });
    this.handleUpdate(id,status)
  }

  onTextboxChangeStartDate = (event) => {
    this.setState({
      timeStart: event.target.value,
    });
  }
  componentDidMount(){
    const dailyscheduleService = new proto.dailyschedule.DailyscheduleClient('https://www.overlead.co');

    let d = this.state.startDate;
    let start =  d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

    var metadata = {};

    var GetAllDailyScheduleReq = new proto.dailyschedule.GetAllDailyScheduleReq();

    GetAllDailyScheduleReq.setRequesterid(getFromStorage("userId"));
    GetAllDailyScheduleReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllDailyScheduleReq.setTeamid(getFromStorage("teamId"));
    GetAllDailyScheduleReq.setDateadd(start);

    let that = this

    let response=dailyscheduleService.getAllDailySchedule(GetAllDailyScheduleReq, metadata)
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {   
        console.log("SUCCESS")   
        that.setState(prevState => ({
          data: [...prevState.data,
          {
            id: response.getScheduleid(),
            title: response.getTitle(),
            description: response.getDescription(),              
            status: response.getStatusschedule()
          }]
        }));

      } else {

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

  handleAdd = () => {
    console.log("add")
    this.notify()
    const dailyscheduleService = new proto.dailyschedule.DailyscheduleClient('https://www.overlead.co');

    let d = this.state.startDate;
    let start = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

    var metadata = {};
    let that = this

    var AddNewDailyScheduleReq = new proto.dailyschedule.AddNewDailyScheduleReq();

    AddNewDailyScheduleReq.setRequesterid(getFromStorage("userId"));
    AddNewDailyScheduleReq.setAccesstoken(getFromStorage("accessToken"));
    AddNewDailyScheduleReq.setProjectid(getFromStorage("currentProject"));
    AddNewDailyScheduleReq.setTeamid(getFromStorage("teamId"));

    AddNewDailyScheduleReq.setTitle(this.state.title);
    AddNewDailyScheduleReq.setDescription(this.state.description);

    AddNewDailyScheduleReq.setDateadd(start);
    dailyscheduleService.addNewDailySchedule(AddNewDailyScheduleReq, metadata, (err, response) => {
      if (err) {
        that.failed()
      } else {
        if (response.getStatus() == "SUCCESS") {
          that.success()
          
          this.setState(prevState => ({
            data: [...prevState.data,
            {
              id: response.getScheduleid(),
              title: this.state.title,
              description: this.state.description,
              status: "Todo"
            }]
          }));

        } else {
          that.failed()
        }
      }
    });

  };
  handleUpdate = (updateId,status) => {
    const dailyscheduleService = new proto.dailyschedule.DailyscheduleClient('https://www.overlead.co');
    console.log("handleUpdate")
    var metadata = {};
    console.log(updateId)
    console.log(status)
    var UpdateDailyScheduleReq = new proto.dailyschedule.UpdateDailyScheduleReq();
    UpdateDailyScheduleReq.setRequesterid(getFromStorage("userId"));
    UpdateDailyScheduleReq.setProjectid(getFromStorage("currentProject"));
    UpdateDailyScheduleReq.setScheduleid(updateId);
    UpdateDailyScheduleReq.setAccesstoken(getFromStorage("accessToken"));
    UpdateDailyScheduleReq.setStatus(status);

    let that = this
    dailyscheduleService.updateDailySchedule(UpdateDailyScheduleReq, metadata, (err, response) => {
      if (!err) {
        that.notify()
      } else {
        if (response.getStatus() == "SUCCESS") {
          that.success()


          const newData = this.state.data.map(p =>
            p.id == this.state.updateId
              ? {
                ...p,
                status: "done"
              }
              : p
          );

          this.setState(prevState => ({
            modalEdit: !prevState.modalEdit,
            data: newData
          }));


        } else {
          that.failed()
        }
      }
    });
  };

  handleDelete = (event) => {
    console.log("handleDelete");
    let id = event.currentTarget.dataset.id

    const dailyscheduleService = new proto.dailyschedule.DailyscheduleClient('https://www.overlead.co');
    var metadata = {};
    this.notify()
    var DeleteDailyScheduleReq = new proto.dailyschedule.DeleteDailyScheduleReq();
    let that = this
    DeleteDailyScheduleReq.setRequesterid(getFromStorage("userId"));
    DeleteDailyScheduleReq.setAccesstoken(getFromStorage("accessToken"));
    DeleteDailyScheduleReq.setProjectid(getFromStorage("currentProject"));
    DeleteDailyScheduleReq.setScheduleid(id);
    DeleteDailyScheduleReq.setTeamid(getFromStorage("teamId"))
    dailyscheduleService.deleteDailySchedule(DeleteDailyScheduleReq, metadata, (err, response) => {
      if (err) {
        that.failed(err)
      } else {
        if (response.getStatus() == "SUCCESS") {
          that.success()

          this.setState(prevState => (
            {
              data: [...prevState.data.filter(function (e) { return e.id !== id; })]
            }));
        } else {
          that.failed()
        }
      }
    }
    );

  };

  render() {
    let that = this;



    return (
      <div>
        <Chat />
      <Row>
       
        <Col>
          {/* card add */}
          <Card>
            <CardBody>
              <Form className="form-horizontal">
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Title</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="Title" name="Title" placeholder="Title" value={this.state.title} onChange={that.onTextboxChangeTitle} />

                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Description</Label>
                  </Col>
                  <Col xs="3" md="3">
                    <Input type="textarea" name="description" id="description" rows="3"
                      placeholder="Description..." value={this.state.task} onChange={that.onTextboxChangeDescription} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Time </Label>
                  </Col>
                  <Col xs="3" md="3">
                    <DatePicker

                      selected={that.state.startDate}
                      timeInputLabel="Time:"
                      onChange={that.onChangeStartDate}
                      dateFormat="dd/MM/yyyy h:mm aa"
                      showTimeInput
                    />    </Col>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary" onClick={that.handleAdd}><i className="fa fa-dot-circle-o"></i> Add</Button>
            </CardFooter>
          </Card>
          {/* card data */}
          <Card>
            <table class="table table-lg">
              <thead class="thead">
                <tr class="bg-primary">
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <td></td>

                </tr>
              </thead>
              <tbody>{this.state.data.map(function (item, key) {

                return (
                  <tr key={key}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>

                    <td>

                        <Input type="select" name="select" id={item.id} onChange={that.onTextboxChangeStatus}>
                          <option value={item.status}>{item.status}</option>
                          <option value="Todo">Todo</option>
                          <option value="Processing">Processing</option>
                          <option value="Done">Done</option>
                        </Input>
                        </td>
                    <td>
                    <div data-id={item.id} onClick={that.handleDelete}>
                        <Button size="sm" color="danger"><i class="fa fa-minus"> Delete</i></Button>
                    </div>
                    </td>
                  </tr>
                )

              })}</tbody>
            </table>
          </Card>

        </Col>
    
      </Row>
      </div>

    );
  }
}

export default DailySchedule;
