const { __EXPRESS_PORT__ } = require("./utilities/constants");
const { login, loginCallback } = require("./controllers/login-controller");

const connection = require("./utilities/connection");
try {
  connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

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
