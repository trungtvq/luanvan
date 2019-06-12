import React, { Component } from 'react';
import cookie from 'react-cookies';
import { saveLogin, setTeam, addProject, setProject } from './actions'
import { connect } from 'react-redux'
import authContext from "./contexts/authContext";///////
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Chat from './service/chat'
import Loadable from 'react-loadable';
import {
    getFromStorage,
    setInStorage
} from './service/storage'

import getAllProject from './service/gRPC/loadAllProject'
import { setIn } from 'immutable';
import loadAllProject from './service/gRPC/loadAllProject';

const proto = {};
proto.auth = require('./gRPC/auth/auth_grpc_web_pb');
// Containers layout

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

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


const ResetSecond = Loadable({
    loader: () => import('./views/Pages/ResetSecond'),
    loading
});

const ResetFirst = Loadable({
    loader: () => import('./views/Pages/ResetFirst'),
    loading
});


//Home

const Donate = Loadable({
    loader: () => import('./views/Pages/Donate'),
    loading
});

//
const Demo = Loadable({
    loader: () => import('./containers/HomeNav'),
    loading
});

//PJ
const MyProject = Loadable({
    loader: () => import('./views/Personal/Project/MyProject'),
    loading
});
const DailySchedule = Loadable({
    loader: () => import('./views/Workspace/DailySchedule/DailySchedule'),
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
    constructor(props) {
        super(props);
        this.state = {
            hasProject: false,
            hasTeam: false
        }
    };
    auth = () => {
        const authService = new proto.auth.AuthClient('https://www.overlead.co');
        var metadata = {};
        var AuthSessionReq = new proto.auth.AuthSessionReq();
        AuthSessionReq.setSession(getFromStorage("accessToken"));
        AuthSessionReq.setId(getFromStorage("userId"));
        let that = this
        let dispatch = this.props.dispatch
        authService.authSession(AuthSessionReq, metadata, (err, response) => {
            if (err) {


            } else {
                if (response.getStatus() == "SUCCESS") {

                    dispatch(saveLogin(getFromStorage("userId"), getFromStorage("accessToken"), getFromStorage("username"), getFromStorage("name"), getFromStorage("avatar")))
                    loadAllProject()


                }
                else {
                    setInStorage("userId", "")
                    setInStorage("accessToken", "")
                    setInStorage("avatar", "")
                    setInStorage("name", "")
                    setInStorage("username", "")
                }
            }
        });
    }
    componentWillMount() {
        this.auth();
        setInStorage("allTask",[])

    }

   
   

    render() {
        return (
            <authContext.Provider>
                <BrowserRouter>
                    {
                        this.props.isLogin ?
                            (
                                this.props.hasProject ?
                                    (this.props.hasTeam ?
                                        <Switch>
                                            <Route exact path="/homeNav" name="HomeNav" component={Demo} />

                                            <Route exact path="/donate" name="donate" component={Donate} />

                                            <Route exact path="/myproject" name="myproject" component={MyProject} />

                                            <Route exact path="/Profile/Detail" name="ProfileDetail" component={ProfileDetail} />
                                            <Route exact path="/Profile/Edit" name="ProjectTodo" component={ProfileEdit} />
                                            <Route exact path="/Profile/Edit" name="ProjectTodo" component={ProfileEdit} />


                                            <Route exact path="/chat" name="Chat Page" component={Chat} />


                                            <Route exact path="/404" name="Page 404" component={Page404} />
                                            <Route exact path="/500" name="Page 500" component={Page500} />
                                            <Route exact path="/pay" name="Page Pay" component={PagePay} />
                                            <Route exact path="/dashboard" name="dashboard" component={DefaultLayout} />


                                            <Route path="/" name="Home" component={DefaultLayout} />


                                        </Switch>
                                        :
                                        <Switch>

                                            <Route exact path="/homeNav" name="HomeNav" component={Demo} />

                                            <Route exact path="/donate" name="donate" component={Donate} />

                                            <Route exact path="/myproject" name="myproject" component={MyProject} />

                                            <Route exact path="/Profile/Detail" name="ProfileDetail" component={ProfileDetail} />
                                            <Route exact path="/Profile/Edit" name="ProjectTodo" component={ProfileEdit} />


                                            <Route exact path="/chat" name="Chat Page" component={Chat} />


                                            <Route exact path="/404" name="Page 404" component={Page404} />
                                            <Route exact path="/500" name="Page 500" component={Page500} />
                                            <Route exact path="/pay" name="Page Pay" component={PagePay} />
                                            <Route exact path="/dashboard" name="dashboard" component={DefaultLayout} />


                                            <Route path="/" name="Home" component={DefaultLayout} />


                                        </Switch>

                                    ) :
                                    (this.props.hasTeam ?
                                        <Switch>
                                            <Route exact path="/homeNav" name="HomeNav" component={Demo} />

                                            <Route exact path="/donate" name="donate" component={Donate} />

                                            <Route exact path="/myproject" name="myproject" component={MyProject} />

                                            <Route exact path="/Profile/Detail" name="ProfileDetail" component={ProfileDetail} />
                                            <Route exact path="/Profile/Edit" name="ProjectTodo" component={ProfileEdit} />


                                            <Route exact path="/chat" name="Chat Page" component={Chat} />


                                            <Route exact path="/404" name="Page 404" component={Page404} />
                                            <Route exact path="/500" name="Page 500" component={Page500} />
                                            <Route exact path="/pay" name="Page Pay" component={PagePay} />


                                            <Route path="/" name="Home" component={MyProject} />


                                        </Switch>
                                        :
                                        <Switch>
                                            <Route exact path="/homeNav" name="HomeNav" component={Demo} />

                                            <Route exact path="/donate" name="donate" component={Donate} />

                                            <Route exact path="/myproject" name="myproject" component={MyProject} />

                                            <Route exact path="/Profile/Detail" name="ProfileDetail" component={ProfileDetail} />
                                            <Route exact path="/Profile/Edit" name="ProjectTodo" component={ProfileEdit} />


                                            <Route exact path="/chat" name="Chat Page" component={Chat} />


                                            <Route exact path="/404" name="Page 404" component={Page404} />
                                            <Route exact path="/500" name="Page 500" component={Page500} />
                                            <Route exact path="/pay" name="Page Pay" component={PagePay} />

                                            <Route path="/" name="Home" component={MyProject} />


                                        </Switch>
                                    )


                            )

                            : <div>
                                <Switch>
                                    <Route exact path="/register" name="Register Page" component={Register} />
                                    <Route exact path="/ResetFirst" name="ResetSecond Page" component={ResetFirst} />
                                    <Route exact path="/ResetSecond" name="ResetSecond Page" component={ResetSecond} />
                                    <Route exact path="/login" name="Login Page" component={Login} />
                                    <Route exact path="/donate" name="donate" component={Donate} />

                                    <Route path="/" name="home" component={Login} />

                                </Switch>

                            </div>
                    }
                </BrowserRouter>
            </authContext.Provider>
        )
    }
}

function mapStateToProps(state) {
    const { changeStatusLogin, updateProjectLoaded, changeStatusProject } = state
    const { isLogin, } = changeStatusLogin
    const currentProject = updateProjectLoaded.project
    const { hasProject, hasTeam, random } = changeStatusProject
    return {
        isLogin, currentProject, hasProject, hasTeam, random
    }
}
export default connect(mapStateToProps)(Client);
