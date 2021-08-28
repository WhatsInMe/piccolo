const {
  __DB_DIALECT__,
  __DB_HOST__,
  __DB_NAME__,
  __DB_PASS__,
  __DB_PORT__,
  __DB_USER__,
} = require("../utilities/constants");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(__DB_NAME__, __DB_USER__, __DB_PASS__, {
  host: __DB_HOST__,
  port: __DB_PORT__,
  dialect: __DB_DIALECT__,
});

const Account = require("./models/account")(sequelize);
const Item = require("./models/item")(sequelize);
const Account_item = sequelize.define(
  "account_item",
  {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
);
Account.belongsToMany(Item, { through: Account_item });
Item.belongsToMany(Account, { through: Account_item });

const Post = require("./models/post")(sequelize);
Account.hasMany(Post, {
  foreignKey: "account_id",
});

const database = {};

database.Account = Account;
database.Account_item = Account_item;
database.Item = Item;
database.Post = Post;
database.Sequelize = Sequelize;
database.sequelize = sequelize;

module.exports = database;
