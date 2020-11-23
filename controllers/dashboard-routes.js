const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Wedding, Couple, GuestList } = require('../models');
const withAuth = require('../utils/auth');

//GET request to view dashboard page
// Need to split up this route into 2 sep
router.get('/', withAuth, (req, res) => {
    console.log('dashboard page');
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
            const couple = dbCoupleData.map(couple => couple.get({plain:true}));
            console.log('data',couple);
            req.session.save(() => {
                req.session.cachedWedding = couple[0].wedding_id;
            });
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
            let userWedding = [];
            // console.log(dbGuestListData);
            const guestlist = dbGuestListData.map(guestlist => guestlist.get({plain:true}));
            // console.log('data',guestlist);
            if(guestlist.length <= 0){
                // no wedding invites
                res.render('dashboard', {loggedIn: true, keyname:'fun times.'});
            }
            else {
                for (let i = 0; i < guestlist.length; i++){
                    Wedding.findAll({
                        where:{
                            id: guestlist[i].wedding_id
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
                        // console.log(dbUserData);
                        const user = dbUserData.map(user => user.get({plain:true}));
                        userWedding.push(user[0]);
                        // console.log('data',user);
                        if(i === guestlist.length-1){
                            // const userWeddingData = {
                            //     weddings: userWedding,
                            //     loggedIn: true
                            // };
                            // console.log("sending this over:",userWeddingData);
                            res.render('dashboard', {userWedding, loggedIn: true});
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json(err);
                    })
                }
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    }
});

//GET request to view edit dashboard information
router.get('/edit', withAuth, (req, res) => {
    console.log('in edit');
    if(req.session.cachedWedding !== null){
        Wedding.findAll({
            where:{
                id: req.session.cachedWedding
            },
            attributes: [
                'id',
                'wedding_date',
                'wedding_location',
                'wedding_hashtag',
                'wedding_details'
            ]
        })
        .then(dbWeddingData => {
            const wedding = dbWeddingData.map(wedding => wedding.get({plain:true}));
            console.log('data',wedding);
            console.log(req.session.loggedIn);
            res.render('edit-wedding', {wedding, loggedIn: true});
        })
    }
    else{
        const wedding = [
            {
                wedding_date: "MM/DD/YY",
                wedding_location: "Torrey Pines Country Club 11480 N Torrey Pines Rd, La Jolla, CA 92037",
                wedding_hashtag: "#YourUniqueWeddingHashtag",
                wedding_details: "With all due respect, please small children at home"
            }
        ]
        res.render('edit-wedding', {wedding, loggedIn: true});
    }
});

router.get('/guestlist', (req, res) => {
    console.log("in guestlist");
    if(req.session.cachedWedding !== null){
        GuestList.findAll({
            where:{
                wedding_id: req.session.cachedWedding
            },
            attributes: [
                'user_id',
                'rsvp',
                'food_choice',
                'plus_one'
            ]
        })
        .then(dbGuestListData => {
            const guestList = dbGuestListData.map(guestList => guestList.get({plain:true}));
            console.log("guestlist",guestList);
            let userData = [];
            for(let i = 0; i < guestList.length; i++){
                User.findAll({
                    where:{
                        id: guestList[i].user_id
                    },
                    attributes: [
                        'full_name'
                    ]
                })
                .then(dbUserData => {
                    const user = dbUserData.map(user => user.get({plain:true}));
                    userData.push(user[0]);
                    console.log("users invited",userData);
                    // render editable wedding guestlist page
                    if(i===guestList.length-1){
                        res.render('guestList', {guestList, userData, loggedIn: true, hello: "hello"});
                    }
                    
                })
            }
        })
    }
    else {
    // guestlist not made yet, render create guestlist page
    res.render('guestlist');
    }

});

// POST request which will logout the user
router.post('/edit/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// POST request which will logout the user
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;