const db = require("../models/db");
const serializedUser = require("../lib/serializedUser");
const userGet = async (req, res) => {
  try {
    const users = await db.userGetAll();
    const usersSerialized = users.map(user => serializedUser(user));

    res.json(usersSerialized);
  } catch (e) {
    console.log(e);
    res
      .status(400)
      .json({ status: 400, message: "Неудалось получить список юзеров!" });
  }
};

module.exports = userGet;
