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

///////////////////////////////////////////////////////////

// parse request

const extractUserId = (req, res, next) => {
  req.userId = parseInt(req.params.userId);
  next();
};

// db query

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

// response construction

const sendIfExists = (req, res) => {
  const { data } = req;

  if (data == null) {
    return res.sendStatus(404);
  }

  res.json(data);
};

// using middleware

app.get('/users/:userId', extractUserId, findUserById, sendIfExists);

///////////////////////////////////////////////////////////

app.get('/posts/:postId', (req, res) => {
  const postId = parseInt(req.params.postId);
  db.query('select * from posts where post_id = ?', [postId], (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    if (results.length === 0) {
      return res.sendStatus(404);
    }
    res.json(results[0]);
  })
});

app.get('/posts', (req, res) => {
  db.query('select * from posts', (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json(results);
  })
});
