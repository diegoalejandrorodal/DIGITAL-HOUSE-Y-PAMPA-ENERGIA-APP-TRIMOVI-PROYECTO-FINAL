let router = require('express').Router()
let {crear, agregar, listar, detalle, editar, actualizar, eliminar} = require('../controllers/peliculasController')


router
    .get('/crear', crear)
    .post('/agregar', agregar)
    .get('/listar',listar)
    .get('/detalle/:id', detalle)
    .get('/editar/:id',editar)
    .put('/actualizar/:id',actualizar)
    .delete('/eliminar/:id',eliminar)


module.exports = router