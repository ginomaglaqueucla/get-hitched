const router = require('express').Router();

//GET request to view dashboard page
router.get('/', (req, res) => {
    console.log('dashboard page');
    //session login
    res.render('dashboard');
});

//GET request to view edit dashbaord information



module.exports = router;