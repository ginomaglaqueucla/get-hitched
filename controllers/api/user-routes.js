const router = require('express').Router();
const { User, Wedding, Couple, GuestList } = require('../../models');

// GET /api/user
router.get('/', (req, res) => {
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/user/1
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Couple,
        attributes: [
          'id',
          'partner1_name',
          'partner2_name',
          'wedding_id'
        ]
      },
      {
        model: Wedding,
        attributes: [
          'id',
          'wedding_date',
          'wedding_location',
          'wedding_hashtag',
          'wedding_details'
        ],
        through: GuestList,
        as: "wedding_guestlist"
        
      }
    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/user
router.post('/', (req, res) => {
  console.log(req.body);
  // expects {username: '', password: ''}
  User.create({
    // username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    full_name: req.body.full_name,
    is_couple: req.body.is_couple
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST to log user in
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    },
    //i think here is were the inlude will go that return the user's unique data
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email address.' }); //if this prompts the user with an alert we should figure out how to alert the user a different way
      return;
    }
    const validPw = dbUserData.passwordCheck(req.body.password);
    if (!validPw) {
      res.sendStatus(400).json({ message: 'Incorrect password!' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.email = dbUserData.email;
      req.session.loggedIn = true;
      // req.session.is_couple = dbUserData.is_couple;
      req.session.is_couple = true;

      res.status(200).json({ user: dbUserData, message: 'Login sucessful'});
    });
  });
});

//POST request which will logout the user
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

// PUT /api/user/1
router.put('/:id', (req, res) => {
  // expects {username: '', password: ''}
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/user/1
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;