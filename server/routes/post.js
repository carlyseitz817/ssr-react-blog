const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const authService = require('../services/auth');

router.post('',
  authService.checkJWT,
  postCtrl.createPost);

router.get('',
  postCtrl.getPosts);

router.get('/me',
  authService.checkJWT,
  postCtrl.getUserPosts);

router.get('/:id',
  postCtrl.getPostById);

router.get('/s/:slug',
  postCtrl.getPostBySlug);

router.patch('/:id',
  authService.checkJWT,
  postCtrl.updatePost);

router.delete('/:id',
  authService.checkJWT,
  postCtrl.deletePost);

module.exports = router;

