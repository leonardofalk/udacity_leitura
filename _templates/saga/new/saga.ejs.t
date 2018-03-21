---
to: src/redux/sagas/<%= NAME_CAMEL = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
import { takeEvery, call, put } from 'redux-saga/effects';
import <%= NAME_CAMEL %>Actions from '../reducers/<%= NAME_CAMEL %>';

import <%= NAME_CAMEL %>API from '../../services/<%= NAME_CAMEL %>API';

export function* get<%= NAME_CAMEL %>(action) {
  const { data } = action;
  const response = yield call(<%= NAME_CAMEL %>API.fetch, data);

  if (response.ok) {
    yield put(<%= NAME_CAMEL %>Actions.<%= name %>Success(response.data));
  } else {
    yield put(<%= NAME_CAMEL %>Actions.<%= name %>Failure());
  }
};

export default function* <%= name %>Saga {
  yield takeEvery('<%= NAME_CAMEL %>_REQUEST', get<%= NAME_CAMEL %>);
}
