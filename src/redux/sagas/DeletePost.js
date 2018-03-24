import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/DeletePost';

import { deletePost } from '../../services/ApiService';

export function* getDeletePost(action) {
  const { data } = action;
  const response = yield call(deletePost, data);

  if (response.ok) {
    yield put(Actions.deletePostSuccess({ payload: response.data }));
  } else {
    yield put(Actions.deletePostFailure());
  }
}

export default function* DeletePostSaga() {
  yield takeEvery('DELETE_POST_REQUEST', getDeletePost);
}
