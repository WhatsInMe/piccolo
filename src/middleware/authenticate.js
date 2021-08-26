const authenticate = (req, res, next) => {
  if (true) {
    res.json({mes:"middleware"});
  } else {
    next();
  }
};

module.exports = authenticate;
