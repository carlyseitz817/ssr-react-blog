import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookieFromReq } from '../helpers/utils';

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
  timeout: 3000
});


const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

  if (token) {
    return { headers: {'authorization': `Bearer ${token}`}};
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

// export const getPortfolios = async () => {
//   return await axiosInstance.get('/portfolios').then(response => response.data);
// }


// export const getPortfolioById = async (id) => {
//   return await axiosInstance.get(`/portfolios/${id}`).then(response => response.data);
// }


// export const createPortfolio = async (portfolioData) => {
//   return await axiosInstance.post('/portfolios', portfolioData, setAuthHeader())
//     .then(response => response.data)
//     .catch(error => rejectPromise(error))
// }

// export const updatePortfolio = async (portfolioData) => {
//   return await axiosInstance.patch(`/portfolios/${portfolioData._id}`, portfolioData, setAuthHeader())
//     .then(response => response.data)
//     .catch(error => rejectPromise(error))
// }

// export const deletePortfolio = (portfolioId) => {
//   return axiosInstance.delete(`/portfolios/${portfolioId}`, setAuthHeader()).then(response => response.data);
// }

// ------------ BLOG ACTIONS --------------

export const getPosts = async (req) => {
  return await axiosInstance.get('/posts').then(response => response.data);
}

export const getPostBySlug = async (slug) => {
  return await axiosInstance.get(`/posts/s/${slug}`).then(response => response.data);
}

export const getUserPosts = async (req) => {
  return await axiosInstance.get('/posts/me', setAuthHeader(req)).then(response => response.data);
}

export const createPost = (postData, lockId) => {
  return axiosInstance.post(`/posts?lockId=${lockId}`, postData, setAuthHeader())
          .then(response => response.data)
          .catch(err => rejectPromise(err))
}

export const updatePost = (postData, postId) => {
  return axiosInstance.patch(`/posts/${postId}`, postData, setAuthHeader())
          .then(response => response.data)
          .catch(err => rejectPromise(err))
}

export const getPostById = (postId) => {
  return axiosInstance.get(`/posts/${postId}`).then(response => response.data);
}

export const deletePost = (postId) => {
  return axiosInstance.delete(`/posts/${postId}`, setAuthHeader())
          .then(response => response.data)
          .catch(err => rejectPromise(err));
}















