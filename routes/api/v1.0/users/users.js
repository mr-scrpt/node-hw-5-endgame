const express = require("express");
const router = express.Router();
const controllers = require("../../../../controller");

router.delete("/:id", controllers.userDelete);
router.get("/", controllers.userGet);

module.exports = router;
