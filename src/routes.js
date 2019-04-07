import React from 'react';
import DefaultLayout from './containers/DefaultLayout';


const Colors = React.lazy(() => import('./components/Colors'));

const Register = React.lazy(() => import('./views/Pages/Register'));

const DailySchedule = React.lazy(() => import('./views/DailySchedule'));

const ProfileDetail = React.lazy(() => import('./views/Profile/detail'));
const ProfileEdit = React.lazy(() => import('./views/Profile/edit'));

//Home
const HomeMain = React.lazy(() => import('./views/Home/Main'));
const HomeContact = React.lazy(() => import('./views/Home/Contact'));
const HomeService = React.lazy(() => import('./views/Home/Service'));
const HomeSolve = React.lazy(() => import('./views/Home/Solve'));



//Project
const AllProject = React.lazy(() => import('./views/Project/AllProject'));
const ProjectDone = React.lazy(() => import('./views/Project/ProjectDone'));
const ProjectTodo = React.lazy(() => import('./views/Project/ProjectTodo'));

const DashBoard = React.lazy(() => import('./views/DashBoard'));
//PO
const Add_Po = React.lazy(() => import('./views/Po/ProductBacklog/Add'));
const Detail_Po = React.lazy(() => import('./views/Po/ProductBacklog/Detail'));
const TestApollo = React.lazy(() => import('./views/Pages/TestApollo'));

//Master
const Add_Master = React.lazy(() => import('./views/Master/Task/Add'));
const Detail_Master = React.lazy(() => import('./views/Master/Task/Detail'));
const SprintBacklog_Master = React.lazy(() => import('./views/Master/SprintBacklog'));
const Evaluate_Master = React.lazy(() => import('./views/Master/Evaluate'));

//Member
const MyTask_Member = React.lazy(() => import('./views/Member/Task/MyTask'));
const Register_Member = React.lazy(() => import('./views/Member/Task/Register'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
 
  { path: '/theme/colors',exact: true,  name: 'Colors', component: Colors },
  { path: '/DailySchedule', exact: true, name: 'DailySchedule', component: DailySchedule },
  { path: '/DashBoard', exact: true, name: 'DashBoard', component: DashBoard },
  { path: '/Profile/Detail', exact: true, name: 'ProfileDetail', component: ProfileDetail },
  { path: '/Profile/Edit', exact: true, name: 'ProfileEdit', component: ProfileEdit },

  //home HomeMain
  { path: '/Home/Main', exact: true, name: 'HomeMain', component: HomeMain },
  { path: '/Home/Contact', exact: true, name: 'HomeContact', component: HomeContact },
  { path: '/Home/Service', exact: true, name: 'HomeService', component: HomeService },
  { path: '/Home/Solve', exact: true, name: 'HomeSolve', component: HomeSolve},

  //project
  { path: '/AllProject', exact: true, name: 'AllProject', component: AllProject },
  { path: '/ProjectDone', exact: true, name: 'ProjectDone', component: ProjectDone },
  { path: '/ProjectTodo', exact: true, name: 'ProjectTodo', component: ProjectTodo },

  
  //PO
  { path: '/ProductBacklog/Add',exact: true,  name: 'Add', component: Add_Po },
  { path: '/ProductBacklog/Detail',exact: true,  name: 'Detail', component: Detail_Po },
  { path: '/testapollo', name: 'Typography', component: TestApollo },

  //Master
  { path: '/Master/Task/Add',exact: true,  name: 'Add', component: Add_Master },
  { path: '/Master/Task/Detail',exact: true,  name: 'Detail', component: Detail_Master },
  { path: '/Master/SprintBacklog',exact: true,  name: 'SprintBacklog', component: SprintBacklog_Master },
  { path: '/Master/Evaluate',exact: true,  name: 'Evaluate', component: Evaluate_Master },
  //Member
  { path: '/Member/Task/MyTask',exact: true,  name: 'MyTask', component: MyTask_Member },
  { path: '/Member/Task/Register',exact: true,  name: 'Register', component: Register_Member },
  
];

export default routes;
