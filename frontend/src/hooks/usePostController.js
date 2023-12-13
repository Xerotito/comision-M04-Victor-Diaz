/**
 * Almacena los customHooks y funciones personalizadas que manejan todo los relacionado a los posteos (CRUD), incluyendo comentarios
 * Cada uno realiza la llamada al endpoint correspondiente y retorna los datos en un estado, 
 * si es necesario cargan los datos desde alguno de los stores globales. (manejo de estado global zustand) para luego renderizar los datos
 */

import { useEffect, useState } from 'react'
import requestApi from '../api/requestApi' //Configuración de axios, envía el token en cada request
import { postStore, userStore } from '../store'

//POST POR ID
export function useGetPostID(postID) {        

    /**
     * Los datos que retorna el backend son fijados en el store global de post
     */

    const { currentPost: post, setCurrentPost } = postStore()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await requestApi.get(`/post/${postID}`)
                setCurrentPost(data)
                
            } catch (erro) {
                console.error('Error fetching post:', erro)
            }
        }
        fetchData()
    }, [])

    return { post }
}

//ELIMINAR POST POR ID

export async function useDeletePost(postID) {   
    try {
        //Envía el request al endpoint
        await requestApi.delete('/post/delete', { data: { id: postID } })
        return true
    } catch (err) {
        console.error('Error fetching post:', err)
    }       
}

/* --------------------------------------------- COMENTARIOS -------------------------------------------------- */

//OBTENER COMENTARIOS
export function useGetComments (postID) {    
    
    /**
     * Traemos del store global id de post actual, y el ultimo comentario el cual sera la dependencia del fetch de datos
     * asi cuando se realize un nuevo comentario podemos re renderizar la lista comments
     * Los comentarios son guardados en un estado local llamado comments
     */
    const { statusComment } = postStore() 
    const [comments, setComments] = useState([])

    
    useEffect(() => {
        console.log(statusComment)
        const fetchData = async () => {
            // console.log(postID)
            try {
                const { data } = await requestApi.get(`/comment/${postID}`)
                setComments(data.reverse())   
            } catch (erro) {
                console.error('Error fetching post:', erro)
            }
        }
        fetchData()
    //Dependencia que actualiza los comentarios, ya sea cuando se crea ,elimina o edita
    }, [statusComment]) 

    return { comments }
}   

//CREAR COMENTARIO
export function useAddComment(){

    /**
     * Carga el post actual, este va insertado en la colección de comments en el campo post (BD)
     * aunque solo usaremos el id, por defecto mongo lo guarda como ObjectId aunque sea todo el contenido del post
     */

    const { currentPost: post, setStatusComment } = postStore()

    const addComment = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)             
        const description = formData.get('description') //Extra el value del input comentario
        const comment =  { description, post }          //Crea el objeto a insertar en la BD comments
        try {
            //Enviamos la request al endpoint
            setStatusComment('create') //Dependencia de carga de comentarios (useEffect)
            await requestApi.post('/comment/create', comment) 
            setStatusComment('') //Una vez realizado el comentario limpiamos la dependencia de carga de comentarios
            e.target.reset()
        } catch (err) {
            console.log(err)
        }
    }
    return { addComment }   
}

//EDITAR COMENTARIO 
export function useEditComment () {
    
    const { setThisCommentID, thisCommentID, setStatusComment } = postStore()

    /**
     * Setea el post actual al que se le hizo click (Nos ahorra luego iterar un array ) 
     * y pone el statusComment en edit (util en renderizado condicional)
     */
    const changeState = (id,status) => { setThisCommentID(id), setStatusComment(status) } 
    
    //Se encarga del hacer el request al endpoint
    const sendEditComment = async (e) => {
        e.preventDefault()
        const formData    = new FormData(e.target)
        const description = formData.get('description')
        const editComment = { description, id: thisCommentID }
        try {
            //Enviamos la request al endpoint
            await requestApi.put('/comment/edit', editComment)   
            setStatusComment('') //Una vez realizado limpiamos la dependencia de carga de comentarios
            
        } catch (err) {
            console.log(err)
        }        
    }
    return { changeState, sendEditComment }
}

//ELIMINAR COMENTARIOS
export function useDeleteComment () {  
    //Estados globales 
    const { setStatusComment } = postStore()
    const { user }             = userStore()

    const deleteComment = async (commentID) => {
        try {
            setStatusComment('delete') //Seteamos la dependencia          
            //Enviamos la request al endpoint para eliminar post
            await requestApi.delete('/comment/delete', { data: { id: commentID } }) 
            setStatusComment('') //Una vez realizado limpiamos la dependencia de carga de comentarios
        } catch (err) {
            console.log('Hubo un error al intentar eliminar el post',err)
        }
    }
    return { deleteComment, user } 
}