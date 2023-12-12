/**
 * Formulario para crear comentarios, utiliza el customHook useAddComment el cual realiza la request con los datos
 * al endpoint
 */

import { CommentForm } from '../forms/';
import { Comment } from '../comments'
import { useGetComments } from '../../hooks';
import { postStore } from '../../store';

export default function Comments({postID}) {

    const { comments } = useGetComments(postID)

    return (
        <>
        {/* El formulario para agregar un comentario */}
        <CommentForm/> 

        {/* Itera por cada comentario que hay en el post y lo renderiza */}
        { comments.map(comment =>     
            <Comment
                key         = {comment?._id}
                author      = {comment?.author}
                description = {comment?.description}
                commentID   = {comment?._id}
            /> 
        )}      
        </>
    )
}


{/* <form onSubmit={addComment} className='grid w-full'>
<textarea name='description' className="textarea textarea-accent w-full mb-2" placeholder="Escribe un comentario..."></textarea>
<button className="btn btn-sm btn-outline btn-info sm:w-fit justify-self-end">Enviar comentario</button>
</form> */}