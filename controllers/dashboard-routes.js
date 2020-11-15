const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('dashboard page');
    //session login
    res.render('dashboard');
});

module.exports = router;