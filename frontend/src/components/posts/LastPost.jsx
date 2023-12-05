import { ActionsPost }  from '../actions/'

export default function LastPost({lastPost}) {

    const { createdAt, description, imageURL, title, } = lastPost

    let trimmDescription = description.substring(0, 300) //Cortamos las descripción para mostrar en la tarjeta
    
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
                <h2 className='card-title cursor-pointer'>{title}</h2>
                <br />
                <span className='text-xs uppercase'>{user} | {createdAt}</span> 
                <p>{trimmDescription}<span className='text-xs font-bold font-mono text-primary'> ...SEGUIR LEYENDO</span></p>
                <ActionsPost/>
            </div>
        </article>
    )
}
