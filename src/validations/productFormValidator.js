const { check } = require('express-validator')
/*const db = require('../database/models')*/

module.exports = [
    check('title')
    .notEmpty()
    .withMessage('El campo title es obligatorio').bail()
    .isLength({ min: 4, max: 50 })
    .withMessage('El nombre tiene que tener entre 4 y 20 caracteres'),

    check('direction')
    .notEmpty()
    .withMessage('El campo director es obligatorio').bail(),
   

    check('length')
    .notEmpty()
    .withMessage('Debes ingresar una duración').bail()
    .isNumeric()
    .withMessage('Sólo números'),

    check('year')
    .notEmpty()
    .withMessage('Debes ingresar un año').bail()
    .isNumeric()
    .withMessage('Sólo números'),

    check('triler')
    .notEmpty()
    .withMessage('Debes ingresar un link').bail()
    .isLength()
    .withMessage('Ingresá un link'),

    check('price')
    .notEmpty()
    .withMessage('Debes ingresar un precio').bail()
    .isNumeric()
    .withMessage('Sólo números'),

    /*check('image')
    .notEmpty()
    .withMessage('Debes ingresar una imagen').bail(),*/
   

    check('sinopsis')
    .notEmpty()
    .withMessage('Completa la sinopsis').bail()
    .isLength({ max: 5000 })
    .withMessage('El campo tiene que tener hasta 5000 caracteres'),
    

    /*check('checkGenres')
    .isString('on')
    .withMessage('Debes agregar un genero')*/
]