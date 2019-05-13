import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import {
  getFromStorage,
  } from '../../../service/storage';
import Logout from './../../../components/Logout'
import cookie from 'react-cookies';
import {saveLogin} from '../../../actions'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
const proto = {};
proto.auth = require('./../../../gRPC/auth/auth_grpc_web_pb');

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpName:'',
      signUpEmail: '',
      signUpPassword: '',
    };
this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    
    this.onTextboxChangeSignUpName = this.onTextboxChangeSignUpName.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }



  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }
  onTextboxChangeSignUpName(event) {
    this.setState({
      signUpName: event.target.value,
    });
  }

  onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
      signUpName,
    } = this.state;

    this.setState({
      isLoading: true,
    });
    console.log("onSignUp")
    //create service to request
    const authService = new proto.auth.AuthClient('http://54.255.233.193:8085');
    //metadab will be config later
    var metadata = {};
    
    //create var for react
    var SignUpReq = new proto.auth.SignUpReq();
    //set data from frontend to this var
    SignUpReq.setUsername(signUpEmail);
    SignUpReq.setPassword(signUpPassword);
    SignUpReq.setName(signUpName);
      //make a request to server
      console.log(signUpEmail+":"+signUpName+":"+signUpPassword)
      console.log("still no error")

      var getTodo = authService.signUp(SignUpReq, metadata, (err, response) => {
        if (err) { //if error
          console.log("error")
          console.log(err);
        } else { //if success
          //get response
          console.log("success")
          console.log(response.getStatus())
          console.log(response.getError())
          console.log(response.getResponse()) //no have value yet
          console.log(response.getType())//type of NO PAY member: normal
          console.log(response.getId())
          console.log(response.getSession())
          if (response.getStatus()=="SUCCESS"){
            cookie.save('userId',response.getId())
            cookie.save('tokenAccess',response.getSession())
            this.props.dispatch(saveLogin(response.getId(),response.getSession()))

          }
        }
      });
      
  }

 

  render() {
        const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpPassword,
      signUpName,
      signUpError,
    } = this.state;

    

 
    return (
      <div>
        <AppAppBar />
      <div className="app flex-row align-items-center">
    
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Name" autoComplete="Name"  value={signUpName}
              onChange={this.onTextboxChangeSignUpName}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email" autoComplete="email" value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}/>
                    </InputGroup>
                    
                    <Button color="success" block onClick={this.onSignUp}>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <AppFooter />
      </div>
    );
  }


  }

  function mapStateToProps(state) {
    const { changeStatusLogin } = state
    const { isLogin, id, token } = changeStatusLogin
    return {
        isLogin, id, token
    }
  }
  export default connect(mapStateToProps)(Register);
