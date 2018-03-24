import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/PostCreate';

import { createPost } from '../../services/ApiService';

export function* getPostCreate(action) {
  const { data } = action;
  const response = yield call(createPost, data);

  if (response.ok) {
    yield put(Actions.postCreateSuccess(response.data));
  } else {
    yield put(Actions.postCreateFailure());
  }
}

export default function* PostCreateSaga() {
  yield takeEvery('POST_CREATE_REQUEST', getPostCreate);
}
