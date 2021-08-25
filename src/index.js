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
const Oauth = require("client-oauth2");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const github = new Oauth({
  clientId: __CLIENT_ID__,
  clientSecret: __CLIENT_SECRET__,
  accessTokenUri: "https://github.com/login/oauth/access_token",
  authorizationUri: "https://github.com/login/oauth/authorize",
  redirectUri: "http://localhost:3001/callback",
  scopes: ["user:id"],
});

/******************************************************************************/

const login = (req, res) => {
  const url = github.code.getUri();
  console.log(url); //debug
  res.redirect(url);
};
app.get("/login", login);

const githubCallback = async (req, res) => {
  await github.code.getToken(req.originalUrl).then((user) => {
    fetch("https://api.github.com/user", {
      method: "get",
      headers: {
        Authorization: `token ${user.accessToken}`,
      },
    })
      .then((res_) => res_.json())
      .then((json) => {
        console.log(json);
        res.json(json);
      });
  });
};
app.get("/callback", githubCallback);

/******************************************************************************/

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
