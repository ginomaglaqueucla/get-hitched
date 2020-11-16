const router = require('express').Router();
const { Wedding, User, GuestList } = require('../../models');

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

// POST /api/wedding
router.post('/', (req, res) => {
  // expects {wedding_date: '', guest_list_id: '', wedding_location: '', wedding_hashtag: '', wedding_details: ''}
  Wedding.create({
    wedding_date: req.body.wedding_date,
    guest_list_id: req.body.guest_list_id,
    wedding_location: req.body.wedding_location,
    wedding_hashtag: req.body.wedding_hashtag,
    wedding_details: req.body.wedding_details
  })
    .then(dbWeddingData => res.json(dbWeddingData))
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