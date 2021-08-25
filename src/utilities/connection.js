const {
  __DB_HOST__,
  __DB_NAME__,
  __DB_PASS__,
  __DB_PORT__,
  __DB_USER__,
} = require("./constants");

const { Sequelize } = require("sequelize");

const connection = new Sequelize(__DB_NAME__, __DB_USER__, __DB_PASS__, {
  host: __DB_HOST__,
  port: __DB_PORT__,
  dialect: "postgres",
  //   models: [Account, Session],
});

module.exports =  connection;
