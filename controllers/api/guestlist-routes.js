const router = require('express').Router();
const { GuestList, Wedding, User } = require('../../models');

// GET /api/guestlist
router.get('/', (req, res) => {
  GuestList.findAll()
    .then(dbGuestListData => res.json(dbGuestListData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/guestlist/1
router.get('/:id', (req, res) => {
  GuestList.findOne({
    where: {
      id: req.params.id
    },
    // include: [
    //   {
    //     model: GuestList,
    //     attributes: [
    //       'wedding_id'
    //     ],
    //     through: Wedding
    //   },
    //   {
    //     model: User,
    //     attributes: [
    //       'id',
    //       'email',
    //       'full_name'
    //     ],
    //     through: GuestList
    //   }
    // ]
  })
    .then(dbGuestListData => {
      if (!dbGuestListData) {
        res.status(404).json({ message: 'No guest list found with this id' });
        return;
      }
      res.json(dbGuestListData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/guestlist
router.post('/', (req, res) => {
  // expects {user_id: '', rsvp: '', food_choice: '', plus_one: ''}
  GuestList.create({
    user_id: req.body.user_id,
    wedding_id: req.body.wedding_id,
    rsvp: req.body.rsvp,
    food_choice: req.body.food_choice,
    plus_one: req.body.plus_one
  })
    .then(dbGuestListData => res.json(dbGuestListData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/guestlist/1
router.put('/:id', (req, res) => {
  // expects {user_id: '', rsvp: '', food_choice: '', plus_one: ''}
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  GuestList.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbGuestListData => {
      if (!dbGuestListData[0]) {
        res.status(404).json({ message: 'No guest list found with this id' });
        return;
      }
      res.json(dbGuestListData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/guestlist/1
router.delete('/:id', (req, res) => {
  GuestList.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbGuestListData => {
      if (!dbGuestListData) {
        res.status(404).json({ message: 'No guest list found with this id' });
        return;
      }
      res.json(dbGuestListData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;