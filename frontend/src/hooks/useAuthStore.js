/**
 * CustomHook o store que almacena las funciones de autentificación validación y seteo de token
 * registro login y logout de usuario
 * Interactúa con el estado global almacenado en userStore()
 */

import {userStore} from '../store'

export default function useAuthStore() {

    const { onLogin } = userStore()

    //Login también se invoca al registrar usuario
    const startLogin = (userData,token) => {
        onLogin(userData)
        localStorage.setItem('token', token)    
    }




    return {
        startLogin
    }
}