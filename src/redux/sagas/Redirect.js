import { all, takeLatest, call, put } from 'redux-saga/effects';
import Actions from '../reducers/Redirect';
import { pushHistory } from '../../services/ApiService';

export function* getRedirect(action) {
  const { data } = action;
  yield call(pushHistory, data);

  yield put(Actions.redirectSuccess());
}

export default function* redirectSaga() {
  yield all([
    takeLatest('POST_UPDATE_SUCCESS', getRedirect),
    takeLatest('POST_CREATE_SUCCESS', getRedirect),
    takeLatest('COMMENT_CREATE_SUCCESS', getRedirect),
    takeLatest('COMMENT_UPDATE_SUCCESS', getRedirect),
  ]);
}
