const path = require("path");
const multer = require("multer");
const avaFolder = process.env.AVA_FOLDER;
const uploader = multer({
  storage: multer.diskStorage({
    destination: avaFolder,
    filename: (req, file, cb) => {
      const extension = path.extname(file.originalname);
      const avaName = `Avatar${Date.now()}${extension}`;
      req.filePath = `${avaFolder}/${avaName}`;

      cb(null, avaName);
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (!allowedFileTypes.includes(file.mimetype)) {
      return cb(new Error("File must be image"));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 2097152
  }
});

module.exports = uploader;
