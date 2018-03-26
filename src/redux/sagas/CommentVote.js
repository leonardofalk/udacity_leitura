import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/CommentVote';

import { voteComment } from '../../services/ApiService';

export function* getCommentVote(action) {
  const { data } = action;
  const response = yield call(voteComment, data);

  if (response.ok) {
    yield put(Actions.commentVoteSuccess(response.data));
  } else {
    yield put(Actions.commentVoteFailure());
  }
}

export default function* CommentVoteSaga() {
  yield takeEvery('COMMENT_VOTE_REQUEST', getCommentVote);
}
