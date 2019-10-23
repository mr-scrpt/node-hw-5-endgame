const secretToken = process.env.token_main_secret;
const tokenDecoder = require("../../lib/tokenDecoder");
const serializedUser = require("../../lib/serializedUser");
module.exports.withUserData = async (req, res, next) => {
  console.log("profile patch!!!");

  const accessToken = req.headers["authorization"];

  if (accessToken) {
    try {
      const user = serializedUser(await tokenDecoder(accessToken, secretToken));
      console.log(user);
      req.user = user;
    } catch (e) {
      console.error(e.message);
      res.status(400).json({
        status: 400,
        message: "Неудалось получить ключ польлзователя"
      });
    }
  }

  next();
};
