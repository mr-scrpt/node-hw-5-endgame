const jwt = require("jsonwebtoken");

const tokenDecoder = (decodeToken, secret) => {
  jwt.verify(decodeToken.toString(), secret.toString(), (err, decode) => {
    return new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      }
      resolve(decode);
    });
  });
};

module.exports = tokenDecoder;
