import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'

import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import todos from './reducers'

import './styles/styles.scss';
import RouteApp from './components/RouteApp'

const store = createStore(todos)

const Root = ({store})=>
  <Provider store={store}>
    <Router>    
      <Route path="/:filter?" component={RouteApp} />
    </Router>
  </Provider>

Root.propTypes = {
    store: PropTypes.object.isRequired
}
render(<Root store={store} />, document.getElementById('app'))