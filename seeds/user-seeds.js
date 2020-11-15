const { User } = require('../models');

const userdata = [
  {
    username: 'ginomagz',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    full_name: 'Gino Mag'
  },
  {
    username: 'catlinz',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    full_name: 'Cat Lin'
  },
  {
    username: 'chrismmm_',
    email: 'cstoneman2@last.fm',
    password: 'password123',
    full_name: 'Chris Mei'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
    full_name: 'Derek MJ'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123',
    full_name: 'DJ Row'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
    full_name: 'Maria Johnson'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123',
    full_name: 'Maggie Pen'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123',
    full_name: 'Tony Yu'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123',
    full_name: 'Nick Sabbin'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123',
    full_name: 'James Art'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
