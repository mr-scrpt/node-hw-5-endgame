const tokenGenerator = require("../lib/tokenGenerator");
const tokenDecoder = require("../lib/tokenDecoder");
const serializedUser = require("../lib/serializedUser");
const secretRefresh = process.env.token_refresh_secret;
const lifeMain = process.env.token_main_life;
const lifeRefresh = process.env.token_refresh_life;

module.exports = async (req, res) => {
  const refreshToken = req.headers["authorization"];

  try {
    const user = await tokenDecoder(refreshToken, secretRefresh);

    const userSerialized = serializedUser(user);
    const { token, refreshTokenNew } = tokenGenerator(userSerialized);

    res.json({
      accessToken: token,
      refreshToken: refreshTokenNew,
      accessTokenExpiredAt: Date.now() + lifeMain * 1000,
      refreshTokenExpiredAt: Date.now() + lifeRefresh * 1000
    });
  } catch (e) {
    console.log(e.message);

    res.status(400).json({ status: 400, message: "Неудалось обновить токен" });
  }
};
