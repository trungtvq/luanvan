import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import cookie from 'react-cookies';

import {
  getFromStorage,
  } from '../../../service/storage';
import Logout from './../../../components/Logout'
import { Link } from 'react-router-dom';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
const proto = {};
proto.auth = require('./../../../gRPC/auth/auth_grpc_web_pb');

class ResetFirst extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      Username:'',
      Type:'',
    };
    this.onTextboxChangeUsername = this.onTextboxChangeUsername.bind(this);
    this.onTextboxChangeType = this.onTextboxChangeType.bind(this);
    
    this.onReset = this.onReset.bind(this);
  }

 

  onTextboxChangeUsername(event) {
    this.setState({
      Username: event.target.value,
    });
  }

  onTextboxChangeType(event) {
    this.setState({
      Type: event.target.value,
    });
  }
  

  onReset() {
    // Grab state
    console.log("onResetFirst")
    const {
      Username,
      Type,
    } = this.state;

    this.setState({
      isLoading: true,
    });
    //create service to request
    const authService = new proto.auth.AuthClient('http://54.255.233.193:8085');
    //metadab will be config later
    var metadata = {};
    
    //create var for react
    var ResetReq = new proto.auth.ResetReq();
    //set data from frontend to this var
    ResetReq.setUsername(Username);
    ResetReq.setType(Type);
      //make a request to server
      var getTodo = authService.resetPassword(ResetReq, metadata, (err, response) => {
        cookie.save("resetUsername",Username)
        if (err) { //if error
          console.log(err);
        } else { //if success
         console.log(response.getStatus())
        }
      });
      
  }

 

  render() {
    const {
      token,
      Username,
      Type,
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
                      {/* <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Type" autoComplete="type" value={Type}
                onChange={this.onTextboxChangeType}/>
                      </InputGroup> */}
                      <Link to="/ResetSecond">
                      <Button color="success" block onClick={this.onReset}>Go to next step</Button>
                      </Link>
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

export default ResetFirst;
