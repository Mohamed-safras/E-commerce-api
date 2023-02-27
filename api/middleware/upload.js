const multer = require("multer");
const path = require("path");
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    const fileName = path.extname(file.originalname);
    cb(null, `IMG${Date.now()}${fileName}`);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      console.log("only jpeg , jpg ,png files are supported");
      cb(null, false);
    }
  },
});

module.exports = {
  upload,
};
