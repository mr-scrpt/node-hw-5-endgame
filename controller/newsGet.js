const db = require("../models/db");

const newsGet = async (req, res) => {
  try {
    const news = await db.newsGetAll();
    res.json(news);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ status: 400, message: "Ошибка получения новостей" });
  }
};
module.exports = newsGet;
