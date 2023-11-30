/**
 * Endpoints de gestión de post, llaman a sus respectivos controladores desde ./controllers
 * Usaremos el middleware para validar el token en cada ruta esto nos da acceso a la info del mismo por request
 * pudiendo fijar asi valores como el uid del usuario
 */

const express    = require('express')
const postRouter = require('express').Router()  
const PostController = require('../controllers/PostController')
const { validarJWT } = require('../middleware/validarJWT')


//Ver todas las publicaciones de un usuario


//Ver un post por id
postRouter.get('/:id', PostController.getPost)                     //  ./api/post/:id method: GET

//Endpoint crear post
postRouter.post('/create', validarJWT, PostController.createPost) // ./api/post/create method POST

//Endpoint editar post
postRouter.put('/edit', validarJWT, PostController.editPost)      // ./api/post/edit method PUT

//Endpoint Eliminar publicación 
postRouter.delete('/delete',validarJWT, PostController.deletePost) // ./api/post/delete method DELETE


module.exports = postRouter