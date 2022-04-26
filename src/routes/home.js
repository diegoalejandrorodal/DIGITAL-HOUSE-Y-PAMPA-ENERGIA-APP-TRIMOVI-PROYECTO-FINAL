let router = require('express').Router()
let controller = require('../controllers/homeController')

/* Get - pagina de inicio */
router.get('/', controller.inicio);

router.get('/peliculas/genero/:id', controller.filterByGenre);
router.get('/peliculas/anio/:id', controller.filterByYear);
router.get('/peliculas/search', controller.search);


module.exports = router 