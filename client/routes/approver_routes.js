import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/pagenotfound';
import asyncComponent from '../hoc/asyncComponent';

const AsyncApproverView = asyncComponent(() => import('../containers/approverView'));

const approverRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AsyncApproverView} />
      <Route render={() => (<PageNotFound />)} />
    </Switch>
  );
}

export default approverRoutes;

