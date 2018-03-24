import { takeEvery, call, put } from 'redux-saga/effects';
import Actions from '../reducers/Vote';

import { vote } from '../../services/ApiService';

export function* getVote(action) {
  const { data } = action;
  const response = yield call(vote, data);

  if (response.ok) {
    yield put(Actions.voteSuccess(response.data));
  } else {
    yield put(Actions.voteFailure());
  }
}

export default function* VoteSaga() {
  yield takeEvery('VOTE_REQUEST', getVote);
}
