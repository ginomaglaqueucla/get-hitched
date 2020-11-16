const router = require('express').Router();
const { Guest } = require('../../models');

// GET /api/guest
router.get('/', (req, res) => {
  Guest.findAll()
    .then(dbGuestData => res.json(dbGuestData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/guest/1
router.get('/:id', (req, res) => {
  Guest.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbGuestData => {
      if (!dbGuestData) {
        res.status(404).json({ message: 'No guest found with this id' });
        return;
      }
      res.json(dbGuestData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/guest
router.post('/', (req, res) => {
  // expects {user_id: '', wedding_id: ''}
  Guest.create({
    user_id: req.body.user_id,
    wedding_id: req.body.wedding_id
  })
    .then(dbGuestData => res.json(dbGuestData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/guest/1
router.put('/:id', (req, res) => {
  // expects {user_id: '', wedding_id: ''}
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  Guest.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbGuestData => {
      if (!dbGuestData[0]) {
        res.status(404).json({ message: 'No guest found with this id' });
        return;
      }
      res.json(dbGuestData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/guest/1
router.delete('/:id', (req, res) => {
  Guest.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbGuestData => {
      if (!dbGuestData) {
        res.status(404).json({ message: 'No guest found with this id' });
        return;
      }
      res.json(dbGuestData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;