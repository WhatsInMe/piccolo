const { __EXPRESS_PORT__ } = require("./utilities/constants");
const { login, loginCallback } = require("./controllers/login-controller");

const db = require("./database");
const express = require("express");

const main = async () => {
  await db.sequelize.sync({ force: true });
  // await db.Account.create({ github_id: 55699197});
  // await db.Account.create({ github_id: 2, access_token: 2 });

  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  /**
   * routes
   */
  app.get("/login", login);
  app.get("/login/callback", loginCallback);
  app.get("/", (req,res)=>{
    res.send("<h1>sup</h1>")
  })

  app.listen(__EXPRESS_PORT__, () => {
    console.log(`running on port ${__EXPRESS_PORT__}`);
  });
};

main().catch((error) => {
  console.log(error);
});
