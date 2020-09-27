import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Landing from './pages/Landing';


function Routes(){
    return (
        <BrowserRouter>
            <Route path= '/' exact component={Home}/>   
            <Route path= '/Landing'exact component={Landing}/>        
        </BrowserRouter>
    )
}

export default Routes;