/* Librerías React */
import React from 'react' 
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom' //Proveedor de rutas lo ponemos en el nivel mas alto de la app
import TravelBlog from './TravelBlog'            //Aplicación SPA
import './global.css'                            //Estilos globales


ReactDOM.createRoot(document.getElementById('root')).render(    
    <BrowserRouter> 
        <TravelBlog />
    </BrowserRouter>
)
