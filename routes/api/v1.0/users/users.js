const express = require("express");
const router = express.Router();
const controllers = require("../../../../controller");
router.delete("/", controllers.userDelete);

module.exports = router;
