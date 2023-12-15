/**
 * Componente para agregar un comentario
 */

import {  useAddComment } from '../../hooks'
import { userStore } from '../../store'


export default function CommentForm() {

    const { user } = userStore()        
    console.log(user)
    //CustomHook que llama a la fn que guarda el comentario en la BD colección comments
    const { addComment } = useAddComment()
    
    return (
        <div className="chat chat-start w-full py-2 px-4 flex">
            <div className="chat-image avatar hidden md:block">
                <div className="w-10 md:w-16 rounded-full">
                    <img alt="imagen-avatar" src={user?.avatarURL} />
                </div>
            </div>
            <div className="w-full">
                <form onSubmit={addComment} className='chat-bubble w-full max-w-full relative'>
                    <textarea name='description' className="textarea bg-transparent w-full p-0  " placeholder="Escribe un comentario..."></textarea>
                    <button className="btn btn-xs sm:btn-sm btn-outline btn-info sm:w-fit absolute right-4 bottom-2">Agregar Comentario</button>
                </form>
            </div>
        </div>
    )
}