
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from '../App/App';
import HelloWorld from '../HelloWorld/HelloWorld';
import NotFound from '../App/NotFound';
import Home from '../Home/Home';
import NewComponent from '../NewComponent';
const RouteApp=()=>
<App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>

        <Route path path="/NewComponent" component={NewComponent}/>
        <Route component={NotFound}/>
      </Switch>
</App>
export default RouteApp;