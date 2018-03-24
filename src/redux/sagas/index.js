import { fork, all } from 'redux-saga/effects';

import DeletePostSaga from './DeletePost';
import PostCreateSaga from './PostCreate';
import CategorySaga from './Category';
import PostSaga from './Post';
import VoteSaga from './Vote';

export default function* rootSaga() {
  yield all([
    fork(DeletePostSaga),
    fork(PostCreateSaga),
    fork(CategorySaga),
    fork(PostSaga),
    fork(VoteSaga),
  ]);
}
