const router = require('express').Router();

//GET request to image slide show page 
router.get('/', (req, res) => {
    console.log('image slide show page')
    //i think this should also have session logic
    //and keep users who didn't go to this wedding from seeing it
    res.render('gallery');
});

//GET request to view upload page

//POST request to upload a picture
// this exists as a backend route


module.exports = router;