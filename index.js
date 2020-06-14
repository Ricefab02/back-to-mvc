require("dotenv").config();

const express = require('express');
const app = express();

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('something bad happen');
  }
  console.log(`server listening on port ${process.env.PORT}`)
});

const usersRouter = require('./routers/users-router');
app.use('/users', usersRouter);

const postsRouter = require('./routers/posts-router');
app.use('/posts', postsRouter);
