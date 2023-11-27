/** 
 * Punto de entrada del backend 
*/
require('dotenv').config()
const express = require('express');
const connectDB = require('./config/connectDB');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const app  = express()
const PORT = 3000

connectDB()

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
