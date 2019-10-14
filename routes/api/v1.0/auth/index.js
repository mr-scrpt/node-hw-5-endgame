const express = require("express");
const router = express.Router();

//router.use("/registration", require("./registration"));
router.use("/registration", require("./registration"));
/* router.post("/", () => {
  console.log("2222ss");
}); */

module.exports = router;
