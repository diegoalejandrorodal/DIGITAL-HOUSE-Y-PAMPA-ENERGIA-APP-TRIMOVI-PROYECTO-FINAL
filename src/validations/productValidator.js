const {check} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('tittle')
    .notEmpty()
    .withMessage('El Titulo del producto es obligatorio'),
    
    check('sinopsis')
    .notEmpty()
    .withMessage('La descripción es obligatoria')
    .bail()
    .isLength({min : 20})
    .withMessage('La descripción debe tener un mímino de 20 caracteres'),

    check('genres')
    .notEmpty()
    .withMessage('Indicá el genero'),
    
    check('price')
    .isDecimal({min: 1})
    .isNumeric()
    .withMessage('debes ingresar un numero'),

    check('duration')
    .isInt({min: 0})
    .isNumeric()
    .withMessage('Debe ingresar un número en este campo'),

    check('trailer')
    .notEmpty()
    .withMessage('La descripción es obligatoria')
    .bail()
    .isLength({min : 20})
    .withMessage('La descripción debe tener un mímino de 20 caracteres'),

   
    check('director')
    .notEmpty()
    .withMessage('De elegir al menos un director')
    .bail(),

    check('year')
    .notEmpty()
    .isNumeric()
    .withMessage('Debes colocar un numero'),
    
    check('image')
    .custom((value, {req}) => {
    if(req.files[0] == undefined){
      return false
    }
    else if(req.files[0].mimetype === 'image/png' || req.files[0].mimetype === 'image/jpeg' || req.files[0].mimetype === 'image/gif'){
        return '.png or .jpg'; // retorna un dato para indicar que es verdadero.
    }else{
        return false;
    }}).withMessage('Debe cargar una imagen del producto en los formatos .PNG o .JPEG'),
]
