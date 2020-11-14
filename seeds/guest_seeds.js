const { Guest } = require('../models');

const guestData = [
    {
        user_id: 1,
        guest_name: 'Gino Magla',
    },
    {
        user_id: 2,
        guest_name: 'Catlin Morg'
    },
    {
        user_id: 3,
        guest_name: 'Chris Mei'
    },
    {
        user_id: 4,
        guest_name: 'Derek Mood'
    },
    {
        user_id: 5,
        guest_name: 'DJ Auggy'
    },
    {
        user_id: 6,
        guest_name: 'Maria Paris'
    },
    {
        user_id: 7,
        guest_name: 'Mary Penny'
    },
    {
        user_id: 8,
        guest_name: 'Tony Pary'
    },
    {
        user_id: 9,
        guest_name: 'Nick Sabbin'
    },
    {
        user_id: 10,
        guest_name: 'James Arthur'
    },
    
];
const seedGuests = () => Guest.bulkCreate(guestData);

module.exports = seedGuests;