import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';

import GateKeeper from './containers/gateKeeper';

const store = configureStore();

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <GateKeeper />
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));