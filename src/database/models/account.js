const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Account = sequelize.define(
    "account",
    {
      github_id: DataTypes.INTEGER,
      access_token: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Account;
};
