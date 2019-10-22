const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    created_at: {
      type: Date,
      required: [true, "Дата новости"]
    },
    text: {
      type: String,
      required: [true, "Текст новости"]
    },
    title: {
      type: String,
      required: [true, "Заголовок новости"]
    },
    user: {
      firstName: { type: String },
      id: { type: String },
      image: { type: String },
      middleName: { type: String },
      username: { type: String }
    }
  },
  { versionKey: false }
);

const News = mongoose.model("news", newsSchema);

module.exports.News = News;
