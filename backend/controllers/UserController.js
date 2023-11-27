/**
 * Controlador (acciones y lógica que suceden al llamar al endpoint) 
 * se encarga de todo lo relacionado a usuarios(crear en BD) 
 */

//Modelo que usaremos para crear usuario en mongoDB, contiene los métodos para realizar operaciones en la bd
const User = require('../models/User') //
const bcrypt = require ('bcrypt')

const UserController = {}

//REGISTER
UserController.createUser = async (req,res) => {
    try {
        //Recibimos los datos del formularios de registro del front, insertamos en la bd
        const { username, email, password, avatarURL = null} = req.body
        
        //Encriptaremos el password por seguridad con la biblioteca bcrypt
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hashSync(password,salt)
        
        //Creamos los datos que almacenaremos en la bd
        const newUser = new User({ username, email, avatarURL, password:hashedPassword })
        const createUserDB = await newUser.save() // fn mongoose para guardar en su bd

        res.status(200).json(createUserDB)        //Respuesta si se inserto usuario en DB
    } catch (err) {
        /**
         *Dado que al validador unique del Schema no se le puede asignar un texto personalizado,
         *lo evaluamos en el catch (Hay un biblioteca que soluciona esto pero preferimos hacerlo manual)
        */
        err.code === 11000 
        ? res.status(500).json(`'${Object.values(err.keyValue)}', ya se encuentra registrado`)
        : res.status(500).json(err) //Respuesta si hay error
    }
}

//LOGIN
UserController.loginUser = async (req,res) => {
    try {
        //Recibimos los datos del formulario de login del frontend
        const { email, password } = req.body
        
        //Buscamos por el email en la bd
        const user = await User.findOne({email})
        if(!user) return res.status(400).json('No se encontró usuario con el email')           //Si el email no se encuentraj
        
        //Si el email es encontrado compara el password del usuario recibido con el encontrado
        const validPassword = await bcrypt.compareSync(password, user.password)
        if(!validPassword) return res.status(400).json('Contraseña invalida') //Si la contraseña no coincide

        res.status(200).json(user) //Si coincide usuario y contraseña

    } catch (err) {
        res.status(500).json('hubo un error',err)
    }
}




module.exports = UserController