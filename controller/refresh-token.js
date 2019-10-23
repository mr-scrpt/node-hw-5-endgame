const tokenGenerator = require("../lib/tokenGenerator");
const tokenDecoder = require("../lib/tokenDecoder");
const serializedUser = require("../lib/serializedUser");
const dataGen = require("../lib/dateGen");
const db = require("../models/db");
const secretRefresh = process.env.token_refresh_secret;
const lifeMain = process.env.token_main_life;
const lifeRefresh = process.env.token_refresh_life;

module.exports = async (req, res) => {
  const refreshToken = req.headers["authorization"];
  const {
    tokenRefresh: { body: tokenExistsInBd }
  } = await db.tokenGet(refreshToken);

  if (tokenExistsInBd) {
    const tokenRemoving = await db.tokenDeleteOne(refreshToken);

    try {
      const user = await tokenDecoder(refreshToken, secretRefresh);

      const userSerialized = serializedUser(user);
      const tokens = tokenGenerator(userSerialized);
      await db.tokenAdd(tokens.refreshToken, tokens.token);
      res.json({
        accessToken: tokens.token,
        refreshToken: tokens.refreshToken,
        accessTokenExpiredAt: dataGen(lifeMain),
        refreshTokenExpiredAt: dataGen(lifeRefresh)
      });
    } catch (e) {
      console.log(e.message);

      res
        .status(400)
        .json({ status: 400, message: "Неудалось обновить токен" });
    }
  } else {
    res.status(400).json({ status: 400, message: "Токен не существует" });
  }
};
