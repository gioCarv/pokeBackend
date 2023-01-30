const express = require('express')
const router = require('express').Router()

const UserController = require('../controllers/UserController')
const validateToken = require('../helpers/validationUserToken')


router.get('/:id', UserController.getOne) //colocar middleware de adm
router.get('/all', UserController.getAll) //colocar middleware de adm
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/infos', validateToken)

module.exports = router