const Post = require('../models/post');
const slugify = require('slugify');
const AsyncLock = require('async-lock');
const lock = new AsyncLock();

exports.getPosts = (req, res) => {
  Post.find({status: 'published'})
      .sort({'createdAt': -1})
      .exec(function(err, publishedPosts) {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(publishedPosts);
  });
}

exports.getPostBySlug = (req, res) => {
  const slug = req.params.slug;

  Post.findOne({slug}, function(err, foundPost) {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(foundPost);
  });
}

exports.getPostById = (req, res) => {
  const postId = req.params.id;

  Post.findById(postId, (err, foundPost) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(foundPost);
  });
}

exports.getUserPosts = (req, res) => {
  const userId = req.user.sub;

  Post.find({userId}, function(err, userPosts) {
    if (err) {
     return res.status(422).send(err);
    }

    return res.json(userPosts);
  });
}

exports.updatePost = (req, res) => {
  const postId = req.params.id;
  const postData = req.body;

  Post.findById(postId, function(err, foundPost) {
    if (err) {
      return res.status(422).send(err);
    }

    if (postData.status && postData.status === 'published' && !foundPost.slug) {

      foundPost.slug = slugify(foundPost.title, {
                                  replacement: '-',    // replace spaces with replacement
                                  remove: null,        // regex to remove characters
                                  lower: true          // result in lower case
                                });

    }

    foundPost.set(postData);
    foundPost.updatedAt = new Date();
    foundPost.save(function(err, foundPost) {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(foundPost);
    });
  });
}

exports.createPost = (req, res) => {
  const lockId = req.query.lockId;

  if (!lock.isBusy(lockId)) {
    lock.acquire(lockId, function(done) {
    const postData = req.body;
    const post = new Post(postData);

    if (req.user) {
      post.userId = req.user.sub;
      post.author = req.user.name;
    }

    post.save((err, createdPost) => {
      setTimeout(() => done(), 5000);

      if (err) {
        return res.status(422).send(err);
      }

      return res.json(createdPost);
    });
    }, function(err, ret) {
        err && console.error(err)
    });
  } else {
    return res.status(422).send({message: 'Post is getting saved!'});
  }
}


exports.deletePost = (req, res) => {
  const postId = req.params.id;

  Post.deleteOne({_id: postId}, function(err) {
    if (err) {
      return res.status(422).send(err);
    }

    res.json({status: 'deleted'});
  });
}







