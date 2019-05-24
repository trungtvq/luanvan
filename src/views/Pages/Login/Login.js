import {saveLogin} from '../../../actions'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardFooter,Label,FormGroup,Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import authContext from "../../../contexts/authContext";

import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import { GoogleLogout } from 'react-google-login';
import { GoogleLogin } from 'react-google-login';
import cookie from 'react-cookies';
import ReactList from 'react-list';
import { CardHeader } from '@material-ui/core';
const image2base64 = require('image-to-base64')
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
      clientId:"1044290572211-9tqo456g2kknsaj3tpi72lmcjnp18rms.apps.googleusercontent.com"
    };    
  } 

  onTextboxChangeSignInEmail=(event)=> {
    this.setState({
      signInEmail: event.target.value,
    });
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
    const {
      signInEmail,
      signInPassword,
    } = this.state;
    
    this.setState({
      isLoading: true,
    });

     const authService = new proto.auth.AuthClient('https://www.overlead.co');
     var metadata = {};
     var SignInReq = new proto.auth.SignInReq();
     SignInReq.setUsername(signInEmail);
     SignInReq.setPassword(signInPassword);
     
     console.log("signIn")
      authService.signIn(SignInReq, metadata, (err, response) => {
        if (err) { 
          console.log(err);
        } else { 
          if (response.getStatus()=="SUCCESS"){
            cookie.save('userId',response.getId())
            cookie.save('accessToken',response.getSession())
            cookie.save('username',signInEmail)
            cookie.save('name',response.getName())
            cookie.save('avatar',response.getAvatar())
            this.props.dispatch(saveLogin(response.getId(),response.getSession(),signInEmail,response.getName(),response.getAvatar()))
          }
        }
      });
  }

  onSignInGoogle=(profileObj)  =>{
     console.log('signInGoogle');
     const authService = new proto.auth.AuthClient('https://www.overlead.co');
     var metadata = {};
     var SignInGoogleReq = new proto.auth.SignInGoogleReq();
     SignInGoogleReq.setUsername(profileObj.email);
     SignInGoogleReq.setName(profileObj.givenName+" "+profileObj.givenName);
     SignInGoogleReq.setAvatar(profileObj.imageUrl);
     authService.signInGoogle(SignInGoogleReq, metadata, (err, response) => {
        if (err) { 
          console.log(err);
        } else { 
          console.log("SUCCESS")
          if (response.getStatus()=="SUCCESS"){
            cookie.save('userId',response.getId())
            cookie.save('accessToken',response.getSession())
            cookie.save('username',profileObj.email)
            cookie.save('name',response.getName())
           
            cookie.save('avatar',response.getAvatar())
            this.props.dispatch(saveLogin(response.getId(),response.getSession(),profileObj.email,response.getName(),response.getAvatar()))
          }
        }
      });
  }
  onInitState=()=>{
    this.setState({
      clientId:"1044290572211-9tqo456g2kknsaj3tpi72lmcjnp18rms.apps.googleusercontent.com"
    })
  }
 
  render() {
    const responseGoogle = (response) => {
      this.onSignInGoogle(response.profileObj);
      console.log("responseGoogle")
      console.log(response)
    }
    let renderProps={}
    renderProps.disabled=false;
       


    return (
      <div>
         <AppAppBar />
         <div><br></br></div>
      <div className="app flex-row align-items-center">
        
        <Container>
               <Row className="justify-content-center">
            <Col md="8">
         
                <Card className=" border-primary" >
                  <CardBody>
                  <Form  className="form-horizontal">   
                          <center><h6>Already Have A Account?</h6></center> 
                          <center><h5><b><font color="green">Login</font></b></h5></center>           
                            <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Email</Label>
                              </Col>
                              <Col xs="12" md="6">
                                <Input type="text-input" id="text-input" name="text-input" placeholder=" name@email.com" value={this.state.signInEmail}
              onChange={this.onTextboxChangeSignInEmail}/>           
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Password</Label>
                              </Col>
                              <Col xs="12" md="6">
                                <Input type="password" id="Password" name="Password" placeholder="Password" value={this.state.signInPassword}
              onChange={this.onTextboxChangeSignInPassword}/>           
                              </Col>
                            </FormGroup>
                           
                            <FormGroup row>
                            
                              <Col md="3">
                                <input type="checkbox"></input>
                              </Col>
                              <Col xs="12" md="3">
                              <h6><font color="green">Remember me?</font></h6>
                              </Col>
                              
                            </FormGroup> 
                        
                              <center><Button  color="success" onClick={this.onSignIn}>Login</Button></center>
                           
                              <FormGroup row>
                                <div><br></br></div>
                               <div><Link to="/register"><h6>Register </h6></Link></div>
                               <div><h6>|</h6></div>
                               <div> <Link to="/ResetFirst"><h6> Lost your password</h6></Link></div>
                                
                              </FormGroup> 
                      
                          </Form>       
                          
                  </CardBody>
                  <CardFooter  className="border-warning">
                  <GoogleLogin
                        clientId="1044290572211-9tqo456g2kknsaj3tpi72lmcjnp18rms.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                      />
                       {/* <GoogleLogout
                          buttonText="Logout"
                          onLogoutSuccess={this.logout}
                        >
                        </GoogleLogout> */}
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



//////////////////scoll
const renderItem = (index, key) =>
  <div key={key} className={'item' + (index % 2 ? '' : ' even')}>
    {index}
  </div>;
renderItem.toJSON = () => renderItem.toString();

const renderSquareItem = (index, key) =>
  <div key={key} className={'square-item' + (index % 2 ? '' : ' even')}>
    {index}
  </div>;
renderSquareItem.toJSON = () => renderSquareItem.toString();

const getHeight = index => 30 + (10 * (index % 10));
getHeight.toJSON = () => getHeight.toString();

const getWidth = index => 100 + (10 * (index % 10));
getWidth.toJSON = () => getWidth.toString();

const renderVariableHeightItem = (index, key) =>
  <div
    key={key}
    className={'item' + (index % 2 ? '' : ' even')}
    style={{lineHeight: `${getHeight(index)}px`}}
  >
    {index}
  </div>;
renderVariableHeightItem.toJSON = () => renderVariableHeightItem.toString();

const renderVariableWidthItem = (index, key) =>
  <div
    key={key}
    className={'item' + (index % 2 ? '' : ' even')}
    style={{width: `${getWidth(index)}px`}}
  >
    {index}
  </div>;
renderVariableWidthItem.toJSON = () => renderVariableWidthItem.toString();

const renderGridLine = (row, key) =>
  <ReactList
    axis='x'
    key={key}
    length={10000}
    itemRenderer={
      (column, key) => renderSquareItem(column + (10000 * row), key)
    }
    type='uniform'
  />;
renderGridLine.toJSON = () => renderGridLine.toString();

const examples = [
  {
    length: 10000,
    itemRenderer: renderVariableHeightItem
  },
  {
    axis: 'x',
    length: 10000,
    itemRenderer: renderVariableWidthItem
  },
  {
    length: 10000,
    itemRenderer: renderVariableHeightItem,
    type: 'variable'
  },
  {
    axis: 'x',
    length: 10000,
    itemRenderer: renderVariableWidthItem,
    type: 'variable'
  },
  {
    length: 10000,
    itemRenderer: renderVariableHeightItem,
    itemSizeGetter: getHeight,
    type: 'variable'
  },
  {
    axis: 'x',
    length: 10000,
    itemRenderer: renderVariableWidthItem,
    itemSizeGetter: getWidth,
    threshold: 0,
    type: 'variable'
  },
  {
    length: 10000,
    initialIndex: 5000,
    itemRenderer: renderVariableHeightItem,
    itemSizeGetter: getHeight,
    type: 'variable'
  },
  {
    length: 10000,
    itemRenderer: renderItem,
    type: 'uniform'
  },
  {
    axis: 'x',
    length: 10000,
    itemRenderer: renderItem,
    type: 'uniform'
  },
  {
    length: 10000,
    itemRenderer: renderSquareItem,
    type: 'uniform'
  },
  {
    length: 10000,
    initialIndex: 5000,
    itemRenderer: renderItem,
    type: 'uniform'
  },
  {
    length: 10000,
    itemRenderer: renderGridLine,
    type: 'uniform',
    useTranslate3d: true
  }
];

class Examples extends Component {
  renderExamples() {
    return examples.map((props, key) =>
      <div key={key} className={`example axis-${props.axis}`}>
        <strong>Props</strong>
        <pre className='props'>{JSON.stringify(props, null, 3)}</pre>
        <strong>Component</strong>
        <div className='component'  style={{
         border: '10px solid #38afd4',
         borderRadius: '5px',
         height: '500px',
         overflow: 'auto',
         webkitOverflowScrolling : 'touch',
         }}><ReactList {...props} /></div>
      </div>
    );
  }

  render() {
    return (
      <div className='index'>
        <a className='banner' href='https://github.com/coderiety/react-list'>
          <img
            src='https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67'
            alt='Fork me on GitHub'
          />
        </a>
        <div className='header'>ReactList</div>
        <div className='examples'>{this.renderExamples()}</div>
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
