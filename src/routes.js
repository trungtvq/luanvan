import React from 'react';
import DefaultLayout from './containers/DefaultLayout';


const Colors = React.lazy(() => import('./components/Colors'));

const Register = React.lazy(() => import('./views/Pages/Register'));

const DailySchedule = React.lazy(() => import('./views/DailySchedule'));

const DashBoard = React.lazy(() => import('./views/DashBoard'));
//PO
const Add_Po = React.lazy(() => import('./views/Po/ProductBacklog/Add'));
const Detail_Po = React.lazy(() => import('./views/Po/ProductBacklog/Detail'));
const TestApollo = React.lazy(() => import('./views/Pages/TestApollo'));

//Master
const Add_Master = React.lazy(() => import('./views/Master/Task/Add'));
const Detail_Master = React.lazy(() => import('./views/Master/Task/Detail'));
const SprintBacklog_Master = React.lazy(() => import('./views/Master/SprintBacklog'));

//Member
const MyTask_Member = React.lazy(() => import('./views/Member/Task/MyTask'));
const Register_Member = React.lazy(() => import('./views/Member/Task/Register'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
 
  { path: '/theme/colors',exact: true,  name: 'Colors', component: Colors },
  { path: '/DailySchedule', exact: true, name: 'DailySchedule', component: DailySchedule },
   { path: '/DashBoard', exact: true, name: 'DashBoard', component: DashBoard },

  //PO
  { path: '/ProductBacklog/Add',exact: true,  name: 'Add', component: Add_Po },
  { path: '/ProductBacklog/Detail',exact: true,  name: 'Detail', component: Detail_Po },
 
  { path: '/testapollo', name: 'Typography', component: TestApollo },

  //Master
  { path: '/Master/Task/Add',exact: true,  name: 'Add', component: Add_Master },
  { path: '/Master/Task/Detail',exact: true,  name: 'Detail', component: Detail_Master },
  { path: '/Master/SprintBacklog',exact: true,  name: 'SprintBacklog', component: SprintBacklog_Master },

  //Member
  { path: '/Member/Task/MyTask',exact: true,  name: 'MyTask', component: MyTask_Member },
  { path: '/Member/Task/Register',exact: true,  name: 'Register', component: Register_Member },
  
];

export default routes;
