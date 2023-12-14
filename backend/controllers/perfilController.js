/**
 * Controlador (acciones y lógica que suceden al llamar al endpoint) 
 * Contiene los endpoints para cambiar el username y la imagen de avatar de usuario 
 */


const User             = require('../models/User')
const perfilController = {}
const generateJWT = require('../libs/jwt')

//CAMBIAR NOMBRE DE USUARIO E IMAGEN
perfilController.changePerfil = async (req, res) => {
    try {
        //Recibimos por body del front el id y nuevo nombre de usuario
        const { id, username, imageURL } = req.body

        //Ubicamos el usuario en la BD por id y modificamos los datos
        const userFound = await User.findById(id)

        await User.findByIdAndUpdate(id, { username, avatarURL:imageURL })
        //Renovamos el token con los nuevos datos, menos el id y el email son los mismos
        const user = {
            uid      : userFound._id,
            username,
            email    : userFound.email,
            avatarURL: imageURL
        }

        //Se renueva el token ya que estamos cambiando el usuario 
        const token = generateJWT(userFound._id, username, userFound.email, imageURL)        
        res.status(201).json({token,user})

    } catch (err) {
        res.status(500).json({ok: false, message: 'Hubo un error al intentar actualizar el perfil'})
    }

}

module.exports = perfilController