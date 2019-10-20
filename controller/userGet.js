const db = require("../models/db");

const userGet = async (req, res) => {
  console.log(2222222);

  try {
    const users = await db.userGetAll();

    res.json(users);
  } catch (e) {
    console.log(e);
    res
      .status(400)
      .json({ status: 400, message: "Неудалось получить список юзеров!" });
  }
};

module.exports = userGet;
