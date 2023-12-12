/**
 * Parte inferior del componente <Comment /> consta de la imagen de perfil del usuario y el comentario
 * el cual es un textarea que se puede editar para modificar el post (cuando se clickea el botón editar)
 */

export default function CommentBody({commentID, description}) {
    return (
        <>
            <div className='chat-image avatar hidden md:block'>
                <div className='w-10 md:w-16 rounded-full'>
                    <img
                        alt='imagen-avatar'
                        src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                    />
                </div>
            </div>
            <div className='w-full'>
                <form className='chat-bubble w-full max-w-full relative'>
                    <textarea
                        name='description'
                        className='textarea bg-transparent w-full p-0 h-0'
                        defaultValue={description}
                        readOnly
                    />
                </form>
            </div>
        </>
    )
}