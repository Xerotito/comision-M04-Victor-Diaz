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
        //Creamos el post a insertar con los datos que espera el modelo
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
        res.status(500).json(err)
    }
}

//OBTENER TODOS LOS POSTS
PostController.getAll = async (req, res) => {
    try {
        //Simplemente busca todos los post en el documento de la BD
        const findPost = await Post.find({},'-__v').populate('author','-password -__v')    
        return res.status(200).json(findPost);
    } catch (err) {
        console.log(err)
        return res.status(500).json({ok:false, message: 'ocurrió un error'});
    }
}

//VER POST POR ID
PostController.getPost = async (req, res) => {
    try {
        //Recibimos el id desde la barra de direcciones del navegador (params)
        const { id } = req.params

        //Ubicamos en la BD por id
        const postFound = await Post.findById(id)

        //Simplemente lo regresamos por json
        res.status(200).json(postFound)
    } catch (err) {
        let message = err
        if (err.kind === 'ObjectId') message = 'No se pudo obtener la publicación'
        return res.status(500).json({ message, err })
    }
}

//EDITAR POST
PostController.editPost = async (req, res) => {
    try {
        /**
         * Recibimos el id desde la barra de direcciones del navegador (params)
         * y los datos a editar por body
         */
        const { id } = req.params
        const { title, description, imageURL } = req.body

        //Ubicamos en la BD por id
        const foundPost = await Post.findById(id)

        //Comparamos que el autor sea el mismo del que recibimos de la validación de token
        if (foundPost.author.toString() !== req.uid)
            return res
                .status(403)
                .json({ ok: false, message: 'Debe ser el autor del post para editarlo' })

        //Si el autor es el mismo editamos el post y respondemos
        await Post.findByIdAndUpdate(id, { title, description, imageURL })
        res.status(200).json({ ok: true, message: 'Poste editado exitosamente' })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Ocurrió un error al intentar editar la publicación',
            err,
        })
    }
}


//ELIMINAR POST
PostController.deletePost = async (req, res) => {
    try {
    //Solo necesitamos el id del front
    const { id } = req.body    
    
    //Encontramos el post por id en la BD y con el mismo método de mongoose eliminamos
    await Post.findByIdAndDelete(id)

    res.status(200).json({ok: true, message: 'El post se elimino exitosamente'})

    } catch (err) {
        res.status(500).json({
            ok:false,
            message: 'Hubo un error al intentar eliminar el post'
        })    
    }
}

module.exports = PostController