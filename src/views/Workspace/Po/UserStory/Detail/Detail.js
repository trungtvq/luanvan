import React, { Component } from 'react';
import { Card, Badge, Button, Col, Container, Input, InputGroup, 
  InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, 
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  ModalFooter,

} from 'reactstrap';
import cookie from 'react-cookies';
import {getProject} from '../../../../../actions'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';
const proto = {};
proto.userstory = require('./../../../../../gRPC/userstory/userstory_grpc_web_pb');
class Detail extends Component {
  constructor(props) {
    super(props);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

    this.onTextboxChangename = this.onTextboxChangename.bind(this);
    this.onTextboxChangeas = this.onTextboxChangeas.bind(this);
    this.onTextboxChangewant = this.onTextboxChangewant.bind(this);
    this.onTextboxChangeso = this.onTextboxChangeso.bind(this);

    this.state = {
      data: [ 
              {
                "id":'1',
                "name":"a",
                "as":"admin",
                "want":"See a list of all members and visitors",
                "so":"I can monitor site visits",
              },
              {
                "id":'2',
                "name":"a",
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
              },
              {
                "id":'3',
                "name":"a",
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
              },
              {
                "id":'4',
                "name":"a",
                "as":"admin",
                "want":"Delete comment",
                "so":"Offensive content is removed",
              },
              {
                "id":5,
                "name":"a",
                "as":"admin",
                "want":"Add new key words",
                "so":"Content is easy to groups and search for",
              },
              {
                "id":'6',
                "name":"a",
                "as":"member",
                "want":"Update my account detail",
                "so":"I can be contacted by admin",
              }
            ],
      requesterId:'',
      projectId:'',
      cookie:'',
      actionStatus:'',              //success or show error when action add delete update
      
      modalAdd: false,
      modalEdit: false,
      modalActionStatus: false,     
      
      //add
      name:'',
      as:'',
      want:'',
      so:'',
      
      //update
      userstoryIdUpdate:'',    
      nameUpdate:'',
      asUpdate:'',
      wantUpdate:'',
      soUpdate:'',
      
      //delete
      userstoryIdDelete:'',
      }
    };
  
  resetAddForm=()=>{
      this.setState({
        ...this.state,
        name:'',
        as:'',
        want:'',
        so:'',
      });
  }
  toggleAdd() {
    {this.resetAddForm()};
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }
  toggleEdit() {
    //{this.resetDataForm()};
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }
  toggleActionStatus=()=> {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }

  onTextboxChangename(event) {
    this.setState({
      name: event.target.value,
    });
  }
  onTextboxChangeas(event) {
    this.setState({
      as: event.target.value,
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

  onTextboxChangenameUpdate=(event)=> {
    this.setState({
      nameUpdate: event.target.value,
    });
  }
  onTextboxChangeasUpdate=(event)=> {
    this.setState({
     asUpdate: event.target.value,
    });
  }
  onTextboxChangewantUpdate=(event)=> {
    this.setState({
      wantUpdate: event.target.value,
    });
  }
  onTextboxChangesoUpdate=(event)=> {
    this.setState({
      soUpdate: event.target.value,
    });
  }
  onTextboxChangeUserStoryIdUpdate=(event)=> {
    this.setState({
      userstoryIdUpdate: event.target.value,
    });
  }

  onTextboxChangeUserStoryIdDelete=(event)=> {
    this.setState({
      userstoryIdDelete: event.target.value,
    });
  }
  onGetUpdate=(userstoryIdUpdate,name,role,want,so)=>{
    this.setState({
      rouserstoryIdUpdate:userstoryIdUpdate,
      asUpdate:role,
      wantUpdate:want,
      soUpdate:so,
      nameUpdate:name
    });
  }
  
  handleAdd= () => {
    console.log("handleAdd")
    const userstoryService = new proto.userstory.UserStoryClient('http://54.255.233.193:8085');
    //some data of request (get that from frontend)
    console.log(userstoryService)
    
    var metadata = {};
    //make a request to server

    var AddNewUserStoryReq= new proto.userstory.AddNewUserStoryReq();
    //string name=7;
    // string adderId = 1;
    // string projectId = 2;
    // string role = 3;
    // string want = 4;
    // string so = 5;
    // string cookie = 6;
    AddNewUserStoryReq.setName(this.state.name);
    AddNewUserStoryReq.setAdderid(cookie.load("userId"));
    AddNewUserStoryReq.setProjectid(this.props.projectId);
    AddNewUserStoryReq.setRole(this.state.as);
    AddNewUserStoryReq.setWant(this.state.want);
    AddNewUserStoryReq.setSo(this.state.so);
    AddNewUserStoryReq.setCookie(this.state.cookie);

    var toto=userstoryService.addNewUserStory(AddNewUserStoryReq, metadata, (err, response) => {
      console.log("connect")
      if (err) { //if error
         console.log(err);
         console.log("error")
      } else { //if success
              //get response
              console.log("response")
              console.log(response);
              if(response.getStatus()=="SUCCESS")
              {
                this.setState(prevState => ({
                  modalAdd: !prevState.modalAdd,
                  }));
                this.setState(prevState=>({data:[...prevState.data,{id:response.getId(),name:this.state.name,as:this.state.as,want:this.state.want,so:this.state.so}]}));
                            
                this.setState({
                  name:'',
                  as:'',
                  want:'',
                  so:'',
                  modalActionStatus:true,
                  actionStatus:'SUCCESS'
                });
              }else{
                this.setState({
                  modalActionStatus:true,
                  actionStatus:'FALSE',
                });
              }
              
            }
          });
        
}
  handleDelete = (id) => {
    console.log("handleDelete")

    
    const userstoryService = new proto.userstory.UserStoryClient('http://54.255.233.193:8085');
    //some data of request (get that from frontend)
    console.log(userstoryService)
    
    var metadata = {};
    //make a request to server

    var DeleteUserStoryReq= new proto.userstory.DeleteUserStoryReq();
  //     string deleterId = 1;
  //     string projectId = 2;
  //     string userstoryId = 3;
  //     string cookie = 4;
    DeleteUserStoryReq.setDeleterid(this.state.requesterId);
    DeleteUserStoryReq.setProjectid(this.props.projectId);
    DeleteUserStoryReq.setUserstoryid(this.state.userstoryIdDelete);
    DeleteUserStoryReq.setCookie(this.state.cookie);

    var toto=userstoryService.deleteUserStory(DeleteUserStoryReq, metadata, (err, response) => {
      console.log("connect")
      if (err) { //if error
         console.log(err);
         console.log("error")
         console.log(response);
      } else { //if success
              //get response
              console.log("response")
              console.log(response);
              if(response.getStatus()=="SUCCESS")
              {
               this.setState({
                 actionStatus:"SUCCESS",
                 modalActionStatus:true,
               });
               this.setState(prevState=>({data:[...prevState.data.filter(function(e) { return e.id !== id; })]}));
              }else{
                   this.setState({
                     actionStatus:"FALSE",
                   });
                   this.setState(prevState => ({
                     modalActionStatus:!prevState.modalActionStatus,
                     }));
                 }
              }
            
          });
         
  };
  handleUpdate = () => {
    console.log("handleUpdate")

    const userstoryService = new proto.userstory.UserStoryClient('http://54.255.233.193:8085');
    //some data of request (get that from frontend)
    console.log(userstoryService)
    var metadata = {};
    //make a request to server

    var UpdateUserStoryReq= new proto.userstory.UpdateUserStoryReq();
//     string updaterId = 1;
// 	string projectId = 2;
// 	string userstoryId = 3;
// 	string role = 4;
// 	string want = 5;
// 	string so = 6;
// string cookie = 7;
    UpdateUserStoryReq.setUpdaterid(this.state.requesterId);
    UpdateUserStoryReq.setProjectid(this.props.projectId);
    UpdateUserStoryReq.setUserstoryid(this.state.userstoryIdUpdate);
    UpdateUserStoryReq.setRole(this.state.asUpdate);
    UpdateUserStoryReq.setWant(this.state.wantUpdate);
    UpdateUserStoryReq.setSo(this.state.soUpdate);
    UpdateUserStoryReq.setCookie(this.state.cookie);

    var toto=userstoryService.updateUserStory(UpdateUserStoryReq, metadata, (err, response) => {
      console.log("connect")
      if (err) { //if error
         console.log(err);
         console.log("error")
      } else { //if success
              //get response
              console.log("response")
              console.log(response);
              console.log(response.getStatus());
              if(response.getStatus()=="SUCCESS")
              {
                this.setState({
                  actionStatus:"SUCCESS",
                });
                this.setState(prevState => ({
                  modalEdit: !prevState.modalEdit,
                  modalActionStatus:!prevState.modalActionStatus,
                  }));
                  const tmpdata = this.state.data.map(p =>
                    p.id === this.state.userstoryIdUpdate
                      ? { ...p, name: this.state.nameUpdate,as:this.state.asUpdate,
                        want:this.state.wantUpdate,so:this.state.so}
                      : p
                  );
                 
                  this.setState({
                    data:tmpdata,
                  });
                 
                  
              }else{
                this.setState({
                  actionStatus:"FALSE",
                });
                this.setState(prevState => ({
                  modalEdit: !prevState.modalEdit,
                  modalActionStatus:!prevState.modalActionStatus,
                  }));
              }
            }
          });
          console.log(toto)
  };

  // componentDidMount(){
  //   this.resetAddForm();
  // }
  render() {
     const {
      data,
      name,
      as,
      want,
      so,
    } = this.state;
    let that=this;
    return (
      <Row>
        <Modal size="sm"  isOpen={that.state.modalActionStatus} toggle={that.toggleActionStatus} className={that.props.className}>
          <ModalBody>
            <center><h4>{that.state.actionStatus}</h4></center>
          </ModalBody>
          </Modal>
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
                      <th>Name<i class="fa fa-sort"></i></th>
                      <th>As a...<i class="fa fa-sort"></i></th>
                      <th>I want to be able to... <i class="fa fa-sort"></i></th>
                      <th>So that... <i class="fa fa-sort"></i></th>
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
                                          <Input type="text" id="name" name="name" placeholder="name" value={name} onChange={that.onTextboxChangename}/>
                                          
                                        </Col>
                                      </FormGroup>           
                                      <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="text-input">As a...</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                          <Input type="text" id="as" name="as" placeholder="As a..." value={as} onChange={that.onTextboxChangeas}/>
                                          
                                        </Col>
                                      </FormGroup>
                                       <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="text-input">I want to be able to...</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                          <Input type="text" id="want" name="want" placeholder="I want to be able to..." value={want} onChange={that.onTextboxChangewant}/>
                                          
                                        </Col>
                                      </FormGroup>   
                                       <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="textarea-input">So that...</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                          <Input type="textarea" name="so" id="so" rows="9"
                                                 placeholder="Content..."  value={so} onChange={that.onTextboxChangeso}/>
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
                   <tbody>{data.map(function(item, key) {
                 return (
                    <tr key = {key}>
                        <td>{item.name}</td>
                        <td>{item.as}</td>
                        <td>{item.want}</td>
                        <td>{item.so}</td>
                        <td>
                         
                          <Button color="warning" size="sm" onClick={(event)=>{that.toggleEdit();that.onGetUpdate(item.id,item.name,item.as,item.want,item.so)}}><i class="fa fa-edit"></i></Button>
                          <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} >
                              <ModalHeader toggle={that.toggleEdit}>UserStory</ModalHeader>
                              <ModalBody>
                              <Form className="form-horizontal">    
                                      <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="text-input">Name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                          <Input type="text" id="name" name="name" placeholder="name" value={item.name} onChange={that.onTextboxChangename}/>
                                          
                                        </Col>
                                      </FormGroup>           
                                      <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="text-input">As a...</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                          <Input type="text" id="as" name="as" placeholder="As a..." value={item.role} onChange={that.onTextboxChangeas}/>
                                          
                                        </Col>
                                      </FormGroup>
                                       <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="text-input">I want to be able to...</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                          <Input type="text" id="want" name="want" placeholder="I want to be able to..." value={item.want} onChange={that.onTextboxChangewant}/>
                                          
                                        </Col>
                                      </FormGroup>   
                                       <FormGroup row>
                                        <Col md="3">
                                          <Label htmlFor="textarea-input">So that...</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                          <Input type="textarea" name="so" id="so" rows="9"
                                                 placeholder="Content..."  value={item.so} onChange={that.onTextboxChangeso}/>
                                        </Col>
                                      </FormGroup>                     
                                  </Form>                                       
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={that.handleUpdate}>Submit</Button>{' '}
                                <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                              </ModalFooter>
                          </Modal>
                          
                          <Button type="submit" size="sm" color="danger" onClick={(event) => {  that.handleDelete(item.id)}}><i class="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                  )
               
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
