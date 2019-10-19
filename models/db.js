const mongoose = require("mongoose");
const { Users } = require("./schema/user");
const { News } = require("./schema/news");

module.exports.userAdd = ({
  username,
  firstName,
  middleName,
  image,
  surName,
  password
}) => {
  const User = new Users({
    username,
    firstName,
    middleName,
    image,
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

module.exports.newsAdd = (data, user) => {
  const NewsOne = new News({
    created_at: Date.now(),
    text: data.text,
    title: data.title,
    user: {
      firstName: data.text,
      id: data.text,
      image: data.text,
      middleName: data.text,
      username: data.text
    }
  });
  return NewsOne.save();
};

module.exports.newsGetOneById = id => {
  return News.findOne({ _id: id });
};

module.exports.newsChange = news => {
  return Users.findByIdAndUpdate(
    {
      _id: news.id
    },
    {
      $set: news
    },
    { new: true }
  );
};
