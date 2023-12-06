import { useNavigate } from 'react-router-dom'
import { ActionsPost }  from '../actions'

export default function TargetLG ({lastPost}) {
    const navigate =  useNavigate()
    const { _id: idPost, createdAt, description, imageURL, title, } = lastPost
    const autorID = lastPost?.author?._id

    //Cortamos las descripción para mostrar en la tarjeta 
    let trimmDescription = description.substring(0, 300) 
    const user = lastPost?.author?.username

    //Redirección cunado se quiere ver un post de las tarjetas
    const goToPost = () => { navigate(`/post/${idPost}`)}

    return (
        <article className='card lg:card-side bg-base-100 shadow-xl'>
            <figure className='w-full lg:w-[60%]' >
                <img
                    src={imageURL}
                    alt='Foto de ejemplo'
                />
            </figure>
        
            <div className='card-body w-full lg:w-[40%]'>
                <h2 className='card-title cursor-pointer' onClick={goToPost}>{title}</h2>
                <br />
                <span className='text-xs uppercase'>{user} | {createdAt}</span> 
                <p>{trimmDescription}
                    <span 
                    className='text-xs font-bold font-mono text-primary cursor-pointer'
                    onClick={goToPost}
                    > 
                    ... SEGUIR LEYENDO
                    </span>
                </p>
                <ActionsPost autorID={autorID} idPost={idPost}/>
            </div>
        </article>
    )
}
