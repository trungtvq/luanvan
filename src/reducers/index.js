import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  DO_LOGOUT,
  DO_LOGIN,
  GET_PROJECT,
  SET_PROJECT
} from '../actions'

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
  switch (action.type) {    
    case SET_PROJECT:
      return Object.assign({},{
        projectId:action.id,
        projectName:action.name
      })
    case GET_PROJECT:    
    default:
      return state
  }
}
const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  changeStatusLogin,
  changeStatusProject
})

export default rootReducer