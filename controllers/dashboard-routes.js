const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Wedding, Couple, GuestList } = require('../models');

//GET request to view dashboard page
// Need to split up this route into 2 sep
router.get('/', (req, res) => {
    console.log('dashboard page');
    console.log('this is the user id', req.session.user_id);
    console.log('this is just the engaged', req.session.engaged);
    console.log('this is just the session', req.session);
    const engaged = req.session.engaged;
    if(req.session.engaged){
        //should this be findOne?
        Couple.findAll({
            where:{
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'partner1_name',
                'partner2_name',
                'wedding_id'
            ],
            include: [
                {
                    model: Wedding,
                    attributes: [
                        'id',
                        'wedding_date',
                        'wedding_location',
                        'wedding_hashtag',
                        'wedding_details'
                    ]
                }
            ]
  
        })
        .then(dbCoupleData => {
            console.log(dbCoupleData);
            const couple = dbCoupleData.map(couple => couple.get({plain:true}));
            console.log('data',couple);
            res.render('dashboard', {couple, engaged, loggedIn: true, keyname:'fun times.'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    }
    else {
        console.log('in here');
        GuestList.findAll({
            where:{
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'user_id',
                'wedding_id',
                'rsvp',
                'food_choice',
                'plus_one'
            ]      
        })
        .then(dbGuestListData => {
            console.log(dbGuestListData);
            const guestlist = dbGuestListData.map(guestlist => guestlist.get({plain:true}));
            console.log('data',guestlist);
            if(guestlist.length <= 0){
                // no wedding invites
                res.render('dashboard', {loggedIn: true, keyname:'fun times.'});
            }
            else {
                Wedding.findAll({
                    where:{
                        id: guestlist[0].wedding_id
                    },
                    attributes: [
                        'id',
                        'wedding_date',
                        'wedding_location',
                        'wedding_hashtag',
                        'wedding_details'
                    ]
                })
                .then(dbUserData => {
                    console.log(dbUserData);
                    const user = dbUserData.map(user => user.get({plain:true}));
                    console.log('data',user);
                    res.render('dashboard', {user, loggedIn: true, keyname:'fun times.'});
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    }
});

//GET request to view edit dashbaord information



module.exports = router;