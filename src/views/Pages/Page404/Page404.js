import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const proto = {};
proto.auth = require('./../../../gRPC/auth/auth_grpc_web_pb');
class Page404 extends Component {

  render() {
 
          //create service to request
          const authService = new proto.auth.AuthClient('http://trungtvq.ddns.net:8080');
          //some data of request (get that from frontend)
          const username = "useridoremail";
          const password = "mypass"

          //create var for react
          var SignInReq = new proto.auth.SignInReq();

          //set data from frontend to this var
          SignInReq.setUsername(username);
          SignInReq.setPassword(password);

          //metadab will be config later
          var metadata = {};

          //make a request to server
          var getTodo = authService.signIn(SignInReq, metadata, (err, response) => {
            if (err) { //if error
              console.log(err);
            } else { //if success
              //get response
              const SignInRes = response.getSignInRes();
              if (SignInRes == null) {// if response null => not found
                console.log(`Something was wrong ${username} wasn't found`);
              } else {
                console.log(`Fetched TODO with ID ${username}: ${SignInRes}`);
              }
            }
          });
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Oops! You're lost.</h4>
                <p className="text-muted float-left">The page you are looking for was not found.</p>
              </div>
              <InputGroup className="input-prepend">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input size="16" type="text" placeholder="What are you looking for?" />
                <InputGroupAddon addonType="append">
                  <Button color="info">Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page404;
