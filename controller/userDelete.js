const db = require("../models/db");
const serializedUser = require("../lib/serializedUser");
module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await db.userDelete(id);
    const user = serializedUser(deleteUser);
    res.json(user);
  } catch (e) {
    console.log(e.message);

    res
      .status(400)
      .json({ status: 400, message: "Ошибка удаления пользователя!" });
  }
};
