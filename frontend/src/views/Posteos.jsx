/* Componente que muestra los posts en pantalla */

import { Alert } from '../components/alerts'
import { alertStore } from '../store'
import { Loader } from '../components'
import { LastPost, Post } from '../components/posts'
import { useCRUDPosts } from '../hooks'


export default function Posteos() {

    const {alert, message} = alertStore()    //Componente de errores
    const { posts }        = useCRUDPosts()  //Componente que se encarga de la gestión de posts

    //Mientras obtenemos los post mostraremos un loader, si hay algún problema de conexión mostraremos el <Alert />
    return (
        <section className='grid bg-base-200 '>
            <div className='alert-container w-[80%] justify-self-center absolute z-10 top-32'>
                {alert && <Alert message={message} />}
            </div>
            { posts === null ? <Loader /> : <Posts posts={posts} /> }
        </section>
    )
}

//Función post que se llama cuando se cargan los posts
export const Posts = ({ posts }) => {
    const {lastPost, nextPosts} = posts
    return (
            <div className='posts sub-container grid'>
                <div className='justify-self-center mt-2'>
                    <LastPost lastPost={lastPost} />
                </div>
                <div className='
                grid grid-cols-1 md:grid-cols-2 justify-self-center
                mt-10 gap-2
                '
                >
                    {nextPosts.map(post => <Post key={post._id} post={post}/>)}
                </div>
            </div>
    )
}