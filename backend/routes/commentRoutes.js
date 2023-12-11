/**
 * Endpoints de gestión de comentarios, llaman a su respectivo controlador desde la carpeta controllers
 * Usaremos el middleware para validar el token en cada ruta esto nos da acceso a la info del mismo por request
 * pudiendo fijar asi valores como el uid del usuario
 */

const commentRouter = require('express').Router()
const commentController = require('../controllers/commentController')
const { validarJWT } = require('../middleware/validarJWT')

//Endpoint agregar comentario
commentRouter.post('/create', validarJWT, commentController.createComment) // ./api/comment/create method: POST

//Endpoint cargar todos los comentarios de un post
commentRouter.get('/get', commentController.get)  // /.api/comment/id


module.exports = commentRouter