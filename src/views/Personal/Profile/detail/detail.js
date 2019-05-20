import React, { Component } from 'react';

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Table,
  Pagination,
PaginationItem,
PaginationLink,
ModalFooter,
ModalBody,
Modal,
ModalHeader
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'
import ImageUploader from 'react-images-upload';

class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        "img":'',
        "point":"8/10",
        "fullname":"Nguyễn Văn A",
        "address":"13 Lí Thường Kiệt, p9, Q10",
        "birthday":"26/5/1993",
        "email":"NguyenA@gmail.com",
        "fb":"https://www.facebook.com/NguyenA.9615",
        "workplace":"freelancer",
        "skill":"Databases etc: Oracle 8 to 10g, PL/SQL, MS SQL Server, My SQL • Programming Languages: C#, SharePoint, VB, ASP,  Java, Progress, XML,  X/HTML, JavaScript/VBScript, T-SQL, PL/SQL, C, C++ , Pascal • Programming Tools: Visual Studio 98, 2003, 2005, 2008, Eclipse, Microsoft Visio, Keil uVison • App server / Middleware: Microsoft IIS. • Framework: .NET, MDK-ARM • Configuration Management tools: VSS, Visual SVN • Browsers: IE 3-8, Firefox 1-3 • OOAD/OOP: Object Oriented Analysis (OOA), Object Oriented Design (OOD), Object Oriented Programming (OOP), Unified Modeling Language (UML) ",
      },
      modalEdit: false,
      selectedFile:null,
      pictures: [],
      // img:'',
      // point:"",
      // fullname:"",
      // address:"",
      // birthday:"",
      // email:"",
      // fb:"",
      // workplace:"",
      // skill:'',
    }
  };
  componentDidMount() {
    //viet ham lay thong tin người dùng đổ vào biến data
  }
  toggleEdit=(event)=> {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit,
    }));
  }
  onTextboxChangeFullname=(event)=> {
    var tmp=this.state.data;
    tmp.fullname=event.target.value;
    this.setState({
      data: tmp,
    });
  }
  onTextboxChangeAddress=(event)=> {
    var tmp=this.state.data;
    tmp.address=event.target.value;
    this.setState({
      data: tmp,
    });
  }
  onTextboxChangeAddress=(event)=> {
    var tmp=this.state.data;
    tmp.address=event.target.value;
    this.setState({
      data: tmp,
    });
  }
  onTextboxChangeBirthday=(event)=> {
    var tmp=this.state.data;
    tmp.birthday=event.target.value;
    this.setState({
      data: tmp,
    });
  }
  onTextboxChangeEmail=(event)=> {
    var tmp=this.state.data;
    tmp.email=event.target.value;
    this.setState({
      data: tmp,
    });
  }
  onTextboxChangeFb=(event)=> {
    var tmp=this.state.data;
    tmp.fb=event.target.value;
    this.setState({
      data: tmp,
    });
  }
  onTextboxChangeWorkplace=(event)=> {
    var tmp=this.state.data;
    tmp.workplace=event.target.value;
    this.setState({
      data: tmp,
    });
  }
  onTextboxChangeSkill=(event)=> {
    var tmp=this.state.data;
    tmp.skill=event.target.value;
    this.setState({
      data: tmp,
    });
  }
  onDrop=(picture)=> {
    this.setState({
      pictures: this.state.pictures.concat(picture),
  });
  if(this.state.pictures[0])
  console.log("hi______"+this.state.pictures[0].toString());
}
  render() {
    let that=this;
    return (
      <div>
      <div>
       <Demo />
      </div>
      <div><br></br></div>
      <Container>
        <Row>
          <Col>      
            <Card>             
              <CardBody>
                <img src={'../../assets/img/avatar/myavatar.png'} className="img-avatar" />
                <Form  className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Point</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.point}/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Full name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.fullname}/>    
                      </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.address}/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Date of Birth </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.birthday}/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.email}/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Fb</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.fb}/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Workplace</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.workplace}/>    
                    </Col>
                  </FormGroup>

                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Skill</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" id="text-input" name="text-input" placeholder="" value={this.state.data.skill}/>   
                       
                    </Col>
                  </FormGroup>
                 
                </Form>
              </CardBody>
              <CardFooter>
              
                <Button color="warning" size="sm" onClick={that.toggleEdit}>
                  <i class="fa fa-edit"></i>
                </Button>
         
              <Modal size="lg" isOpen={that.state.modalEdit} toggle={that.toggleEdit} >
                              <ModalHeader toggle={that.toggleEdit}>Profile</ModalHeader>
                              <ModalBody>
                              <Form  className="form-horizontal">  
                              <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Image</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                  <ImageUploader
                                      withIcon={true}
                                      buttonText='Choose images'
                                      onChange={this.onDrop}
                                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                      maxFileSize={5242880}
                                  />
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Point</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.point}/>    
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                      <Label htmlFor="text-input">Full name</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                      <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.fullname} onChange={that.onTextboxChangeFullname}/>    
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Address</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.address} onChange={that.onTextboxChangeAddress}/>    
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Date of Birth </Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="date" id="text-input" name="text-input" placeholder="" value={this.state.data.birthday} onChange={that.onTextboxChangeBirthday}/>    
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Email</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.email} onChange={that.onTextboxChangeEmail}/>    
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Fb</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.fb} onChange={that.onTextboxChangeFb}/>    
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Workplace</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="" value={this.state.data.workplace} onChange={that.onTextboxChangeWorkplace}/>    
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Skill</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="textarea" id="text-input" name="text-input" placeholder="" value={this.state.data.skill} onChange={that.onTextboxChangeSkill}/>   
                                    
                                  </Col>
                                </FormGroup>
                              
                              </Form>
                              </ModalBody>
                              {/* <div data-id={item.id} onClick={that.handleUpdate}> */}
                              <ModalFooter>
                               

                                  <Button color="primary" >Submit</Button>

                              </ModalFooter>
                              {/* </div> */}

                            </Modal>
              </CardFooter>       
            </Card>
          </Col>
        </Row>
       </Container>
        </div>
    );
  }
}

export default detail;
