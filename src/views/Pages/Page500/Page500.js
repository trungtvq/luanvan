import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect } from 'react-redux'
import {removeLogin} from '../../../actions'
import cookie from 'react-cookies';

const proto = {};
proto.myprofile = require('./../../../gRPC/myprofile/myprofile_grpc_web_pb');
class Page500 extends Component {
  constructor(props) {
    super(props);
  this.state={
      av:''
  }}
  
  componentWillMount(){
//vuc me cai firefox
          //create service to request
          const myprofileService = new proto.myprofile.MyProfileClient('54.255.233.193:8085');
          //some data of request (get that from frontend)
          const username = "useridoremail";

          //create var for react
          var ProfileReq = new proto.myprofile.ProfileReq();

          //set data from frontend to this var
          ProfileReq.setUsername(username);

          //metadab will be config later
          var metadata = {};
          //make a request to server
          var getTodo = myprofileService.getProfileSimple(ProfileReq, metadata, (err, response) => {
            if (err) { //if error
              console.log(err);
            } else { //if success
              //get response
              console.log("response")
              console.log(response);
              console.log("get avatar")
              console.log()

              this.setState({
                av: response.getAvatar()
              });
              

              const ProfileRes = response[0];
              if (ProfileRes == null) {// if response null => not found
			
                console.log(`Something was wrong ${username} wasn't found`);
              } else {
                console.log(`Fetched TODO with ID ${username}: ${ProfileRes}`);
              }
            }
          });
  }
  render() {
    this.props.dispatch(removeLogin())
    cookie.remove('userId')
    cookie.remove('tokenAccess')
    
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
function mapStateToProps(state) {
  const { changeStatusLogin } = state
  const { isLogin, id, token } = changeStatusLogin
  return {
      isLogin, id, token
  }
}
export default connect(mapStateToProps)(Page500);
