const authenticate = (req, res, next) => {
  const accessToken = req.headers["authorization"]
    ? req.headers["authorization"].split(" ")[1]
    : undefined;
  if (!accessToken) {
    res.sendStatus(403);
  } else {
    console.log(accessToken);
    next();
  }
};

module.exports = authenticate;
