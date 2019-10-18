const express = require("express");
const router = express.Router();
const controllers = require("../../../../../controller");
const uploader = require("../../../../../middlewares/uploader");
router.get("/", controllers.profileGet);
router.patch("/", uploader.single("avatar"), controllers.profilePatch);
module.exports = router;
