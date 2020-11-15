const router = require('express').Router();
const { User } = require('../models');

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
//login lgic will be locationed in a frontend javascript file

//GET request for signup
router.get('/signup', (req, res) => {
    console.log('signup page');
    //session logic will go here
    res.render('signup');
})



module.exports = router;