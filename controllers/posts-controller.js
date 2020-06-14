const Post = require('../models/Post');

const getAllPosts = (req, res, next) => {
  Post.getAll((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results;
      next();
    }
  });
};

const findPostById = (req, res, next) => {
  Post.findById(req.postId, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results[0];
      next();
    }
  });
};

module.exports = {
  getAllPosts,
  findPostById,
}
