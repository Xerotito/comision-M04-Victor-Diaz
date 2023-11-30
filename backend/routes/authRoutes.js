/**
 * Endpoints que controla todo lo relacionado con usuarios, llaman a su controlador desde ./controllers
 */

const authRouter = require('express').Router()                   //Enrutador de express
const UserController = require('../controllers/UserController')  //Controladores (lógica y acciones que suceden al solicitar el endpoint) 
const { validarJWT } = require('../middleware/validarJWT')

//EndPoint registrar usuario
authRouter.post('/register', UserController.createUser) // ./api/user/register method: POST

//Endpoint loguear usuario
authRouter.post('/login', UserController.loginUser )    // ./api/user/login method: POST

//EndPoint que checkea el token

authRouter.get('/validateToken',validarJWT, UserController.validateToken) // ./api/user/validateToken method: GET

module.exports =  authRouter