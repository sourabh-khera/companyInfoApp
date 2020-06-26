import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/login';
import PageNotFound from '../components/pagenotfound';

const unauthRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route render={() => (<PageNotFound />)} />
      </Switch>
    </Router>
  );
}

export default unauthRoutes;