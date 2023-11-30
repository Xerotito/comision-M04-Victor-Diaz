const Post           = require('../models/Post')
const PostController = {}


//CREAR POST
PostController.createPost = async (req,res) => {
    
    try{
        /**
          * Recibimos los datos del formularios de creación de post del front,
          * el author viene de la respuesta del middleware de token en req
        */
        const { title, description, imageURL } = req.body        

        //Creamos el post a insertar en la bd con el modelo
        const newPost = new Post({
            title,
            description,
            author: req.uid,
            imageURL,
        })

        const createPost = await newPost.save() //método mongoose para guardar en su db

        //Si se inserto exitosamente en db
        res.status(201).json({ok: true, mensaje: 'Publicación creada exitosamente'})
    }catch(err){
        console.log(err)
        res.status(400).json({
            ok     : false,
            mensaje: 'Ocurrió un error al intentar crear la publicación',
            err
        });
    }
}

module.exports = PostController