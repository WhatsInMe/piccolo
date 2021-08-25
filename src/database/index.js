const {
  __DB_HOST__,
  __DB_NAME__,
  __DB_PASS__,
  __DB_PORT__,
  __DB_USER__,
} = require("../utilities/constants");

const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(__DB_NAME__, __DB_USER__, __DB_PASS__, {
  host: __DB_HOST__,
  port: __DB_PORT__,
  dialect: "postgres",
  //   models: [Account, Session],
});

const Account = sequelize.define("account", {
  github_id: {
    type: Sequelize.INTEGER,
  },
  access_token: {
    type: Sequelize.STRING,
  },
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Account: Account,
};

module.exports = db;
