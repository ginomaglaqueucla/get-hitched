const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Wedding, Couple, GuestList } = require('../models');

//GET request to view dashboard page
router.get('/', (req, res) => {
    console.log('dashboard page');
    console.log('this is the user id', req.session.user_id);
    console.log('this is just the engaged', req.session.engaged);
    console.log('this is just the session', req.session);
    Couple.findAll({
        where:{
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'partner1_name',
            'partner2_name',
            'wedding_id'
        ]
        // include: [
        //     {
        //         model: User,
        //         attributes: [
        //             'id',
        //             'engaged'
        //         ],
        //         through: GuestList,
        //         as: 'wedding_guestlist'
        //     }
        // ]
        //     {
        //         model: Couple,
        //         attributes: [
        //             'id',
        //             'partner1_name',
        //             'partner2_name',
        //             'wedding_id'
        //         ]
        //     }
        // ]
    })
    .then(dbCoupleData => {
        const couple = dbCoupleData.map(couple => couple.get({plain:true}));
        res.render('dashboard', {couple, loggedIn: true, keyname:'fun times.'});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//GET request to view edit dashbaord information



module.exports = router;