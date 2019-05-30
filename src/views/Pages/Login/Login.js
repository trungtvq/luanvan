import {saveLogin,setTeam,setProject,addProject} from '../../../actions'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardFooter,Label,FormGroup,Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import authContext from "../../../contexts/authContext";

import { GoogleLogin } from 'react-google-login';
import cookie from 'react-cookies';
import ReactList from 'react-list';
import { CardHeader } from '@material-ui/core';
import {
  getFromStorage,
  setInStorage
} from '../../../service/storage'
import AppAppBar from "../../../containers/AppAppBar"
import AppFooter from "../../../containers/AppFooter"
const image2base64 = require('image-to-base64')
const proto = {};
proto.auth = require('./../../../gRPC/auth/auth_grpc_web_pb');
proto.myproject = require('./../../../gRPC/myproject/myproject_grpc_web_pb');
proto.team = require('./../../../gRPC/team/team_grpc_web_pb');

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
     let that=this
      authService.signIn(SignInReq, metadata, (err, response) => {
        if (err) { 
          console.log(err);
        } else { 
          if (response.getStatus()=="SUCCESS"){
            setInStorage('userId',response.getId())
            setInStorage('accessToken',response.getSession())
            setInStorage('username',signInEmail)
            setInStorage('name',response.getName())
            setInStorage('avatar',response.getAvatar())
            this.props.dispatch(saveLogin(response.getId(),response.getSession(),signInEmail,response.getName(),response.getAvatar()))
            that.getAllProject();
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
     let that=this

     authService.signInGoogle(SignInGoogleReq, metadata, (err, response) => {
        if (err) { 
          console.log(err);
        } else { 
          console.log("SUCCESS")
          if (response.getStatus()=="SUCCESS"){
            setInStorage('userId',response.getId())
            setInStorage('accessToken',response.getSession())
            setInStorage('username',profileObj.email)
            setInStorage('name',response.getName())
           
            setInStorage('avatar',response.getAvatar())
            this.props.dispatch(saveLogin(response.getId(),response.getSession(),profileObj.email,response.getName(),response.getAvatar()))
            that.getAllProject();
          }
        }
      });
  }
  onInitState=()=>{
    this.setState({
      clientId:"1044290572211-9tqo456g2kknsaj3tpi72lmcjnp18rms.apps.googleusercontent.com"
    })
  }
 
  getAllProject = () => {
    let dispatch = this.props.dispatch
    const myprojectService = new proto.myproject.MyprojectClient('https://www.overlead.co');
    var metadata = {};
    var GetAllProjectReq = new proto.myproject.GetAllProjectReq();
    GetAllProjectReq.setRequesterid(getFromStorage("userId"));
    GetAllProjectReq.setCookie(getFromStorage("accessToken"));
    let that = this
    var response = myprojectService.getAllProject(GetAllProjectReq, metadata)

    response.on('data', function (response) {
        if (response.getStatus() == "SUCCESS") {
            dispatch(addProject(response.getProjectid(), response.getTopic(), response.getProjectname(), response.getStart(), response.getEnd(), response.getPrivate(), response.getProgress()))
            console.log("receipt")
        }
    });
    response.on('status', function (status) {
        let flat = false
        if (status.code!=0) console.log(status)

        let cp = getFromStorage("currentProject")
        let lastCreated = ''
        let lastName=''
        that.props.currentProject.map(p => {
            if (p.id == cp) flat = true
            lastCreated = p.id
            lastName=p.projectName
            return p
        })

        if (flat == false)
            setInStorage('currentProject', lastCreated)
            setInStorage('currentProjectName',lastName)

        if (getFromStorage('currentProject') != null && getFromStorage('currentProject') != '') {
            that.loadAllTeam()
            that.props.dispatch(setProject(lastCreated,lastName))
        }


    });
    response.on('end', function (end) {
        console.log("edddddddddddddd")
        console.log(end)

    });



}

loadAllTeam = () => {
    console.log("getAllTeam")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var GetAllTeamReq = new proto.team.GetAllTeamReq();
    GetAllTeamReq.setRequesterid(getFromStorage("userId"));
    GetAllTeamReq.setProjectid(getFromStorage("currentProject"));
    GetAllTeamReq.setAccesstoken(getFromStorage("accessToken"));
    let response = teamService.getAllTeam(GetAllTeamReq, metadata)
    console.log("currenProject"+getFromStorage("currentProject"))
    let that = this
    let lastTeam = ''
    let lastName=''
    let validTeam = false
    response.on('data', function (response) {
        if (response.getStatus() == "SUCCESS") {
            console.log("hasTeam"+response.getTeamid())

            if (getFromStorage('teamId') == response.getTeamid())
                validTeam = true
            else {
                lastTeam = response.getTeamid()
                lastName= response.getName()
            }

        }
    })
    response.on('status', function (status) {
      if (status.code!=0) console.log(status)

        if (validTeam == false) {
            if (lastTeam != '') {
                setInStorage('teamId', lastTeam)
                setInStorage('teamName',lastName)
                that.props.dispatch(setTeam(lastTeam,lastName))
            }    
        }
        else {
            that.props.dispatch(setTeam(getFromStorage('teamId'),getFromStorage('teamName')))
        }
    });
    response.on('end', function (end) {

    });
    
}
  render() {
    const responseGoogle = (response) => {
      this.onSignInGoogle(response.profileObj);
      console.log("responseGoogle")
      console.log(response)
    }
    let renderProps={}
    renderProps.disabled=false;
       
    const liStyle={
      fontSize: "16px",
      paddingTop: ".9rem",
      paddingBottom: ".9rem",
      paddingLeft: "20px",
      paddingRight: "20px",
      color: "#fff",
      fontWeight: "400",
      opacity: "22222222 !important",
    }

    return (
      <div style={{backgroundColor: "#FFFFFF"}}>

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
                        
                              <center>
                              <Link to="/DashBoard">
                                <Button  color="success" onClick={this.onSignIn}>Login</Button>
                              </Link>
                              </center>
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
  const { changeStatusLogin,updateProjectLoaded } = state
  const { isLogin, id, token } = changeStatusLogin
  const currentProject = updateProjectLoaded.project
  return {
      isLogin, id, token,currentProject
  }
}
export default connect(mapStateToProps)(Login);
