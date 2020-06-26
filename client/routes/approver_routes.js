import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/pagenotfound';
import ApproverView from '../containers/approverView';

const approverRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ApproverView} />
        <Route render={() => (<PageNotFound />)} />
      </Switch>
    </Router>
  );
}

export default approverRoutes;

