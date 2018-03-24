/* eslint-disable global-require */

import { combineReducers } from 'redux';

export default combineReducers({
  category: require('./Category').reducer,
  deletepost: require('./DeletePost').reducer,
  post: require('./Post').reducer,
  postCreate: require('./PostCreate').reducer,
  postFetch: require('./PostFetch').reducer,
  postUpdate: require('./PostUpdate').reducer,
  vote: require('./Vote').reducer,
  redirect: require('./Redirect').reducer,

});
