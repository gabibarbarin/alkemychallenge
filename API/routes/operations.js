const express = require('express')
const router = express.Router()
const controller = require('../controllers/operations')
const middleware = require('../middleware/jwt')

router.get('/operations', middleware.isJWTLogin, controller.operations)
router.get('/show', middleware.isJWTLogin, controller.show)
router.post('/store', middleware.isJWTLogin, controller.store)
router.delete('/delete', middleware.isJWTLogin, controller.delete)
router.put('/edit', middleware.isJWTLogin, controller.edit)

module.exports = router