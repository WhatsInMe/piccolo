const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Post = sequelize.define(
    "post",
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Post;
};
