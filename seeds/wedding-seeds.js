const { Wedding } = require('../models');

const weddingData = [
    {
        wedding_date: '09/24/2021',
        guest_list_id: 1,
        wedding_location: '1111 S Figueroa St, Los Angeles, CA 90015',
        wedding_hashtag: '#hashtag',
        wedding_details: 'Please leave kids at home'
    }
];
const seedWeddings = () => Wedding.bulkCreate(weddingData);

module.exports = seedWeddings;