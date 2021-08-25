const { __EXPRESS_PORT__ } = require("./utilities/constants");
const { login, loginCallback } = require("./controllers/login-controller");

const main = async () => {
  const db = require("./database");
  await db.sequelize.sync({ force: true });

  const fuck = db.Account.build({ github_id: 1});
  await fuck.save();

  const express = require("express");

  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  /******************************************************************************/

  app.get("/login", login);
  app.get("/login/callback", loginCallback);

  app.listen(__EXPRESS_PORT__, () => {
    console.log(`running on port ${__EXPRESS_PORT__}`);
  });
};

main().catch((error) => {
  console.log(error);
});
