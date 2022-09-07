const connection = require('./connection')

function getCharacters(db = connection) {
  return db('characters').select()
}

function getCharacter(id, db = connection) {
  return db('characters').where('characters.id', id).select().first()
}

module.exports = {
  getCharacters,
  getCharacter,
}
