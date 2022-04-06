const { Post } = require('../models');

const postData = [
  {
    title: 'Building my own server',
    content: 'It was enjoyable seeing the process used to buidl my own server.',
    user_id: 1
    
  },
  {
    title: 'Writing about tech',
    content: 'Has anyone else had any experiences writing about tech news?',
    user_id: 2
  },
  {
    title: 'Password hash',
    content: 'Is hashing a users password the best way for password safety?',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;