const tokenDecoder = require("../lib/tokenDecoder");
const secretToken = process.env.token_main_secret;
const serializedUser = require("../lib/serializedUser");
const db = require("../models/db");

module.exports = async (req, res) => {
  console.log(req.user.id);

  /* const user = serializedUser(await db.userGetOneById(req.user.id)); */
  const user = serializedUser(await db.userGetOneById(req.user.id));
  /* const user = await db.userGetOneById(req.user.id); */

  res.json(user);
};
