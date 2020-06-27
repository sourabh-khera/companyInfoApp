import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/pagenotfound';
import ContentInsertion from '../containers/contentInsertion';

const authRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ContentInsertion} />
      <Route render={() => (<PageNotFound />)} />
    </Switch>
  );
}

export default authRoutes;
