---
to: src/redux/sagas/<%= NAME_CAMEL = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/<%= NAME_CAMEL %>';

import <%= NAME_CAMEL %>API from '../../services/<%= NAME_CAMEL %>API';

export function* get<%= NAME_CAMEL %>(action) {
  const { data } = action;
  const response = yield call(<%= NAME_CAMEL %>API.fetch, data);

  if (response.ok) {
    yield put(Actions.<%= NAME_LOWERCASE = name.toLowerCase() %>Success({ payload: response.data }));
  } else {
    yield put(Actions.<%= NAME_LOWERCASE %>Failure());
  }
}

export default function* <%= name %>Saga() {
  yield takeEvery('<%= NAME_CAMEL.toUpperCase() %>_REQUEST', get<%= NAME_CAMEL %>);
}
