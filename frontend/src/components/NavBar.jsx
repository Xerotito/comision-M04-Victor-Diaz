/**
 * Barra de navegación contiene la foto del avatar el nombre y menu de navegación solo es visible cuando el usuario esta logueado
 */
import { Link } from 'react-router-dom';
import { Avatar } from './buttons';
import {ChangePerfil} from './';
import { useChangePerfil } from '../hooks';

export default function NavBar({ user }) {

    //CustomHook controla todo lo relacionado a cambio de perfil (usuario e imagen)
    const { showPerfilModal } = useChangePerfil()
    
    //información del usuario en sesión
    let { username, avatarURL } = user 
    if (!avatarURL) avatarURL = 'default_avatar.png' //Si el usuario no tiene una imagen definida de avatar cargamos la default


    return (
        <nav className='navbar flex justify-center bg-base-300'>
            <div className='nav-container w-[98%] border border-gray-400 rounded-md shadow-lg relative'>

                {/* Circulo con imagen de perfil es un btn que despliega <ChangePerfil />  */}
                <Avatar avatar={avatarURL} />

                {/* Modal para cambiar de perfil (usuario e imagen) */}
                { showPerfilModal && <ChangePerfil />}

                {/* Barra de navegación */}
                <div className='flex items-center w-full'>
                    <h2 className='hidden sm:btn sm:btn-ghost text-base sm:text-xl ml-14 pointer-events-none '>{username}</h2>
                    <ul className='
                    menu menu-xs md:menu-md menu-horizontal 
                    w-full bg-base-200 rounded-box font-medium
                    flex justify-center
                    '>
                        <li><Link to={'/createPost'}>Crear post</Link></li>
                        <li><a>Mis posts</a></li>
                        <li><a>Comentarios</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}