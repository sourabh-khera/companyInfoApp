import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/login';
import PageNotFound from '../components/pagenotfound';

const unauthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route render={() => (<PageNotFound />)} />
    </Switch>
  );
}

export default unauthRoutes;