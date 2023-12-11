/** 
 * Punto de entrada del backend 
*/
//Importaciones
require('dotenv').config()
const express        = require('express')
const cors           = require('cors')
const connectDB      = require('./config/connectDB')
const authRouter     = require('./routes/authRoutes')
const postRouter     = require('./routes/postRoutes')
// const commentsRouter = require('./routes/commentsRoutes')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const app  = express()

//Realizamos la conexión a mongo DB
connectDB()

//Middleware
app.use(cors())
app.use(express.json())

//Endpoints o rutas del backend se importan desde ./routes
app.use('/api/user', authRouter)
app.use('/api/post', postRouter)
/* app.use('/api/comment', commentsRouter) */



//Servidor UP
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})
