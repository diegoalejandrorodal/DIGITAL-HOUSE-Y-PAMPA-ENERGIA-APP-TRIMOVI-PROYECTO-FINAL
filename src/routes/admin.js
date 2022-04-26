let router = require('express').Router();

/* middlewares */
let upload = require('../middlewares/uploadProductFile');
let onlyLoguedUsers = require('../middlewares/onlyLoguedUsers')
let userAdminCheck = require('../middlewares/userAdminCheck')
let uploadProductFile = require('../middlewares/uploadProductFile');

/* validaciones */
let productFormValidator = require('../validations/productFormValidator');

/* controlador */
let controller = require('../controllers/peliculasController')


/* rutas */
// inicio de pagina de admin 
router.get('/', userAdminCheck, controller.inicio)

// get - lista de productos
/*Router.get('/products', controller.productos)*/

// get - formulario de edicion de producto
router.get('/products/edit/:id', userAdminCheck, controller.editar)
router.put('/products/edit/:id', upload.single('image'), controller.actualizar)
// get - formulario de nuevo producto

router.get('/products/new', userAdminCheck, controller.crear)
router.post('/products/new',upload.single('image'), productFormValidator, controller.agregar)

// get - formulario de listar y detalle
router.get('/products/listar', userAdminCheck, controller.listar)
router.get('/products/detalle/:id', userAdminCheck, controller.detalle)


/*Delete product*/
router.delete('/products/:id/dlt', controller.eliminar)

module.exports = router