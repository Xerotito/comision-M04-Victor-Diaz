/**
 * Part de arriba del componente <Comment/> consta de el tag que visualiza el author del post y los botones 
 * de edición y eliminación de comentario, y su lógica.
 * Los botones de control de comentario solo son visibles para el autor del comentario
 */

import { useDeleteComment, useEditComment } from '../../hooks'
import { postStore, userStore } from '../../store'

export default function CommentHeader({commentID, author}) {

    //CustomHooks con datos de los stores globales
    const { deleteComment, user }         = useDeleteComment() //Cuenta con la fn de eliminar comentario
    const {  changeState }                = useEditComment()   
    const { statusComment, thisCommentID} = postStore()        //Valores seteados por useEditComment para renderizado condicional

    //Variables que utiliza para renderizado condicional
    let authorName = ''
    let owner      = false

    //Si el author es el mismo usuario que creo el comentario (setea para renderizado condicional)
    user?.uid === author?._id
        ? ((authorName = 'tu'), (owner = true))
        : ((authorName = author.username), (owner = false))    

    return (
        <>
            {/* Tag de autor */}
            <div className='flex ml-3 md:ml-0 md:justify-center  w-full absolute z-10 top-[-4px]'>
                <div className={owner ? 'badge badge-success' : 'badge badge-primary'}>{authorName}</div>
            </div>
            {/* Botonera control de comentario solo visible para el autor del comentario*/}
            { owner && (
                <div className='
                flex absolute z-10 top-[-5px] right-10 sm:p-1 
                border border-sky-500 hover:bg-blue-500 rounded-lg
                '>
                    <div className='tooltip' data-tip='Editar comentario'>
                        {
                            /**
                             * Alterna entre el botón de transformar el textarea en editable, y el botón de enviar el comentario editado
                             * también se asegura que estos renderizados condicionales se muestren solo en el componente que se clickea
                             */
                            thisCommentID === commentID && statusComment === 'edit' 
                            ?<button className='btn btn-xs sm:btn-sm btn-outline btn-info mr-2' onClick={()=> changeState(commentID,'send')}>Editar</button>
                            :<button className='sm:text-2xl leading-none mr-2' onClick={()=> changeState(commentID,'edit')}>📝</button>
                        }
                    </div>
                    <div className='tooltip' data-tip='Eliminar comentario'>
                        <button className='sm:text-2xl leading-none' onClick={()=> deleteComment(commentID)}>❌</button>
                    </div>
                </div>
            )}
        </>
    )
}