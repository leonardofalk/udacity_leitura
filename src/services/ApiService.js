import { create } from 'apisauce';

import { API_URL } from '../config/environment';
import { mapApiPostToProps, mapApiCategoryToProps } from './TransformService';

const authorization = () => {
  const generated = Math.random().toString(36).substr(-8);

  if (localStorage) {
    const token = localStorage.getItem('udaciblog-auth');

    if (token) {
      return token;
    }

    localStorage.setItem('udaciblog-auth', generated);
  }

  return generated;
};

const api = create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    Authorization: authorization(),
    'Content-Type': 'application/json',
  },
});

const getCategories = async () => {
  const { data: { categories = [] } } = await api.get('categories');

  return categories.map(mapApiCategoryToProps);
};

const getPosts = async () => {
  const { data } = await api.get('posts');

  return data.map(mapApiPostToProps);
};

const getPost = async (postId) => {
  const { data } = await api.get(`posts/${postId}`);

  return mapApiPostToProps(data);
};

const createPost = async props => api.post('/posts', Object.assign(props, {
  timestamp: Date.now(),
  voteScore: 1,
  deleted: false,
}));

const getPostComments = async (postId) => {
  const { data } = await api.get(`posts/${postId}/comments`);

  return data;
};

const getPostWithComments = async (postId) => {
  const post = await getPost(postId);
  post.comments = await getPostComments(postId);
  return post;
};

export {
  createPost,
  getCategories,
  getPosts,
  getPost,
  getPostComments,
  getPostWithComments,
};