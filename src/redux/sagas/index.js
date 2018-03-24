import { fork, all } from 'redux-saga/effects';

import CategorySaga from './Category';
import DeletePostSaga from './DeletePost';
import PostCreateSaga from './PostCreate';
import PostFetchSaga from './PostFetch';
import PostSaga from './Post';
import PostUpdateSaga from './PostUpdate';
import RedirectSaga from './Redirect';
import VoteSaga from './Vote';

export default function* rootSaga() {
  yield all([
    fork(CategorySaga),
    fork(DeletePostSaga),
    fork(PostCreateSaga),
    fork(PostFetchSaga),
    fork(PostSaga),
    fork(PostUpdateSaga),
    fork(RedirectSaga),
    fork(VoteSaga),
  ]);
}
