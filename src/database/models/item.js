module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define(
    "item",
    {
      name: Sequelize.STRING,
      description: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Item;
};
