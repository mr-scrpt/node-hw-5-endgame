const db = require("../models/db");
const { validCrypto } = require("../lib/crypto");
const serializedUser = require("../lib/serializedUser");
module.exports = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.userGetOne(username);
    const etalonPassword = user.password;
    if (validCrypto(password, etalonPassword)) {
      const userSerialized = serializedUser(user);
      console.log(userSerialized);

      res.json(userSerialized);
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Логин или пароль неверен!" });
    }
  } catch (e) {
    res.status(400).json({ status: 400, message: "Логин или пароль неверен!" });
  }
};
