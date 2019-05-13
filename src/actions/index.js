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
export const UPDATE_PROJECT = 'UPDATE_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'
export const ADD_PROJECT = 'ADD_PROJECT'
export const FORCE_RERENDER = 'FORCE_RERENDER'

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
  return (dispatch, getState) => {
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
export function addProject(id,topic,name,start,end,isPrivate){
  return {
    type: ADD_PROJECT,
    id,topic,name,start,end,isPrivate
  }
}
export function fetchAllProject(id,topic,name,start,end,isPrivate){
  return {
    type: ADD_PROJECT,
    id,topic,name,start,end,isPrivate
  }
}
export function forceRerender(){
  return {
    type: FORCE_RERENDER,
  }
}