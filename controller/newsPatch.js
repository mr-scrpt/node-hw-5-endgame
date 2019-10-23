const db = require("../models/db");
const newPatch = async (req, res) => {
  const { id } = req.params;

  if (id) {
    const { text, title } = req.body;
    const news = { id: id, text, title };

    try {
      const changedNews = await db.newsChange(news);

      const allNews = await db.newsGetAll();
      res.json(allNews);
    } catch (e) {
      console.log(e.message);
      res
        .status(400)
        .json({ status: 400, message: "Неудалось изменить новость!" });
    }
  }
};

module.exports = newPatch;
