module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define(
    "account",
    {
      github_id: Sequelize.INTEGER,
      access_token: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Account;
};
