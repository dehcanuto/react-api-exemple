import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import HomePage from './pages/Home';
import SinglePage from './pages/Single';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/s/:slug" component={SinglePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
