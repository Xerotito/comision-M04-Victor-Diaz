import { useNavigate } from 'react-router-dom'
import { ActionsPost } from '../actions'

export default function TargetSM({post}) {
    const navigate =  useNavigate()
    const { _id: idPost, title, show_description, imageURL, createdAt } = post
    const autorID = post?.author?._id
    const autor = post?.author?.username

    //Redirección cunado se quiere ver un post de las tarjetas
    const goToPost = () => { navigate(`/post/${idPost}`)}

    return (
        <article className='card md:card-side bg-base-100 shadow-xl grid'>
            <figure>
                <img
                    src={imageURL}
                    alt='Foto de ejemplo'
                />
            </figure>
            <div className='card-body py-4'>
            <h2 className='card-title cursor-pointer' onClick={goToPost}>{title}</h2>
                <span className='text-xs uppercase'>{autor} |{createdAt}</span>
                <p>{show_description}</p>
                <ActionsPost autorID={autorID} post={post}/>
            </div>
        </article>
    )
}
