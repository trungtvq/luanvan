//import fetch from 'cross-fetch'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const DO_LOGIN = 'DO_LOGIN'
export const DO_LOGOUT = 'DO_LOGOUT'
export const GET_PROJECT_SELECTED = 'GET_PROJECT_SELECTED'
export const SET_PROJECT_SELETED = 'SET_PROJECT_SELETED'
export const FETCH_ALL_PROJECT = 'FETCH_ALL_PROJECT'


//hook
export const NEW_PROJECT_COME = 'NEW_PROJECT_COME'
export const UPDATE_PROJECT_COME = 'UPDATE_PROJECT_COME'
export const REMOVE_PROJECT_COME = 'REMOVE_PROJECT_COMEs'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  console.log("fetchPostsIfNeeded")  
  return (dispatch, getState) => {
    console.log(dispatch)
    console.log(getState())
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

export function subcriptChannel(channelId){
  
}

export function saveLogin(id,token,email,name,avatar) {
  return {
    type: DO_LOGIN,
    id,
    token,
    email,
    name,
    avatar
  }
}
export function removeLogin() {
  return {
    type: DO_LOGOUT
  }
}
export function getProject(){
  return {
    type: GET_PROJECT_SELECTED
  }
}
export function setProject(id,name){
  return {
    type: SET_PROJECT_SELETED,
    id,
    name
  }
}
export function addProject(id,topic,name,start,end,isPrivate,progress){
  return {
    type: ADD_PROJECT,
    id,topic,name,start,end,isPrivate,progress
  }
}
export function deleteProject(id){
  return {
    type: DELETE_PROJECT,
    id
  }
}
export function updateProject(id,topic,name,start,end,isPrivate,progress  ){
  return {
    type: UPDATE_PROJECT,
    id,topic,name,start,end,isPrivate,progress
  }
}
export function fetchmyproject(id,ownerName,topic,name,start,end,isPrivate){
  return {
    type: ADD_PROJECT,
    id,ownerName,topic,name,start,end,isPrivate
  }
}

//TYPE:
export const ADD_PROJECT = 'ADD_PROJECT'
export const UPDATE_PROJECT = 'UPDATE_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'
export const FORCE_RERENDER = 'FORCE_RERENDER'
export const NOTIFY_COME = 'FORCE_RERENDER'

function fetch_notify(){

}
function fetch_message(){

}
function fetch_task(){

}
export function hook(type,id,detail){
  return (dispatch, getState) => {
  switch (type){
    case "new_message":
        return dispatch(fetch_message(id,detail))
    case "new_notify":
        return dispatch(fetch_notify(id,detail))
    case "new_task":
        return dispatch(fetch_task(id,detail))
    
    }
  }
}