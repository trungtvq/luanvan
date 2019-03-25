export default {
  items: [
    {
      name: 'Dashboard',
      url: '/DashBoard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
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
      name: 'Product backlog',
      url: '/ProductBacklog',
      icon: 'icon-pencil',
	  children: [
        {
          name: 'Detail',
          url: '/ProductBacklog/Detail',
          icon: '',
        },
        {
          name: 'Add',
          url: '/ProductBacklog/Add',
          icon: '',
        },
	  ]
    },
     {
      title: true,
      name: 'Master',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
     {
      name: 'Task',
      url: '/Task',
      icon: 'icon-layers',
    children: [
        {
          name: 'Detail',
          url: '/Master/Task/Detail',
          icon: '',
        },
        {
          name: 'Add',
          url: '/Master/Task/Add',
          icon: '',
        },
    ]
    },
     {
      name: 'SprintBacklog',
      url: '/Master/SprintBacklog',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Member',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
     {
      name: 'Task',
      url: '/Task',
      icon: 'icon-layers',
    children: [
        {
          name: 'MyTask',
          url: '/Member/Task/MyTask',
          icon: '',
        },
        {
          name: 'Register',
          url: '/Member/Task/Register',
          icon: '',
        },
    ]
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
      ],
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
  ],
};
