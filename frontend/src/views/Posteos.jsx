/* Componente que muestra los posts en pantalla */

import { Alert } from '../components/alerts'
import { alertStore } from '../store'
import { TargetLG, TargetSM } from '../components/posts'
import { usePostStore } from '../hooks'
import { useEffect } from 'react'



export default function Posteos() {
    //Componente alerta de errores
    const {alert, message} = alertStore()   

    //Estado global de posts
    const { posts } = usePostStore()
    console.log(posts)

    //Mientras obtenemos los post mostraremos un loader, si hay algún problema de conexión mostraremos el <Alert />
    return (
        <section className='grid bg-base-200 '>
            <div className='alert-container w-[80%] justify-self-center absolute z-10 top-32'>
                {alert && <Alert message={message} />}
            </div>
            { posts === null ? <NoPosts /> : <PostsTargets posts={posts} /> }
        </section>
    )
}    

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Componente si no hay posts
const NoPosts = () => {
    return  <h2 className="font-[bebas] text-xl w-[80%] border-2 border-black text-center mt-4 p-2 m-auto">No hay posts para mostrar</h2>
}

//Componente que renderiza los posts
const PostsTargets = ({ posts }) => {
    const {lastPost, nextPosts} = posts
    return (       
        <div className='posts sub-container grid'>
            <div className='justify-self-center mt-2'>
                <TargetLG lastPost={lastPost} />
            </div>
            <div className='
                grid grid-cols-1 md:grid-cols-2 justify-self-center
                mt-10 gap-2
                '
            >
                {nextPosts.map(post => <TargetSM key={post._id} post={post} />)}
            </div>
        </div>
    )
}

