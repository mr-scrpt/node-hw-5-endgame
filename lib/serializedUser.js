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
    accessTokenExpiredAt: process.cwd.token_main_life,
    refreshTokenExpiredAt: process.cwd.token_refresh_life
  };
};

module.exports = serializedUser;
