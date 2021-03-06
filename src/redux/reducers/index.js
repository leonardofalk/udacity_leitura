/* eslint-disable global-require */

import { combineReducers } from 'redux';

export default combineReducers({
  category: require('./Category').reducer,
  commentCreate: require('./CommentCreate').reducer,
  commentUpdate: require('./CommentUpdate').reducer,
  commentVote: require('./CommentVote').reducer,
  deletecomment: require('./DeleteComment').reducer,
  deletePost: require('./DeletePost').reducer,
  fetchComment: require('./FetchComment').reducer,
  post: require('./Post').reducer,
  postCreate: require('./PostCreate').reducer,
  postFetch: require('./PostFetch').reducer,
  postUpdate: require('./PostUpdate').reducer,
  redirect: require('./Redirect').reducer,
  vote: require('./Vote').reducer,
});
