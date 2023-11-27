const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    author: {
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'User',
        required: [true, 'El autor es requerido'],
    },
    description: {
        type     : String,
        required : [true, 'La descripción es requerida'],
        minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
        maxlength: [500, 'La descripción no debe tener más de 500 caracteres'],
    },
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
