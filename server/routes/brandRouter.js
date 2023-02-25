const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleWare/checkRole')

router.post('/',  brandController.create)
router.get('/', brandController.getAll)

module.exports = router