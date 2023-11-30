/**
 * Controlador (acciones y lógica que suceden al llamar al endpoint) 
 * se encarga de todo lo relacionado a los posteos (CRUD de posteos ) 
 */

const Post = require('../models/Post')
const PostController = {}

//CREAR POST
PostController.createPost = async(req,res) => {
    try{
        //Recibimos los datos del formularios de crear post del front
        res.status(200).json('ok')
        // const { title, description, author, comments, imageURL, createdAt } = req.body
    }catch(err){
        console.log(err)
    }
}