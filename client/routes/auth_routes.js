import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/pagenotfound';
import asyncComponent from '../hoc/asyncComponent';

const AsyncContentInsertion = asyncComponent(() => import('../containers/contentInsertion'));

const authRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AsyncContentInsertion} />
      <Route render={() => <PageNotFound />} />
    </Switch>
  );
}

export default authRoutes;