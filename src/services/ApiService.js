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

const getPost = async (id) => {
  const response = await api.get(`posts/${id}`);

  if (response.ok) {
    return mapApiPostToProps(response.data);
  }

  throw response.error;
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
  const response = await api.get(`posts/${postId}/comments`);

  if (response.ok) {
    return response.data;
  }

  throw response.error;
};

const getPostWithComments = async ({ id }) => {
  try {
    const postInfo = await getPost(id);
    const comments = await getPostComments(id);
    const post = { ...postInfo, comments };

    return { ok: true, payload: { post } };
  } catch (error) {
    return { ok: false, error };
  }
};

const getComment = ({ id }) => api.get(`/comments/${id}`);

const createComment = async props => api.post('/comments', Object.assign(props, {
  timestamp: Date.now(),
  id: uuidV4(),
}));

const updateComment = async ({ id, body }) => (
  api.put(`/comments/${id}`, Object.assign({ body }, {
    timestamp: Date.now(),
  }))
);

const deleteComment = async ({ id }) => api.delete(`/comments/${id}`);

const vote = async ({ id, option }) => api.post(`/posts/${id}`, { option });
const upVote = async ({ id }) => vote({ id, option: 'upVote' });
const downVote = async ({ id }) => vote({ id, option: 'downVote' });
const voteComment = async ({ id, option }) => api.post(`/comments/${id}`, { option });
const upVoteComment = async ({ id }) => voteComment({ id, option: 'upVote' });
const downVoteComment = async ({ id }) => voteComment({ id, option: 'downVote' });

const pushHistory = (location = '/') => {
  window.location.href = location;
};

export {
  createPost,
  updatePost,
  deletePost,
  getCategories,
  getPosts,
  getPost,
  getPostComments,
  getPostWithComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
  voteComment,
  upVoteComment,
  downVoteComment,
  vote,
  downVote,
  upVote,
  pushHistory,
};
