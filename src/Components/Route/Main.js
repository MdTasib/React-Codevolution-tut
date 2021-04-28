import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';
import UserDetail from './UserDetail/UserDetail';

const Main = () => {
    return (
        <Router>
            <ul>
                <li><Link to='/'>Home</Link></li>
            </ul>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/user/:userId'>
                    <UserDetail />
                </Route>
                <Route path='*'>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
};

export default Main;