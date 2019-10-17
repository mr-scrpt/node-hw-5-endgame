const serializedUser = user => {
  return {
    firstName: user.firstName || "",
    id: user._id,
    image: user.avatar || "",
    middleName: user.firstName || "",
    permission: user.permission,
    surName: user.firstName || "",
    username: user.username
  };
};

module.exports = serializedUser;
