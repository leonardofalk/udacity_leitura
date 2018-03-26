import { fork, all } from 'redux-saga/effects';
import CommentUpdateSaga from './CommentUpdate';


import FetchCommentSaga from './FetchComment';
import CategorySaga from './Category';
import CommentCreateSaga from './CommentCreate';
import DeletePostSaga from './DeletePost';
import PostCreateSaga from './PostCreate';
import PostFetchSaga from './PostFetch';
import PostSaga from './Post';
import PostUpdateSaga from './PostUpdate';
import RedirectSaga from './Redirect';
import VoteSaga from './Vote';

export default function* rootSaga() {
  yield all([
    fork(CommentUpdateSaga),

    fork(FetchCommentSaga),
    fork(CategorySaga),
    fork(CommentCreateSaga),
    fork(DeletePostSaga),
    fork(PostCreateSaga),
    fork(PostFetchSaga),
    fork(PostSaga),
    fork(PostUpdateSaga),
    fork(RedirectSaga),
    fork(VoteSaga),
  ]);
}
