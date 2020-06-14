// these lack validation: see https://www.npmjs.com/package/express-validator

const extractUserId = (req, res, next) => {
  req.userId = parseInt(req.params.userId);
  next();
};

const extractPostId = (req, res, next) => {
  req.postId = parseInt(req.params.postId);
  next();
};

module.exports = {
  extractUserId,
  extractPostId,
};
