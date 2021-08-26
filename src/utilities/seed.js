const db = require("../database");

const seed = async () => {
  await db.Account.create({
    github_id: 33,
    access_token: "test1",
  });
  await db.Account.create({
    github_id: 69,
    access_token: "test2",
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    accountId: 1,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    accountId: 1,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    accountId: 2,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    accountId: 2,
  });
  console.log("seeding complete")
};

module.exports = seed;
