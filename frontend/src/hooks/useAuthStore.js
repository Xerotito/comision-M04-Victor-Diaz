/**
 * CustomHook o store que almacena las funciones de autentificación. Validación y seteo de token
 * registro login y logout de usuario, también obtiene datos de la BD si el usuario esta autenticado
 * Interactúa con el estado global almacenado en userStore()
 */

import { userStore } from '../store'
import requestApi from '../api/requestApi'


export default function useAuthStore() {
    const { saveUser, onChecking, onLogout } = userStore()

    //Validación de usuario mediante token
    const validateUser = async () => {
        onChecking()
        const getToken = localStorage.getItem('token')
        if(!getToken) return logout()              //Si no hay token por las dudas deslogea y limpia todo
        try {
            const validUser = await validateToken() //Comprobamos el token
            if(!validUser.ok) return logout()       //Si expiro o modifico
            saveUser({                              //Si esta ok levantamos el usuario por medio del token
                uid      : validUser.uid,
                username : validUser.username,
                email    : validUser.email,
                avatarURL: validUser.avatarURL,
            })
        }catch(err){ console.log(err) }
    }
    
    //Validación de token
    const validateToken = async () => {
        try {
            const response = await requestApi.get('/user/validateToken')
            if (response.status === 200 ) return response.data
        } catch (err) {
            if (err.request.status === 401) return { ok: false }         
        }
    }

    //Login también se invoca al registrar usuario
    const startLogin = (userData, token) => {
        onChecking()
        saveUser(userData)
        localStorage.setItem('token', token)
    }

    //Logout
    const logout = () => {
        localStorage.removeItem('token') 
        onLogout() //Limpia el estado global
    }

    return {
        logout,
        startLogin,
        validateUser,
    }
}