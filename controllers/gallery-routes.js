const router = require('express').Router();

//GET request to image slide show page 
router.get('/', (req, res) => {
    console.log('wedding pictures gallery')
    //i think this should also have session logic
    //and keep users who didn't go to this wedding from seeing it
    res.render('gallery');
});

//GET request to view upload page
router.get('/upload', (req, res) => {
    console.log('upload page')
    res.render('partials/upload');
})


//POST request to upload a picture
// this exists as a backend route


module.exports = router;