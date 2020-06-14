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

app.get('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  db.query('select * from users where user_id = ?', [userId], (err, results) => {
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
