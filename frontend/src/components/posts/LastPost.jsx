export default function LastPost({lastPost}) {

    const { title, short_description, imageURL,createdAt } = lastPost
    const user = lastPost?.author?.username

    return (
        <article className='card lg:card-side bg-base-100 shadow-xl'>
            <figure className='w-full lg:w-[60%]' >
                <img
                    src={imageURL}
                    alt='Foto de ejemplo'
                />
            </figure>
            <div className='card-body w-full lg:w-[40%]'>
                <h2 className='card-title'>{title}</h2>
                <span className='text-xs uppercase'>{user} | {createdAt}</span>
                <p>{short_description}</p>
                <div className='card-actions border-2 border-black'>
                    Actions
                </div>
            </div>
        </article>
    )
}
