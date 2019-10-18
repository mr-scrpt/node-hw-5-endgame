const tokenDecoder = require("../lib/tokenDecoder");
const secretToken = process.env.token_main_secret;

const db = require("../models/db");

module.exports = async (req, res) => {
  const accessToken = req.headers["authorization"];

  try {
    const decode = await tokenDecoder(accessToken, secretToken);
    //console.log(decode);

    res.json(decode);
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
