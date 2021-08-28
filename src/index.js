const authenticate = require("./middleware/authenticate");
const seed = require("./utilities/seed");
const { __EXPRESS_PORT__ } = require("./utilities/constants");
const { getPosts } = require("./controllers/post-controller");
const {
  login,
  loginCallback,
  loginStatus,
} = require("./controllers/login-controller");

const db = require("./database");
const cors = require("cors");
const express = require("express");

const process = require("process");
process.on("SIGINT", () => {
  console.info("Interrupted");
  process.exit(0);
});

const main = async () => {
  //      _       _        _
  //   __| | __ _| |_ __ _| |__   __ _ ___  ___
  //  / _` |/ _` | __/ _` | '_ \ / _` / __|/ _ \
  // | (_| | (_| | || (_| | |_) | (_| \__ \  __/
  //  \__,_|\__,_|\__\__,_|_.__/ \__,_|___/\___|

  await db.sequelize.sync({ force: true }).then(async () => {
    console.log("migration complete");
    await seed();
  });

  /**
   * debug
   */
  await db.Item.findOne({
    where: {
      id: 1,
    },
  }).then((item) => {
    console.log(
      "================================================================================"
    );
    console.log(JSON.stringify(item));
  });

  await db.Account.findOne({
    where: {
      id: 1,
    },
  }).then((account) => {
    console.log(
      "================================================================================"
    );
    console.log(JSON.stringify(account));
  });

  //                  _
  //  _ __ ___  _   _| |_ ___  ___
  // | '__/ _ \| | | | __/ _ \/ __|
  // | | | (_) | |_| | ||  __/\__ \
  // |_|  \___/ \__,_|\__\___||___/

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/login", login);
  app.get("/login/callback", loginCallback);
  app.get("/login/status", authenticate, loginStatus);
  app.get("/posts", authenticate, getPosts);

  app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
  });

  app.listen(__EXPRESS_PORT__, () => {
    console.log(`running on port ${__EXPRESS_PORT__}`);
  });
};

main().catch((error) => {
  console.log(error);
});
