import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { toastMiddleware } from './toast-middleware';
import { apiClient } from '../services';

const enhancers = [thunk.withExtraArgument(apiClient), toastMiddleware];

if (__DEV__) {
  /* eslint-disable global-require */
  const createDebugger = require('redux-flipper').default;
  const createFlipperMiddleware = require('rn-redux-middleware-flipper')
    .default;
  enhancers.push(createDebugger(), createFlipperMiddleware());
}

export const middlewares = applyMiddleware(...enhancers);
