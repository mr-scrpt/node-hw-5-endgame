const mongoose = require("mongoose");
const { Users, News } = require("./schema/user");

module.exports.userAdd = ({
  username,
  firstName,
  middleName,
  surName,
  password
}) => {
  const User = new Users({
    username,
    firstName,
    middleName,
    surName,
    password,
    permission: {
      chat: { C: true, R: true, U: false, D: false },
      news: { C: false, R: true, U: false, D: false },
      settings: { C: false, R: true, U: false, D: false }
    }
  });

  return User.save();
};

module.exports.userChange = user => {
  console.log(user.id);

  return Users.findByIdAndUpdate(
    {
      _id: user.id
    },
    {
      $set: user
    },
    { new: true }
  );
};

module.exports.userGetOneByUserName = username => {
  return Users.findOne({ username });
};

module.exports.userGetOneById = id => {
  return Users.findOne({ _id: id });
};

module.exports.userGetAll = () => {
  return Users.find();
};

module.exports.userDelete = id => {
  return Users.findByIdAndRemove({ _id: id });
};

module.exports.newsGetAll = () => {
  return News.find();
};
