const express = require('express')

const userController = require('../controllers/userController');

const router = express.Router()

router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)
router.get('/user/:id', userController.getUserById)
router.get('/users/list', userController.getUsers)

module.exports = router