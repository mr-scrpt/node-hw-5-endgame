const express = require("express");
const router = express.Router();
const controllers = require("../../../../../controller");

router.get("/", controllers.profile);

module.exports = router;
