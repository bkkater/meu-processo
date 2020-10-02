import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Landing from './pages/Landing';
import ConfirmResult from './pages/ConfirmResult';

function Routes(){
    return (
        <BrowserRouter>
            <Route path= '/'exact component={Landing}/>    
            <Route path= '/ConfirmResult'exact component={ConfirmResult}/>   
            <Route path= '/Home' exact component={Home}/>  
        </BrowserRouter>
    )
}

export default Routes;