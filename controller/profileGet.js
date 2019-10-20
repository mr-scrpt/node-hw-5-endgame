const tokenDecoder = require("../lib/tokenDecoder");
const secretToken = process.env.token_main_secret;
const serializedUser = require("../lib/serializedUser");
const db = require("../models/db");

module.exports = async (req, res) => {
  const accessToken = req.headers["authorization"];

  try {
    const { id } = await tokenDecoder(accessToken, secretToken);
    const user = serializedUser(await db.userGetOneById(id));

    res.json(user);
  } catch (e) {
    console.error(e.message);
  }

  //const user = await db.userGetOneById(decode.id);

  //console.log(decode);

  /* return{
    
      firstName:,
      id:,
      image:,
      middleName: ,
      permission: {},
      surName: ,
      username: ,
  
      accessToken: ,
      refreshToken:,
      accessTokenExpiredAt: ,
      refreshTokenExpiredAt: 
  } */
};
