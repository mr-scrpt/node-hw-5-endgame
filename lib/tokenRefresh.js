const tokenGenerator = require("./tokenGenerator");
const jwt = require("jsonwebtoken");
const secretRefresh = process.env.token_refresh_secret;
const lifeMain = process.env.token_main_life;
const lifeRefresh = process.env.token_refresh_life;

const tokenRefresh = refreshToken => {
  jwt.verify(refreshToken, secretRefresh, (err, decode) => {
    const { username, _id: id } = decode;
    const user = { username, id };

    const { token, refreshToken } = tokenGenerator(user);

    return {
      accessToken: token,
      refreshToken: refreshToken,
      accessTokenExpiredAt: lifeMain,
      refreshTokenExpiredAt: lifeRefresh
    };
  });
};

module.exports = tokenLogin;
