const db = require("../models/db");
const { setCrypto } = require("../lib/crypto");
const serializedUser = require("../lib/serializedUser");
module.exports = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await db.userGetOne(username);

    if (user) {
      res.status(400).json({ status: 400, message: "Ник занят!" });
    } else {
      const data = req.body;
      data.password = setCrypto(req.body.password);

      const user = await db.userAdd(data);

      //Сериализация
      const userSerialized = serializedUser(user);

      res.json(user);
    }
  } catch (e) {
    console.log(e.message);

    throw new Error({ status: 500, message: e.message });
  }
};
