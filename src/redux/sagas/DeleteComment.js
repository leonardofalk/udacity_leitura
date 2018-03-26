import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/DeleteComment';

import { deleteComment } from '../../services/ApiService';

export function* getDeleteComment(action) {
  const { data } = action;
  const response = yield call(deleteComment, data);

  if (response.ok) {
    yield put(Actions.deleteCommentSuccess(response.data));
  } else {
    yield put(Actions.deleteCommentFailure());
  }
}

export default function* DeleteCommentSaga() {
  yield takeEvery('DELETE_COMMENT_REQUEST', getDeleteComment);
}
