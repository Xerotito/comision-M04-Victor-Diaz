import { ActionsPost } from '../actions'

export default function TargetSM({post}) {

    const { title, show_description, imageURL, createdAt } = post
    const autor = post?.author?.username

    return (
        <article className='card md:card-side bg-base-100 shadow-xl grid'>
            <figure>
                <img
                    src={imageURL}
                    alt='Foto de ejemplo'
                />
            </figure>
            <div className='card-body py-4'>
                <h2 className='card-title'>{title}</h2>
                <span className='text-xs uppercase'>{autor} |{createdAt}</span>
                <p>{show_description}</p>
                <ActionsPost/>
            </div>
        </article>
    )
}
