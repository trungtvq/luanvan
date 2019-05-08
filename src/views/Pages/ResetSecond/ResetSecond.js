import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import {
  getFromStorage,
  } from '../../../service/storage';
import Logout from './../../../components/Logout'

import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
const proto = {};
proto.auth = require('./../../../gRPC/auth/auth_grpc_web_pb');

class ResetSecond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      Username:'',
      Code:'',
      NewPassword:'',
    };
    this.onTextboxChangeCode = this.onTextboxChangeCode.bind(this);
    this.onTextboxChangeUsername = this.onTextboxChangeUsername.bind(this);
    this.onTextboxChangeNewPassword = this.onTextboxChangeNewPassword.bind(this);
    
    this.onResetFinal = this.onResetFinal.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }


  onTextboxChangeCode(event) {
    this.setState({
      Code: event.target.value,
    });
  }

  onTextboxChangeUsername(event) {
    this.setState({
      Username: event.target.value,
    });
  }
  
  onTextboxChangeNewPassword(event) {
    this.setState({
      signUpName: event.target.value,
    });
  }

  onResetFinal() {
    // Grab state
    const {
      Username,
      Code,
      NewPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });
    //create service to request
    const authService = new proto.auth.AuthClient('54.255.233.193:8085');
    //metadab will be config later
    var metadata = {};
    
    //create var for react
    var ResetPasswordFinalStepReq = new proto.auth.ResetPasswordFinalStepReq();
    //set data from frontend to this var
    ResetPasswordFinalStepReq.setUsername(Username);
    ResetPasswordFinalStepReq.setToken(Code);
    ResetPasswordFinalStepReq.setPassword(NewPassword);
      //make a request to server
      var getTodo = authService.resetPasswordFinalStep(ResetPasswordFinalStepReq, metadata, (err, response) => {
        if (err) { //if error
          console.log(err);
        } else { //if success
          //get response
          const SignInRes = response.getResponse();
          // if (SignInRes == null) {// if response null => not found
          //   console.log(`Something was wrong ${signUpEmail} wasn't found`);
          // } else {
          //   console.log(`Fetched TODO with ID ${signUpEmail}: ${SignInRes}`);
          // }
        }
      });
      
  }

 

  render() {
    const {
      token,
      Username,
      Code,
      NewPassword,
    } = this.state;
    return (
      <div>
        <AppAppBar />
        <div><br></br></div>
        <Container>
            <Row className="justify-content-center">
              <Col md="9" lg="7" xl="6">
                <Card className="mx-4">
                  <CardBody className="p-4">
                    <Form>
                      <h1>Reset account</h1>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username"  value={Username}
                onChange={this.onTextboxChangeUsername}/>
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Code" autoComplete="code" value={Code}
                onChange={this.onTextboxChangeCode}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="NewPassword" autoComplete="NewPassword" value={NewPassword}
                onChange={this.onTextboxChangeNewPassword}/>
                    </InputGroup>
                     
                     <Button color="success" block onClick={this.onResetFinal}>Submit</Button>
                    
                    </Form>
                  </CardBody>
                  
                </Card>
              </Col>
            </Row>
          </Container>
        
        <AppFooter />
      </div>   
    );
  }
}


export default ResetSecond;