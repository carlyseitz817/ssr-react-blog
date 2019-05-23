const Post = require('../models/post');
// const slugify = require('slugify');
// const AsyncLock = require('async-lock');
// const lock = new AsyncLock();

exports.createPost = (req, res) => {
  // const lockId = req.query.lockId;

  // if (!lock.isBusy(lockId)) {
  //   lock.acquire(lockId, function (done) {
  const postData = req.body;
  console.log(postData);
  const post = new Post(postData);

  // if (req.user) {
  //   post.userId = req.user.sub;
  //   post.author = req.user.name;
  // }

  post.save((err, createdPost) => {
    // setTimeout(() => done(), 5000);

    if (err) {
      return res.status(422).send(err);
    }

    return res.json(createdPost);
  });
}

exports.getPosts = (req, res) => {
  Post.find()
      .sort({'createdAt': -1})
      .exec(function(err, publishedPosts) {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(publishedPosts);
  });
}
// }, function (err, ret) {
//   err && console.error(err)
// });
//   } else {
//   return res.status(422).send({ message: 'Post is getting saved!' });
// }
// }







