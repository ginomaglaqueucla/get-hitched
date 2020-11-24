const router = require('express').Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer();
const streamifier = require('streamifier');


const weddingHashtag = require('../../models/Wedding.js');

require('dotenv').config();

//create the connection to the cloudinary api
cloudinary.config({
    // cloud_name: process.env.CLOUD_NAME,
    // api_key: process.env.API_KEY,
    // api_secret: process.env.API_SECRET
    cloud_name: 'gettinhitched',
    api_key: '881384245614239',
    api_secret: 'uz6R2vfu6QcblHW9AIkUxCpxwUg'
});

//this is a POST request to send a file to cloudinary
router.post('/upload', upload.single('weddingImage') , async (req, res, next) => {
    // console.log(req.file);
    const newFolder = req.session.cachedWedding;
    console.log(newFolder);
    const cloudUpload = cloudinary.uploader.upload_stream(
        {
            // folder: newFolder 
            folder: "tester"
            // tags: "tester"
        },
        function(err, result) {
            console.log(err, result);
        }
    );
    // console.log(cloudUpload)
    streamifier.createReadStream(req.file.buffer).pipe(cloudUpload);
    console.log(next);
    console.log(res);
});

module.exports = router;