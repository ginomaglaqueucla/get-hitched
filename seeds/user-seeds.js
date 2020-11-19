const { User } = require('../models');

const userdata = [
  {
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    full_name: 'Gino Mag'
  },
  {
    email: 'rmebes1@sogou.com',
    password: 'password123',
    full_name: 'Cat Lin'
  },
  {
    email: 'cstoneman2@last.fm',
    password: 'password123',
    full_name: 'Chris Mei'
  },
  {
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
    full_name: 'Derek MJ'
  },
  {
    email: 'gmidgley4@weather.com',
    password: 'password123',
    full_name: 'DJ Row'
  },
  {
    email: 'larnout5@imdb.com',
    password: 'password123',
    full_name: 'Maria Johnson'
  },
  {
    email: 'hnapleton6@feedburner.com',
    password: 'password123',
    full_name: 'Maggie Pen'
  },
  {
    email: 'kperigo7@china.com.cn',
    password: 'password123',
    full_name: 'Tony Yu'
  },
  {
    email: 'lmongain8@google.ru',
    password: 'password123',
    full_name: 'Nick Sabbin'
  },
  {
    email: 'bsteen9@epa.gov',
    password: 'password123',
    full_name: 'James Art'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
