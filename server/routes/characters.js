const express = require('express')

const db = require('../db/characters')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCharacters()
    .then((results) => {
      res.json({ characters: results.map((character) => character.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
