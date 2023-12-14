import { CommentBody, CommentHeader } from './';

/**
 * Componente que muestra cada comentario 
 */
export default function Comment({ commentID, author, description }) {
    
    return (
        <div className="chat chat-start w-full py-2 px-4 flex relative" >
            <CommentHeader commentID={commentID} author={author} />
            <CommentBody   commentID={commentID} author={author} description={description} />
        </div>
    )
} 