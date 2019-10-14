const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Имя пользователя"]
      //unique: true
    },
    middleName: {
      type: String,
      required: [true, "Имя пользователя"]
    },
    surName: {
      type: String,
      required: [true, "Отчество пользователя"]
    },
    oldPassword: {
      type: String,
      required: [true, "Старый пароль пользователя"]
    },
    newPassword: {
      type: String,
      required: [true, "Новый пароль пользователя"]
    },
    avatar: {
      type: String,
      required: [true, "Аватар пользователя"]
    }
  },
  { versionKey: false }
);

const Cat = mongoose.model("cat", user);

module.exports = Cat;
