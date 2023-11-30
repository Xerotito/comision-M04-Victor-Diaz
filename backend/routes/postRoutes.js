/**
 * Endpoints de gestión de post, llaman a sus respectivos controladores desde ./controllers
 * Usaremos el middleware para validar el token en cada ruta esto nos da acceso a la info del mismo por request
 * pudiendo fijar asi valores como el uid del usuario
 */

const postRouter = require('express').Router()  
const PostController = require('../controllers/PostController')
const { validarJWT } = require('../middleware/validarJWT')



//Endpoint crear post
postRouter.post('/create', validarJWT, PostController.createPost) // ./api/post/create method POST
//Endpoint editar post
postRouter.put('/edit', validarJWT, PostController.editPost)      // ./api/post/edit method PUT


module.exports = postRouter