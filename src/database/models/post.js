module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "post",
    {
      title: Sequelize.STRING,
      text: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Post;
};
