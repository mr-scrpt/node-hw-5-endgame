const jwt = require("jsonwebtoken");
const secretMain = process.env.token_main_secret;
const secretRefresh = process.env.token_refresh_secret;
const lifeMain = process.env.token_main_life;
const lifeRefresh = process.env.token_refresh_life;
const dateGen = require("../lib/dateGen");

const tokenGenerator = data => {
  const { _id: id } = data;

  const token = jwt.sign(data, secretMain, { expiresIn: dateGen(lifeMain) });
  const refreshToken = jwt.sign(
    {
      ...data,
      refreshTokenExpiredAt: dateGen(lifeRefresh)
    },
    secretRefresh,
    {
      expiresIn: dateGen(lifeRefresh)
    }
  );

  return { token, refreshToken };
};

module.exports = tokenGenerator;
