---
to: src/redux/reducers/<%= NAME_CAMEL = name.replace(/\b\w/g, l => l.toUpperCase()) %>.js
---
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
});

const { Types, Creators } = createActions({
  <%= name %>Request: ['data'],
  <%= name %>Success: ['payload'],
  <%= name %>Failure: null,
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
  [Types.<%= NAME_UPPERCASE = name.toUpperCase() %>_REQUEST]: request,
  [Types.<%= NAME_UPPERCASE %>_SUCCESS]: success,
  [Types.<%= NAME_UPPERCASE %>_FAILURE]: failure
})
