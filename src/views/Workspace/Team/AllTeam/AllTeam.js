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
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'

class AllTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTeam: [
       {
         'id':'1',
         'name':'teamA',
         'description':'Team phụ trách làm frontend',
         'department':'aaaa',
       },
       {
        'id':'2',
        'name':'teamB',
        'description':'Team phụ trách làm frontend',
        'department':'aaaa',
      },
      {
        'id':'3',
        'name':'teamC',
        'description':'Team phụ trách làm frontend',
        'department':'aaaa',
      },
      ],
      dataMember:[],
      requesterId: '',
      actionStatus: '',              //success or show error when action add delete update      
      modalAddMember: false,
      modalEditMember: false,
      modalAddTeam: false,
      modalEditTeam: false,
      modalActionStatus: false,

      updateTeamId:'',
      updateNameTeam: '',
      nameTeam: '',
      descriptionTeam:'',
      departmentTeam:'',
      
     
      updateNameMember: '',
      emailMember:'',
      roleMember:'',
    

    }
  };
  //onchange member
  onTextboxChangeEmailMember=(event)=> {
    this.setState({
      emailMember: event.target.value,
    });
  }
  onTextboxChangeRoleMember=(event)=> {
    this.setState({
      roleMember: event.target.value,
    });
  }
  //onchange team
  onTextboxChangeNameTeam=(event)=> {
    this.setState({
      nameTeam: event.target.value,
    });
  }
  onTextboxChangeDescriptionTeam=(event)=> {
    this.setState({
      descriptionTeam: event.target.value,
    });
  }
  onTextboxChangeDepartmentTeam=(event)=> {
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
  toggleAddMember=()=> {
    this.setState(prevState => ({
      modalAddMember: !prevState.modalAddMember
    }));
  }
  toggleEditMember=(event)=> {
    let nameMember = event.currentTarget.dataset.nameMember;
    let idTeam = event.currentTarget.dataset.idTeam;
    this.setState(prevState => ({
      modalEditMember: !prevState.modalEditMember,
      updateNameMember: nameMember,
      updateTeamId: idTeam
    }));
  }
  //toggle team
  toggleAddTeam=()=> {
    this.setState(prevState => ({
      modalAddTeam: !prevState.modalAddTeam
    }));
  }
  toggleEditTeam=(event)=> {
    let name = event.currentTarget.dataset.name;
    let id = event.currentTarget.dataset.id;

    this.setState(prevState => ({
      modalEditTeam: !prevState.modalEditTeam,
      updateNameTeam: name,
      updateTeamId: id
    }));
  }
  componentDidMount() {
    //viet hàm lấy toàn bộ dữ liệu trong collection team đổ vào array dataTeam
  }
  //member
  handleAddMember = (event) => {
    let idteam = event.currentTarget.dataset.idteam;

  }
  handleUpdateMember = (event) => {
    let emailMember = event.currentTarget.dataset.emailMember;
    let idteam = event.currentTarget.dataset.idteam;
  }
  handleDeleteMember = (event) => {
    let emailMember = event.currentTarget.dataset.emailMember;
    let idteam = event.currentTarget.dataset.idteam;
  }
  //team
  handleAddTeam = () => {}
  handleUpdateTeam = (event) => {
    let id = event.currentTarget.dataset.id;
  }
  handleDeleteTeam = (event) => {
    let id = event.currentTarget.dataset.id;
    

  }
  render() {
    let that = this;
    return (
          <div>
                <Modal size="sm" isOpen={this.state.modalActionStatus} toggle={this.toggleActionStatus} className={this.props.className}>
                  <ModalBody>
                    <center><h4>{this.state.actionStatus}</h4></center>
                  </ModalBody>
                </Modal>
              {this.state.dataTeam.map(function(item, key) {
                               let itemTeam=item; 
                               return (
                                <div class="card border-primary  mb-6">
                                <div class="card-header bg-success">
                                <div class="row justify-content-md-center">
                                </div>
                                <div class="row">
                                  <div class="col">
                                  <strong>{item.name}</strong>
                                  </div>
      
                                  <div class="col-md-auto">
                                  </div>
      
                                  <div class="col col-sm-2">
                                  <center>
                                  <div data-id={item.id} data-name={item.name} onClick={that.toggleEditTeam}>
                                    <Button color="warning" size="sm" className="mt-3"><i class="fa fa-edit"></i></Button>
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
                                              <Input type="text" id="Name" name="Name" placeholder="Name" value={that.state.nameTeam} onChange={that.onTextboxChangeNameTeam}/>

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
                                      <div data-id={item.id} onClick={that.handleUpdateTeam}>
                                      <ModalFooter>
                                          <Button color="primary" >Submit</Button>
                                      </ModalFooter>
                                      </div>

                                  </Modal>
                                  <div data-id={item.id} onClick={that.handleDeleteTeam}> 
                                    <Button color="danger" size="sm" className="mt-3" ><i class="fa fa-trash"></i></Button>
                                  </div>
                                  </center>
                                  </div>
                                
                                </div>
                                               
                                </div>
                                <div class="card-body">
                                {that.state.dataMember.map(function(item, key) {
                               return (
                                <Table hover bordered striped responsive size="sm">
                                <thead>
                                <tr>
                                  <th>Name</th>                               
                                  <th>Point</th>
                                  <th>Current task</th>
                                  <th>Task completed</th>
                                  <th>
                                    <div>
                                      <center><Button color="primary" size="sm" className="mt-3" onClick={that.toggleAddMember}><i class="fa fa-plus-square"></i></Button></center>
                                      <Modal size="lg" isOpen={that.state.modalAddMember} toggle={that.toggleAddMember}>
                                        <ModalHeader toggle={that.toggleAddMember}>Member</ModalHeader>
                                        <ModalBody>
                                          
                                            <Form className="form-horizontal">               
                                              <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="text-input">User name</Label>
                                                </Col>
                                                <Col xs="5" md="5">
                                                  <Input type="text" id="text-input" name="text-input" placeholder="User name" value={that.state.emailMember} onChange={that.onTextboxChangeEmailMember}/>
                                                </Col>
                                              </FormGroup>
                                              <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="text-input">Role</Label>
                                                </Col>
                                                <Col xs="5" md="5">
                                                  <Input type="text" id="Role" name="Role" placeholder="Role" value={that.state.roleMember} onChange={that.onTextboxChangeRoleMember}/>
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
                                <tbody>
                                <tr>
                                  <td>{item.name}</td>
                                  <td>{item.point}</td>                                
                                  <td>{item.currentTask}</td>                               
                                  <td>{item.numOfTaskDone}</td>
                                  <td>
                                  <center>
                                  <div data-idTeam={itemTeam.id} data-nameMember={item.name} onClick={that.toggleEditMember}> 
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
                                                  <Input type="text" id="text-input" name="text-input" placeholder="User name" />
                                                </Col>
                                              </FormGroup>
                                              <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="text-input">Role</Label>
                                                </Col>
                                                <Col xs="5" md="5">
                                                  <Input type="text" id="Role" name="Role" placeholder="Role" value={that.state.roleMember} onChange={that.onTextboxChangeRoleMember}/>
                                                </Col>
                                              </FormGroup>
                                                                    
                                            </Form>
                                        
                                      </ModalBody>
                                      <div data-idTeam={itemTeam.id} data-emailMember={item.name} onClick={that.handleUpdateMember}>
                                        <ModalFooter>                                   
                                            <Button color="primary" >Submit</Button>
                                        </ModalFooter>
                                      </div>
                                    </Modal>
  
                                    <div data-emailMember={item.name} data-idteam={itemTeam.id} onClick={that.handleDeleteMember}> 
                                    <Button  size="sm" color="danger" >
                                      <i class="fa fa-trash"></i></Button>
                                    </div>
                                    </center>
                                    </td>
                                </tr>
  
                              </tbody>
                            </Table>
                                )
                              })}

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
