import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/FetchComment';

import { getComment } from '../../services/ApiService';

export function* getFetchComment(action) {
  const { data } = action;
  const response = yield call(getComment, data);

  if (response.ok) {
    yield put(Actions.fetchCommentSuccess({ comment: response.data }));
  } else {
    yield put(Actions.fetchCommentFailure());
  }
}

export default function* FetchCommentSaga() {
  yield takeEvery('FETCH_COMMENT_REQUEST', getFetchComment);
}
