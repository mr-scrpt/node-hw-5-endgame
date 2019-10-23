const dateGen = require("../lib/dateGen");

const tokenSetData = (token, refreshToken) => {
  return {
    accessToken: token,
    refreshToken: refreshToken,
    accessTokenExpiredAt: dateGen(process.env.token_main_life),
    refreshTokenExpiredAt: dateGen(process.env.token_refresh_life)
  };
};

module.exports = tokenSetData;
