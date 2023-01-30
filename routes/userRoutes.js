const express = require('express')
const router = require('express').Router()


const ForceNewToken = require('../helpers/forceNewToken')
const UserController = require('../controllers/UserController')
const validateToken = require('../helpers/validationUserToken')
const validateAdiminToken = require('../helpers/validationAdiminToken')
const userInfo = require('../helpers/userInfo')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/refreshToken', validateToken, ForceNewToken)
router.get('/infos', validateToken, userInfo)
router.get('/all', validateAdiminToken, UserController.getAll) 
router.get('/:id', validateAdiminToken, UserController.getOne) 

module.exports = router