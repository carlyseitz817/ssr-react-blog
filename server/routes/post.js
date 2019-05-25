const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const authService = require('../services/auth');


router.post('',
  authService.checkJWT,
  // authService.checkRole('siteOwner'),
  postCtrl.createPost);

router.get('',
  authService.checkJWT,
  // authService.checkRole('siteOwner'),
  postCtrl.getPosts);

router.get('/me',
  authService.checkJWT,
  // authService.checkRole('siteOwner'),
  postCtrl.getUserPosts);
module.exports = router;

