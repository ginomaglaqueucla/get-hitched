const seedUsers = require('./user-seeds');
const seedCouples = require('./couple-seeds');
const seedGuestLists = require('./guestList-seeds');
const seedWeddings = require('./wedding-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedWeddings();
    console.log('--------------');

    await seedGuestLists();
    console.log('--------------');

    await seedCouples();
    console.log('--------------');

  process.exit(0);
};

seedAll();