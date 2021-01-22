import React from "react";
import { Switch, Route } from 'react-router-dom';
// import { createBrowserHistory } from 'history'
import home from './Pages/home';
import contact from './Pages/about';


import Error from './Error';
const Routing  = () => {
        return(
          <Switch>
          <Route path="/" component={home} exact/>
          <Route path="/about" component={contact}/>
          <Route component={Error}/>
          </Switch>
        ); 
}
export default Routing;