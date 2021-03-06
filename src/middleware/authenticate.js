const db = require("../database");

const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader ? authHeader.split(" ")[1] : undefined;
  if (!accessToken) {
    console.log("access denied");
    res.sendStatus(403);
  } else {
    db.Account.findOne({
      where: {
        access_token: accessToken,
      },
    })
      .then((account) => {
        if (!account) {
          console.log("access denied");
          res.sendStatus(403);
        } else {
          console.log("access granted");
          req.account = account;
          next();
        }
      })
      .catch((error) => {
        console.log("access denied");
        console.error(error);
        res.sendStatus(403);
      });
  }
};

module.exports = authenticate;
