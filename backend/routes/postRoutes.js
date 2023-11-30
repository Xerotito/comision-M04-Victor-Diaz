/**
 * Endpoints de gestión de post, llaman a sus respectivos controladores desde ./controllers
 */


const postRouter = require('express').Router()  
const PostController = require('../controllers/PostController')
const { validarJWT } = require('../middleware/validarJWT')

//Usaremos como middleware el token esto protege a todas las ruts si el token es incorrecto


//Endpoint crear post
postRouter.post('/create', validarJWT, PostController.createPost) // ./api/post/create method POST


module.exports = postRouter