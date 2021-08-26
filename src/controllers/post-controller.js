const db = require("../database");

const getPosts = (req, res) => {
  // should get this through api or middleware
  const accessToken = req.headers["authorization"].split(" ")[1];
  db.Account.findAll({
    where: {
      access_token: accessToken,
    },
  })
    .then(([account]) => {
      console.log(account.id);
      db.Post.findAll({
        where: {
          accountId: account.id,
        },
      }).then((posts) => {
        console.log(posts);
        res.json(posts);
      });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = { getPosts };
