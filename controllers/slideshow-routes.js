const router = require('express').Router();

//GET request to image slide show page 
router.get('/', (req, res) => {
    console.log('image slide show page')
    //i think this should also have session logic
    //and keep users who didn't go to this wedding from seeing it
    res.render('slideshow');
});

//GET request to view upload page

//POST request to upload a picture?
//might not be needed with cloudinary

//PUT request to edit image
//like it we'd like to add captioning to images

//DELETE request to delete image



module.exports = router;