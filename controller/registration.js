const db = require("../models/db");
const { setCrypto } = require("../lib/crypto");
const serializedUser = require("../lib/serializedUser");
const tokenGenerator = require("../lib/tokenGenerator");
const tokenSetData = require("../lib/tokenSetData");

module.exports = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await db.userGetOneByUserName(username);

    if (user) {
      res.status(400).json({ status: 400, message: "Ник занят!" });
    } else {
      const data = req.body;

      data.password = setCrypto(req.body.password);

      const user = await db.userAdd(data);

      const { token, refreshToken } = tokenGenerator(user);

      const tokenData = tokenSetData(token, refreshToken);

      //Сериализация
      const userSerialized = serializedUser(user);

      console.log({ ...userSerialized, ...tokenData });

      res.json({ ...userSerialized, ...tokenData });
    }
  } catch (e) {
    console.log(e.message);

    throw new Error({ status: 500, message: e.message });
  }
};
