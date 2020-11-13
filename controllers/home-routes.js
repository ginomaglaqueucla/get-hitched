const router = require('express').Router();
const { User } = require('../models');

//GET reqest to render homepage
router.get('/', (req, res) => {
    console.log('does it get there');
    res.render('homepage');
});

module.exports = router;