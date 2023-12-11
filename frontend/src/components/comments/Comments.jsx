/**
 * Formulario para crear comentarios, utiliza el customHook useAddComment el cual realiza la request con los datos
 * al endpoint
 */

import {  useAddComment, useGetComments } from '../../hooks'

export default function Comments({user}) {

    //CustomHook que agrega el comentario a la colección comments en mongo
    const { addComment }  = useAddComment()
    const { getComments } = useGetComments()

    return (
        <>
        <div className='flex p-4 items-center'>
            <div className="avatar mr-2 hidden md:block">
                <div className="w-20 rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <form onSubmit={addComment} className='grid w-full'>
                <textarea name='description' className="textarea textarea-accent w-full mb-2" placeholder="Escribe un comentario..."></textarea>
                <button className="btn btn-sm btn-outline btn-info sm:w-fit justify-self-end">Enviar comentario</button>
            </form>
        </div>
        <div className='p-4' >
                <div className='custom-box'>
                <h2>Soy el comentarios</h2>
            </div>
        </div>
        </>
    )
}