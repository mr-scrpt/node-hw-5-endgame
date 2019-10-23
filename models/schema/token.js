const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema(
  {
    tokenAccess: {
      body: {
        type: String,
        required: [true, "Основной токен"]
      },
      expireDate: {
        type: Date,
        required: [true, "Время жизни основного токена"]
      }
    },
    tokenRefresh: {
      body: {
        type: String,
        required: [true, "Рефреш токен"]
      },
      expireDate: {
        type: Date,
        required: [true, "Время жизни рефреш токена"]
      }
    }
  },
  { versionKey: false }
);

const Token = mongoose.model("token", tokenSchema);

module.exports.Token = Token;
