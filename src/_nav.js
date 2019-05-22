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
      name: 'Evaluate',
      url: '/Evaluate',
      icon: 'icon-layers',
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
      name: 'Velocity',
      url: '/Member/Velocity',
      icon: 'icon-rocket',
    },
     {
      name: 'SprintBacklog',
      url: '/Member/SprintBacklog',
      icon: 'icon-book-open',
    },
     {
      name: 'Evaluate',
      url: '/Member/Evaluate',
      icon: 'icon-layers',
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
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
        {
          name: 'Chat',
          url: '/Chat',
          icon: 'icon-star',
        },
      ],
    },
    
  ],
};
