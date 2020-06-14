const User = require('../models/User');

const findUserById = (req, res, next) => {
  User.findById(req.userId, (err, results) => {
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

module.exports = {
  findUserById,
}
