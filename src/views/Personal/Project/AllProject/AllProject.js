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

    

    this.state = {
      modalAdd: false,
      modalEdit: false,
      modalTranferOwner: false,
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
  componentWillMount(){
    const myprojectService = new proto.myproject.MyprojectClient('http://54.255.233.193:8085');
    //some data of request (get that from frontend)
    const username = "useridoremail";
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
              if (ProfileRes == null) {// if response null => not found
      
                console.log(`Something was wrong ${username} wasn't found`);
              } else {
                console.log(`Fetched TODO with ID ${username}: ${ProfileRes}`);
              }
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
            <Col xs="12" sm="3" md="3">                        
                  <Card>
                    <CardHeader>
                      <Link to="/DashBoard">
                        <i className=""></i><strong>Web bán giày</strong>
                        </Link>
                        <div className="card-header-actions">
                        <div className="card-header-action btn btn-setting" ><i className="icon-trash"></i>{this.props.buttonLabel}</div>
                        <div className="card-header-action btn btn-setting" onClick={that.toggleEdit}><i className="icon-settings"></i>{this.props.buttonLabel}</div>
                        <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} className={that.props.className}>
                          <ModalHeader toggle={that.toggleEdit}>Project</ModalHeader>
                          <ModalBody>
                            <div class="card  bg-primary mb-3">
                              <div class="card-body">
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  
                                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="text-input">Project Name</Label>
                                    </Col>
                                    <Col xs="5" md="5">
                                      <Input type="text" id="ProjectName" name="ProjectName" placeholder="Project Name" />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="date-input">Start </Label>
                                    </Col>
                                    <Col xs="3" md="3">
                                      <Input type="time" id="timeStart" name="timeStart"/>
                                    </Col>
                                    <Col xs="3" md="3">
                                      <Input type="date" id="date-input" name="date-input" />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="date-input">End </Label>
                                    </Col>
                                    <Col xs="3" md="3">
                                      <Input type="time" id="timeEnd" name="timeEnd"/>
                                      </Col>
                                      <Col xs="3" md="3">
                                        <Input type="date" id="dateEnd" name="dateEnd" />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Col md="3">
                                      <Label htmlFor="date-input">Private </Label>
                                      </Col>
                                      <Col xs="5" md="5">
                                      <Input type="checkbox" id="Private" name="Private"/>
                                      </Col>
                                      </FormGroup>                      
                                </Form>
                              </div>
                            </div>                         
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={that.toggleEdit}>Submit</Button>{' '}
                            <Button color="secondary" onClick={that.toggleEdit}>Cancel</Button>
                          </ModalFooter>
                        </Modal>
                        </div>
                    </CardHeader>
                    <CardBody>       
                      <h6>OwnerName: tam@gmail.com</h6>                       
                      <h6>Public</h6>
                      <h6>Start:   9:00 (3/01/2019)</h6>
                      <h6>  End:   9:00 (23/05/2019)</h6>
                      <Progress value={50} />
                      <div className="text-center">50%</div>
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
            </Row>              
          </Col>
        </Row>
      </Container>  
    </div>  
    
     
    );
  }
}

export default AllProject;
