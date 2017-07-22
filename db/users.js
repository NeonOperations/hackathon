'use strict';

const users = [
  {
    id: '1', username: 'bob', password: 'secret', name: 'Bob Smith'
  },
  {
    id: '2', username: 'joe', password: 'password', name: 'Joe Davis'
  }
];

module.exports.findById = (id, done) => {
  console.log('User - findById: ' + id);
  for (let user of users) {
    if (user.id === id) return done(null, user);
  }
  return done(new Error('User Not Found'));
};

module.exports.findByUsername = (username, done) => {
  console.log('User - findByUsername: ' + username);
  for (let user of users) {
    if (user.username === username) return done(null, user);
  }
  return done(new Error('User Not Found'));
};