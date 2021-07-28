const { body } = require('express-validator')

module.exports.register = [
    body('username')
    .notEmpty().withMessage("El usuario es obligatorio"),
    body('email')
        .notEmpty().withMessage("El email es obligatorio")
        .isEmail().withMessage("El email debe tener formato de email"),
    body('emailConfirmation')
        .notEmpty().withMessage("El email es obligatorio")
        .custom((value, { req }) => {
            if (value !== req.body.email){
                return false
            } else{
                return true
            }
        }).withMessage("Los email ingresadas no coinciden"),
    body('password')
        .notEmpty().withMessage("El password es obligatorio"),
]

module.exports.login = [
    body('email')
        .notEmpty().withMessage("El email es obligatorio")
        .isEmail().withMessage("El email debe tener formato de email"),
    body('password')
        .notEmpty().withMessage("El password es obligatorio"),
]