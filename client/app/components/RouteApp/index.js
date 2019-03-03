
import React from 'react';
import App from '../App/App';
import NotFound from '../App/NotFound';

import Home from '../Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import HelloWorld from '../HelloWorld/HelloWorld';
const RouteApp=()=>
<App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route component={NotFound}/>
      </Switch>
</App>
export default RouteApp;