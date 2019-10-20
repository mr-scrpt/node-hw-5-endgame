const db = require("../models/db");
const newPatch = async (req, res) => {
  const { id } = req.params;

  if (id) {
    const { text, title } = req.body;
    console.log(title, text);
    const news = { id: id, text, title };
    console.log(news);

    try {
      //const news = await db.newsGetOneById(id);
      const changedNews = await db.newsChange(news);
      console.log(changedNews);
    } catch (e) {}
  }
};

module.exports = newPatch;
