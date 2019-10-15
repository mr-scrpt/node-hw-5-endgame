const db = require("../models/db");
const { validCrypto } = require("../lib/crypto");
module.exports = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.userGetOne(username);
    const etalonPasswor = user.password;
    if (validCrypto(password, etalonPasswor)) {
      res.json({ status: 200, message: "С возвращением!" });
    } else {
      res.status(400).json({ status: 400, message: "Пользовательне найден!" });
    }
  } catch (e) {
    res.json({ status: 400, message: "Ошибка логина!" });
  }
};
