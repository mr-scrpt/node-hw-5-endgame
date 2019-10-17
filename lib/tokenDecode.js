const jwt = require("jsonwebtoken");

const tokenRefresh = (decodeToken, secret) => {
  jwt.verify(decodeToken, secret, (err, decode) => {
    return new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      }
      resolve(decode);
    });
  });
};
