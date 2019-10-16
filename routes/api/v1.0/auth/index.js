const express = require("express");
const router = express.Router();

router.use("/registration", require("./registration"));
router.use("/login", require("./login"));
router.use("/refresh-token", require("./refresh-token"));

module.exports = router;
