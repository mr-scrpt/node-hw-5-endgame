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
      return res.status(400).json({ status: 400, message: "Ник занят!" });
    }

    const data = req.body;

    data.password = setCrypto(req.body.password);

    const userAdd = await db.userAdd(data);
    const userSerialized = serializedUser(userAdd);
    res.json(userSerialized);
  } catch (e) {
    console.log(e.message);

    throw new Error({ status: 500, message: e.message });
  }
};
