const { check, body } = require('express-validator');
const {getMovies} = require('../database')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes ingresar una pelicula'),

    check('category')
    .notEmpty()
    .withMessage('Debes ingresar un genero'),

    check('age')
    .notEmpty()
    .withMessage('Debes ingresar un año'),

    check('description')
    .notEmpty()
    .withMessage('Debes ingresar la sinopsis'),
    

    check('price')
    .isNumber()
    .notEmpty()
    .withMessage('El precio es requerido'),

    check('direction')
    .notEmpty()
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')
]