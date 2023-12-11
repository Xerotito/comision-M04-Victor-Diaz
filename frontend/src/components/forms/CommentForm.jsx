/**
 * Componente para agregar un comentario
 */

import {  useAddComment } from '../../hooks'


export default function CommentForm() {

        //CustomHook que llama a la fn que guarda el comentario en la bd colección comments
        const { addComment } = useAddComment()
    
    return (
        <div className="chat chat-start w-full py-2 px-4 flex">
            <div className="chat-image avatar hidden md:block">
                <div className="w-10 md:w-16 rounded-full">
                    <img alt="imagen-avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="w-full">
                <form onSubmit={addComment} className='chat-bubble w-full max-w-full relative'>
                    <textarea name='description' className="textarea bg-transparent w-full p-0  " placeholder="Escribe un comentario..."></textarea>
                    <button className="btn btn-xs sm:btn-sm btn-outline btn-info sm:w-fit absolute right-8 bottom-5">Agregar Comentario</button>
                </form>
            </div>
        </div>
    )
}