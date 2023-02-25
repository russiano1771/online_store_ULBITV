const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const checkAuth = require('../middleWare/checkAuth')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', checkAuth,userController.check)

module.exports = router