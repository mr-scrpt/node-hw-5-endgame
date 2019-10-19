const bCrypt = require("bcryptjs");
const userChanger = (currentUser, changedUser) => {
  const { firstName, image, middleName, surName, password } = changedUser;
  console.log(33333);
  console.log(image);

  console.log(33333);

  if (firstName) {
    currentUser.set({ firstName });
  }
  if (image) {
    currentUser.set({ avatar });
  }
  if (middleName) {
    currentUser.set({ middleName });
  }

  if (surName) {
    currentUser.set({ surName });
  }
  if (password) {
    const newPassword = bCrypt.setCrypto(password);
    password !== newPassword && currentUser.set({ password });
  }

  return currentUser;
};

module.exports = userChanger;
