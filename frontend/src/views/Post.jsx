/**
 * Componente que muestra un post completo seleccionado desde la vista de tarjetas
 * los comentarios solo pueden verse si el usuario esta logueado.
 */
import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useGetPostID } from '../hooks/usePostController'
import { CommentsSection } from '../components'


export default function Post() {

    //Obtiene el id de la barra de direcciones 
    const { postID } = useParams()

    //Custom hook realiza la llamada al endpoint para traer el currenPost
    const { post } = useGetPostID(postID)

    return (
        <article className='grid w-full h-full bg-base-200'>
            <div className='sub-container text-center '>
                <h1 className='font-[Hedvig] font-semibold text-md md:text-2xl lg:text-3xl'>{post?.title}</h1>
                <div className='divider divider-neutral'></div>
                    <Suspense fallback={<h2>Cargando imagen...</h2>}>
                        <figure>
                            <img src={post?.imageURL} alt='Foto post' className='m-auto' />
                        </figure>
                    </Suspense>
                    <div className='divider divider-neutral'></div>
                <pre className='text-xs sm:text-md lg:text-xl text-left mt-2'>{post?.description}</pre>
            </div>
            <CommentsSection />
        </article>
    )
} 