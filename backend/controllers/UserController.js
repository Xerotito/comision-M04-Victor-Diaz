/**
 * Controlador (acciones y lógica que suceden al llamar al endpoint) 
 * se encarga de todo lo relacionado a usuarios(crear en BD, loguear) 
 */

//Modelo que usaremos para crear usuario en mongoDB, contiene los métodos para realizar operaciones en la bd
const User        = require('../models/User')  //
const bcrypt      = require ('bcrypt')
const generateJWT = require('../libs/jwt')

const UserController = {}

//REGISTER
UserController.createUser = async (req,res) => {
    try {
        //Recibimos los datos del formularios de registro del front, insertamos en la bd
        const { username, email, password, avatarURL = null } = req.body

        //Encriptaremos el password por seguridad con la biblioteca bcrypt
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hashSync(password, salt)

        //Creamos los datos que almacenaremos en la bd
        const newUser = new User({
            username,
            email,
            avatarURL,
            password: hashedPassword,
        })
        const createUserDB = await newUser.save() // fn mongoose para guardar en su bd
        
        //Almacenamos los datos que enviaremos al front (saca password y v_)
        const user = {uid: createUserDB._id, username, email, avatarURL}        
        const token = generateJWT(createUserDB._id, createUserDB.username) //creamos JWT para manejo de sesión en el front
        res.status(201).json({ token, user })                              //Respuesta si se inserto usuario en DB
    } catch (err) {
        /**
         *Dado que al validador unique del Schema no se le puede asignar un texto personalizado,
         *lo evaluamos en el catch (Hay un biblioteca que soluciona esto pero preferí hacerlo manual)
        */
        console.log(err)
        err.code === 11000 
        ? res.status(401).json(`'${Object.values(err.keyValue)}', ya se encuentra registrado`)
        : res.status(500).json(err) //Respuesta si hay error de otro tipo
    }
}

//LOGIN
UserController.loginUser = async (req,res) => {
    try {
        //Recibimos los datos del formulario de login del frontend
        const { email, password } = req.body
        
        //Buscamos por el email en la bd no retornamos password y versión
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json('Usuario incorrecto')           //Si el email no se encuentra
        
        //Si el email es encontrado compara el password del usuario recibido con el encontrado
        const validPassword = await bcrypt.compareSync(password, userFound.password)
        if(!validPassword) return res.status(400).json('Password incorrecto')       //Si la contraseña no coincide
 
        //Almacenamos los datos que enviaremos al front (saca password y v_)
        const user = {
            uid     : userFound._id,
            username: userFound.username,
            email,
            avatarURL: userFound.avatarURL,
        }
        const token = generateJWT(userFound._id, userFound.username)    //creamos JWT para manejo de sesión en el front
        res.status(200).json({token, user})                             //Si coincide usuario y contraseña

    } catch (err) {
        console.log(err)
        res.status(500).json('error interno')
    }
}




module.exports = UserController