import React from 'react';
import DefaultLayout from './containers/DefaultLayout';


const Colors = React.lazy(() => import('./components/Colors'));

const Register = React.lazy(() => import('./views/Pages/Register'));

const DailySchedule = React.lazy(() => import('./views/Workspace/DailySchedule'));
const Chat = React.lazy(() => import('./views/Personal/Chat'));
// const ProfileDetail = React.lazy(() => import('./views/Personal/Profile/detail'));
// const ProfileEdit = React.lazy(() => import('./views/Personal/Profile/edit'));

//Home
// const HomeMain = React.lazy(() => import('./views/Home/Main'));
// const HomeContact = React.lazy(() => import('./views/Home/Contact'));
// const HomeService = React.lazy(() => import('./views/Home/Service'));
// const HomeSolve = React.lazy(() => import('./views/Home/Solve'));



//Project
// const AllProject = React.lazy(() => import('./views/Personal/Project/AllProject'));
// const ProjectDone = React.lazy(() => import('./views/Personal/Project/ProjectDone'));
// const ProjectTodo = React.lazy(() => import('./views/Personal/Project/ProjectTodo'));
// const CreateProject = React.lazy(() => import('./views/Personal/Project/CreateProject'));


const DashBoard = React.lazy(() => import('./views/Workspace/DashBoard'));
//PO
const Detail_Po = React.lazy(() => import('./views/Workspace/Po/ProductBacklog/Detail'));


const UserStory_Detail = React.lazy(() => import('./views/Workspace/Po/UserStory/Detail'));



const Cover = React.lazy(() => import('./views/Workspace/Po/Cover'));

const Evaluate_Po = React.lazy(() => import('./views/Workspace/Po/Evaluate'));




const TestApollo = React.lazy(() => import('./views/Pages/TestApollo'));


//Member
const MyTask_Member = React.lazy(() => import('./views/Workspace/Member/Task/MyTask'));
const SprintBacklog_Member = React.lazy(() => import('./views/Workspace/Member/SprintBacklog'));
const Evaluate_Member = React.lazy(() => import('./views/Workspace/Member/Evaluate'));

const TeamTask_Member = React.lazy(() => import('./views/Workspace/Member/TeamTask'));


const Velocity_Member = React.lazy(() => import('./views/Workspace/Member/Velocity'));
const Team_Member = React.lazy(() => import('./views/Workspace/Member/Team'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
 
  { path: '/theme/colors',exact: true,  name: 'Colors', component: Colors },
  { path: '/DailySchedule', exact: true, name: 'DailySchedule', component: DailySchedule },
  { path: '/Chat', exact: true, name: 'Chat', component: Chat },

  { path: '/DashBoard', exact: true, name: 'DashBoard', component: DashBoard },
  // { path: '/Profile/Detail', exact: true, name: 'ProfileDetail', component: ProfileDetail },
  // { path: '/Profile/Edit', exact: true, name: 'ProfileEdit', component: ProfileEdit },

  //home HomeMain
  // { path: '/Home/Main', exact: true, name: 'HomeMain', component: HomeMain },
  // { path: '/Home/Contact', exact: true, name: 'HomeContact', component: HomeContact },
  // { path: '/Home/Service', exact: true, name: 'HomeService', component: HomeService },
  // { path: '/Home/Solve', exact: true, name: 'HomeSolve', component: HomeSolve},

  //project
  // { path: '/AllProject', exact: true, name: 'AllProject', component: AllProject },
  // { path: '/ProjectDone', exact: true, name: 'ProjectDone', component: ProjectDone },
  // { path: '/ProjectTodo', exact: true, name: 'ProjectTodo', component: ProjectTodo },
  // { path: '/CreateProject', exact: true, name: 'CreateProject', component: CreateProject },


  
  //PO
  { path: '/ProductBacklog/Detail',exact: true,  name: 'Detail', component: Detail_Po },
  

  { path: '/UserStory/Detail',exact: true,  name: 'UserStory_Detail', component: UserStory_Detail },
  

  { path: '/Cover',exact: true,  name: 'Cover', component: Cover},

  { path: '/Evaluate',exact: true,  name: 'Evaluate', component: Evaluate_Po },



  { path: '/testapollo', name: 'Typography', component: TestApollo },

  
  //Member
  { path: '/Member/Task/MyTask',exact: true,  name: 'MyTask', component: MyTask_Member },
  { path: '/Member/SprintBacklog',exact: true,  name: 'SprintBacklog', component: SprintBacklog_Member },
  { path: '/Member/Evaluate',exact: true,  name: 'Evaluate', component: Evaluate_Member },

  { path: '/Member/TeamTask',exact: true,  name: 'TeamTask', component: TeamTask_Member },
 


 
  { path: '/Member/Velocity',exact: true,  name: 'Velocity_Member', component: Velocity_Member },
  { path: '/Member/Team',exact: true,  name: 'Team_Member', component: Team_Member },


  
];

export default routes;
