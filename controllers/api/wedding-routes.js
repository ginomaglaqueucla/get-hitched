const router = require('express').Router();
const { Wedding, User, GuestList, Couple } = require('../../models');

// GET /api/wedding
router.get('/', (req, res) => {
  Wedding.findAll()
    .then(dbWeddingData => res.json(dbWeddingData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/wedding/1
router.get('/:id', (req, res) => {
  Wedding.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: [
        'id',
        'full_name'
        ],
        through: GuestList,
        as: 'wedding_guestlist'
      }
    ]
  })
    .then(dbWeddingData => {
      if (!dbWeddingData) {
        res.status(404).json({ message: 'No wedding found with this id' });
        return;
      }
      res.json(dbWeddingData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/wedding/1
router.get('/hashtag/:wedding_hashtag', (req, res) => {
  console.log("in weddonghashst");
  let ifHashtagValid;
  Wedding.findOne({
    where: {
      wedding_hashtag: req.params.wedding_hashtag
    },
    include: [
      {
        model: User,
        attributes: [
        'id',
        'full_name'
        ],
        through: GuestList,
        as: 'wedding_guestlist'
      }
    ]
  })
    .then(dbWeddingData => {
      // const wedding = dbWeddingData.map(wedding => wedding.get({plain:true}));
      console.log("weddinG",dbWeddingData);
      if (!dbWeddingData) {
        res.status(404).json({ message: 'No wedding found with this hashtag' });
        res.render('invite', {ifHashtagValid: false});
      } else {
        let currentUser = req.session.user_id;
        console.log(currentUser);
        console.log(dbWeddingData.wedding_guestlist[0].id);
        for(let i = 0; i < dbWeddingData.wedding_guestlist.length; i++){
          if(currentUser === dbWeddingData.wedding_guestlist[i].id){
            res.render('invite', {dbWeddingData, ifHashtagValid: true, loggedIn: true});
          }
        }
        res.render('invite', {message: "You are not on the Guest List!", ifHashtagValid: false, logged: true});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/wedding
router.post('/', (req, res) => {
  console.log("in wedding");
  // expects {wedding_date: '', guest_list_id: '', wedding_location: '', wedding_hashtag: '', wedding_details: ''}
  Wedding.create({
    wedding_date: req.body.wedding_date,
    // guest_list_id: req.body.guest_list_id,
    wedding_location: req.body.wedding_location,
    wedding_hashtag: req.body.wedding_hashtag,
    wedding_details: req.body.wedding_details
  })
    .then(dbWeddingData => {
      console.log("WEDDING",dbWeddingData.id);
      // Updates couple table with "their" wedding
      Couple.update({wedding_id: dbWeddingData.id},{
        where: {
          user_id: req.session.user_id
        }
      });
      req.session.save(() => {
        req.session.cachedWedding = true;
      });
      res.json(dbWeddingData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/wedding/1
router.put('/:id', (req, res) => {
  // expects {wedding_date: '', guest_list_id: '', wedding_location: '', wedding_hashtag: '', wedding_details: ''}
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  Wedding.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbWeddingData => {
      if (!dbWeddingData[0]) {
        res.status(404).json({ message: 'No wedding found with this id' });
        return;
      }
      res.json(dbWeddingData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/wedding/1
router.delete('/:id', (req, res) => {
  Wedding.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbWeddingData => {
      if (!dbWeddingData) {
        res.status(404).json({ message: 'No wedding found with this id' });
        return;
      }
      res.json(dbWeddingData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;