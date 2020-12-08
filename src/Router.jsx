import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Users from './Pages/Users';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/users" component={Users} />
            <Route path="/todos" component={() => <h1>TODOS</h1>} />
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Router;
