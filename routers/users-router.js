const express = require('express');

const usersRouter = express.Router();

const { extractUserId } = require('../controllers/extract-controller');
const { findUserById } = require('../controllers/users-controller');
const { sendIfExists } = require('../views/send-json');

usersRouter.get('/:userId', extractUserId, findUserById, sendIfExists);

module.exports = usersRouter;
