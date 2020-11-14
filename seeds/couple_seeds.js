const { Couple } = require('../models');

const seedCouples = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;