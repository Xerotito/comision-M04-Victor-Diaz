/**
 * Endpoints que controla todo lo relacionado con usuarios, llaman a su controlador desde ./controllers
 * Importamos el enrutador de express
 * Importamos los controladores (lógica y acciones que suceden al solicitar el endpoint) 
 */

const userRouter = require('express').Router()
const UserController = require('../controllers/UserController')
const { validarJWT } = require('../middleware/validarJWT')

//EndPoint registrar usuario
userRouter.post('/register', UserController.createUser) // ./api/user/register method: POST

//Endpoint loguear usuario
userRouter.post('/login', UserController.loginUser )    // ./api/user/login method: POST

//EndPoint que checkea el token

userRouter.get('/validateToken',validarJWT, UserController.validateToken) // ./api/user/validateToken method: GET

module.exports =  userRouter