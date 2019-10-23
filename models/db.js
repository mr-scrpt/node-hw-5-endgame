const mongoose = require("mongoose");
const { Users } = require("./schema/user");
const { News } = require("./schema/news");
const { Token } = require("./schema/token");
const dateGen = require("../lib/dateGen");
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
      firstName: user.firstName || "",
      id: user.id,
      image: user.image,
      middleName: user.middleName || "",
      username: user.username
    }
  });
  return NewsOne.save();
};

module.exports.newsGetOneById = id => {
  return News.findOne({ _id: id });
};

module.exports.newsChange = news => {
  return News.findByIdAndUpdate(
    {
      _id: news.id
    },
    {
      $set: news
    },
    { new: true }
  );
};

module.exports.newsDelete = id => {
  return News.findByIdAndRemove({ _id: id });
};

module.exports.tokenAdd = (refreshToken, accessToken) => {
  const tokenData = new Token({
    tokenAccess: {
      body: accessToken,
      expireDate: dateGen(process.env.token_main_life)
    },
    tokenRefresh: {
      body: refreshToken,
      expireDate: dateGen(process.env.token_refresh_life)
    }
  });
  tokenData.save();
};

module.exports.tokenGet = tokenRefresh => {
  return Token.findOne({ "tokenRefresh.body": tokenRefresh });
};
module.exports.tokenDeleteOne = tokenRefresh => {
  return Token.deleteOne({ "tokenRefresh.body": tokenRefresh });
};

module.exports.tokenDelAllExpired = expired => {
  return Token.find()
    .where("tokenRefresh.expireDate")
    .lt(expired)
    .remove();
};
