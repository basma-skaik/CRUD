const express = require('express');
const userController = require('../controllers/userController')

const route = express.Router();

route.get('/fetchAllUsers', userController.fetchAllUsers);
route.get('/fetchUserById/:id', userController.fetchUserById);
route.post('/insertUser', userController.insertUser);
route.post('/updateUser/:id', userController.updateUser);
route.delete('/deleteUser/:id', userController.deleteUser);

module.exports = route;