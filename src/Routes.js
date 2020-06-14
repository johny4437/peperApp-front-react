import React from 'react'
import {BrowserRouter, Route, Switch} from  'react-router-dom';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import PrivateRouter from './auth/PrivateRouter';


 function Routes() {
    return (
       <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Form}/>
            <PrivateRouter path="/dashboard" exact component={Dashboard}/>
        </Switch>
       </BrowserRouter>
    )
}

export default Routes;
