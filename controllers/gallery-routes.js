const router = require('express').Router();
const cloudinary = require('cloudinary').v2;

//GET request to image slide show page 
router.get('/', (req, res) => {
    //i think this should also have session logic
    cloudinary.api.resources(
        {
            type: 'upload',
            prefix: 'tester/',
            invalidate: true,
            max_results: 30
        },
        function(err, result) {
            if (err) {
                console.log('err');
                return;
            }
            console.log('result', result);
            const galleryImages = result.resources;
            res.render('gallery', { loggedIn: true, galleryImages })
        }
    )
});

//GET request to view upload page
router.get('/upload', (req, res) => {
    console.log('upload page')
    res.render('partials/upload', { loggedIn: true });
})


module.exports = router;