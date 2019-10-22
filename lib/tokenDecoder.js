const jwt = require("jsonwebtoken");

const tokenDecoder = (decodeToken, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(decodeToken, secret, (err, decode) => {
      if (err) {
        reject(err);
      }
      resolve(decode);
    });
  });
};

module.exports = tokenDecoder;
