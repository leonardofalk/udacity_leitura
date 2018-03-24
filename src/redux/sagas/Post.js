import { all, takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/Post';

import { getPosts } from '../../services/ApiService';

export function* getPost(action) {
  const { data } = action;
  const response = yield call(getPosts, data);

  if (response.ok) {
    yield put(Actions.postSuccess(response.payload));
  } else {
    yield put(Actions.postFailure());
  }
}

export default function* postSaga() {
  yield all([
    takeEvery('POST_REQUEST', getPost),
    takeEvery('VOTE_SUCCESS', getPost),
  ]);
}
