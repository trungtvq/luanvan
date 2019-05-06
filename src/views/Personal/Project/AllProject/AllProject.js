import React, { Component } from 'react';
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
Navbar,

NavbarBrand,

NavbarToggler,

Collapse,

Nav,

NavItem,

NavLink,

UncontrolledDropdown,

DropdownToggle,

DropdownMenu,

DropdownItem,

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

  handleDelete = (idOwner,idProject,cookie) => {
    console.log(idOwner);
    console.log(idProject);
    console.log(cookie);
  };
  
  handleUpdate = (idProject,idOwner,userName,projectName,start,end,status,cookie) => {
   
  };
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
  componentWillMount(){
    const myprojectService = new proto.myproject.MyprojectClient('http://54.255.233.193:8084');
    //some data of request (get that from frontend)
    console.log(myprojectService)
    //create var for react
   // var AddNewProjectReq = new proto.myproject.AddNewProjectReq();
    //rpc addNewProject(AddNewProjectReq) returns (AddNewProjectRes) {}
    // //set data from frontend to this var
    // ProfileReq.setUsername(username);
    // string idOwner = 1;
    // string projectName = 2;
    // string start = 3;		//return in form mm/hh/dd/mm/yyyy       phut/gio/ngay/thang/nam
    // string end = 4;		   //return in form mm/hh/dd/mm/yyyy
    // string private = 5;
    // string cookie = 6;
    //metadab will be config later
    var metadata = {};
    //make a request to server

    var AddNewProjectReq= new proto.myproject.AddNewProjectReq();
    //AddNewProjectReq.setIdOwner("tienbede");
    AddNewProjectReq.setUsername("tienbede");
    AddNewProjectReq.setProjectname("tienbede");
    AddNewProjectReq.setStart("tienbede");
    AddNewProjectReq.setEnd("tienbede");
    AddNewProjectReq.setPrivate("tienbede");
    AddNewProjectReq.setCookie("tienbede");

    var toto=myprojectService.addNewProject(AddNewProjectReq, metadata, (err, response) => {
      console.log("connect")
      if (err) { //if error
         console.log(err);
         console.log("error")
      } else { //if success
              //get response
              console.log("response")
              console.log(response);
              console.log("get avatar")
              console.log(response.getStatus())

              // this.setState({
              //   av: response.getAvatar()
              // });
              
              const ProfileRes = response[0];
            }
          });
          console.log(toto)
  }
  render() {
    let that=this;
    //create service to request
    

    return (
    <div>
      <Demo/>
      <div><br/></div>
      <Container>
        <Row>
          <Col>  
            <Row>
            {this.state.data.map(function(item, key) {
    
             return (
              <Col xs="12" sm="3" md="3">                        
              <Card>
                <CardHeader>
                  <Link to="/DashBoard">
                    <i className=""></i><strong>{item.projectName}</strong>
                    </Link>
                    <div className="card-header-actions">
                    <div className="card-header-action btn btn-setting"  onClick={that.handleDelete("idOwner","idProject","cookie")}><i className="icon-trash"></i>{that.props.buttonLabel}</div>
                    <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-settings"></i>{that.props.buttonLabel}</div>
                    <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                      <ModalHeader toggle={that.toggleEdit}>Project</ModalHeader>
                      <ModalBody>
                        <div class="card  bg-primary mb-3">
                          <div class="card-body">
                          <Form  className="form-horizontal">               
                                            
                                            <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="text-input">Owner Name</Label>
                                                </Col>
                                                <Col xs="5" md="5">
                                                  <Input type="text" id="OwnerName" name="OwnerName" placeholder="Name" value={that.state.OwnerName} onChange={that.onTextboxChangeOwnerName} />
                                                </Col>
                                              </FormGroup>
  
  
                                              <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="text-input">Project Name</Label>
                                                </Col>
                                                <Col xs="5" md="5">
                                                  <Input type="text" id="ProjectName" name="ProjectName" placeholder="Project Name" value={that.state.ProjectName} onChange={that.onTextboxChangeProjectName} />
                                                  
                                                </Col>
                                              </FormGroup>
  
                                              <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="date-input">Start </Label>
                                                </Col>
                                                <Col xs="3" md="3">
                                                <Input type="time" id="timeStart" name="timeStart" value={that.state.timeStart} onChange={that.onTextboxChangetimeStart} />
                                                </Col>
                                                <Col xs="3" md="3">
                                                  <Input type="date" id="dateStart" name="dateStart" value={that.state.dateStart} onChange={that.onTextboxChangedateStart}/>
                                                </Col>
                                              </FormGroup>
  
                                              <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="date-input">End </Label>
                                                </Col>
                                                <Col xs="3" md="3">
                                                <Input type="time" id="timeEnd" name="timeEnd" value={that.state.timeEnd} onChange={that.onTextboxChangetimeEnd}/>
                                                </Col>
                                                <Col xs="3" md="3">
                                                  <Input type="date" id="dateEnd" name="dateEnd" />
                                                </Col>
                                              </FormGroup>
                                              
                                              <FormGroup row>
                                                <Col md="5">
                                                  <Label htmlFor="date-input">Private </Label>onTextboxChangeStatus
                                                </Col>
                                                <Col xs="5" md="5">
                                                  <Input type="checkbox" id="Private" name="Private" value={that.state.status} onChange={that.onTextboxChangeStatus}/>
                                                </Col>
                                              </FormGroup>
                                            </Form>
                          </div>
                        </div>                         
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={that.handleUpdate('idProject','idOwner','userName','projectName','start','end','status','cookie')}>Submit</Button>{' '}
                        <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
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
                    <ModalHeader toggle={that.toggleTranferOwner}>Web bán giày</ModalHeader>
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

export default AllProject;
