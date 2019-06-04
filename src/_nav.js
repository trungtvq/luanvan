export default {
  items: [
    {
      name: 'Dashboard',
      url: '/DashBoard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Product Owner',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'User Story',
       url: '/UserStory/Detail',
      icon: 'icon-pencil',
    },
    {
      name: 'Estimation',
      url: '/Cover',
      icon: 'icon-directions',
    },
    {
      name: 'Product backlog',
      url: '/ProductBacklog/Detail',
      icon: 'icon-pencil',
    },
    {
      name: 'Board planning',
      url: '/Member/Velocity',
      icon: 'icon-rocket',
    },
     {
      title: true,
      name: 'Team member',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    
    
     {
      name: 'SprintBacklog',
      url: '/Member/SprintBacklog',
      icon: 'icon-book-open',
    },
    {
      name: 'Project Sprints',
      url: '/Member/AllSprint',
      icon: 'icon-book-open',
    },
   
        {
          name: 'Team Task',
          url: '/Member/TeamTask',
          icon: 'icon-docs',
        },
    
        {
          name: 'My Task',
          url: '/Member/Task/MyTask',
          icon: 'icon-doc',
        },
       

   
   
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Daily Schedule',
      url: '/DailySchedule',
      icon: 'icon-calendar',
    },
    {
      name: 'Project teams',
      url: '/AllTeam',
      icon: 'icon-people',
    },
    {
      name: 'Create teams',
      url: '/CreateTeam',
      icon: 'icon-pencil',
    },
  ],
};
