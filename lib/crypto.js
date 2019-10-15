const bCrypt = require("bcryptjs");

module.exports.setCrypto = password => {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

module.exports.validCrypto = (password, etalonPassword) => {
  return bCrypt.compareSync(password, etalonPassword);
};
