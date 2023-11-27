/**
 * Creación de token para manejos de sesión de usuarios, usando la librería json web token (https://jwt.io/)
 */
const jwt = require('jsonwebtoken')

const generateJWT = (uid, username) => {

    const JWT_KEY = process.env.JWT_KEY
    const payload = { uid, username }

    const token = jwt.sign(payload, JWT_KEY, {expiresIn: '1h'})

    return token
}

module.exports = generateJWT

/**
* No tengo claro si la Liberia puede trabajar con async/await asi que por las dudas usamos una promesa
*/

/* 
return new Promise((resolve,reject) => {
    const payload = { uid, username }
    jwt.sign(payload, JWT_KEY, { expiresIn: '1h' },
    (err,token) => {
        if (err) {
            console.log('error al crear el token', err)
            reject('No se pudo crear el token')
        }
        resolve(token)
    })
}) */