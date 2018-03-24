/* eslint-disable global-require */

import { combineReducers } from 'redux';

export default combineReducers({
  post: require('./Post').reducer,
  category: require('./Category').reducer,
  vote: require('./Vote').reducer,
  postCreate: require('./PostCreate').reducer,
  deletepost: require('./DeletePost').reducer,

});
