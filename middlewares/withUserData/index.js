const secretToken = process.env.token_main_secret;
const tokenDecoder = require("../../lib/tokenDecoder");
const serializedUser = require("../../lib/serializedUser");
module.exports.withUserData = async (req, res, next) => {
  const accessToken = req.headers["authorization"];

  if (accessToken) {
    try {
      const user = serializedUser(await tokenDecoder(accessToken, secretToken));

      req.user = user;
    } catch (e) {
      console.error(e);
    }
  }

  next();
};
