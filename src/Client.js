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
import { toast } from 'react-toastify';

import { setIn } from 'immutable';
toast.configure()

const proto = {};
proto.auth = require('./gRPC/auth/auth_grpc_web_pb');
proto.myproject = require('./gRPC/myproject/myproject_grpc_web_pb');
proto.team = require('./gRPC/team/team_grpc_web_pb');
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
const Admin = Loadable({
    loader: () => import('./views/Pages/Admin'),
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
        console.log("authSession")
        let that = this
        let dispatch = this.props.dispatch
        authService.authSession(AuthSessionReq, metadata, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                console.log("SUCCESS")
                if (response.getStatus() == "SUCCESS") {

                    dispatch(saveLogin(getFromStorage("userId"), getFromStorage("accessToken"), getFromStorage("username"), getFromStorage("name"), getFromStorage("avatar")))

                    that.getAllProject();


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
    }

    //getAllProject
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
            let cp = getFromStorage("currentProject")
            let lastCreated = ''
            let lastName = ''
            that.props.currentProject.map(p => {
                if (p.id == cp) flat = true
                lastCreated = p.id
                lastName = p.projectName
                return p
            })

            if (flat == false){
                setInStorage('currentProject', lastCreated)
                setInStorage('currentProjectName',lastName)
            }
            if (getFromStorage('currentProject') != null && getFromStorage('currentProject') != '') {
                that.loadAllTeam()                
                that.props.dispatch(setProject(lastCreated, lastName))
            }


        });
        response.on('end', function (end) {
            console.log("edddddddddddddd")
            console.log(end)

        });



    }
    loadAllMember = (id) => {
        console.log("loadAllMember")
        const teamService = new proto.team.TeamClient('https://www.overlead.co');
        var metadata = {};

        var GetAllMemberReq = new proto.team.GetAllMemberReq();
        GetAllMemberReq.setRequesterid(getFromStorage("userId"));
        GetAllMemberReq.setTeamid(id);
        GetAllMemberReq.setAccesstoken(getFromStorage("accessToken"));

        let that = this
        setInStorage('members', [])
        let response = teamService.getAllMember(GetAllMemberReq, metadata)

        response.on('data', function (response) {
            if (response.getStatus() == "SUCCESS") {
                let mem = getFromStorage('members')
                mem.push({ id: response.getId(), name: response.getName(),username:response.getUsername() })
                setInStorage('members', mem)
            }
        })
        response.on('status', function (status) {
            console.log("status")
            console.log(status.code);
            console.log(status.details);
            console.log(status.metadata);
            console.log(getFromStorage('members'))
        });
        response.on('end', function (end) {
            console.log("end")
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
        console.log("currenProject" + getFromStorage("currentProject"))
        let that = this
        let lastTeam = ''
        let lastName = ''
        let validTeam = false
        response.on('data', function (response) {
            if (response.getStatus() == "SUCCESS") {
                console.log("hasTeam" + response.getTeamid())

                if (getFromStorage('teamId') == response.getTeamid())
                    validTeam = true
                else {
                    lastTeam = response.getTeamid()
                    lastName = response.getName()
                }

            }
        })
        response.on('status', function (status) {
            console.log("status" + status.code)
            if (validTeam == false) {
                if (lastTeam != '') {
                    setInStorage('teamId', lastTeam)
                    that.props.dispatch(setTeam(lastTeam, lastName))
                    that.loadAllMember(lastTeam)
                }
            }
            else {
                that.props.dispatch(setTeam(getFromStorage('teamId'), getFromStorage('teamName')))
                that.loadAllMember(getFromStorage('teamId'))

            }
        });
        response.on('end', function (end) {

        });

    }

    render() {
        console.log("isLogin:" + this.props.isLogin)
        console.log('hasProject' + this.props.hasProject)
        console.log('hasTeam' + this.props.hasTeam)
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
                                        :
                                        <Switch>
                                            <Route exact path="/pages/Admin" name="Admin" component={Admin} />

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

                                    ) :
                                    (this.props.hasTeam ?
                                        <Switch>
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


                                            <Route path="/" name="Home" component={MyProject} />


                                        </Switch>
                                        :
                                        <Switch>
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

                                            <Route path="/" name="Home" component={MyProject} />


                                        </Switch>
                                    )


                            )

                            : <div>
                                <Switch>
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
    const { changeStatusLogin, updateProjectLoaded, changeStatusProject } = state
    const { isLogin, } = changeStatusLogin
    const currentProject = updateProjectLoaded.project
    const { hasProject, hasTeam, random } = changeStatusProject
    return {
        isLogin, currentProject, hasProject, hasTeam, random
    }
}
export default connect(mapStateToProps)(Client);
