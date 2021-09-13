import Dashboard from 'pages/Dashboards';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
           <Switch>
               <Route path="/" exact>
                   <Home />
               </Route>

               <Route path="/">
                   <Dashboard />
               </Route>
           </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;
  