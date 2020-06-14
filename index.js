require("dotenv").config();

const db = require('./db');

const express = require('express');
const app = express();

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('something bad happen');
  }
  console.log(`server listening on port ${process.env.PORT}`)
});

const extractUserId = (req, res, next) => {
  req.userId = parseInt(req.params.userId);
  next();
};

const findUserById = (req, res, next) => {
  db.query('select * from users where user_id = ?', [req.userId], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results[0];
      next();
    }
  })
};

const sendIfExists = (req, res) => {
  const { data } = req;

  if (data == null) {
    return res.sendStatus(404);
  }

  res.json(data);
};

app.get('/users/:userId', extractUserId, findUserById, sendIfExists);

const extractPostId = (req, res, next) => {
  req.postId = parseInt(req.params.postId);
  next();
};

const findPostById = (req, res, next) => {
  db.query('select * from posts where post_id = ?', [req.postId], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results[0];
      next();
    }
  })
};

app.get('/posts/:postId', extractPostId, findPostById, sendIfExists);

///////////////////////////////////////////////////////////

// last one ;)

app.get('/posts', (req, res) => {
  db.query('select * from posts', (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json(results);
  })
});

///////////////////////////////////////////////////////////
