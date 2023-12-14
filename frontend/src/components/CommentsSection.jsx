/**
 * Sección de comentarios, solo si el usuarios esta logueado podrá ver los comentarios 
 */

import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { userStore } from '../store'
import Comments from './comments/Comments'

export default function CommentsSection({postID}) {

    //Cargamos el usuarios y su estado del store global
    const { userStatus } = userStore()
    const commentsRef    = useRef(null)
    const location       = useLocation() //Se usa para capturar el hash de la barra de direcciones

    /**
     * Si venimos del botón de comentarios del index, hay un problema y es que no llega a renderizar la sección de comentarios
     * tan rápido, por eso usamos un pequeño delay, para luego saltar a los comentarios
     */
    useEffect(() => {
        if (location.hash === `#comments`) {
            setTimeout(() => { commentsRef.current.scrollIntoView({ behavior: 'smooth' }) }, 500)
        }
    }, [location])

    return (
        <div id='comments' ref={commentsRef} className='sub-container custom-box rounded-md' >
            {userStatus === 'not-authenticated' 
            ? <NotAuthenticated /> 
            : <Comments postID={postID} />}
        </div>
    )
}

//Se muestra si no hay posts
const NotAuthenticated = () => {
    return (
    <h2 className="font-[bebas] text-xl w-[80%] text-center mt-4 p-2 m-auto">
        Debe iniciar sesión para poder ver y hacer comentarios
    </h2>
    )
}




