import { takeLatest, call, put } from 'redux-saga/effects';
import Actions from '../reducers/PostUpdate';

import { updatePost } from '../../services/ApiService';

export function* getPostUpdate(action) {
  const { data } = action;
  const response = yield call(updatePost, data);

  if (response.ok) {
    yield put(Actions.postUpdateSuccess(response.data));
  } else {
    yield put(Actions.postUpdateFailure());
  }
}

export default function* PostUpdateSaga() {
  yield takeLatest('POST_UPDATE_REQUEST', getPostUpdate);
}
