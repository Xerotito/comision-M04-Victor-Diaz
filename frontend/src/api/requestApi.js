/**
 * Esta es una configuración de axios, la cual usaremos para hacer las peticiones fetch
 * Esta contiene la ruta base de nuestros endpoints en express, en local seria http://localhost:3000/api/
 * Esto es muy util si vamos a desplegar a producción el server, cambiamos la variable de entorno por la ruta del servidor online.
 */

import axios from 'axios'

const requestApi = axios.create({ baseURL: import.meta.env.VITE_API_URL }) //Forma en que vite accede a las variables de entorno.

export default requestApi

//Ahora las peticiones axios sera request.api ej => requestApi.post(baseURL+endpoint , data) 