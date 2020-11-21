const router = require('express').Router();

const homeRoutes = require('./home-routes');
const editWeddingRoutes = require('./edit-wedding-routes');
const launchRoutes = require('./launch-routes.js');
const dashboardRoutes = require('./dashboard-routes');
const galleryRoutes = require('./gallery-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/edit', editWeddingRoutes);
router.use('/launch', launchRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/gallery', galleryRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => { //this is so if the api endpoint doesn't exist they get an error code
    res.status(404).end();
});

module.exports = router

