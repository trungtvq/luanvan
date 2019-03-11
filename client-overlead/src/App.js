import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteApp from './RouteApp'


import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppT1 from './AppT1'
import AppT2 from './components/src/App'
import Login from './components/Login'
const App = () => (
  //<Provider >
    <Router>
      <div>
      <Route exact path="/" component={RouteApp} />

      <Route exact path="/t1/d" component={RouteApp} />
      <Route path="/t1" component={AppT1} />
      <Route path="/t2" component={AppT2} />
      <Route path='/login' component={Login} />
      </div>
     
    </Router>
  //</Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
