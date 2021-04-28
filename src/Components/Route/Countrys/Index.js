import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';
import CountryDetail from './CountryDetail/CountryDetail';

const CountrysRoute = () => {
    return (
        <Router>
            <Link to='/'><li>Home</li></Link>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/home'><Home /></Route>
                <Route path='/country/:countryName'><CountryDetail /></Route>
                <Route path='*'><NoMatch /></Route>
            </Switch>
        </Router>
    );
};

export default CountrysRoute;