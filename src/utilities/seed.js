const db = require("../database");

const seed = async () => {
  //                                  _
  //   __ _  ___ ___ ___  _   _ _ __ | |_ ___
  //  / _` |/ __/ __/ _ \| | | | '_ \| __/ __|
  // | (_| | (_| (_| (_) | |_| | | | | |_\__ \
  //  \__,_|\___\___\___/ \__,_|_| |_|\__|___/

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

  //                  _
  //  _ __   ___  ___| |_ ___
  // | '_ \ / _ \/ __| __/ __|
  // | |_) | (_) \__ \ |_\__ \
  // | .__/ \___/|___/\__|___/
  // |_|

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

  //  _ _
  // (_) |_ ___ _ __ ___  ___
  // | | __/ _ \ '_ ` _ \/ __|
  // | | ||  __/ | | | | \__ \
  // |_|\__\___|_| |_| |_|___/

  await db.Item.create({
    name: "House Curry",
    description: "Dry Goods",
  });
  await db.Item.create({
    name: "Meiji Chocolate",
    description: "Candy",
  });
  await db.Item.create({
    name: "Meiji Milk",
    description: "Dairy",
  });
  await db.Item.create({
    name: "Dole Bananas",
    description: "Fruit",
  });
  await db.Item.create({
    name: "Maruchan Ramen",
    description: "Ramen",
  });

  //                                  _     _ _
  //   __ _  ___ ___ ___  _   _ _ __ | |_  (_) |_ ___ _ __ ___  ___
  //  / _` |/ __/ __/ _ \| | | | '_ \| __| | | __/ _ \ '_ ` _ \/ __|
  // | (_| | (_| (_| (_) | |_| | | | | |_  | | ||  __/ | | | | \__ \
  //  \__,_|\___\___\___/ \__,_|_| |_|\__| |_|\__\___|_| |_| |_|___/

  await db.Account_item.create({
    quantity: 3,
    account_id: 1,
    item_id: 1,
  });
  await db.Account_item.create({
    quantity: 4,
    account_id: 1,
    item_id: 2,
  });
  await db.Account_item.create({
    quantity: 2,
    account_id: 2,
    item_id: 1,
  });
  await db.Account_item.create({
    quantity: 5,
    account_id: 2,
    item_id: 4,
  });
  await db.Account_item.create({
    quantity: 1,
    account_id: 2,
    item_id: 3,
  });

  console.log("seeding complete");
};

module.exports = seed;
