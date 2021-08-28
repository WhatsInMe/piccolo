const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Item = sequelize.define(
    "item",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Item;
};
