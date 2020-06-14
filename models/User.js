const db = require('../database/db');

const User = {};

User.findById = (userId, callback) => {
  db.query('select * from users where user_id = ?', [userId], callback);
};

module.exports = User;
