const express = require('express')

const db = require('../db/characters')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCharacters()
    .then((results) => {
      res.json({
        characters: results.map((character) => character),
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getCharacter(id)
    .then((results) => res.json(results))
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/addCharacter', (req, res) => {
  const character = req.body
  console.log(character)
  db.addCharacter(character)
    .then((results) => res.json(results))
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
