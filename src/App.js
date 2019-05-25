//style 
import './App.scss';

import React, { Component } from 'react';

//context
import Client from "./Client"

//redux
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

//
const loggerMiddleware = createLogger()

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}

const store = configureStore()

// store.subscribe(() =>{console.log("subscribe")
//  console.log(store.getState())})

class App extends Component {
  

  render() {   

    return (
      <Provider store={store}>
        <Client />
    </Provider>   
)}}


export default (App);
