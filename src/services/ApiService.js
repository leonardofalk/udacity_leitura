import { create } from 'apisauce';
import uuidV4 from 'uuid/v4';

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
  try {
    const { data } = await api.get('categories');
    const categories = data.categories.map(mapApiCategoryToProps);

    return { ok: true, payload: { categories } };
  } catch (error) {
    return { ok: false, error };
  }
};

const getPosts = async () => {
  try {
    const { data } = await api.get('posts');
    const posts = data.map(mapApiPostToProps);

    return { ok: true, payload: { posts } };
  } catch (error) {
    return { ok: false, error };
  }
};

const getPost = async (postId) => {
  const { data } = await api.get(`posts/${postId}`);

  return mapApiPostToProps(data);
};

const createPost = async props => api.post('/posts', Object.assign(props, {
  timestamp: Date.now(),
  voteScore: 1,
  deleted: false,
  id: uuidV4(),
}));

const updatePost = async ({ id, title, body }) => api.put(`/posts/${id}`, { title, body });
const deletePost = async ({ id }) => api.delete(`/posts/${id}`);

const getPostComments = async (postId) => {
  const { data } = await api.get(`posts/${postId}/comments`);

  return data;
};

const getPostWithComments = async (postId) => {
  const post = await getPost(postId);
  post.comments = await getPostComments(postId);
  return post;
};

const vote = async ({ id, option }) => api.post(`/posts/${id}`, { option });
const upVote = async ({ id }) => vote({ id, option: 'upVote' });
const downVote = async ({ id }) => vote({ id, option: 'downVote' });

export {
  createPost,
  updatePost,
  deletePost,
  getCategories,
  getPosts,
  getPost,
  getPostComments,
  getPostWithComments,
  vote,
  downVote,
  upVote,
};
