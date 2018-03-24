import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/PostFetch';

import { getPostWithComments } from '../../services/ApiService';

export function* getPostFetch(action) {
  const { data } = action;
  const response = yield call(getPostWithComments, data.id);

  if (response.ok) {
    yield put(Actions.postFetchSuccess(response.payload));
  } else {
    yield put(Actions.postFetchFailure());
  }
}

export default function* PostFetchSaga() {
  yield takeEvery('POST_FETCH_REQUEST', getPostFetch);
}
