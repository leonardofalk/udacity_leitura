/* eslint-disable no-unused-vars */
import { fork, all } from 'redux-saga/effects';
import CategorySaga from './Category';

import postSaga from './Post';

export default function* rootSaga() {
  yield all([
    fork(CategorySaga),

    fork(postSaga),
  ]);
}
