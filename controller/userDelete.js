const db = require("../models/db");
const serializedUser = require("../lib/serializedUser");
module.exports = async (req, res) => {
  const { id } = req.params;
  const deleteUser = await db.userDelete(id);
  const user = serializedUser(deleteUser);
  res.json(user);
};
