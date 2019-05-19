const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const authService = require('../services/auth');

router.get('', postCtrl.getPosts);

router.get('/me', authService.checkJWT,
                  authService.checkRole('siteOwner'),
                  postCtrl.getUserPosts);

router.get('/:id', postCtrl.getPostById);

router.get('/s/:slug', postCtrl.getPostBySlug);

router.post('', authService.checkJWT,
                authService.checkRole('siteOwner'),
                postCtrl.createPost);

router.patch('/:id', authService.checkJWT,
                authService.checkRole('siteOwner'),
                postCtrl.updatePost);

router.delete('/:id', authService.checkJWT,
                authService.checkRole('siteOwner'),
                postCtrl.deletePost);

module.exports = router;

