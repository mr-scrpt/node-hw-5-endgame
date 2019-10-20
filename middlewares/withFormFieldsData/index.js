const bodyParser = require("body-parser");

module.exports.withFormFieldsData = bodyParser.urlencoded({ extended: true });
