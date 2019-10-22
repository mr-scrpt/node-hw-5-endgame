const express = require("express");
const router = express.Router();
const controllers = require("../../controller");
const { withUserData } = require("../../middlewares/withUserData");
router.get("/", withUserData, controllers.chat);

module.exports = router;
