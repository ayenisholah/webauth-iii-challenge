const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password', 'departments');
}

function findBy(filter) {
  return db('users').where(filter);
}