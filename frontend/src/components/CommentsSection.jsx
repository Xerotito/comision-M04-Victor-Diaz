/**
 * Sección de comentarios, solo si el usuarios esta logueado podrá ver los comentarios 
 */

import { userStore } from '../store'
import Comments from './comments/Comments'

export default function CommentsSection() {

    //Cargamos el usuarios y su estado del store global
    const { userStatus,user } = userStore()

    return (
        <div className='sub-container custom-box rounded-md' >
            {userStatus === 'not-authenticated' ? <NotAuthenticated /> : <Comments user={ user } />}
        </div>
    )
}

//Se muestra si no hay posts
const NotAuthenticated = () => {
    return (
    <h2 className="font-[bebas] text-xl w-[80%] text-center mt-4 p-2 m-auto">
        Debe iniciar sesión para poder ver y hacer comentarios
    </h2>
    )
}




