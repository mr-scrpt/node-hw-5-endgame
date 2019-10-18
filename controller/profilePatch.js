const tokenDecoder = require("../lib/tokenDecoder");
const secretToken = process.env.token_main_secret;
const db = require("../models/db");
module.exports = async (req, res) => {
  const accessToken = req.headers["authorization"];
  console.log(333333);
  console.log(accessToken);

  try {
    const userDecode = await tokenDecoder(accessToken, secretToken);
    console.log(userDecode);

    const userId = userDecode.id;
    const currentUser = await db.userGetOneById(userId);

    const data = req.body;
    const avaPath = `//${req.get("host")}/${req.filePath}`;
    let avaUrl = req.filePath
      ? `//${req.get("host")}/${req.filePath}`
      : "/assets/img/no-user-image-big.png";

    const userChanged = {
      firstName: data.firstName || currentUser.firstName,
      id: currentUser.id,
      image: data.image || avaUrl,
      middleName: data.middleName || currentUser.middleName,
      permission: data.permission || currentUser.permission,
      surName: data.surName || currentUser.surName,
      username: data.username || currentUser.username
    };
    const userUpdate = await db.userChange(userChanged);

    res.json(userUpdate);
  } catch (e) {
    console.log(e.message);
  }

  /* console.log(data);
  console.log(avaPath);
  console.log(accessToken); */
};
