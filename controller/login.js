const db = require("../models/db");
const tokenGenerator = require("../lib/tokenGenerator");
const tokenSetData = require("../lib/tokenSetData");

const { validCrypto } = require("../lib/crypto");
const serializedUser = require("../lib/serializedUser");
module.exports = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.userGetOneByUserName(username);
    const etalonPassword = user.password;

    if (validCrypto(password, etalonPassword)) {
      const userSerialized = serializedUser(user);
      const { token, refreshToken } = tokenGenerator(userSerialized);
      const tokenData = tokenSetData(token, refreshToken);
      /* console.log(token);
      console.log("========================================");
      console.log(refreshToken); */

      res.json({ ...userSerialized, ...tokenData });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Логин или пароль неверен!" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ status: 400, message: "Логин или пароль неверен!" });
  }
};
