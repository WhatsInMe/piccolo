const {
  __CLIENT_ID__,
  __CLIENT_SECRET__,
  __DB_HOST__,
  __DB_NAME__,
  __DB_PASS__,
  __DB_PORT__,
  __DB_USER__,
  __EXPRESS_PORT__,
} = require("./utilities/constants");

const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const login = (req, res) => {};

app.get("/login/github", login);

/**
 * debug
 */
app.get("/", (req, res) => {
  res.json({ mes: "sup" });
});
app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(__EXPRESS_PORT__, () => {
  console.log(`running on port ${__EXPRESS_PORT__}`);
});
