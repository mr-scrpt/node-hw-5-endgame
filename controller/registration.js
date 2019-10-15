const db = require("../models/db");
const { setCrypto } = require("../lib/crypto");
module.exports = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await db.userGetOne(username);

    if (user) {
      throw new Error({ status: 500, message: "Ник занят!" });
      //res.json({ status: 500, message: "Ник занят!" });
      //res.end({ status: 500, message: "Ник занят!" });
    }
    const data = req.body;
    data.password = setCrypto(req.body.password);
    const result = await db.userAdd(data);
    res.json(result);
  } catch (e) {
    throw new Error({ status: 500, message: e.message });
  }
};
