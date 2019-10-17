const tokenGenerator = require("./tokenGenerator");

const serializedUser = user => {
  const { token, refreshToken } = tokenGenerator(user);

  return {
    firstName: user.firstName || "",
    id: user._id,
    image: user.avatar || "",
    middleName: user.firstName || "",
    permission: user.permission,
    surName: user.firstName || "",
    username: user.username,

    accessToken: token,
    refreshToken: refreshToken,
    accessTokenExpiredAt: Date.now() + process.env.token_main_life * 1000,
    refreshTokenExpiredAt: Date.now() + process.env.token_refresh_life * 1000
  };
};

module.exports = serializedUser;
