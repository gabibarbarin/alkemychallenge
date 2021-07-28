const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')
const expressValidator = require('../middleware/expressValidator')

router.post('/login', expressValidator.login, controller.login)
router.post('/register', expressValidator.register, controller.register)

module.exports = router