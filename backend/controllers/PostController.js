const Post           = require('../models/Post')
const PostController = {}


//CREAR POST
PostController.createPost = async (req,res) => {
    /**
     * Recibimos los datos del formularios de creación de post del front,
     * el author viene de la respuesta del middleware de token en req
     */
    const { title, description, imageURL } = req.body

    try {
        //Creamos el post a insertar en la bd con el modelo
        const newPost = new Post({
            title,
            description,
            author: req.uid,
            imageURL,
        })

        const createPost = await newPost.save() //método mongoose para guardar en su db

        //Si se inserto exitosamente en db
        res.status(201).json({
            ok: true,
            message: 'Publicación creada exitosamente',
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            ok: false,
            message: 'Ocurrió un error al intentar crear la publicación',
            err,
        })
    }
}

//EDITAR POST
PostController.editPost = async (req,res) => {
    // Recibimos los datos del formularios de edición de post del front,
    const { id, title, description, imageURL } = req.body

    try {
        //Encontramos por id el post en la BD
        const foundPost = await Post.findById(id);
        
        //Comparamos que el autor sea el mismo del que recibimos de la validación de token
        if (foundPost.author.toString() !== req.uid)
            return res.status(403).json({ ok: false, message: 'Debe ser el autor del post para editarlo' })

        await Post.findByIdAndUpdate(id, { title, description, imageURL }) //Si el autor es el mismo editamos el post

        res.status(200).json({ ok: true, message: 'Poste editado exitosamente' })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Ocurrió un error al intentar editar la publicación',
            err
        })
    }
}



module.exports = PostController