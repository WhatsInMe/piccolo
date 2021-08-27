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
  await db.Account.create({
    github_id: 420,
    access_token: "test3",
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    account_id: 1,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    account_id: 1,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    account_id: 1,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    account_id: 2,
  });
  await db.Post.create({
    title: "test title",
    text: "test text",
    account_id: 2,
  });
  await db.Item.create({
    name: "milk",
    description: "meiji brand",
  });
  await db.Item.create({
    name: "banana",
    description: "a yummy banana lol",
  });
  console.log("seeding complete")
};

module.exports = seed;
