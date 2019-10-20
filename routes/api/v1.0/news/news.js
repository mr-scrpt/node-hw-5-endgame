const express = require("express");
const router = express.Router();
const controllers = require("../../../../controller");
const { withUserData } = require("../../../../middlewares/withUserData");

router.get("/", controllers.newsGet);
router.post("/", withUserData, controllers.newsPost);

router.patch("/:id", withUserData, controllers.newsPatch);
router.delete("/:id", withUserData, controllers.newsDelete);
module.exports = router;
