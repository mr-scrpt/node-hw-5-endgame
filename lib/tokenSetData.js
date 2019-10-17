const tokenSetData = (token, refreshToken) => {
  return {
    accessToken: token,
    refreshToken: refreshToken,
    accessTokenExpiredAt: Date.now() + process.env.token_main_life * 1000,
    refreshTokenExpiredAt: Date.now() + process.env.token_refresh_life * 1000
  };
};

module.exports = tokenSetData;
