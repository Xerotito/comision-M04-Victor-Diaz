import { useRef } from 'react'
import { usePostForm } from '../hooks'
import { Alert } from '../components/alerts'
import { alertStore } from '../store'


export default function CreatePost() { 
    //Manejo del formulario realiza la request y envía datos al endpoint
    const postForm = useRef(null)
    const { actionForm, disableBtn } = usePostForm(postForm, '/post/create')
    
    //Manejo del componente alert
    const {type, message} = alertStore()

    return (
        <section className='grid'>
            <div className='alert-container w-[80%] justify-self-center absolute z-10'>
                { type === 'error' && <Alert message={message}/> }
            </div>
            <form className='
            createPost sub-container relative   
            grid w-full     
            p-6 bg-content shadow-md 
            '
                ref      = {postForm}
                onSubmit = {actionForm}
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
                        name        = 'title'
                        className   = 'textarea textarea-bordered textarea-xs w-full placeholder:text-base text-base'
                        placeholder = 'Ingrese un Título'
                        maxLength   = {300}
                        required
                    />
                    <span className='label-text font-semibold'>Descripción</span>
                    <textarea
                        name        = 'description'
                        placeholder = 'Ingrese el contenido del post, se recomienda doble salto de linea por párrafo.'
                        className   = 'textarea textarea-bordered textarea-xl w-full placeholder:text-[12px] placeholder:sm:text-base text-base'
                        maxLength   = {10000}
                        required
                    />
                    <span className='label-text font-semibold'>Imagen URL</span>
                    <input
                        name        = 'imageURL'
                        placeholder = 'Ingrese la dirección de la imagen'
                        className   = 'textarea textarea-bordered w-full placeholder:text-[12px] placeholder:sm:text-base text-base'
                        maxLength   = {2000}
                        required
                    />
                </div>
                <button 
                className='w-[80px] btn btn-success mt-2 justify-self-end'
                disabled={disableBtn}
                >
                    Postear
                </button>
            </form>
        </section>
    )
}
