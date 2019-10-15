const db = require("../models/db");

module.exports = async (req, res) => {
  try {
    const users = await db.userGets();
    console.log(users);
  } catch (e) {
    res.json(e.message);
  }
};
