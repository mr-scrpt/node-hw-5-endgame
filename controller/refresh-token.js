const tokenGenerator = require("../lib/tokenGenerator");
const tokenDecoder = require("../lib/tokenDecode");

const secretRefresh = process.env.token_refresh_secret;
const lifeMain = process.env.token_main_life;
const lifeRefresh = process.env.token_refresh_life;

module.exports = async (req, res) => {
  const refreshToken = req.headers["authorization"];

  try {
    decode = await tokenDecoder(refreshToken, secretRefresh);
    const { username, _id: id } = decode;
    const user = { username, id };

    const { token, refreshToken } = tokenGenerator(user);

    res.json({
      accessToken: token,
      refreshToken: refreshToken,
      accessTokenExpiredAt: lifeMain,
      refreshTokenExpiredAt: lifeRefresh
    });
  } catch (e) {
    res.status(400).json({ status: 400, message: "Неудалось обновить токен" });
  }
};
