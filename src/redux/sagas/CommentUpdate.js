import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/CommentUpdate';

import { updateComment } from '../../services/ApiService';

export function* getCommentUpdate(action) {
  const { data } = action;
  const response = yield call(updateComment, data);

  if (response.ok) {
    yield put(Actions.commentUpdateSuccess({ payload: response.data }));
  } else {
    yield put(Actions.commentUpdateFailure());
  }
}

export default function* CommentUpdateSaga() {
  yield takeEvery('COMMENT_UPDATE_REQUEST', getCommentUpdate);
}
