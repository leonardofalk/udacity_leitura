import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/Category';

import { getCategories } from '../../services/ApiService';

export function* getCategory(action) {
  const { data } = action;
  const response = yield call(getCategories, data);

  if (response.ok) {
    yield put(Actions.categorySuccess(response.payload));
  } else {
    yield put(Actions.categoryFailure());
  }
}

export default function* CategorySaga() {
  yield takeEvery('CATEGORY_REQUEST', getCategory);
}
