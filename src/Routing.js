import React from "react";
import { Switch, Route,Router } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import { createBrowserHistory } from 'history'
import home from './Pages/home';
import update from './Pages/update';
import deletecomponent from './Pages/delete';
import contact from './Pages/contact'




import Error from './Error';
const history = useRouterHistory(createBrowserHistory)({
  basename: '/demo/nctzen'
})
const Routing  = () => {
        return(
          <Switch>
          <Route exact path="/"  component={home}/>
          <Route exact path="/update" component={update}/>
          <Route exact path="/delete" component={deletecomponent}/>
          <Route exact path="/contact" component={contact}/>
          <Route component={Error}/>
          </Switch>
        ); 
}
export default Routing;