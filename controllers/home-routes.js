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

//GET request for signup
router.get('/signup', (req, res) => {
    console.log('signup page');
    //session logic will go here
    res.render('signup');
})

//GET request for signup
// router.get('/dashboard', (req, res) => {
//     console.log('dashboard page');
//     //session logic will go here
//     res.render('dashboard');
// })

module.exports = router;