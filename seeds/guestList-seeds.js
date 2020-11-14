const { GuestList } = require('../models');

const guestListData = [
    {
        user_id: 2,
        rsvp: true,
        food_choice: 'Steak',
        plus_one: false
    }
];
const seedguestLists = () => GuestList.bulkCreate(guestListData);

module.exports = seedguestLists;