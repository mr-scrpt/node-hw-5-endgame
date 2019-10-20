const express = require("express");
const router = express.Router();
const controllers = require("../../../../controller");
const {
  withFormFieldsData
} = require("../../../../middlewares/withFormFieldsData"); // ???????????????????
const { withUserData } = require("../../../../middlewares/withUserData");
router.get("/", controllers.newsGet);
router.post("/", withFormFieldsData, withUserData, controllers.newsPost);

router.patch("/:id", withUserData, controllers.newsPatch);
router.delete("/:id", withUserData, controllers.newsDelete);
module.exports = router;
