const tokenDecoder = require("../lib/tokenDecoder");
const secretToken = process.env.token_main_secret;
const db = require("../models/db");
const userChanger = require("../lib/userChanger");
module.exports = async (req, res) => {
  try {
    const user = req.user;
    const currentUser = await db.userGetOneById(user.id);
    console.log(currentUser);
    const changedData = req.body;

    changedData.image = req.filePath
      ? `//${req.get("host")}/${req.filePath}`
      : null;
    const changedUser = userChanger(currentUser, changedData);

    const userUpdate = await db.userChange(changedUser);

    res.json(userUpdate);
  } catch (e) {
    res
      .status(400)
      .json({ status: 400, message: "Неудалось обновить профиль!" });
  }
};
