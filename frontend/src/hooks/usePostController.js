/**
 * Almacena los customHooks y funciones personalizadas que manejan todo los relacionado a los posteos (CRUD), incluyendo comentarios
 * Cada uno realiza la llamada al endpoint correspondiente y retorna los datos en un estado, 
 * si es necesario cargan los datos desde alguno de los stores globales. (manejo de estado global zustand) para luego renderizar los datos
 */

import { useEffect, useState } from 'react'
import requestApi from '../api/requestApi' //Configuración de axios, envía el token en cada request
import { postStore } from '../store'

//POST POR ID
export function useGetPostID(postID) {        

    /**
     * Los datos que retorna el backend son fijados en el store global de post
     * de ahí se sirven a la app en donde se necesite,
     * esto evita tener que pasar props entre varios componentes anidados facilitando la modularización
     */

    const { currentPost: post, setCurrentPost, setPostID } = postStore()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setPostID(postID) //Guardamos el id del post actual, esto nos evita pasarlo pro props muy anidadas
                const { data } = await requestApi.get(`/post/${postID}`)
                setCurrentPost(data)
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

//CREAR COMENTARIO
export function useAddComment(){

    /**
     * Carga el post actual, este va insertado en la colección de comments en el campo post (BD)
     * aunque solo usaremos el id, por defecto mongo lo guarda como ObjectId aunque sea todo el contenido del post
     */

    const {currentPost:post, setLastComment} = postStore()

    const addComment = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)             
        const description = formData.get('description') //Extra el value del input comentario
        const comment =  { description, post }          //Crea el objeto a insertar en la BD comments
        try {
            //Enviamos la request al endpoint
            const response = await requestApi.post('/comment/create', comment) 
            if(response.data.ok) setLastComment(description)
        } catch (err) {
            console.log(err)
        }
    }
    return { addComment }
}

//OBTENER COMENTARIOS
export function useGetComments () {
    
    /**
     * Traemos del store global id de post actual, y el ultimo comentario el cual sera la dependencia del fetch de datos
     * asi cuando se realize un nuevo comentario podemos re renderizar la lista comments
     * Los comentarios son guardados en un estado local llamado comments
     */
    const { postID,lastComment } = postStore() 
    
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await requestApi.get(`/comment/${postID}`)
                setComments(data)
            } catch (erro) {
                console.error('Error fetching post:', erro)
            }
        }
        fetchData()
    }, [lastComment])

    return { comments }
}