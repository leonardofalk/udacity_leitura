/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { environment } from '../config/environment';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default () => {
  const middleware = [];
  const enhancers = [];

  if (environment.development) {
    const { logger } = require('redux-logger');

    middleware.push(logger);
  }

  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};
