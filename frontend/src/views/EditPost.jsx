/**
 * Componente vista para editar post, llama a la fn useGetPostID que busca el post por id desde params (barra de direcciones)
 * si el id existe y el usuario es el author del post puede ser editado, caso contrario mostrar un error.
 * Si bien hace una validación del front con react, esto puede ser burlado por lo que esta misma validación también se realiza
 * en el backend
 */


import { useParams } from 'react-router-dom'
import {  useGetPostID } from '../hooks'
import { EditPostForm } from '../components/forms'
import { userStore } from '../store'

export default function EditPost() {
    //Traemos el usuario en sesión activa para poder comparar con el autor del post
    const {user} = userStore()
    const { id: postID } = useParams()
    const { post } = useGetPostID(postID)
    
    /**
     * Realizamos la validación, el usuario logueado debe ser el autor del post para poder editarlo,
     * como esta validación es del front y puede ser burlada, también hay una validación desde el back en caso de
     * que el post pudiera ser accedido.
     */

    return (
        <>
            { post 
            ?  (user?.uid !== post?.author ? <NoAuthor /> : <EditPostForm post={post} />) /* Validación de autor */
            : <NoPosts /> } {/* Si el id del post no se encuentra */}
        </>
    )
}

//Se muestra si el id del post no existe.
const NoPosts = () => {
    return  <h2 className="font-[bebas] text-xl w-[80%] border-2 border-black text-center mt-4 p-2 m-auto">No se encuentra post con el id</h2>
}

//Se muestra si el usuario activo no es el autor del post al que se quiere editar.
const NoAuthor = () => {
    return  <h2 className="font-[bebas] text-xl w-[80%] border-2 border-black text-center mt-4 p-2 m-auto">Debe ser el autor del post para poder editarlo</h2>
}


