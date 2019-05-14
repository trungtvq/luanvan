
// import React, { Component } from 'react';
// import 'whatwg-fetch';

import {
  getFromStorage,
  setInStorage,
} from '../../../service/storage';
import Demo from '../../../homeNav'
import {saveLogin} from '../../../actions'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import authContext from "../../../contexts/authContext";

import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import { GoogleLogout } from 'react-google-login';
import { GoogleLogin } from 'react-google-login';
import cookie from 'react-cookies';

const proto = {};
proto.auth = require('./../../../gRPC/auth/auth_grpc_web_pb');

const styles = theme => ({
  form: {
    marginTop: theme.spacing.unit * 6,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
  feedback: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Login extends Component {
  static contextType =  authContext;

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentWillMount(){
    console.log("componentWillMount")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }
    constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpEmail: '',
      signUpPassword: '',
    };

    
  }
  

  onTextboxChangeSignInEmail=(event)=> {
    this.setState({
      signInEmail: event.target.value,
    });
    console.log(this.state.signInEmail);
  }

  onTextboxChangeSignInPassword=(event)=> {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail=(event)=> {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword=(event)=> {
    this.setState({
      signUpPassword: event.target.value,
    });
  }


  onSignIn=() =>{
    //some data of request (get that from frontend)
    const {
      signInEmail,
      signInPassword,
    } = this.state;
    
    this.setState({
      isLoading: true,
    });

     //create service to request
     const authService = new proto.auth.AuthClient('https://www.overlead.co');
     //metadab will be config later
     var metadata = {};
     
     //create var for react
     var SignInReq = new proto.auth.SignInReq();
     //set data from frontend to this var
     SignInReq.setUsername(signInEmail);
     SignInReq.setPassword(signInPassword);
      //make a request to server
      var getTodo = authService.signIn(SignInReq, metadata, (err, response) => {
        if (err) { //if error
          console.log(err);
        } else { //if success
          //cookie.save('userId', signInEmail, { path: '/' });
          //get response   
          console.log("SUCCESSLOGIN")
          console.log(response.getName())      
          if (response.getStatus()=="SUCCESS"){
            cookie.save('userId',response.getId())
            cookie.save('tokenAccess',response.getSession())
            cookie.save('username',signInEmail)
            cookie.save('name',response.getName())
            cookie.save('avatar',response.getAvatar())
            this.props.dispatch(saveLogin(response.getId(),response.getSession(),signInEmail,response.getName(),response.getAvatar()))

          }
          
      //    return <Redirect from="/login" to="/dashboard" />
        }
      });
  }

  onSignInGoogle=(profileObj)  =>{
     console.log('onSignInGoogle');
     console.log(profileObj);
     //create service to request
     const authService = new proto.auth.AuthClient('https://www.overlead.co');
     //metadab will be config later
     var metadata = {};
     
     //create var for react
     var SignInGoogleReq = new proto.auth.SignInGoogleReq();
     //set data from frontend to this var
     SignInGoogleReq.setUsername(profileObj.email);
     SignInGoogleReq.setName(profileObj.givenName+" "+profileObj.givenName);
     SignInGoogleReq.setAvatar(profileObj.imageUrl);
      //make a request to server
      var getTodo = authService.signInGoogle(SignInGoogleReq, metadata, (err, response) => {
        if (err) { //if error
          console.log(err);
        } else { //if success
          //get response
          console.log("success")
          if (response.getStatus()=="SUCCESS"){
            cookie.save('userId',response.getId())
            cookie.save('tokenAccess',response.getSession())
            cookie.save('username',profileObj.email)
            cookie.save('name',response.getName())
            cookie.save('avatar',profileObj.imageUrl)
            this.props.dispatch(saveLogin(response.getId(),response.getSession(),profileObj.email,response.getName(),profileObj.imageUrl))

          }
        }
      });
  }

  logout=()=> {
    this.setState({
      isLoading: true,
    });
    cookie.remove('userId', { path: '/' });
    cookie.remove('userSession', { path: '/' });
  }

  render() {
    const responseGoogle = (response) => {
      console.log(response);
      console.log(response.profileObj.email)
      this.onSignInGoogle(response.profileObj);


    }
    let renderProps={}
    renderProps.disabled=false;
        const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,    
      
    } = this.state;


    return (
      <div>
         <AppAppBar />
     
      <div className="app flex-row align-items-center">
        
        <Container>
               <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username/ Email" autoComplete="username" value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.onSignIn}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to="/ResetFirst">
                            <Button color="link" className="px-0">Forgot password, reset now?</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                      <GoogleLogin
    clientId="1044290572211-9tqo456g2kknsaj3tpi72lmcjnp18rms.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick } >This is my custom Google button</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
  //  {...this.onSignInGoogle(this.onSuccess.gapi.auth2.BasicProfileogle.getBasicProfile())}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
   
    <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={this.logout}
    >
    </GoogleLogout>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
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
export default connect(mapStateToProps)(Login);
