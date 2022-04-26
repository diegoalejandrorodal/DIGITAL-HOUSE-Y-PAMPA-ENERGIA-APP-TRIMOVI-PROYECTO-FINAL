let router = require('express').Router()
let controller = require('../controllers/peliculasController')

/* Get - peliculas por genero */
/* router.get('/:genero', controller.peliculasPorGenero)*/

router.get('/detail/:id', controller.detalle)

module.exports = router