const Oauth = require("client-oauth2");
const fetch = require("node-fetch");

const {
  __APP__,
  __CLIENT_ID__,
  __CLIENT_SECRET__,
} = require("../utilities/constants");
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
  res.redirect(url);
};

const loginStatus = (req, res) => {
  res.json({ mes: "status" });
};

const redirectWithCookie = (res, token) => {
  res.cookie("accessToken", token, {
    maxAge: 300000,
    httpOnly: false,
  });
  res.cookie("secretMessage", "John3-16", {
    maxAge: 300000,
    httpOnly: false,
  });
  res.redirect(__APP__ + "/");
};

const loginCallback = (req, res) => {
  github.code.getToken(req.originalUrl).then((user) => {
    fetch("https://api.github.com/user", {
      method: "get",
      headers: {
        Authorization: `token ${user.accessToken}`,
      },
    })
      .then((fetchResponse) => fetchResponse.json())
      .then((githubUser) => {
        db.Account.findOne({
          where: {
            github_id: githubUser.id,
          },
        }).then((account) => {
          if (!account) {
            db.Account.create({
              github_id: githubUser.id,
              access_token: user.accessToken,
            }).then(() => {
              redirectWithCookie(res, user.accessToken);
            });
          } else {
            db.Account.update(
              { access_token: user.accessToken },
              {
                where: {
                  github_id: githubUser.id,
                },
              }
            ).then(() => {
              redirectWithCookie(res, user.accessToken);
            });
          }
        });
      });
  });
};

module.exports = {
  login,
  loginCallback,
  loginStatus,
};
