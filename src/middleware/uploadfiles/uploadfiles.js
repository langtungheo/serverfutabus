const multer = require('multer');
const mkdirp = require("mkdirp")
const path = require("path")

const uploadAvatar = (type) => {
    const made = mkdirp.sync(`./publish/images/${type}`)
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./publish/images/${type}`)
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname)
        }
    })

    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png|gif/;
            const mimetype = fileTypes.test(file.mimetype);
            const extname = fileTypes.test(path.extname(file.originalname));
            if (mimetype && extname) {
                return cb(null, true);
            }
            else {
                return cb(new Error("File khong dung dinh dang !"));
            }
        }
    });

    return upload.single(type);

}

module.exports = {
    uploadAvatar,

}