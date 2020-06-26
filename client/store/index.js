import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import middlewares from '../middleware';

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}

export default configureStore;