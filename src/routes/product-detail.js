let express = require('express')
let router = express.Router()
let controller = require('../controllers/productController')


/* GET - Home page */
router.get('/product-detail', controller.product)



module.exports = router