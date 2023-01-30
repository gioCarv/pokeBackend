const express = require('express')
const router = require('express').Router()

const validateAdiminToken = require('../helpers/validationAdiminToken')
const PokemonsController = require('../controllers/PokemonsController')
const validateToken = require('../helpers/validationUserToken')

router.get('/all', validateAdiminToken, PokemonsController.getAll)
router.post('/register', PokemonsController.register)
router.post('/update', validateToken, PokemonsController.uptdatePoke)
router.get('/topLvl', PokemonsController.topLvl)

module.exports = router