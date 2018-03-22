import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { environment } from '../config/environment';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default async () => {
  const middleware = [];
  const enhancers = [];

  if (environment.development) {
    const { logger } = await import('redux-logger');

    middleware.push(logger);
  }

  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(persistReducer({
    key: 'root',
    stateReconciler: autoMergeLevel2,
    storage,
  }, rootReducer), compose(...enhancers));

  persistStore(store);

  sagaMiddleware.run(rootSaga);

  return store;
};
