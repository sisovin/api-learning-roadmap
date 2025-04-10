import axios from 'axios';

const API_BASE_URL = '/api';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await axios.get(`${API_BASE_URL}/profile`);
  return response.data;
};

export const updateUserProfile = async (profileData) => {
  const response = await axios.put(`${API_BASE_URL}/profile`, profileData);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(`${API_BASE_URL}/posts`, postData);
  return response.data;
};

export const getPosts = async (page = 1) => {
  const response = await axios.get(`${API_BASE_URL}/posts`, {
    params: { page },
  });
  return response.data;
};

export const getPostById = async (postId) => {
  const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
  return response.data;
};

export const updatePost = async (postId, postData) => {
  const response = await axios.put(`${API_BASE_URL}/posts/${postId}`, postData);
  return response.data;
};

export const deletePost = async (postId) => {
  const response = await axios.delete(`${API_BASE_URL}/posts/${postId}`);
  return response.data;
};
