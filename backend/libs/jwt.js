/**
 * Creación de token para manejos de sesión de usuarios, usando la librería json web token (https://jwt.io/)
 */
const jwt = require('jsonwebtoken')

const generateJWT = (uid, username) => {

    const JWT_KEY = process.env.JWT_KEY
    const payload = { uid, username }

    return jwt.sign(payload, JWT_KEY, {expiresIn: '1h'})

}

module.exports = generateJWT

