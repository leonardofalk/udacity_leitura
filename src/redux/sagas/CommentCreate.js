import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/CommentCreate';

import { createComment } from '../../services/ApiService';

export function* getCommentCreate(action) {
  const { data } = action;
  const response = yield call(createComment, data);

  if (response.ok) {
    yield put(Actions.commentCreateSuccess(response.data));
  } else {
    yield put(Actions.commentCreateFailure());
  }
}

export default function* CommentCreateSaga() {
  yield takeEvery('COMMENT_CREATE_REQUEST', getCommentCreate);
}
