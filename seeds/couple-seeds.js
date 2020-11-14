const { Couple } = require('../models');

const coupleData = [
    {
        user_id: 1,
        partner1_name: 'Gino Magla',
        partner2_name: 'Kelsey Pesi',
        wedding_id: 1
    }
];
const seedCouples = () => Couple.bulkCreate(coupleData);

module.exports = seedCouples;