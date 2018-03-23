/* eslint-disable global-require */

import { combineReducers } from 'redux';

export default combineReducers({
  post: require('./Post').reducer,
  category: require('./Category').reducer,
});
