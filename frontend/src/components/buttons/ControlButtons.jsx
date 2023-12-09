/**
 * Componente que consta del botón de editar y eliminar post y su lógica, cuenta con un modal de confirmación para eliminar post.
 * Por alguna razón que desconozco el dialog (modal) me da undefined cuando intento pasar idPost (prop), por mas
 * que este se encuentre en el mismo componente, por lo cual termine usando un estado global para almacenar el current Post
 */

import { useNavigate } from 'react-router-dom'
import { useDeletePost } from '../../hooks/usePostController'
import {  alertStore, postStore } from '../../store'

export default function ControlButtons({post}) { 

    const idPost = post._id
    const navigate = useNavigate()
    const { setAlert } = alertStore()

    //Guardamos el post y el id en el el store global, esto lo hará mas fácil de editar y eliminar
    const { postID, setPostID, resetPostID } = postStore()

    const showModal = () => {
        //Llama al modal y setea el id del post a eliminar o editar
        document.getElementById('deleteModal').showModal()
        setPostID(idPost)
    }

    //Redirección al editar post
    const editPost = () => navigate(`editPost/${idPost}`) 


    //Función que se invoca al confirmar eliminar el post
    const deletePost = async () => {
        const res = await useDeletePost(postID)
        if(res) {
            resetPostID()   
            /**
             * Seteamos la alerta, la cual es la dependencia del useEffect que carga los post en la pagina principal,
             * realizando un re render de los posts.
             */
            setAlert({
                alert  : true,
                message: '¡Se elimino el post!',
                type   : 'success'
            })
        }
    }


    return (
        <div>
            <div className='tooltip' data-tip="Eliminar post">
                <button className='text-2xl sm:text-3xl' onClick={showModal}>❌</button>
            </div>
            <div className='tooltip' data-tip="Editar post">
                <button className='text-2xl sm:text-3xl' onClick={editPost}>📝</button>  
            </div>
            {/* Modal que se llama al eliminar post */}    
            <dialog id="deleteModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-sm sm:text-lg text-center">¿Seguro que quiere eliminar el post?</h3>
                    <p className="py-4 font-semibold text-sm sm:text-lg text-center">Se eliminaran también los comentarios del mismo</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className='btn btn-error mr-2' onClick={deletePost}>Eliminar</button>
                            <button className="btn">Volver</button>
                        </form>
                    </div>
                </div>
            </dialog>      
        </div>
    )
}

