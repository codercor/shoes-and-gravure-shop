const multer = require('multer');
const random = require('random-key-generator');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    const key = random(10);
    const name = req.params.id + '-' + key + '-' + Date.now() + '.' + ext;
    req.fileNames.push(name);
    cb(null, name);
  },
});

const upload = multer({ storage });

module.exports = upload.array('images[]', 50);
