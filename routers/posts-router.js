const express = require('express');

const postsRouter = express.Router();

const { extractPostId } = require('../controllers/extract-controller');
const { getAllPosts, findPostById } = require('../controllers/posts-controller');
const { sendIfExists, send } = require('../views/send-json');

postsRouter.get('/', getAllPosts, send);
postsRouter.get('/:postId', extractPostId, findPostById, sendIfExists);

module.exports = postsRouter;
