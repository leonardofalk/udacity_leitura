import { fork, all } from 'redux-saga/effects';

import CategorySaga from './Category';
import PostSaga from './Post';
import VoteSaga from './Vote';

export default function* rootSaga() {
  yield all([
    fork(CategorySaga),
    fork(PostSaga),
    fork(VoteSaga),
  ]);
}
