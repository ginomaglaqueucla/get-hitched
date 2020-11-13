const router = require('express').Router();
// const temp = require('../models');
const homeRoutes = require('./home-routes');
// const apiRoutes = require('./api');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

router.use((req, res) => { //this is so if the api endpoint doesn't exist they get an error code
    res.status(404).end();
});

module.exports = router;