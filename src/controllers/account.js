const db = require("../database");

const getAccount = (req, res) => {
  db.Account.findOne({
    where: {
      id: req.account.id,
    },
    include: db.Item,
  }).then((account) => {
    res.json(account);
  });
};

module.exports = { getAccount };
