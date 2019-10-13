const express = require("express");
const router = express.Router();

router.get("*", function(req, res) {
  res.render("index", { title: "Express" });
});

router.post("/api/registration", function(req, res) {
  res.render("index", controller.registrationUser);
});

module.exports = router;
