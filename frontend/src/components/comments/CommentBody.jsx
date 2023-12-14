/**
 * Parte inferior del componente <Comment /> consta de la imagen de perfil del usuario y el comentario
 * el cual es un textarea que se puede editar para modificar el post (cuando se clickea el botón editar)
 */

import { useRef } from 'react'
import { postStore, userStore } from '../../store'
import { useEditComment } from '../../hooks'

export default function CommentBody({ commentID, author, description }) {

    let   editable                         = true
    let image
    const { thisCommentID, statusComment } = postStore()
    const { user }                         = userStore()
    const { sendEditComment }              = useEditComment()
    const sendButton                       = useRef(null)

    /**
     * Esto hace que el textarea editable solo sea aquel del componente al que se le hace click en el botón editar
     * Esto no ahorra iterar en los componentes de comentarios ya que se setea thisCommentID y luego se busca el que coincide con ese id 
     */
    if (thisCommentID === commentID && statusComment === 'edit') editable = false 

    //De la misma manera enviamos solo el textEditado al clickear el botón editar
    if(thisCommentID === commentID && statusComment === 'send') sendButton.current.click()


    return (
        <>
            <div className='chat-image avatar hidden md:block'>
                <div className='w-10 md:w-16 rounded-full'>
                    <img
                        alt='imagen-avatar'
                        src={author?.avatarURL}
                    />
                </div>
            </div>
            <div className='w-full'>
                <form className='chat-bubble w-full max-w-full relative' onSubmit={sendEditComment}>
                    <textarea 
                        name         = 'description'
                        className    = 'textarea bg-transparent w-full p-0 h-0'
                        defaultValue = {description}
                        readOnly     = {editable}
                    />
                    <button ref={sendButton} ></button>
                </form>
            </div>
        </>
    )
}