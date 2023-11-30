const mongoose = require('mongoose')

/**
 * Modelo de los Posteos que realizan los usuarios en la base de datos
 * También usaremos las validaciones de mongoose del lado del servidor como middlewares
 */

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type     : String,
        required : [true, 'El título es requerido'],
        minlength: [1, 'El título debe tener al menos 1 caracteres'],
        maxlength: [50, 'El título no debe tener más de 100 caracteres'],
    },
    description: {
        type     : String,
        required : [true, 'La descripción es requerida'],
        minlength: [50, 'La descripción debe tener al menos 10 caracteres'],
        maxlength: [1000, 'La descripción no debe tener más de 500 caracteres'],
    },
    author: {
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'User', 
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Comment',
        },
    ],
    imageURL: {
        type    : String,
        required: [true, 'La URL de la imagen es requerida'],
    },
    createdAt: {
        type   : Date,
        default: Date.now,
    },
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post


