const db = require("../database");

const getItems = (req, res) => {
  db.Item.findAll().then((items) => {
    res.json(items);
  });
};

module.exports = { getItems };
