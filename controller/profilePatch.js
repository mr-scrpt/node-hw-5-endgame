const tokenDecoder = require("../lib/tokenDecoder");
const secretToken = process.env.token_main_secret;
const db = require("../models/db");
module.exports = async (req, res) => {
  const accessToken = req.headers["authorization"];
  try {
    const userDecode = await tokenDecoder(accessToken, secretToken);
    console.log(userDecode);

    const data = req.body;
    const avaPath = `//${req.get("host")}/${req.filePath}`;
    let avaUrl = req.filePath
      ? `//${req.get("host")}/${req.filePath}`
      : "/assets/img/no-user-image-big.png";
    const userChanged = {
      firstName: data.firstName || userDecode.firstName,
      id: userDecode.id,
      image: data.image || avaUrl,
      middleName: data.middleName || userDecode.middleName,
      permission: data.permission || userDecode.permission,
      surName: data.surName || userDecode.surName,
      username: data.username || userDecode.username
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
