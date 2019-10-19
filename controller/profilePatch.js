const tokenDecoder = require("../lib/tokenDecoder");
const secretToken = process.env.token_main_secret;
const db = require("../models/db");
const userChanger = require("../lib/userChanger");
module.exports = async (req, res) => {
  const accessToken = req.headers["authorization"];
  try {
    const userDecode = await tokenDecoder(accessToken, secretToken);

    const userId = userDecode.id;
    const currentUser = await db.userGetOneById(userId);

    const changedData = req.body;
    changedData.image = req.filePath
      ? `//${req.get("host")}/${req.filePath}`
      : null;
    const changedUser = userChanger(currentUser, changedData);

    //console.log(changedUser);

    /* const avaPath = `//${req.get("host")}/${req.filePath}`;
    let avaUrl = req.filePath
      ? `//${req.get("host")}/${req.filePath}`
      : "/assets/img/no-user-image-big.png"; */

    /*  const userChanged = {
      firstName: changedData.firstName || currentUser.firstName,
      id: currentUser._id,
      image: changedData.image || avaUrl,
      middleName: changedData.middleName || currentUser.middleName,
      permission: changedData.permission || currentUser.permission,
      surName: changedData.surName || currentUser.surName,
      username: changedData.username || currentUser.username
    }; */

    const userUpdate = await db.userChange(changedUser);
    console.log(userUpdate);

    res.json(userUpdate);
  } catch (e) {
    console.log(e.message);
  }

  /* console.log(data);
  console.log(avaPath);
  console.log(accessToken); */
};
