import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Profile from './pages/Profile.js'
import NotFound from './pages/NotFound.js'

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Profile} />
        <Route component={NotFound}/>
    </Switch>
  );
}

export default App;