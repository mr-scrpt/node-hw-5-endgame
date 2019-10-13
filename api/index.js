const express = require("express");
const router = express.Router();
const controllers = require("../controller");

router.post("/registration", controllers.registration);

module.exports = router;
