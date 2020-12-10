import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CoinDetails from './pages/Details';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={HomePage} path="/" exact />
            <Route component={Login} path="/Login" exact />
            <Route component={Register} path="/Register" exact /> 
            <Route component={Home} path="/Home" exact />
            <Route component={CoinDetails} path="/coin-details/:nome" />
        </BrowserRouter>
    )
}

export default Routes;