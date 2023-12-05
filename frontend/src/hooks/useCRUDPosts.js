/**
 * CustomHook que contiene las fn q se encargan del CRUD de los posteos, interactúa directamente con la BD
 * en vez de guardar en un estado global
 */

import { useEffect, useState } from 'react'
import { alertStore } from '../store'
import requestApi from '../api/requestApi'


export default function useCRUDPost() {

    //Estado y variable se almacenan los posts

    const [posts, setPosts] = useState(null)

    //Importamos el store para manejos de errores
    const { setAlert } = alertStore()

    const getPosts = async () => {
        try {
            const { data } = await requestApi.get('./post/getAll')
            if ( data ) {
                setPosts({ lastPost: data.pop(), nextPosts: data.reverse() })  

            }
        } catch (err) {
            setAlert({
                alert  : true,
                message: 'Hubo un error al cargar los posts',
                type   : 'error',
            })
        }
    }

    useEffect( () =>  { getPosts() }, [] ) 

    return { posts }
}

