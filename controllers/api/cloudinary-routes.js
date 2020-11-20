const router = require('express').Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer();
const streamifier = require('streamifier');
const weddingHashtag = require('../../models/Wedding.js');

require('dotenv').config();

//create the connection to the cloudinary api
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// cloudinary.uploader.upload('', function(error, result) {console.log(result)})

router.post('/upload', upload.single('weddingImage') , async (req, res, next) => {
    console.log(req.file);

    const cloudUpload = cloudinary.uploader.upload_stream(
        {
            folder: "test"
        },
        function(err, result) {
            console.log(err, result);
        }
    );

    streamifier.createReadStream(req.file.buffer).pipe(cloudUpload);

})

module.exports = router;