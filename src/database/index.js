const {
  __DB_HOST__,
  __DB_NAME__,
  __DB_PASS__,
  __DB_PORT__,
  __DB_USER__,
} = require("../utilities/constants");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(__DB_NAME__, __DB_USER__, __DB_PASS__, {
  host: __DB_HOST__,
  port: __DB_PORT__,
  dialect: "postgres",
  //   models: [Account, Session],
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.accounts = require("./models/account")(sequelize, Sequelize);

module.exports = db;
