const express = require("express");
const router = express.Router();
const controllers = require("../../../../../controller");
const uploader = require("../../../../../middlewares/uploader");
const { withUserData } = require("../../../../../middlewares/withUserData");
const { imgOptimizer } = require("../../../../../middlewares/imgOptimizer");

router.get("/", withUserData, controllers.profileGet);
router.patch(
  "/",

  uploader.single("avatar"),
  imgOptimizer,
  withUserData,
  controllers.profilePatch
);
module.exports = router;
