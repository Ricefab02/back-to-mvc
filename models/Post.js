const db = require('../database/db');

const Post = {};

Post.getAll = (callback) => {
  db.query('select * from posts', callback);
};

Post.findById = (postId, callback) => {
  db.query('select * from posts where post_id = ?', [postId], callback);
};

module.exports = Post;
