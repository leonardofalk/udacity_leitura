import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
});

const { Types, Creators } = createActions({
  commentVoteRequest: ['data'],
  commentVoteSuccess: ['payload'],
  commentVoteFailure: null,
});

export const CustomTypes = Types;
export default Creators;

export const request = (state, { data }) => (
  state.merge({ fetching: true, data, payload: null })
);

export const success = (state, { payload }) => (
  state.merge({ fetching: false, error: null, payload })
);

export const failure = state => (
  state.merge({ fetching: false, error: true, payload: null })
);

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COMMENT_VOTE_REQUEST]: request,
  [Types.COMMENT_VOTE_SUCCESS]: success,
  [Types.COMMENT_VOTE_FAILURE]: failure,
});
