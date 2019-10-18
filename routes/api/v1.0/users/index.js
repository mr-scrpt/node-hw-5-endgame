const express = require("express");
const router = express.Router();

router.use("/profile", require("./profile"));
router.use("/", require("./users"));

module.exports = router;
