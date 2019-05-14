import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  DO_LOGOUT,
  DO_LOGIN,
  GET_PROJECT_SELECTED,
  SET_PROJECT_SELETED,
  FETCH_ALL_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  ADD_PROJECT,
} from '../actions'
const proto = {};
proto.myproject = require('../gRPC/myproject/myproject_grpc_web_pb');

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
function changeStatusLogin(state = {isLogin:false}, action) {
  console.log("changeStatusLogin")
  console.log(action)
  switch (action.type) {
    case DO_LOGIN:    
      return Object.assign({}, {
                id:action.id,
                token:action.token,
                isLogin:true,
                email:action.email,
                name:action.name,
                avatar:action.avatar})      
    case DO_LOGOUT:
      return Object.assign({},{isLogin:false})
    default:
      return state
  }
}
function changeStatusProject(state={projectId:"noid"},action){
  console.log("changeStatusProject")
  switch (action.type) {    
    case SET_PROJECT_SELETED:
      return Object.assign({},{
        projectId:action.id,
        projectName:action.name
      })
    case GET_PROJECT_SELECTED:    
    default:
      return state
  }
}

function updateProjectLoaded(state={project:[],needUpdate:false},action){
  console.log("updateProjectLoaded")
  let newProject
  switch (action.type) {    
    case FETCH_ALL_PROJECT:
      return Object.assign({},{
        projectId:action.id,
        projectName:action.name
      })
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