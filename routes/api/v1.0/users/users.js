const express = require("express");
const router = express.Router();
const controllers = require("../../../../controller");
const { withUserData } = require("../../../../middlewares/withUserData");

router.delete("/:id", controllers.userDelete);
router.get("/", controllers.userGet);
router.patch("/:id/permission", withUserData, controllers.userPatch);

module.exports = router;
