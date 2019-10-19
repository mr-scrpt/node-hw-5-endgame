const express = require("express");
const router = express.Router();
const controllers = require("../../../../controller");

router.get("/", controllers.newsGet);
router.post("/", controllers.newsPost);
module.exports = router;
