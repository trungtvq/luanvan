import React from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import RouteApp from '../RouteApp'

const Root = ({store})=>
  <Provider store={store}>
    <Router>    
      <Route path="/:filter?" component={RouteApp} />
    </Router>
  </Provider>

Root.propTypes = {
    store: PropTypes.object.isRequired
  }
  export default Root;
