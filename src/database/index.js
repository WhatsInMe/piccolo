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
});

const Account = require("./models/account")(sequelize, Sequelize);
const Post = require("./models/post")(sequelize, Sequelize);
Account.hasMany(Post);

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;
database.Account = Account;
database.Post = Post;

module.exports = database;
