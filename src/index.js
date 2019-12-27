import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, Switch } from 'react-router-dom';

import Profile from './pages/Profile.js'
import NotFound from './pages/NotFound.js'

import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route component={NotFound}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
