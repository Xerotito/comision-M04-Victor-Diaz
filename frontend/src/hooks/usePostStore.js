/**
 * Un store que almacena los dispatch del CRUD de Posteos, realiza las request al backend y luego almacena en
 * el store global de posts (postStore) desde el cual se sirve los datos toda la app
*/

import { alertStore, postStore } from '../store'
import requestApi from '../api/requestApi'
import { useEffect } from 'react'


export default function usePostStore() {

    //Store global de manejo de Alert
    const { setAlert } = alertStore()

    //Store global de manejo de posts
    const { allPost, posts, lastPost, setPosts } = postStore()


    //OBTENER TODOS LOS POST
    const getPosts = async () => {
        try {
            const { data } = await requestApi.get('/post/getAll')            
            setPosts(data)
        } catch (err) {
            setAlert({
                alert  : true,
                message: 'Parece que no hay conexión con la base de datos',
                type   : 'error',
            })
        }
    }

    
    useEffect(() => { getPosts() }, [])
    




    return { posts, getPosts }
}

