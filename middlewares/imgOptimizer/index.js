const Jimp = require("jimp");
const path = require("path");
module.exports.imgOptimizer = async (req, res, next) => {
  const fileInput = req.filePath;
  if (fileInput) {
    /* const pathParse = path.parse(fileInput);
    console.log(pathParse); */
    Jimp.read(fileInput, (err, file) => {
      if (err) throw err;
      file
        .resize(250, 250)
        .quality(80)
        .write(fileInput);
    });
    next();
  }
};
