const {
  __DB_DIALECT__,
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
  dialect: __DB_DIALECT__,
});

const Account = require("./models/account")(sequelize, Sequelize);
const Item = require("./models/item")(sequelize, Sequelize);
const Account_item = sequelize.define(
  "account_item",
  {
    quantity: Sequelize.INTEGER,
  },
  {
    timestamps: false,
  }
);
Account.belongsToMany(Item, { through: Account_item });
Item.belongsToMany(Account, { through: Account_item });

const Post = require("./models/post")(sequelize, Sequelize);
Account.hasMany(Post, {
  foreignKey: "account_id",
});

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;
database.Account = Account;
database.Item = Item;
database.Post = Post;

module.exports = database;
