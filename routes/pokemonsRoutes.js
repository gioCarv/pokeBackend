const express = require('express')
const router = require('express').Router()

const PokemonsController = require('../controllers/PokemonsController')

// router.get('/all', PokemonsController.getAll)
router.post('/register', PokemonsController.register)
// router.post('/register', PokemonsController.register)

module.exports = router