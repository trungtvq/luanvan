//style 
import './App.scss';

import React, { Component } from 'react';

//context
import authContext from "./contexts/authContext";///////


//Appolo
import ApolloClient from 'apollo-boost';
import {AppoloProvider, ApolloProvider} from 'react-apollo';



import { HashRouter, BrowserRouter,Route, Switch } from 'react-router-dom';



import PropTypes from 'prop-types'

//redux
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

//loading async with text "Loading"
import Loadable from 'react-loadable';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

//apollo client setup
const client = new ApolloClient({
  uri:'https://overlead.co/api/graphql'
})


// Containers layout
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});
const LoginLayout = Loadable({
  loader: () => import('./containers/LoginLayout'),
  loading
});
// Pages no layout
const Chat = Loadable({
  loader: () => import('./views/Personal/Chat'),
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

const AsyncApp= Loadable({
  loader: ()=> import('./components/AsyncApp'),
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
const HomeMain = Loadable({
  loader: () => import('./views/General/Home/Main'),
  loading
});
const HomeContact = Loadable({
  loader: () => import('./views/General/Home/Contact'),
  loading
});
const HomeService = Loadable({
  loader: () => import('./views/General/Home/Service'),
  loading
});
const HomeSolve = Loadable({
  loader: () => import('./views/General/Home/Solve'),
  loading
});
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
const AllProject = Loadable({
  loader: () => import('./views/Personal/Project/AllProject'),
  loading
});
const ProjectDone = Loadable({
  loader: () => import('./views/Personal/Project/ProjectDone'),
  loading
});
const ProjectTodo = Loadable({
  loader: () => import('./views/Personal/Project/ProjectTodo'),
  loading
});
const CreateProject = Loadable({
  loader: () => import('./views/Personal/Project/CreateProject'),
  loading
});
const NoProject = Loadable({
  loader: () => import('./views/Personal/Project/NoProject'),
  loading
});
//


//profile
const ProfileDetail = Loadable({
  loader: () => import('./views/Personal/Profile/detail'),
  loading
});
const ProfileEdit = Loadable({
  loader: () => import('./views/Personal/Profile/edit'),
  loading
});
//
const loggerMiddleware = createLogger()

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}

const store = configureStore()
 // <Route exact path="/AllProject" name="AllProject" component={AllProject} />
                      // <Route exact path="/ProjectDone" name="ProjectDone" component={ProjectDone} />
                      // <Route exact path="/ProjectTodo" name="ProjectTodo" component={ProjectTodo} />

//{ path: '/Home/Main', exact: true, name: 'HomeMain', component: HomeMain },
  // { path: '/Home/Contact', exact: true, name: 'HomeContact', component: HomeContact },
  // { path: '/Home/Service', exact: true, name: 'HomeService', component: HomeService },
  // { path: '/Home/Solve', exact: true, name: 'HomeSolve', component: HomeSolve},
  store.subscribe(() => console.log(store.getState()))

class App extends Component {
  state={
    token:null,
    signInEmail:null,
    isLogin:true
  }

  login = (token,signInEmail)=>{
    this.setState({ token : token , signInEmail : signInEmail });
  }
  logout = ()=>{
    this.setState({ token : null , signInEmail : null });
  }

  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <authContext.Provider 
            value={{
                      token:this.state.token,
                      signInEmail:this.state.signInEmail,
                      login:this.login,
                      logout:this.logout
                  }}>  
            <BrowserRouter>
                
                {
                        this.state.isLogin?<Switch>
                        <Route exact path="/homeNav" name="HomeNav" component={Demo} />
                              <Route exact path="/Home/Main" name="HomeMain" component={HomeMain} />
                              <Route exact path="/Home/Contact" name="HomeContact" component={HomeContact} />
                              <Route exact path="/Home/Service" name="HomeService" component={HomeService} />
                              <Route exact path="/Home/Solve" name="HomeSolve" component={HomeSolve} />
                              <Route exact path="/Home/Payment" name="HomePayment" component={HomePayment} />
                              <Route exact path="/Home/Final" name="HomeFinal" component={HomeFinal} />
        
                              <Route exact path="/AllProject" name="AllProject" component={AllProject} />
                              <Route exact path="/ProjectDone" name="ProjectDone" component={ProjectDone} />
                              <Route exact path="/ProjectTodo" name="ProjectTodo" component={ProjectTodo} />
                              <Route exact path="/CreateProject" name="CreateProject" component={CreateProject} />
                              <Route exact path="/NoProject" name="NoProject" component={NoProject} />
                             
                              <Route exact path="/Profile/Detail" name="ProfileDetail" component={ProfileDetail} />
                              <Route exact path="/Profile/Edit" name="ProjectTodo" component={ProfileEdit} />
            
        
                              {/* <Route exact path="/chat" name="Chat Page" component={Chat} /> */}
                             
                             
                              <Route exact path="/404" name="Page 404" component={Page404} />
                              <Route exact path="/500" name="Page 500" component={Page500} />
                              <Route exact path="/pay" name="Page Pay" component={PagePay} />
                              <Route exact path="/async" name="page test" component={AsyncApp} />
                              <Route exact path="/dashboard" name="dashboard" component={DefaultLayout} />
        
                              
                              <Route path="/" name="Home" component={DefaultLayout} />
                        </Switch>
                        :<Switch>
                                                 <Route exact path="/Home/Final" name="HomeFinal" component={HomeFinal} />  
                                                 <Route exact path="/register" name="Register Page" component={Register} />
                              <Route exact path="/ResetFirst" name="ResetSecond Page" component={ResetFirst} />
                              <Route exact path="/ResetSecond" name="ResetSecond Page" component={ResetSecond} />
                              <Route exact path="/login" name="Login Page" component={Login} />
                              <Route exact path="/async" name="page test" component={AsyncApp} />

                     <Route path="/" name="Home" component={HomeFinal} />
                    
                        </Switch>
                      }
            </BrowserRouter>
          </authContext.Provider>  
          </ApolloProvider>
    </Provider>   
)}}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
