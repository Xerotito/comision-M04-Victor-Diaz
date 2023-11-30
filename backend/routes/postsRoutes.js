/**
 * Endpoints que controla todo lo relacionado con los posteos, llaman a su controlador desde ./controllers
 */

const userRouter = require('express').Router()                   //Enrutador de express
const UserController = require('../controllers/PostsController.js')  //Controladores (lógica y acciones que suceden al solicitar el endpoint) 

//EndPoint crear post
userRouter.post('/create', UserController.createPost) // ./api/post/create method: POST
