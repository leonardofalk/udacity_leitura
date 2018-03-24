import { all, takeLatest, call, put } from 'redux-saga/effects';
import Actions from '../reducers/Redirect';
import { pushHistory } from '../../services/ApiService';

export function* getRedirect() {
  yield call(pushHistory);

  yield put(Actions.redirectSuccess());
}

export default function* redirectSaga() {
  yield all([
    takeLatest('POST_UPDATE_SUCCESS', getRedirect),
    takeLatest('POST_CREATE_SUCCESS', getRedirect),
  ]);
}
