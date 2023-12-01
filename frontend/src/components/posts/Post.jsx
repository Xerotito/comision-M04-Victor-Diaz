export default function Post({post}) {

    const { title, shortDescription, imageURL,createdAt } = post
    const user = post?.author?.username

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
                <span className='text-xs uppercase'>{user} |{createdAt}</span>
                <p>{shortDescription}</p>
                <div className='card-actions border-2 border-black'>
                    Actions
                </div>
            </div>
        </article>
    )
}
