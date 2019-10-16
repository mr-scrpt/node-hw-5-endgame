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
      res.json(userSerialized);
    } else {
      res.status(400).json({ status: 400, message: "Пользователь не найден!" });
    }
  } catch (e) {
    res.json({ status: 400, message: "Ошибка логина!" });
  }
};
