import { useRef } from 'react'
import { usePostForm } from '../hooks'

export default function CreatePost() {
 
    const postForm = useRef(null)
    const { actionForm } = usePostForm(postForm,'/post/create' )

    return (
        <section className='grid'>
            <form className='
            createPost sub-container relative   
            grid w-full     
            p-6 bg-content shadow-md 
            '
                ref={postForm}
                onSubmit={actionForm}
            >
                <div className='
                bg-neutral text-white rounded-md 
                text-center text-lg font-semibold
                w-[80%] p-1
                absolute top-[-18px] left-[11%]            
            '
                >
                    Crear Post
                </div>
                <div className='inputs-container w-full grid gap-2'>
                    <span className='label-text font-semibold'>Título:</span>
                    <textarea
                        name='title'
                        className='textarea textarea-bordered textarea-xs w-full placeholder:text-base text-base'
                        placeholder='Ingrese un Título'
                    />
                    <span className='label-text font-semibold'>
                        Descripción
                    </span>
                    <textarea
                        name='description'
                        placeholder='Este es el texto que se vera en la tarjeta de post, también se incluye en el contenido de la publicación'
                        className='textarea textarea-bordered textarea-lg w-full placeholder:text-[12px] placeholder:sm:text-base text-base'
                    />
                    <span className='label-text font-semibold'>Post</span>
                    <textarea
                        name='post'
                        placeholder='Ingrese el contenido del post'
                        className='textarea textarea-bordered textarea-lg w-full placeholder:text-[12px] placeholder:sm:text-base text-base'
                    />
                    <span className='label-text font-semibold'>Imagen URL</span>
                    <input
                        name='ImageURL'
                        placeholder='Ingrese la dirección de la imagen'
                        className='textarea textarea-bordered w-full placeholder:text-[12px] placeholder:sm:text-base text-base'
                    />
                </div>
                
                <button className='w-[100px] btn btn-success mt-4 justify-self-end'>
                    Previsualizar
                </button>
            </form>
        </section>
    )
}
