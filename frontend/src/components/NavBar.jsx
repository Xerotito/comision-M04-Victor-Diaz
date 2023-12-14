/**
 * Barra de navegación contiene la foto del avatar el nombre y menu de navegación solo es visible cuando el usuario esta logueado
 */

import { Avatar } from './buttons';
import {ChangePerfil, Navigation} from './';
import { useChangePerfil } from '../hooks';

export default function NavBar({ user }) {

    //CustomHook controla todo lo relacionado a cambio de perfil (usuario e imagen)
    const { showPerfilModal } = useChangePerfil()
    
    //información del usuario en sesión
    let { username, avatarURL } = user 

    return (
        <nav className='navbar flex justify-center bg-base-300'>
            <div className='nav-container w-[98%] border border-gray-400 rounded-md shadow-lg relative'>

                {/* Circulo con imagen de perfil es un btn que despliega <ChangePerfil />  */}
                <Avatar avatar={avatarURL} />

                {/* Modal para cambiar de perfil (usuario e imagen) */}
                { showPerfilModal && <ChangePerfil />}

                {/* Barra de navegación */}
                <Navigation username={username} />
            </div>
        </nav>
    )
}