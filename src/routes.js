import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewCase from './pages/NewCase';
import About from './pages/About';

export default function Routes() {
  return (
    <Switch>
      <Route path='/home' exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
      <Route path='/incidents/new' component={NewCase} />
      <Route path='/' exact component={About} /> 
    </Switch>
  )
}