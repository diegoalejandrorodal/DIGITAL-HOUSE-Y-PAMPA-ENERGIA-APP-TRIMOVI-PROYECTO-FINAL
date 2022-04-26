const multer = require('multer'),
path = require('path')

// const upload = multer({dest: 'img/'}) 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/design/images/products'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})

const fileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        req.filevalidationError = "solo formatos de imagenes";
        return cb(null, false, req.filevalidationError);
    }
    return cb(null, true);
}

const uploadFile = multer({storage, fileFilter});

module.exports = uploadFile;