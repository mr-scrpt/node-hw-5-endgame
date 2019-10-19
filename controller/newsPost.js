const db = require("../models/db");

const newsPost = async (req, res) => {
  const accessToken = req.headers["authorization"];
  console.log(accessToken);

  const { test, title } = req.body;
  try {
    const news = await db.newsAdd({
      created_at: Date.now(),
      text: "текст",
      title: "Заголовок",
      user: {
        firstName: "Фестнейм",
        id: "5daaba983c303d7960021a2a",
        image: "img.png",
        middleName: "Мидделнейм",
        username: "Юзернейм"
      }
    });
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
