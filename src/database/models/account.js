module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("account", {
    github_id: {
      type: Sequelize.INTEGER,
    },
    access_token: {
      type: Sequelize.STRING,
    },
  });

  return Account;
};
