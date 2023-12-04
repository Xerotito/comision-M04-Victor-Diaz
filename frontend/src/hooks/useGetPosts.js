import { useEffect, useState } from 'react'
import requestApi from '../api/requestApi'
import { alertStore } from '../store'


export default function useGetPost() {

    //Estado y variable se almacenan los posts

    const [posts, setPosts] = useState(null)

    //Importamos el store para manejos de errores
    const { setAlert } = alertStore()

    const getPosts = async () => {
        try {
            const { data } = await requestApi.get('./post/getAll')
            if ( data ) {
                setPosts({ lastPost: data.pop(), nextPosts: data })  

            }
        } catch (err) {
            if (err?.response?.status === 500) setAlert({
                    alert  : true,
                    message: 'No se pudieron cargar los post',
                    type   : 'error',
                })
        }
    }

    useEffect( () =>  { getPosts() }, [] ) 

    return { posts }
}

