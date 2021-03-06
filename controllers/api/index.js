const router = require('express').Router();

const coupleRoutes = require('./couple-routes');
const guestListRoutes = require('./guestlist-routes');
const userRoutes = require('./user-routes');
const weddingRoutes = require('./wedding-routes');
const cloudinaryRoutes = require('./cloudinary-routes');

router.use('/couple', coupleRoutes);
router.use('/guestlist', guestListRoutes);
router.use('/user', userRoutes);
router.use('/wedding', weddingRoutes);
router.use('/cloudinary', cloudinaryRoutes);


module.exports = router;