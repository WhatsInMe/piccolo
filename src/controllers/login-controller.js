const { __CLIENT_ID__, __CLIENT_SECRET__ } = require("../utilities/constants");
const Oauth = require("client-oauth2");
const fetch = require("node-fetch");

const github = new Oauth({
  clientId: __CLIENT_ID__,
  clientSecret: __CLIENT_SECRET__,
  accessTokenUri: "https://github.com/login/oauth/access_token",
  authorizationUri: "https://github.com/login/oauth/authorize",
  redirectUri: "http://localhost:3001/login/callback",
  scopes: ["user:id"],
});

const login = (req, res) => {
  const url = github.code.getUri();
  console.log(url); //debug
  res.redirect(url);
};

const loginCallback = async (req, res) => {
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

module.exports = {
  login,
  loginCallback,
};
