import { all, takeLatest, call, put } from 'redux-saga/effects';
import Actions from '../reducers/PostFetch';

import { getPostWithComments } from '../../services/ApiService';

export function* getPostFetch(action) {
  const { type, data } = action;
  let params = data;

  if (type !== 'POST_FETCH_REQUEST') {
    params = action.payload;
    params.id = params.parentId || params.id;
  }

  const response = yield call(getPostWithComments, params);

  if (response.ok) {
    yield put(Actions.postFetchSuccess(response.payload));
  } else {
    yield put(Actions.postFetchFailure());
  }
}

export default function* PostFetchSaga() {
  yield all([
    takeLatest('POST_FETCH_REQUEST', getPostFetch),
    takeLatest('VOTE_SUCCESS', getPostFetch),
    takeLatest('DELETE_POST_SUCCESS', getPostFetch),
    takeLatest('COMMENT_VOTE_SUCCESS', action => (
      getPostFetch({ ...action, data: { id: action.payload.parentId } }))),
    takeLatest('DELETE_COMMENT_SUCCESS', action => (
      getPostFetch({ ...action, data: { id: action.payload.parentId } }))),
  ]);
}
