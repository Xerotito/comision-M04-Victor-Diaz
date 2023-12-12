/**
 * Part de arriba del componente <Comment/> consta de el tag que visualiza el author del post y los botones 
 * de edición y eliminación de comentario, y su lógica.
 * Los botones de control de comentario solo son visibles para el autor del comentario
 */

import { userStore } from '../../store'

export default function CommentHeader({author, commentID}) {
    //Variables que utiliza para renderizado condicional
    let authorName = ''
    let owner = false
    const { user } = userStore() 

    //Si el author es el mismo usuario que creo el comentario
    user.uid === author._id
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
                        <button className='sm:text-2xl leading-none mr-2'>
                            📝
                        </button>
                    </div>
                    <div className='tooltip' data-tip='Eliminar comentario'>
                        <button className='sm:text-2xl leading-none'>❌</button>
                    </div>
                </div>
            )}
        </>
    )
}