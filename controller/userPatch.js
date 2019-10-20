const db = require("../models/db");
const userPatch = async (req, res) => {
  const user = req.user;
  user.permission = req.body.permission;
  const userChanged = await db.userChange(user);
  res.json(user.permission);
};

module.exports = userPatch;
