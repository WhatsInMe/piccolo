const db = require("../database");

const getPosts = (req, res) => {
  db.Account.findByPk(req.account.id)
    .then((account) => {
      db.Post.findAll({
        where: {
          account_id: account.id,
        },
      }).then((posts) => {
        res.json(posts);
      });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = { getPosts };
