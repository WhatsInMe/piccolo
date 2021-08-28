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
    description: "House Curry",
      // "Starting with our first milk produced in 1928 through release of Meiji Oishii Gyunyu in 2002, Meiji today combines only the finest raw milk with patented manufacturing methods and strict quality control to preserve fresh milk’s deliciously satisfying flavor.",
  });
  await db.Item.create({
    name: "Meiji Chocolate",
    description: "Meiji Chocolate",
      // "Starting with our first milk produced in 1928 through release of Meiji Oishii Gyunyu in 2002, Meiji today combines only the finest raw milk with patented manufacturing methods and strict quality control to preserve fresh milk’s deliciously satisfying flavor.",
  });
  await db.Item.create({
    name: "Meiji Milk",
    description: "Meiji Milk",
      // "Starting with our first milk produced in 1928 through release of Meiji Oishii Gyunyu in 2002, Meiji today combines only the finest raw milk with patented manufacturing methods and strict quality control to preserve fresh milk’s deliciously satisfying flavor.",
  });
  await db.Item.create({
    name: "Dole Bananas",
    description: "Dole Bananas",
      // "Bananas are a delicious choice for snacking, baking and cooking, Plus they include Vitamin B6, Potassium, Fiber, and Vitamin C – nutrients that help promote heart health.",
  });

  //                                  _     _ _
  //   __ _  ___ ___ ___  _   _ _ __ | |_  (_) |_ ___ _ __ ___  ___
  //  / _` |/ __/ __/ _ \| | | | '_ \| __| | | __/ _ \ '_ ` _ \/ __|
  // | (_| | (_| (_| (_) | |_| | | | | |_  | | ||  __/ | | | | \__ \
  //  \__,_|\___\___\___/ \__,_|_| |_|\__| |_|\__\___|_| |_| |_|___/

  // await db.Account_item.create({
  //   quantity: 1,
  //   accountId: 1,
  //   itemId: 1,
  // });
  // await db.Account_item.create({
  //   quantity: 1,
  //   accountId: 1,
  //   itemId: 2,
  // });
  // await db.Account_item.create({
  //   quantity: 1,
  //   accountId: 2,
  //   itemId: 1,
  // });
  // await db.Account_item.create({
  //   quantity: 1,
  //   accountId: 2,
  //   itemId: 2,
  // });
  // await db.Account_item.create({
  //   quantity: 1,
  //   accountId: 2,
  //   itemId: 3,
  // });

  console.log("seeding complete");
};

module.exports = seed;
