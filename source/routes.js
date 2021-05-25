const express = require('express')
const ManagerController = require('./controllers/Manager.js')
const LoginController = require('./controllers/Login.js')
const UserController = require('./controllers/User.js')
const SchedulingController = require('./controllers/Scheduling.js')

const routes = express.Router()

routes.post('/managers', ManagerController.store)
routes.get('/managers', ManagerController.index)

routes.post('/login', LoginController.store)

routes.get('/users', UserController.index)
// routes.get('/users', UserController.find)
routes.post('/users', UserController.store)

routes.post('/schedulings', SchedulingController.store)
routes.get('/schedulings', SchedulingController.index)


module.exports = routes