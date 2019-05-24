import React, { Component } from 'react';
import cookie from 'react-cookies';
import {saveLogin} from './actions'
import { connect } from 'react-redux'
import authContext from "./contexts/authContext";///////
import { HashRouter, BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Chat from './service/chat'
import Loadable from 'react-loadable';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const proto = {};
proto.auth = require('./gRPC/auth/auth_grpc_web_pb');

// Containers layout
const DefaultLayout = Loadable({
    loader: () => import('./containers/DefaultLayout'),
    loading
});


const Login = Loadable({
    loader: () => import('./views/Pages/Login'),
    loading
});

const Register = Loadable({
    loader: () => import('./views/Pages/Register'),
    loading
});

const Page404 = Loadable({
    loader: () => import('./views/Pages/Page404'),
    loading
});

const Page500 = Loadable({
    loader: () => import('./views/Pages/Page500'),
    loading
});
const PagePay = Loadable({
    loader: () => import('./views/Pages/PagePay'),
    loading
});

const AsyncApp = Loadable({
    loader: () => import('./components/AsyncApp'),
    loading
})

const ResetSecond = Loadable({
    loader: () => import('./views/Pages/ResetSecond'),
    loading
});

const ResetFirst = Loadable({
    loader: () => import('./views/Pages/ResetFirst'),
    loading
});


//Home



const HomePayment = Loadable({
    loader: () => import('./views/General/Home/Payment'),
    loading
});
const HomeFinal = Loadable({
    loader: () => import('./views/General/Home/Final'),
    loading
});
//
const Demo = Loadable({
    loader: () => import('./homeNav'),
    loading
});

//PJ
const MyProject = Loadable({
    loader: () => import('./views/Personal/Project/MyProject'),
    loading
});




//profile
const ProfileDetail = Loadable({
    loader: () => import('./views/Personal/Profile/detail'),
    loading
});
const ProfileEdit = Loadable({
    loader: () => import('./views/Personal/Profile/edit'),
    loading
});

class Client extends Component {
   

    componentWillMount(){      
           const authService = new proto.auth.AuthClient('https://www.overlead.co');
           var metadata = {};
           var AuthSessionReq = new proto.auth.AuthSessionReq();
           AuthSessionReq.setSession(cookie.load("accessToken"));
           AuthSessionReq.setId(cookie.load("userId"));
           console.log("authSession")
            authService.authSession(AuthSessionReq, metadata, (err, response) => {
              if (err) { 
                console.log(err);
              } else { 
                console.log("SUCCESS")
                if (response.getStatus()=="SUCCESS")
                    this.props.dispatch(saveLogin(cookie.load("userId"),cookie.load("accessToken"),cookie.load("username"),cookie.load("name"),cookie.load("avatar")))       
                else {
                    cookie.remove("userId")
                    cookie.remove("accessToken")
                    cookie.remove("username")
                    cookie.remove("name")
                    cookie.remove("avatar")
                }         
              }
            });        
    }   
   
    render() {
        return (
                <authContext.Provider>
                    <BrowserRouter>
                        {
                           this.props.isLogin ?<div>  <Switch>
                                <Route exact path="/homeNav" name="HomeNav" component={Demo} />
                                                           
                                <Route exact path="/Home/Payment" name="HomePayment" component={HomePayment} />
                                <Route exact path="/Home/Final" name="HomeFinal" component={HomeFinal} />

                                <Route exact path="/myproject" name="myproject" component={MyProject} />
                               
                                <Route exact path="/Profile/Detail" name="ProfileDetail" component={ProfileDetail} />
                                <Route exact path="/Profile/Edit" name="ProjectTodo" component={ProfileEdit} />


                                <Route exact path="/chat" name="Chat Page" component={Chat} />


                                <Route exact path="/404" name="Page 404" component={Page404} />
                                <Route exact path="/500" name="Page 500" component={Page500} />
                                <Route exact path="/pay" name="Page Pay" component={PagePay} />
                                <Route exact path="/async" name="page test" component={AsyncApp} />
                                <Route exact path="/dashboard" name="dashboard" component={DefaultLayout} />


                                <Route path="/" name="Home" component={DefaultLayout} />
                             
                              
                            </Switch>
                            </div>
                                : <div><Switch>
                                    <Route exact path="/Home/Final" name="HomeFinal" component={HomeFinal} />
                                    <Route exact path="/register" name="Register Page" component={Register} />
                                    <Route exact path="/ResetFirst" name="ResetSecond Page" component={ResetFirst} />
                                    <Route exact path="/ResetSecond" name="ResetSecond Page" component={ResetSecond} />
                                    <Route exact path="/login" name="Login Page" component={Login} />
                                    <Route exact path="/async" name="page test" component={AsyncApp} />

                                    <Route path="/" name="Home" component={HomeFinal} />

                                </Switch>
                                
                                </div>
                        }
                    </BrowserRouter>
                </authContext.Provider>
        )
    }
}

function mapStateToProps(state) {
    const { changeStatusLogin } = state
    const { isLogin,  } = changeStatusLogin
    return {
        isLogin,
    }
}
export default connect(mapStateToProps)(Client);
