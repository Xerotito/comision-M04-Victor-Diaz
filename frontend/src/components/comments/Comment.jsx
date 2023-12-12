import { CommentHeader } from './';

/**
 * Componente que muestra cada comentario 
 */
export default function Comment({ commentID, author, description }) {

    return (
        <div className="chat chat-start w-full py-2 px-4 flex relative">
            <CommentHeader commentID={commentID} author={author} />
            <div className="chat-image avatar hidden md:block">
                <div className="w-10 md:w-16 rounded-full">
                    <img alt="imagen-avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="w-full">
                <form className='chat-bubble w-full max-w-full relative'>
                    <textarea 
                    name         = 'description'
                    className    = "textarea bg-transparent w-full p-0 h-0"
                    defaultValue = {description}
                    readOnly
                    ></textarea>
                </form>
            </div>
        </div>
    )
} 