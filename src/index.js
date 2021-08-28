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
  //                            _ _
  //  ___  ___  __ _ _   _  ___| (_)_______
  // / __|/ _ \/ _` | | | |/ _ \ | |_  / _ \
  // \__ \  __/ (_| | |_| |  __/ | |/ /  __/
  // |___/\___|\__, |\__,_|\___|_|_/___\___|
  //              |_|

  await db.sequelize.sync({ force: true }).then(async () => {
    console.log("migration complete");
    await seed();
  });

  /**
   * debug
   */
  await db.Account.findOne({
    where: {
      id: 1,
    },
    include: db.Item,
  }).then((account) => {
    console.log(JSON.stringify(account));
  });

  //   _____  ___ __  _ __ ___  ___ ___
  //  / _ \ \/ / '_ \| '__/ _ \/ __/ __|
  // |  __/>  <| |_) | | |  __/\__ \__ \
  //  \___/_/\_\ .__/|_|  \___||___/___/
  //           |_|

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/login", login);
  app.get("/login/callback", loginCallback);
  app.get("/login/status", authenticate, loginStatus);

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
  app.get("/account", authenticate, getAccount);

  const getItems = (req, res) => {
    db.Item.findAll().then((items) => {
      // console.log(JSON.stringify(items));
      res.json(items);
    });
  };
  app.get("/items", getItems);

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
