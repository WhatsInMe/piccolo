const authenticate = (req, res, next) => {
  const accessToken = req.headers["authorization"].split(" ")[1];
  console.log(accessToken);
  next();
};

module.exports = authenticate;
