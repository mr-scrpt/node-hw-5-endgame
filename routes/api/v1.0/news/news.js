const express = require("express");
const router = express.Router();
const controllers = require("../../../../controller");

router.get("/", controllers.newsGet);
router.post("/", controllers.newsPost);
router.patch("/", controllers.newsPatch);
module.exports = router;
