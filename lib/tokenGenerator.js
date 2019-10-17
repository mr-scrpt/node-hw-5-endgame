const jwt = require("jsonwebtoken");
const secretMain = process.env.token_main_secret;
const secretRefresh = process.env.token_refresh_secret;
const lifeMain = process.env.token_main_life;
const lifeRefresh = process.env.token_refresh_life;

const tokenLogin = data => {
  const { username, _id: id } = data;
  const user = { username, id };

  const token = jwt.sign(user, secretMain, { expiresIn: lifeMain });
  const refreshToken = jwt.sign(
    {
      userId: id,
      refreshTokenExpiredAt: Date.now() + lifeRefresh * 1000
    },
    secretRefresh,
    {
      expiresIn: lifeRefresh
    }
  );

  return { token, refreshToken };
};

module.exports = tokenLogin;
