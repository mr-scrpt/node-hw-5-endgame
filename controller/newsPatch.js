const db = require("../models/db");
const newPatch = async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      //const news = await db.newsGetOneById(id);
      const changedNews = await db.newsChange();
    } catch (e) {}
  }
};

module.exports = newPatch;
