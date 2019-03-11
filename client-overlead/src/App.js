import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//components
import AppT1 from './AppT1'
import AppT2 from './components/src/App'
import Login from './components/Login'
import Register from './components/Register'
import Page500 from './components/Page500'
import Page404 from './components/Page404'
import Colors from './components/Colors'

//containers
import DefaultLayout from './containers/DefaultLayout'

const App = () => (
  //<Provider >
    <Router>
      <div>
      
      <Route path="/t1" component={AppT1} />
      <Route path="/t2" component={AppT2} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/Page404' component={Page404} />
      <Route path='/Page500' component={Page500} />
      <Route path='/theme/colors1' component={Colors}/>
      <Route  path="/"  component={DefaultLayout} />
      </div>
     
    </Router>
  //</Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
