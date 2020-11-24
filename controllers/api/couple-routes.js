const router = require('express').Router();
const { Couple, Wedding } = require('../../models');

// GET /api/couple
router.get('/', (req, res) => {
  Couple.findAll()
    .then(dbCoupleData => res.json(dbCoupleData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/couple/1
router.get('/:id', (req, res) => {
  Couple.findOne({
    where: {
      id: req.params.id
    },
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
      if (!dbCoupleData) {
        res.status(404).json({ message: 'No couple found with this id' });
        return;
      }
      res.json(dbCoupleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/couple
router.post('/', (req, res) => {
  // expects {partner1_name: 'Toby', partner2_name: 'Brenna', wedding_id: ''}
  Couple.create({
    partner1_name: req.body.partner1_name,
    partner2_name: req.body.partner2_name,
    wedding_id: req.body.wedding_id
  })
    .then(dbCoupleData => res.json(dbCoupleData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/couple/1
router.put('/:id', (req, res) => {
  // expects {partner1_name: 'Toby', partner2_name: 'Brenna', wedding_id: ''}
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  Couple.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCoupleData => {
      if (!dbCoupleData[0]) {
        res.status(404).json({ message: 'No couple found with this id' });
        return;
      }
      res.json(dbCoupleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/couple/1
router.delete('/:id', (req, res) => {
  Couple.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCoupleData => {
      if (!dbCoupleData) {
        res.status(404).json({ message: 'No couple found with this id' });
        return;
      }
      res.json(dbCoupleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;