const router = require('express').Router();

//GET reqest to render homepage
router.get('/', (req, res) => {
    console.log('homepage');
    res.render('homepage');
});

//GET request to render login page
router.get('/login', (req, res) => {
    console.log('login page');
    //session logic will go there
    res.render('login');
});

//GET request for signup
router.get('/signup', (req, res) => {
    console.log('signup page');
    //session logic will go here
    res.render('signup');
})

//GET request to render creator's page
router.get('/creators', (req, res) => {
    console.log('creators page');
    res.render('creators', {loggedIn: true})
})

module.exports = router;