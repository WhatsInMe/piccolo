const { __CLIENT_ID__, __CLIENT_SECRET__ } = require("../utilities/constants");
const Oauth = require("client-oauth2");
const fetch = require("node-fetch");

const db = require("../database");

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

const getGithubUser = async (token) => {
  return await fetch("https://api.github.com/user", {
    method: "get",
    headers: {
      Authorization: `token ${token}`,
    },
  }).then((res) => res.json());
};

const loginCallback = async (req, res) => {
  // await db.Account.create({ github_id: 222 });
  await github.code.getToken(req.originalUrl).then((user) => {
    // console.log(user);
    getGithubUser(user.accessToken).then(async (githubUser) => {
      // console.log(githubUser);
      await db.Account.findAll({
        where: {
          github_id: githubUser.id,
        },
      }).then(async ([account]) => {
        if (!account) {
          await db.Account.create({
            github_id: githubUser.id,
            access_token: user.accessToken,
          });
        } else {
          // account exists, update token
          await db.Account.update(
            { access_token: user.accessToken },
            {
              where: {
                github_id: githubUser.id,
              },
            }
          );
          console.log("ree");
        }
      });
      res.json(githubUser);
    });
  });
};

module.exports = {
  login,
  loginCallback,
};
