import { fork, all } from 'redux-saga/effects';

import CategorySaga from './Category';
import CommentCreateSaga from './CommentCreate';
import CommentUpdateSaga from './CommentUpdate';
import CommentVoteSaga from './CommentVote';
import DeletePostSaga from './DeletePost';
import FetchCommentSaga from './FetchComment';
import PostCreateSaga from './PostCreate';
import PostFetchSaga from './PostFetch';
import PostSaga from './Post';
import PostUpdateSaga from './PostUpdate';
import RedirectSaga from './Redirect';
import VoteSaga from './Vote';

export default function* rootSaga() {
  yield all([
    fork(CommentVoteSaga),
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
