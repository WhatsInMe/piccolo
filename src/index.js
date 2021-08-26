const { __EXPRESS_PORT__ } = require("./utilities/constants");
const { login, loginCallback } = require("./controllers/login-controller");
const { getPosts } = require("./controllers/post-controller");
const authenticate = require("./middleware/authenticate");

const db = require("./database");
const cors = require("cors");
const express = require("express");

const main = async () => {
  const process = require("process");
  process.on("SIGINT", () => {
    console.info("Interrupted");
    process.exit(0);
  });

  await db.sequelize.sync({ force: true });

  /**
   * seed
   */
  await db.Account.create({
    github_id: 33,
    access_token: "test1",
  });
  await db.Account.create({
    github_id: 69,
    access_token: "test2",
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    accountId: 1,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    accountId: 1,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    accountId: 2,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    accountId: 2,
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  /**
   * routes
   */
  app.get("/login", login);
  app.get("/login/callback", loginCallback);
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
