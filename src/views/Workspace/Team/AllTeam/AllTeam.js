import React, { Component } from 'react';
import {

  Button,

  Card,
  Container,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,

  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,

  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,

} from 'reactstrap';
import {
  getFromStorage,
  setInStorage
} from '../../../../service/storage'
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'

import cookie from 'react-cookies';
const proto = {};
proto.team = require('../../../../gRPC/team/team_grpc_web_pb');
class AllTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTeam: [],

      requesterId: '',
      actionStatus: '',              //success or show error when action add delete update      
      modalAddMember: false,
      modalEditMember: false,
      modalAddTeam: false,
      modalEditTeam: false,
      modalActionStatus: false,

      updateTeamId: '',
      updateNameTeam: '',

      nameTeam: '',
      descriptionTeam: '',
      departmentTeam: '',


      updateMemberId: '',
      emailMember: '',
      roleMember: '',


    }
  };
  //onchange member
  onTextboxChangeEmailMember = (event) => {
    this.setState({
      emailMember: event.target.value,
    });
  }
  onTextboxChangeRoleMember = (event) => {
    this.setState({
      roleMember: event.target.value,
    });
  }
  //onchange team
  onTextboxChangeNameTeam = (event) => {
    this.setState({
      nameTeam: event.target.value,
    });
  }
  onTextboxChangeDescriptionTeam = (event) => {
    this.setState({
      descriptionTeam: event.target.value,
    });
  }
  onTextboxChangeDepartmentTeam = (event) => {
    this.setState({
      departmentTeam: event.target.value,
    });
  }
  //action status
  toggleActionStatus = () => {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }
  //toggle member
  toggleAddMember = (event) => {
    this.setState(prevState => ({
      modalAddMember: !prevState.modalAddMember,
    }));
  }
  toggleEditMember = (event) => {
    let idMember = event.currentTarget.dataset.idMember;
    let idTeam = event.currentTarget.dataset.idTeam;
    let role = event.currentTarget.dataset.role;
    let name= event.currentTarget.dataset.name;
    this.setState(prevState => ({
      modalEditMember: !prevState.modalEditMember,
      updateMemberId: idMember,
      updateTeamId: idTeam,
      roleMember: role,
      emailMember:name,
    }));
  }
  //toggle team
  toggleAddTeam = () => {
    this.setState(prevState => ({
      modalAddTeam: !prevState.modalAddTeam
    }));
  }
  toggleEditTeam = (event) => {
    let name = event.currentTarget.dataset.name;
    let id = event.currentTarget.dataset.id;
    let description = event.currentTarget.dataset.des;
    let department = event.currentTarget.dataset.department;


    this.setState(prevState => ({
      modalEditTeam: !prevState.modalEditTeam,
      updateNameTeam: name,
      updateTeamId: id,
      departmentTeam:department,
      descriptionTeam:description,
      nameTeam:name,
    }));
  }
  shouldComponentUpdate() {
    return true;
  }
  loadAllTeam = () => {
    console.log("getAllTeam")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var GetAllTeamReq = new proto.team.GetAllTeamReq();
    GetAllTeamReq.setRequesterid(getFromStorage("userId"));
    GetAllTeamReq.setProjectid(getFromStorage("currentProject"));
    GetAllTeamReq.setAccesstoken(getFromStorage("accessToken"));
    let response = teamService.getAllTeam(GetAllTeamReq, metadata)

    let that = this
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        let newData = that.state.dataTeam
        newData.push({
          id: response.getTeamid(),
          name: response.getName(),
          description: response.getDescription(),
          department: response.getDepartment(),
          members: []
        })
        console.log("newData")
        console.log(newData)
        that.setState({
          dataTeam: newData
        })
        that.loadAllMember(response.getTeamid())
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
  loadAllMember = (id) => {
    console.log("loadAllMember")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var GetAllMemberReq = new proto.team.GetAllMemberReq();
    GetAllMemberReq.setRequesterid(getFromStorage("userId"));
    GetAllMemberReq.setTeamid(id);
    GetAllMemberReq.setAccesstoken(getFromStorage("accessToken"));
    let response = teamService.getAllMember(GetAllMemberReq, metadata)

    let that = this
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        let newData = that.state.dataTeam
        newData.map(p =>
          p.id == id
            ? {
              ...p, members: Object.assign(p.members, p.members.push({
                id: response.getId(),
                name: response.getName(),
                role: 'member',
                point: '0',
                currentTask: '0',
                numOfTaskDone: '0',
              }))
            } :
            {
              p
            }

        )

        console.log("newData")
        console.log(newData)
        that.setState({
          dataTeam: newData
        })


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
  componentDidMount() {
    //viet hàm lấy toàn bộ dữ liệu trong collection team đổ vào array dataTeam

    this.loadAllTeam()
    this.state.dataTeam.forEach(i => {
      this.loadAllMember(i.id)
    })
  }
  //member
  handleAddMember = () => {

    console.log("handleAddMember")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var AddMemberReq = new proto.team.AddMemberReq();
    AddMemberReq.setRequesterid(getFromStorage("userId"));
    AddMemberReq.setAccesstoken(getFromStorage("accessToken"));
    AddMemberReq.setTeamid(this.state.updateTeamId)
    AddMemberReq.setMemberemail(this.state.emailMember)
    AddMemberReq.setRole(this.state.roleMember)
    let that = this
    teamService.addMember(AddMemberReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
          let newData = that.state.dataTeam
          newData.map(p =>
            p.id == that.state.updateTeamId
              ? {
                ...p, members: Object.assign(p.members, p.members.push({
                  id: response.getId(),
                  name: response.getName(),
                  role: this.state.roleMember,
                  point: '0',
                  currentTask: '0',
                  numOfTaskDone: '0',
                }))
              } :
              {
                p
              }
  
          )
  
          console.log("newData")
          console.log(newData)
          that.setState({
            modalAddMember:false,
            dataTeam: newData,
            modalActionStatus: true,
            actionStatus: 'SUCCESS',
            emailMember: '',
            roleMember: '',
      
          })

        } else {
          this.setState({
            modalActionStatus: true,
            actionStatus: 'FAIL',
          });

        }
      }
    })
  }
  handleUpdateMember = (event) => {
    let idMember = event.currentTarget.dataset.idMember;
    let idteam = event.currentTarget.dataset.idteam;
  }
  handleDeleteMember = (event) => {
    let idmember = event.currentTarget.dataset.idmember;
    let idteam = event.currentTarget.dataset.idteam;
    console.log("handleDeleteMember")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var RemoveMemberReq = new proto.team.RemoveMemberReq();
    RemoveMemberReq.setRequesterid(getFromStorage("userId"));
    RemoveMemberReq.setAccesstoken(getFromStorage("accessToken"));
    RemoveMemberReq.setTeamid(idteam)
    RemoveMemberReq.setMemberemail(idmember);
    let that = this
    teamService.removeMember(RemoveMemberReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {
          console.log("SUCCESS")
          let newData = that.state.dataTeam
          newData.map(p =>
            p.id == idteam
              ? {
                ...p, members: p.members.filter(i=>
                  i.id==idmember?false:true)
              } :
              {
                p
              }
  
          )
  
          console.log("newData")
          console.log(newData)
          that.setState({
            dataTeam: newData,
            modalActionStatus: true,
            actionStatus: 'SUCCESS',
          })

        } else {
          this.setState({
            modalActionStatus: true,
            actionStatus: 'FAIL',
          });

        }
      }
    })


  }
  //team
  handleAddTeam = () => { }
  handleUpdateTeam = (event) => {
    console.log("handleUpdateTeam")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var UpdateTeamReq = new proto.team.UpdateTeamReq();
    UpdateTeamReq.setRequesterid(getFromStorage("userId"));
    UpdateTeamReq.setAccesstoken(getFromStorage("accessToken"));
    UpdateTeamReq.setTeamid(this.state.updateTeamId)
    UpdateTeamReq.setName(this.state.nameTeam);
    UpdateTeamReq.setDepartment(this.state.departmentTeam);
    UpdateTeamReq.setDescription(this.state.descriptionTeam);
    let that = this
    teamService.updateTeam(UpdateTeamReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {

          let newData = this.state.dataTeam.map(p =>
            p.id == that.state.updateTeamId
              ? {
                ...p, name: that.state.nameTeam, department: that.state.departmentTeam, description: that.state.descriptionTeam
              }
              : p
          )
          that.setState(prevState => ({
            modalEditTeam: !prevState.modalEditTeam,
            dataTeam: newData,
            modalActionStatus: true,
            actionStatus: 'SUCCESS', 
          }))
        
        } else {
          this.setState({
            modalActionStatus: true,
            actionStatus: 'FAIL',           
          });

        }
      }
    })


  }
  handleDeleteTeam = (event) => {
    let id = event.currentTarget.dataset.id;
    console.log(this.state.updateTeamId)

    console.log("getAllTeam")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var DeleteTeamReq = new proto.team.DeleteTeamReq();
    DeleteTeamReq.setRequesterid(getFromStorage("userId"));
    DeleteTeamReq.setAccesstoken(getFromStorage("accessToken"));
    DeleteTeamReq.setTeamid(id)
    let that = this
    teamService.deleteTeam(DeleteTeamReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
      } else {
        if (response.getStatus() == "SUCCESS") {

          let newData = this.state.dataTeam.filter(p =>
            p.id == id
              ? false : true)
          that.setState({
            dataTeam: newData,
            modalActionStatus: true,
            actionStatus: 'SUCCESS',
          })

        } else {
          this.setState({
            modalActionStatus: true,
            actionStatus: 'FAIL',
          });

        }
      }
    })


  }
  render() {
    let that = this;
    console.log("render")
    console.log(this.state.dataTeam.members)
    return (
      <div>
        <Modal size="sm" isOpen={this.state.modalActionStatus} toggle={this.toggleActionStatus} className={this.props.className}>
          <ModalBody>
            <center><h4>{this.state.actionStatus}</h4></center>
          </ModalBody>
        </Modal>
        {that.state.dataTeam.map(function (item, key) {
          let itemTeam = item;
          return (
            <div class="card border-primary  mb-6">
              <div class="card-header bg-primary">
                <div class="row justify-content-md-center">
                </div>
                <div class="row">
                  <div class="col">
                    <strong>{itemTeam.name}</strong>
                  </div>

                  <div class="col-md-auto">
                  </div>

                  <div class="col col-sm-1">
                  
                    <div class="row ">
                         
                          <div class="col col-sm-1">
                          <div data-id={itemTeam.id} data-name={itemTeam.name} data-des={itemTeam.description} data-department={itemTeam.department}onClick={that.toggleEditTeam}>
                            <Button color="warning" size="sm" className="mt-3"><i class="fa fa-edit"></i></Button>
                          </div>
                          </div>
                          <Modal size="lg" isOpen={that.state.modalEditTeam} toggle={that.toggleEditTeam} >
                            <ModalHeader toggle={that.toggleEditTeam}>Team</ModalHeader>
                            <ModalBody>
                              <Form className="form-horizontal">
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Name</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="Name" name="Name" placeholder="Name" value={that.state.nameTeam} onChange={that.onTextboxChangeNameTeam} />

                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Description</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="Description" name="Description" placeholder="Description" value={that.state.descriptionTeam} onChange={that.onTextboxChangeDescriptionTeam} />

                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Department</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="Department" name="Department" placeholder="Department" value={that.state.departmentTeam} onChange={that.onTextboxChangeDepartmentTeam} />

                                  </Col>
                                </FormGroup>

                              </Form>
                            </ModalBody>
                            <div data-id={itemTeam.id} onClick={that.handleUpdateTeam}>
                              <ModalFooter>
                                <Button color="primary" >Submit</Button>
                              </ModalFooter>
                            </div>

                          </Modal>
                          
                          <div class="col col-sm-1">
                          <div data-id={itemTeam.id} onClick={that.handleDeleteTeam}>
                            <Button color="danger" size="sm" className="mt-3" ><i class="fa fa-trash"></i></Button>
                          </div>
                          </div>
                    </div>
                  </div>

                </div>

              </div>
              <div class="card-body">
              {item.members != undefined ?
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Point</th>
                            <th>Current task</th>
                            <th>Task completed</th>
                            <th>
                              <div>
                                <center>
                                  <div  onClick={()=>that.setState({updateTeamId:item.id})}>
                                  <Button color="primary" size="sm" className="mt-3" onClick={that.toggleAddMember} >
                                    <i class="fa fa-plus-square"></i>
                                    </Button>
                                    </div>
                                    </center>
                                <Modal size="lg" isOpen={that.state.modalAddMember} toggle={that.toggleAddMember}>
                                  <ModalHeader  toggle={that.toggleAddMember}>Member</ModalHeader>
                                  <ModalBody>

                                    <Form className="form-horizontal">
                                      <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="text-input">User name</Label>
                                        </Col>
                                        <Col xs="5" md="5">
                                          <Input type="text" id="text-input" name="text-input" placeholder="User name" value={that.state.emailMember} onChange={that.onTextboxChangeEmailMember} />
                                        </Col>
                                      </FormGroup>
                                      <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="text-input">Role</Label>
                                        </Col>
                                        <Col xs="5" md="5">
                                          <Input type="text" id="Role" name="Role" placeholder="Role" value={that.state.roleMember} onChange={that.onTextboxChangeRoleMember} />
                                        </Col>
                                      </FormGroup>

                                    </Form>

                                  </ModalBody>
                                  <div data-idTeam={itemTeam.id} onClick={that.handleAddMember}>
                                    <ModalFooter>
                                      <Button color="primary" >Submit</Button>
                                    </ModalFooter>
                                  </div>
                                </Modal>
                              </div>
                            </th>
                          </tr>
                        </thead>
                       
                        {item.members.map(function (itemMem, key) {
                        return (
                          <tbody>
                          <tr>
                            <td>{itemMem.name}</td>
                            <td>{itemMem.role}</td>
                            <td>{itemMem.point}</td>
                            <td>{itemMem.currentTask}</td>
                            <td>{itemMem.numOfTaskDone}</td>
                            <td>
                              <center>
                                <div data-idTeam={itemTeam.id} data-idMember={itemMem.id} data-name={itemMem.name} data-role={itemMem.role}onClick={that.toggleEditMember}>
                                  <Button color="warning" size="sm">
                                    <i class="fa fa-edit"></i>
                                  </Button>
                                </div>
                                <Modal size="lg" isOpen={that.state.modalEditMember} toggle={that.toggleEditMember} >
                                  <ModalHeader toggle={that.toggleEditMember}>Member</ModalHeader>
                                  <ModalBody>
                                    <Form className="form-horizontal">
                                      <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="text-input">User name</Label>
                                        </Col>
                                        <Col xs="5" md="5">
                                          <Input type="text" id="text-input" name="text-input" value={that.state.emailMember}  placeholder="User name" onChange={that.onTextboxChangeEmailMember}/>
                                        </Col>
                                      </FormGroup>
                                      <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="text-input">Role</Label>
                                        </Col>
                                        <Col xs="5" md="5">
                                          <Input type="text" id="Role" name="Role" placeholder="Role" value={that.state.roleMember} onChange={that.onTextboxChangeRoleMember} />
                                        </Col>
                                      </FormGroup>

                                    </Form>

                                  </ModalBody>
                                  <div data-idTeam={itemTeam.id} data-idMember={itemMem.id} onClick={that.handleUpdateMember}>
                                    <ModalFooter>
                                      <Button color="primary" >Submit</Button>
                                    </ModalFooter>
                                  </div>
                                </Modal>

                                <div data-idmember={itemMem.id} data-idteam={itemTeam.id} onClick={that.handleDeleteMember}>
                                  <Button size="sm" color="danger" >
                                    <i class="fa fa-trash"></i></Button>
                                </div>
                              </center>
                            </td>
                          </tr>

                        </tbody>


                        )})} </table> :
                        <div>Empty Member</div> }
                     
                    
                

               

              </div>
            </div>

          )
        })}















        {/* <div class="card border-primary mb-3">
                <div class="card-header bg-primary">
                  <strong>Find and add member</strong>
                      <Row>       
                        <Col xs="2" md="2">
                          <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                        </Col> 
                        <Col xs="0" md="0">
                          <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                        </Col> 
                      </Row>     

                      <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Skill</Label>
                          </Col>
                          <Col xs="5" md="5">
                            <Input type="text" id="text-input" name="text-input" placeholder="skill" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Point</Label>
                          </Col>
                          <Col xs="2" md="2">
                            <Input type="text" id="text-input" name="text-input" placeholder="Point min" />
                            <Input type="text" id="text-input" name="text-input" placeholder="Point max" />  
                          </Col>
                        </FormGroup>   
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Freelancer</Label>
                          </Col>
                          <Col xs="2" md="2">
                            <Input type="checkbox" id="text-input" name="text-input"  />  
                          </Col>
                        </FormGroup>                                          
                      </Form>
                </div>           
                <div class="card-body">
                    <Table hover bordered striped responsive size="sm">
                      <thead>
                      <tr>
                        <th>Name</th>
                        <th>Skill</th>
                        <th>Point</th>
                        <th>Number Project</th>
                        <th></th>
          
                       
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td></td>
                       
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                        </td>
                      </tr>
                     
                     
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                        </td>
                      </tr>
                     
                     
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                        </td>
                      </tr>

                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                        </td>
                      </tr>
                      
                      </tbody>
                    </Table>
                </div>
            </div> */}
      </div>

    );
  }
}

export default AllTeam;
