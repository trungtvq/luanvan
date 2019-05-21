import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';

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
import cookie from 'react-cookies';
const proto = {};
proto.profile = require('../../../../gRPC/myprofile/myprofile_grpc_web_pb');
class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      modalEdit: false,
      selectedFile: null,
      pictures: [],
      avatar: '',
      point: "",
      fullname: "",
      address: "",
      birthday: "",
      email: "",
      fb: "",
      workplace: "",
      skill: '',
    }
  };
  loadProfile=()=>{
    const myprofileService = new proto.profile.ProfileClient('https://www.overlead.co');
    var metadata = {};
    var GetProfileReq = new proto.profile.GetProfileReq();
    GetProfileReq.setRequesterid(cookie.load("userId"));
    GetProfileReq.setAccesstoken(cookie.load("accessToken"));
    let that = this
    myprofileService.getProfile(GetProfileReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error getProfile")
      } else { //if success
        console.log(response.getStatus())
        if (response.getStatus() == "SUCCESS") {
          that.setState({
            data: Object.assign({}, {
              img: response.getAvatar(),
              point: response.getPoint(),
              fullname: response.getName(),
              address: response.getAddress(),
              birthday: response.getBirthday(),
              email: response.getEmail(),
              fb: response.getFb(),
              workplace: response.getWorkplace(),
              skill: response.getSkill()
            })

          })
        };
      }
    })
  }
  componentDidMount() {
    this.loadProfile()
  }
  updateProfile = () => {
    console.log("updateProfile")
    const myprofileService = new proto.profile.ProfileClient('https://www.overlead.co');
    var metadata = {};
    var UpdateProfileReq = new proto.profile.UpdateProfileReq();
    UpdateProfileReq.setRequesterid(cookie.load("userId"));
    UpdateProfileReq.setAccesstoken(cookie.load("accessToken"));
    UpdateProfileReq.setAvatar(this.state.avatar);
    UpdateProfileReq.setName(this.state.name);
    UpdateProfileReq.setAddress(this.state.address);
    UpdateProfileReq.setBirthday(this.state.birthday);
    UpdateProfileReq.setEmail(this.state.email);
    UpdateProfileReq.setFb(this.state.fb);
    UpdateProfileReq.setWorkplace(this.state.workplace);
    UpdateProfileReq.setSkill(this.state.skill);
    
    let that = this
    myprofileService.updateProfile(UpdateProfileReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error getProfile")
      } else { //if success
        console.log(response.getStatus())
        if (response.getStatus() == "SUCCESS") {
          that.setState(prevState => ({
            
            modalEdit: !prevState.modalEdit,

          }))
          that.loadProfile()



        };
      }
    })
  }
  getFiles(files){
    console.log(files)
    this.setState({ avatar: files.base64 })
  }
  toggleEdit = (event) => {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit,
      avatar: this.state.data.img,
      point: this.state.data.point,
      fullname: this.state.data.fullname,
      address: this.state.data.address,
      birthday: this.state.data.birthday,
      email: this.state.data.email,
      fb: this.state.data.fb,
      workplace: this.state.data.workplace,
      skill: this.state.data.skill,
    }));
  }
  onTextboxChangeFullname = (event) => {
    this.setState({
      fullname: event.target.value,
    });
  }
  onTextboxChangeAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  }

  onTextboxChangeBirthday = (event) => {
    this.setState({
      birthday: event.target.value,
    });
  }
  onTextboxChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  }
  onTextboxChangeFb = (event) => {
    this.setState({
      fb: event.target.value,
    });
  }
  onTextboxChangeWorkplace = (event) => {
    this.setState({
      workplace: event.target.value,
    });
  }
  onTextboxChangeSkill = (event) => {
    this.setState({
      skill: event.target.value,
    });
  }
 
  render() {
    let that = this;
    console.log("state render")
    console.log(this.state.data.img)
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
                <Col xs="3" md="3">
                <img src={`${this.state.data.img}` } className="img-avatar"alt="Avatar" />
                      </Col>
                  <Form className="form-horizontal">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Point</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" disabled={true} name="text-input" placeholder={that.state.point} value={that.state.point} />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Full name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" disabled={true} name="text-input" placeholder="" value={that.state.data.fullname} onchange={that.onTextboxChangeFullname} />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Address</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" disabled={true} name="text-input" placeholder="" value={that.state.data.address} onchange={that.onTextboxChangeAddress} />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Date of Birth </Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" disabled={true} name="text-input" placeholder="" value={that.state.data.birthday} onchange={that.onTextboxChangeBirthday} />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Email</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" disabled={true} name="text-input" placeholder="" value={that.state.data.email} onchange={that.onTextboxChangeEmail} />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Fb</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" disabled={true} name="text-input" placeholder="" value={that.state.data.fb} onchange={that.onTextboxChangeFb} />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Workplace</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" disabled={true} name="text-input" placeholder="" value={that.state.data.workplace} onchange={that.onTextboxChangeWorkplace} />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Skill</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="textarea" id="text-input" disabled={true}  name="text-input" placeholder="" value={that.state.data.skill} onchange={that.onTextboxChangeSkill} />

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
                      <Form className="form-horizontal">
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Image</Label>
                          </Col>
                          <Col xs="12" md="9">
                          <FileBase64
                              multiple={ false }
                               onDone={ this.getFiles.bind(this) } />
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Point</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="text" id="point" name="point" disabled={true} placeholder="" value={that.state.point} />
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Full name</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="" value={that.state.fullname} onChange={that.onTextboxChangeFullname} />
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Address</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="" value={that.state.address} onChange={that.onTextboxChangeAddress} />
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Date of Birth </Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="date" id="text-input" name="text-input" placeholder="" value={that.state.birthday} onChange={that.onTextboxChangeBirthday} />
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Email</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="" value={that.state.email} onChange={that.onTextboxChangeEmail} />
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Fb</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="" value={that.state.fb} onChange={that.onTextboxChangeFb} />
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Workplace</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="" value={that.state.workplace} onChange={that.onTextboxChangeWorkplace} />
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Skill</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="textarea" id="text-input" name="text-input" placeholder="" value={that.state.skill} onChange={that.onTextboxChangeSkill} />

                          </Col>
                        </FormGroup>

                      </Form>
                    </ModalBody>
                    {/* <div data-id={item.id} onClick={that.handleUpdate}> */}
                    <ModalFooter>


                      <Button color="primary" onClick={that.updateProfile}>Submit</Button>

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
