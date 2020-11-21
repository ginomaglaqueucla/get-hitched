const router = require('express').Router();
const sequelize = require('../config/connection');
const {} = require('../models');

router.get('/', (req, res) => {
  console.log('in edit')
  res.render('edit-wedding')
})



module.exports = router;