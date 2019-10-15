const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Имя пользователя"],
      unique: true
    },
    firstName: {
      type: String
    },
    middleName: {
      type: String
    },
    surName: {
      type: String
    },
    password: {
      type: String,
      required: [true, "Пароль"]
    },
    avatar: {
      type: String
    },
    permission: {
      chat: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
      news: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
      settings: { C: Boolean, R: Boolean, U: Boolean, D: Boolean }
    }
  },
  { versionKey: false }
);

const Users = mongoose.model("user", userSchema);

module.exports.Users = Users;
