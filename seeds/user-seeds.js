const { User } = require('../models');

const userData = [
  {
    username: '1086jjohnston',
    password: 'password1'
    
  },
  {
    username: 'blueberrywrapper',
    password: 'password2'
  },
  {
    username: 'jj1086',
    password: 'password3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;