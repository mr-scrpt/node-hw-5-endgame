const db = require("../models/db");
const newDelete = async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      //const news = await db.newsGetOneById(id);
      const deleteNews = await db.newsDelete(id);
      const allNews = await db.newsGetAll();
      res.json(allNews);
    } catch (e) {
      console.log(e);
      res
        .status(400)
        .json({ status: 400, message: "Неудалось удалить новость!" });
    }
  }
};

module.exports = newDelete;
