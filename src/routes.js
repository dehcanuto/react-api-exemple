import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import HomePage from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route exact path="/" component={() => <h1>Pagina inicial</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
