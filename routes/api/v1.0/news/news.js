const express = require("express");
const router = express.Router();
const controllers = require("../../../../controller");
const {
  withFormFieldsData
} = require("../../../../middlewares/withFormFieldsData");
const { withUserData } = require("../../../../middlewares/withUserData");
router.get("/", controllers.newsGet);
router.post("/", withFormFieldsData, withUserData, controllers.newsPost);

router.patch("/:id", withFormFieldsData, withUserData, controllers.newsPatch);
module.exports = router;
