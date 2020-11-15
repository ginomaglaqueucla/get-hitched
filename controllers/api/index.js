const router = require('express').Router();

const coupleRoutes = require('./couple-routes');
const guestRoutes = require('./guest-routes');
const guestListRoutes = require('./guestlist-routes');
const userRoutes = require('./user-routes');
const weddingRoutes = require('./wedding-routes');

router.use('/couple', coupleRoutes);
router.use('/guest', guestRoutes);
router.use('/guestlist', guestListRoutes);
router.use('/user', userRoutes);
router.use('/wedding', weddingRoutes);

module.exports = router;