const express = require("express");
const router = express.Router();

//router.use("/registration", require("./registration"));
router.use("/registration", require("./registration"));
router.use("/login", require("./login"));
/* router.post("/", () => {
  console.log("2222ss");
}); */

module.exports = router;
