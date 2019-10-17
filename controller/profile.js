const tokenDecoder = require("../lib/tokenDecoder");
const secretRefresh = process.env.token_refresh_secret;
const lifeMain = process.env.token_main_life;
const lifeRefresh = process.env.token_refresh_life;
const db = require("../models/db");

module.exports = async (req, res) => {
  const refreshToken = req.headers["authorization"];

  try {
    const decode = await tokenDecoder(refreshToken, secretRefresh);
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
