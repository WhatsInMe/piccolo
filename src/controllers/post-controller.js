const db = require("../database");

const getPosts = async (req, res) => {
  const accessToken = req.headers["authorization"].split(" ")[1];
  await db.Account.findAll({
    where: {
      access_token: accessToken,
    },
  }).then(([account]) => {
    console.log(account.github_id);
  });
  res.json({ mes: accessToken });
};

module.exports = { getPosts };
