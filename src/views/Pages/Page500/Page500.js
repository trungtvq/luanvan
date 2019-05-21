import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const proto = {};
proto.myprofile = require('./../../../gRPC/myprofile/myprofile_grpc_web_pb');
class Page500 extends Component {
  constructor(props) {
    super(props);
  this.state={
      av:''
  }}
   
  render() {
    
    
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-4">500</h1>
                <h4 className="pt-3">Houston, we have a problem!</h4>
                <p className="text-muted float-left">The page you are looking for is temporarily unavailable.</p>
              </span>
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
              <img src={`data:image/jpeg;base64,${this.state.av}`} alt="Logo" />;
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default (Page500);
