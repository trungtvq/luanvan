//style 
import './App.scss';

import React, { Component } from 'react';

//context
import Client from "./Client"


import PropTypes from 'prop-types'

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
 // <Route exact path="/AllProject" name="AllProject" component={AllProject} />
                      // <Route exact path="/ProjectDone" name="ProjectDone" component={ProjectDone} />
                      // <Route exact path="/ProjectTodo" name="ProjectTodo" component={ProjectTodo} />

//{ path: '/Home/Main', exact: true, name: 'HomeMain', component: HomeMain },
  // { path: '/Home/Contact', exact: true, name: 'HomeContact', component: HomeContact },
  // { path: '/Home/Service', exact: true, name: 'HomeService', component: HomeService },
  // { path: '/Home/Solve', exact: true, name: 'HomeSolve', component: HomeSolve},
  store.subscribe(() => console.log(store.getState()))

class App extends Component {
  

  render() {
    

    return (
      <Provider store={store}>
        <Client />
    </Provider>   
)}}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default (App);
