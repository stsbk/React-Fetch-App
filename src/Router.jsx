import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Users from './Pages/Users';
import User from './Pages/Users/User';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/users/:id" component={User} />
            <Route path="/users" component={Users} />
            <Route path="/todos" component={() => <h1>TODOS</h1>} />
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Router;
