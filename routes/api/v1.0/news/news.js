const express = require("express");
const router = express.Router();
const controllers = require("../../../../controller");

router.get("/", controllers.newsGet);

module.exports = router;
