/** 
 * Punto de entrada del backend 
*/
//Importaciones
require('dotenv').config()
const express = require('express');
const connectDB = require('./config/connectDB');
const userRouter = require('./routes/authRoutes');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const app  = express()

//Realizamos la conexión a mongo DB
connectDB()

//Middleware
app.use(express.json())

//Endpoints del backend se importan desde ./routes
app.use('/api/user',userRouter) 


//Servidor UP
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})
