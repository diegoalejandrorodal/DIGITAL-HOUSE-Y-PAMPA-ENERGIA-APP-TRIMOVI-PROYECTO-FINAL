const { check, body } = require('express-validator');
const db = require('../database/models')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es necesario')
    .isLength({ min: 3})
    .withMessage('El nombre debe tener al menos 3 letras'),

    check('lastname')
    .notEmpty()
    .withMessage('El apellido es necesario')
    .isLength({ min: 3})
    .withMessage('El apellido es necesario'),

   /* check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),*/

    check('phone')
    .isNumeric()
        .withMessage('Ingrese un numero de telefono válido'),

    check('date')
    .isDate()
    .withMessage('Ingrese una fecha válida')

]