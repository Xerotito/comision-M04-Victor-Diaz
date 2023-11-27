const mongoose = require('mongoose')

/**
 * Modelo de usuarios de la base de datos
 * También usaremos las validaciones de mongoose del lado del servidor como middlewares
 */

const UserSchema = new mongoose.Schema({
    username: {
        type     : String,
        required : [true, 'El nombre es requerido'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [10, 'El nombre no debe tener más de 10 caracteres'],
        unique   : true,
    },
    email: {
        type    : String,
        required: [true, 'El correo electrónico es requerido'],
        unique  : true,
        match   : [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            'El correo electrónico no tiene formato valido',
        ],
    },
    password: {
        type     : String,
        required : [true, 'La contraseña es requerida'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    },
    avatarURL: {
        type   : String,
        require: false,
    }
})


const User = mongoose.model('User', UserSchema) //El modelo es en singular, mongo lo transforma al plural

module.exports = User