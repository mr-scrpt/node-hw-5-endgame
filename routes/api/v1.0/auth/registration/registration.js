const express = require("express");
const router = express.Router();
const controllers = require("../../../../../controller");

router.post("/", () => {
  console.log("333333333");
});

module.exports = router;
