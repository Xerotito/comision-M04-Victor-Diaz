/**
 * Almacena los customHooks y funciones personalizadas que manejan todo los relacionado a los posteos (CRUD)
 * Cada uno realiza la llamada al endpoint correspondiente y retorna los datos en un estado
 */

import { useEffect, useState } from 'react'
import requestApi from '../api/requestApi' //Configuración de axios, envía el token en cada request
import { postStore } from '../store'



//TODOS LOS POSTS
export async function getAllPost() {

    const { setPosts } = postStore()

    try {
        const { data } = await requestApi.get('/post/getAll')
        if (data.length === 0) return setPosts(null)
        setPosts({
            lastPost: data.pop(),
            nextPosts: data.reverse(),
        })
    } catch (err) {
        console.error('Error fetching post:', err)
    }

}


//POST POR ID
export function useGetPostID(postID) {
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await requestApi.get(`/post/${postID}`)
                setPost(data)
            } catch (erro) {
                console.error('Error fetching post:', erro)
            }
        }
        fetchData()
    }, [postID])

    return { post }
}

//ELIMINAR POST POR ID
export async function useDeletePost(postID) {   

    try {
        await requestApi.delete('/post/delete', { data: { id: postID } })
        return true
    } catch (err) {
        console.error('Error fetching post:', err)
    }   

    
}


