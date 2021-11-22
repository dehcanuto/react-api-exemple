import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import HomePage from './pages/Home';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
