const faker = require("faker");

const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});

  const userData = [];

  for (let i = 0; i < 10; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);

    userData.push({ username, email });
  }

  await User.collection.insertMany(userData);

  console.log("all done!");
  process.exit(0);
});
