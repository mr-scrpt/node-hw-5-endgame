const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth"));
/* router.post("/auth", () => {
  console.log("2222ss");
}); */

module.exports = router;
