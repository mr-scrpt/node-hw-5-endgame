const db = require("../models/db");

const newsPost = async (req, res) => {
  const { text, title } = req.body;
  const data = { text, title };
  const { permission, ...user } = req.user;

  try {
    const news = await db.newsAdd(data, user);
    const allNews = await db.newsGetAll();
    res.json(allNews);
  } catch (e) {
    console.log(e);
    res
      .status(400)
      .json({ status: 400, message: "Неудалось создать новость!" });
  }
};

module.exports = newsPost;
