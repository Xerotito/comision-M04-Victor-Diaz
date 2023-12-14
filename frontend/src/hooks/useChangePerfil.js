/** 
 * CustomHook que se encarga de lo relacionado con cambiar username e imagen de perfil
 */

import requestApi from '../api/requestApi'
import { userStore } from '../store'
import { useAuthStore } from '../hooks'

export default function useChangePerfil() {
    //Muestra u oculta el modal desplegable para editar perfil de usuario
    const { user, showPerfilModal, togglePerfilModal, setChangePerfil } = userStore()
    const { startLogin } = useAuthStore()

    const sendEditComment = async (e) => {
        e.preventDefault()
        //Obtenemos los datos del formulario
        const formData = new FormData(e.target)
        const username = formData.get('username')  //Extra el value de los inputs
        const imageURL = formData.get('imageURL')
        const newPerfil = { id: user.uid, username, imageURL }
        //Si los datos viene vacíos los rellenamos con los que ya existían
        if (newPerfil.username === '') newPerfil.username = user.username
        if (newPerfil.imageURL === '') newPerfil.imageURL = user.avatarURL

        //Realizamos la request al endPoint
        try {            
            const { data } = await requestApi.put('/perfil/changePerfil', newPerfil)
            //Si todo sale bien realizamos un logeo interno, esto renueva el token para tener los permisos
            startLogin(data.user, data.token)
            togglePerfilModal() //Cierra el modal de perfil
        } catch (err) {
            console.log('Hubo un error al intentar actualizar el perfil:', err)
        }
    }      

    return { 
        sendEditComment,
        setChangePerfil,
        showPerfilModal, 
        togglePerfilModal, 
        user ,
    }
}