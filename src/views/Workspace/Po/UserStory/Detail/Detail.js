import React, { Component } from 'react';
import {
  Card, Badge, Button, Col, Container, Input, InputGroup,
  InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  ModalFooter,

} from 'reactstrap';
import {
  getFromStorage,
  setInStorage
} from '../../../../../service/storage'
import cookie from 'react-cookies';
import { getProject } from '../../../../../actions'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const proto = {};
proto.userstory = require('./../../../../../gRPC/userstory/userstory_grpc_web_pb');


class Detail extends Component {
  constructor(props) {
    super(props);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

    this.onTextboxChangename = this.onTextboxChangename.bind(this);
    this.onTextboxChangerole = this.onTextboxChangerole.bind(this);
    this.onTextboxChangewant = this.onTextboxChangewant.bind(this);
    this.onTextboxChangeso = this.onTextboxChangeso.bind(this);

    this.state = {
      data: [],
      requesterId: '',

      modalAdd: false,
      modalEdit: false,

      updateName: '',
      name: '',
      as: '',
      want: '',
      updateId:'',
      so: '',

    }
  };


  toastId = null;
  notify = () => this.toastId = toast("Processing... please wait...", { autoClose: false });
  success = () => toast.update(this.toastId, { render: "Success", type: toast.TYPE.SUCCESS, autoClose: 3000 });
  failed = () => toast.update(this.toastId, { render: "Failed", type: toast.TYPE.ERROR, autoClose: 3000 });
  resetAddForm = () => {
    this.setState({
      ...this.state,
      name: '',
      role: '',
      want: '',
      so: '',
    });
  }
  toggleAdd() {
    { this.resetAddForm() };
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }
  toggleEdit(event) {
    let name = event.currentTarget.dataset.name
    let id = event.currentTarget.dataset.id
    let want =event.currentTarget.dataset.want
    let so =event.currentTarget.dataset.so

    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit,
      updateName: name,
      updateId: id,
      want:want,
      so:so,
    }));
  }

  toggleActionStatus = () => {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }

  onTextboxChangename(event) {
    this.setState({
      name: event.target.value,
    });
  }
  onTextboxChangerole(event) {
    this.setState({
      role: event.target.value,
    });
  }
  onTextboxChangewant(event) {
    this.setState({
      want: event.target.value,
    });
  }
  onTextboxChangeso(event) {
    this.setState({
      so: event.target.value,
    });
  }

  onGetUpdate = (userstoryIdUpdate, name, role, want, so) => {
    this.setState({
      rouserstoryIdUpdate: userstoryIdUpdate,
      asUpdate: role,
      wantUpdate: want,
      soUpdate: so,
      nameUpdate: name
    });
  }
  componentDidMount() {

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
          data: [...prevState.data,
          {
            id: response.getId(),
            name: response.getName(),
            role: response.getRole(),
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
  handleAdd = () => {
    this.notify()
    console.log("handleAdd")
    const userstoryService = new proto.userstory.UserStoryClient('https://www.overlead.co');
    //some data of request (get that from frontend)

    var metadata = {};
    //make a request to server

    var AddNewUserStoryReq = new proto.userstory.AddNewUserStoryReq();
    AddNewUserStoryReq.setName(this.state.name);
    AddNewUserStoryReq.setRequesterid(getFromStorage("userId"));
    AddNewUserStoryReq.setProjectid(getFromStorage("currentProject"));
    AddNewUserStoryReq.setRole(this.state.role);
    AddNewUserStoryReq.setWant(this.state.want);
    AddNewUserStoryReq.setSo(this.state.so);
    AddNewUserStoryReq.setAccesstoken(getFromStorage("accessToken"));
    let that=this
    userstoryService.addNewUserStory(AddNewUserStoryReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error")
      } else { //if success
        //get response
        if (response.getStatus() == "SUCCESS") {
          that.success()

          this.setState(prevState => ({
            modalAdd: !prevState.modalAdd,
            data: [...prevState.data, { id: response.getId(), 
              name: this.state.name, role: this.state.role, want: this.state.want, so: this.state.so }] ,
            name: '',
            as: '',
            want: '',
            so: '',
          }));
   
        
        } else {
         that.failed()
        }
      }
    });

  }
  handleDelete = (event) => {
    let id = event.currentTarget.dataset.id

    console.log("handleDelete")

    const userstoryService = new proto.userstory.UserStoryClient('https://www.overlead.co');
    this.notify()
    var metadata = {};
    //make a request to server

    var DeleteUserStoryReq = new proto.userstory.DeleteUserStoryReq();
    DeleteUserStoryReq.setRequesterid(getFromStorage("userId"));
    DeleteUserStoryReq.setProjectid(getFromStorage("currentProject"));
    DeleteUserStoryReq.setUserstoryid(id);
    DeleteUserStoryReq.setAccesstoken(getFromStorage("accessToken"));
    let that=this
    userstoryService.deleteUserStory(DeleteUserStoryReq, metadata, (err, response) => {
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
    const userstoryService = new proto.userstory.UserStoryClient('https://www.overlead.co');
    var metadata = {};
    this.notify()
    var UpdateUserStoryReq = new proto.userstory.UpdateUserStoryReq();
    UpdateUserStoryReq.setRequesterid(getFromStorage("userId"));
    UpdateUserStoryReq.setProjectid(getFromStorage("currentProject"));
    UpdateUserStoryReq.setUserstoryid(this.state.updateId);
    UpdateUserStoryReq.setRole(this.state.role);
    UpdateUserStoryReq.setWant(this.state.want);
    UpdateUserStoryReq.setSo(this.state.so);
    UpdateUserStoryReq.setAccesstoken(getFromStorage("accessToken"));
    let that=this
    userstoryService.updateUserStory(UpdateUserStoryReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
         that.success()
          const tmpdata = this.state.data.map(p =>
            p.id == this.state.updateId
              ? {
                ...p, role: this.state.role,
                want: this.state.want, so: this.state.so
              }
              : p
          );
          this.setState(prevState => ({
            modalEdit: !prevState.modalEdit,
            data: tmpdata,

          }));
        } else {
          that.failed()
        }
      }
    });
  };

  render() {
    let that = this;
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
                    <th>Title<i class="fa fa-sort"></i></th>
                    <th>As a...<i class="fa fa-sort"></i></th>
                    <th>I want to be able to... </th>
                    <th>So that... </th>
                    <th>
                      <div>
                        <Button color="primary" size="sm" className="mt-3" onClick={that.toggleAdd}><i class="fa fa-plus-square"></i>{this.props.buttonLabel}</Button>
                        <Modal size="lg" isOpen={that.state.modalAdd} toggle={that.toggleAdd}>
                          <ModalHeader toggle={that.toggleAdd}>UserStory</ModalHeader>
                          <ModalBody>
                            <Form className="form-horizontal">
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">Name</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="name" name="name" placeholder="name" value={that.state.name} onChange={that.onTextboxChangename} />

                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">As a...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="role" name="role" placeholder="As a..." value={that.state.role} onChange={that.onTextboxChangerole} />

                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">I want to be able to...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="want" name="want" placeholder="I want to be able to..." value={that.state.want} onChange={that.onTextboxChangewant} />

                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="textarea-input">So that...</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="textarea" name="so" id="so" rows="9"
                                    placeholder="Content..." value={that.state.so} onChange={that.onTextboxChangeso} />
                                </Col>
                              </FormGroup>
                            </Form>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={that.handleAdd}>Submit</Button>
                            <Button color="secondary" onClick={that.toggleAdd}>Cancel</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>{
                  this.state.data.map(function (i, key) {
                    if (i != null) {
                      let item = i
                      let currentName = item.name
                      return (
                        <tr key={key}>
                          <td>{item.name}</td>
                          <td>{item.role}</td>
                          <td>{item.want}</td>
                          <td>{item.so}</td>
                          <td>
                            <div data-id={item.id} data-name={item.name} data-want={item.want} data-so={item.so} onClick={that.toggleEdit}>
                              <Button color="warning" size="sm">
                                <i class="fa fa-edit"></i>
                              </Button>
                            </div>
                            <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} >
                              <ModalHeader toggle={that.toggleEdit}>UserStory</ModalHeader>
                              <ModalBody>
                                <Form className="form-horizontal">
                                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="text-input">Name</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                      <Input type="text" id="name" name="name" placeholder="name" disabled={true} value={that.state.updateName} />

                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="text-input">As a...</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                      <Input type="text" id="role" name="role" placeholder="As a..." value={that.state.role} onChange={that.onTextboxChangerole} />

                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="text-input">I want to be able to...</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                      <Input type="text" id="want" name="want" placeholder="I want to be able to..." value={that.state.want} onChange={that.onTextboxChangewant} />

                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="textarea-input">So that...</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                      <Input type="textarea" name="so" id="so" rows="9"
                                        placeholder="Content..." value={that.state.so} onChange={that.onTextboxChangeso} />
                                    </Col>
                                  </FormGroup>
                                </Form>
                              </ModalBody>
                              <ModalFooter>
                               
                              <div data-id={item.id} onClick={that.handleUpdate}>

                                  <Button color="primary" >Submit</Button>
                                  </div>

                              </ModalFooter>

                            </Modal>

                            <div data-id={item.id} onClick={that.handleDelete}> 
                            <Button type="submit" size="sm" color="danger">
                              <i class="fa fa-trash"></i></Button>
                            </div>
                          </td>
                        </tr>
                      )
                    }

                  })}</tbody>
              </table>
            </div>
          </  Card>
        </Col>
      </Row>
    );
  }
}
function mapStateToProps(state) {
  const { changeStatusProject } = state
  const { projectId, projectName } = changeStatusProject
  return {
    projectId, projectName,
  }
}
export default connect(mapStateToProps)(Detail);
