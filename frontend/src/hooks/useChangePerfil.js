/** 
 * CustomHook que se encarga de lo relacionado con cambiar username e imagen de perfil
 */

import { userStore } from '../store'

export default function useChangePerfil() {

    const { user } = userStore()
    console.log(user)
    const { showPerfilModal, togglePerfilModal } = userStore()
    


    //Muestra u oculta el modal desplegable para editar perfil de usuario

    return { 
        showPerfilModal, 
        togglePerfilModal, 
        user 
    }
}