/**
 * Esta es una configuración de axios, la cual usaremos para hacer las peticiones fetch
 * Esta contiene la ruta base de nuestros endpoints en express, en local seria http://localhost:3000/api/
 * Esto es muy util si vamos a desplegar a producción el server, cambiamos la variable de entorno por la ruta del servidor online.
 */

import axios from 'axios'

const requestApi = axios.create({ baseURL: import.meta.env.VITE_API_URL }) //Forma en que vite accede a las variables de entorno.

//# Configurar interceptores
/* Un interceptor es una configuración propia de axios es un código que se ejecuta antes de realizar una petición o de recibir una respuesta del server */
requestApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,                       /* Arrastramos si ya teníamos otras propiedades en el header                   */
        'token': localStorage.getItem('token') /* En esta caso a cualquier petición hecha le agregamos el token en el header  */
    }
    return config
} )


export default requestApi
/**
 * Ahora las peticiones axios sera request.api ej => requestApi.post(baseURL+endpoint , data)  y enviaremos el token en cada request
 */