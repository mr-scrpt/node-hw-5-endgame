const serializedUser = user => {
  return {
    firstName: user.firstName || "",
    id: user.id,
    image: user.image || "",
    middleName: user.middleName || "",
    permission: user.permission,
    surName: user.surName || "",
    username: user.username
  };
};

module.exports = serializedUser;
