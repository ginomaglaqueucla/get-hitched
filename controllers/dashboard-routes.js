const router = require('express').Router();

//GET request to view dashboard page
router.get('/', (req, res) => {
    console.log('dashboard page');
    //session login
    res.render('dashboard', {is_couple:req.session.is_couple});
});

//GET request to view edit dashbaord information



module.exports = router;