import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookieFromReq } from '../helpers/utils';

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/v1`,

  timeout: 3000
});


const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

  if (token) {
    return { headers: { 'authorization': `Bearer ${token}` } };
  }

  return undefined;
}

const rejectPromise = (resError) => {
  let error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return Promise.reject(error);
}


export const getSecretData = async (req) => {
  const url = '/secret';

  return await axiosInstance.get(url, setAuthHeader(req)).then(response => response.data);
}

// ------------ BLOG ACTIONS --------------

export const getPosts = async (req) => {
  return await axiosInstance.get('/api/v1/blog').then(response => response.data);
}

export const getPostBySlug = async (slug) => {
  return await axiosInstance.get(`/blog/s/${slug}`).then(response => response.data);
}

export const getUserPosts = async (req) => {
  return await axiosInstance.get('/blog/me', setAuthHeader(req)).then(response => response.data);
}

export const createPost = (postData) => {
  return axiosInstance.post('/blog', postData, setAuthHeader())
    .then(response => response.data)
    .catch(err => rejectPromise(err))
}

export const updatePost = (postData, postId) => {
  return axiosInstance.patch(`/blog/${postId}`, postData, setAuthHeader())
    .then(response => response.data)
    .catch(err => rejectPromise(err))
}

export const publishPost = (postData, postId) => {
  return axiosInstance.patch(`/blog/${postId}`, postData, setAuthHeader())
    .then(response => response.data)
    .catch(err => rejectPromise(err))
}

export const getPostById = (postId) => {
  return axiosInstance.get(`/blog/${postId}`).then(response => response.data);
}

export const deletePost = (postId) => {
  return axiosInstance.delete(`/blog/${postId}`, setAuthHeader())
    .then(response => response.data)
    .catch(err => rejectPromise(err));
}















