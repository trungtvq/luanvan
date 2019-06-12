import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  DO_LOGOUT,
  DO_LOGIN,
  GET_CURENT_PROJECT,
  SET_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  ADD_PROJECT,
  SET_TEAM,
  LOAD_TEAM,
  SET_MEMBERS,
  SET_SPRINTS,
  SET_SPRINTBACKLOGS
} from '../actions'
import {
  getFromStorage,
  setInStorage
} from '../service/storage'

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

//update state login
function changeStatusLogin(state = {isLogin:false}, action) {
  
  switch (action.type) {
    case DO_LOGIN:    
      if (action.avatar!=undefined && action.avatar!="")
      setInStorage('avatar',action.avatar)
      setInStorage('accessToken',action.token)
      setInStorage('userId',action.id)
      return Object.assign({}, {
                id:action.id,
                token:action.token,
                isLogin:true,
                email:action.email,
                name:action.name,
                avatar:action.avatar})      
    case DO_LOGOUT:
      setInStorage('avatar',"")
      setInStorage('accessToken',"")
      setInStorage('userId',"")
      setInStorage('teamId',"")
      setInStorage('currentProject',"")
      return Object.assign({},{isLogin:false})
    default:
      return state
  }
}

//state of current project
function changeStatusProject(state={projectId:"noid"},action){
  switch (action.type) {    
    case SET_PROJECT:
      setInStorage('currentProject', action.id)
      setInStorage('currentProjectName', action.name)      
      return Object.assign({},state,{
        projectId:action.id,
        projectName:action.name,
        hasProject:action.id==""?false:true,
      })
    case GET_CURENT_PROJECT:    
    case SET_TEAM:
        setInStorage('teamId',action.id)
        setInStorage('teamName',action.name)  
        
        return Object.assign({},state,{
          teamId:action.id,
          teamName:action.name,
          hasTeam:true,     
        })
  

    case SET_SPRINTS:
        return Object.assign({},state,{
          sprints:action.sprints
        })

    case SET_SPRINTBACKLOGS:
      return Object.assign({},state,
       { sprintbacklogs:action.sprintbacklogs
      }
        )
   
    case SET_MEMBERS:
        return Object.assign({},state,{
          members:action.members
        })
    case LOAD_TEAM:
    default:
      return state
  }
}
function changeStatusTeam(state={},action){
  switch (action.type){
    
    
  }
}
function updateProjectLoaded(state={project:[],needUpdate:false},action){
  let newProject
  switch (action.type) {    
    case ADD_PROJECT:
        state.project.push(Object.assign({},{
            id:action.id,
            ownerName:action.ownerName,
            topic:action.topic,
            projectName:action.name,
            start:action.start,
            end:action.end,
            private:action.isPrivate,     
            progress:action.progress     
        }))
        return Object.assign({}, state,{needUpdate:action.id});
    case UPDATE_PROJECT: 
        newProject=[];
        state.project=state.project.map(function (item, key) {
            if (item.id!=action.id) newProject.push(item)
              else{
                newProject.push(Object.assign({},{
                  id:action.id,
                  ownerName:action.ownerName,
                  topic:action.topic,
                  projectName:action.name,
                  start:action.start,
                  end:action.end,
                  private:action.isPrivate,     
                  progress:action.progress
              }))}})      
        return Object.assign({},state, {project:newProject},{needUpdate:action.id});
        
    case DELETE_PROJECT:    
        newProject=[];
        state.project=state.project.map(function (item, key) {
            if (item.id!=action.id) newProject.push(item)
        })
        return Object.assign({},state, {project:newProject},{needUpdate:action.id});

    default:
      return state
  }
}



const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  changeStatusLogin,
  changeStatusProject,
  updateProjectLoaded,
})

export default rootReducer