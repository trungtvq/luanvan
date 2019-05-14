import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchAllProject, forceRerender} from './../../../../actions'
import {addProject} from './../../../../actions'

import { Badge, 
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
PaginationLink, 
Card, 
CardBody, 
CardHeader, 
CardFooter,
Jumbotron,
Progress,
Modal,
ModalHeader,
ModalBody,
Form,
FormGroup,

Label,

ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'

const proto = {};
proto.myproject = require('./../../../../gRPC/myproject/myproject_grpc_web_pb');



class AllProject extends Component {
  constructor(props) {
    super(props);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleTranferOwner = this.toggleTranferOwner.bind(this);
    this.onTextboxChangeOwnerName = this.onTextboxChangeOwnerName.bind(this);
    this.onTextboxChangeProjectName = this.onTextboxChangeProjectName.bind(this);
    this.onTextboxChangetimeStart = this.onTextboxChangetimeStart.bind(this);
    this.onTextboxChangedateStart = this.onTextboxChangedateStart.bind(this);
    this.onTextboxChangetimeEnd = this.onTextboxChangetimeEnd.bind(this);
    this.onTextboxChangedateEnd = this.onTextboxChangedateEnd.bind(this);

    this.state = {
      result:{},
      modalAdd: false,
      modalEdit: false,
      modalTranferOwner: false,

      OwnerName:'',
      ProjectName:'',
      timeStart:'',
      dateStart:'',
      timeEnd:'',
      dateEnd:'',
      status:false,


      data: [ 
        {
          "projectName":"Web bán giày",
          "idOwner":"tam@gmail.com",
          "status":"public",
          "start":" 9:00 3/01/2019",
          "end":"9:00 23/05/2019",
          "progress":20,
        },
        {
          "projectName":"Web bán giày",
          "idOwner":"lam@gmail.com",
          "status":"public",
          "start":" 9:00 3/01/2019",
          "end":"9:00 23/05/2019",
          "progress":50,
        },
      ],
      }
    };
    componentDidMount() {
      console.log("willmount")
      const myprojectService = new proto.myproject.MyprojectClient('http://overlead.co:8085');    
    var metadata = {};   
    var AddNewProjectReq= new proto.myproject.GetAllProjectReq();
    AddNewProjectReq.setRequesterid(cookie.load("userId"));
    AddNewProjectReq.setCookie(cookie.load("accessToken"));
    var response=myprojectService.getAllProject(AddNewProjectReq, metadata)
    let dispatch=this.props.dispatch
   // let count=0;
    response.on('data', function(response) {
      if (response.getStatus()=="SUCCESS"){
        dispatch(addProject(response.getProjectid(),response.getTopic(),response.getProjectname(),response.getStart(),response.getEnd(),response.getPrivate())) 
        //count++;
       // if (count%20==0) dispatch(forceRerender())

      }

    });
    response.on('status', function(status) {
      console.log("status")

      console.log(status.code);
      console.log(status.details);
      console.log(status.metadata);
    });
    response.on('end', function(end) {
      // stream end signal
      console.log("end")
      console.log(end)
    });
  }
  
    componentDidUpdate(prevProps) {
      console.log("componentDidUpdate")

    }
  toggleAdd() {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }
  toggleEdit() {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }
  toggleTranferOwner() {
    this.setState(prevState => ({
    modalTranferOwner: !prevState.modalTranferOwner
    }));
  }


  onTextboxChangeOwnerName(event) {
    this.setState({
      OwnerName: event.target.value,
    });
  }
  onTextboxChangeProjectName(event) {
    this.setState({
      ProjectName: event.target.value,
    });
  }
  onTextboxChangetimeStart(event) {
    this.setState({
      timeStart: event.target.value,
    });
  }
  onTextboxChangedateStart(event) {
    this.setState({
      dateStart: event.target.value,
    });
  }
  onTextboxChangetimeEnd(event) {
    this.setState({
      timeEnd: event.target.value,
    });
  }
  onTextboxChangedateEnd(event) {
    this.setState({
      dateEnd: event.target.value,
    });
  }
  onTextboxChangeStatus(event) {
    this.setState(prevState => ({
      status: !prevState.status,
    }));
  }


  handleUpdate = () => {
    const myprojectService = new proto.myproject.MyprojectClient('http://overlead.co:8085');
    
    var metadata = {};
    var UpdateProjectReq= new proto.myproject.UpdateProjectReq();
    UpdateProjectReq.setRequesterid("tienbede");
    UpdateProjectReq.setRequesterid(cookie.load("userId"));
    UpdateProjectReq.setProjectname("tienbede");
    UpdateProjectReq.setProjectid("tienbede");
    UpdateProjectReq.setStart("tienbede");
    UpdateProjectReq.setEnd("tienbede");
    UpdateProjectReq.setPrivate("tienbede");
    UpdateProjectReq.setCookie(cookie.load("tokenAccess"));

    myprojectService.updateProject(UpdateProjectReq, metadata, (err, response) => {
      if (err) { //if error
         console.log(err);
         console.log("error updateProject")
      } else { //if success
        console.log(response.getStatus())
      }
          });
  }

  handleDelete = () => {
    const myprojectService = new proto.myproject.MyprojectClient('http://overlead.co:8085');
    
    var metadata = {};
  
    var DeleteProjectReq= new proto.myproject.DeleteProjectReq();
    //AddNewProjectReq.setIdOwner("tienbede");
    DeleteProjectReq.setRequesterid("tienbede");
    DeleteProjectReq.setProjectid("tienbede");
    DeleteProjectReq.setCookie("tienbede");

    myprojectService.deleteProject(DeleteProjectReq, metadata, (err, response) => {
      if (err) { //if error
         console.log(err);
         console.log("error")
      } else { //if success
              //get response
              console.log(response.getStatus())

              // this.setState({
              //   av: response.getAvatar()
              // });
              
            }
          });
  };

  
  render() {
    let that=this;    
    const {
      OwnerName,
      ProjectName,
      timeStart,
      dateStart,
      timeEnd,
      dateEnd,
      status,   
      
    } = this.state;
    return (
    <div>
      <Demo/>
      <div><br/></div>
      <Container>
        <Row>
          <Col>  
            <Row>
            {
                this.props.project.map(function(item,key){
             return (
              <Col xs="12" sm="3" md="3">                        
              <Card>
                <CardHeader>
                  <Link to="/DashBoard">
                    <i className=""></i><strong>{item.projectName}</strong>
                    </Link>
                    <div className="card-header-actions">
                    <div className="card-header-action btn btn-setting"  onClick={that.handleDelete}><i className="icon-trash"></i>{that.props.buttonLabel}</div>
                    <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-settings"></i>{that.props.buttonLabel}</div>                    
                    </div>
                </CardHeader>
                <CardBody>             
                  <h6>Owner Name: {item.idOwner}</h6>        
                  <h6>{item.status}</h6>
                  <h6>Start:  {item.start}</h6>
                  <h6>  End:  {item.end}</h6>
                  <Progress value={item.progress}/>
                  <div className="text-center">{item.progress}%</div>
                </CardBody>
                <CardFooter>    
                  <center>
                    <Button className="button-center" type="submit" size="sm" color="success" onClick={that.toggleTranferOwner}><i class="fa fa-share"></i></Button>  
                    <Modal size="lg" isOpen={that.state.modalTranferOwner} toggle={that.toggleTranferOwner} className={that.props.className}>
                    <ModalHeader toggle={that.toggleTranferOwner}>item.projectName</ModalHeader>
                      <ModalBody>
                        <div class="card  bg-primary mb-3">
                          <div class="card-body">
                            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="text-input">TranferOwner Name</Label>
                                </Col>
                                <Col xs="5" md="5">
                                  <Input type="text" id="TranferOwner" name="TranferOwner" placeholder=" Name" />
                                </Col>
                              </FormGroup>
                            </Form>
                          </div>
                        </div>                         
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={that.toggleTranferOwner}>Submit</Button>{' '}
                        <Button color="secondary" onClick={that.toggleTranferOwner}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                  </center>
                </CardFooter>      
              </Card>                     
              </Col>     
             )
                })}
            
            </Row>              
          </Col>
        </Row>
      </Container>  
    </div>  
    
     
    );
  }
}
function mapStateToProps(state) {
  console.log("mapStateToProps")
  const { updateProjectLoaded } = state
  const {project,needUpdate}=updateProjectLoaded
  return {
    project,needUpdate
  }
}
export default connect(mapStateToProps)(AllProject);
