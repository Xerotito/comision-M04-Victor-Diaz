/**
 * Un store que almacena las acciones (dispatch) de autentificación de usuarios (registro y login), 
 * realiza las request al backend y luego almacena en el store global los datos del usuario en sesión (userStore) 
 * los cuales pueden ser accedidos de cualquier componente que se necesite
*/

import { userStore } from '../store'
import requestApi from '../api/requestApi'


export default function useAuthStore() {
    const { saveUser, onChecking, onLogout } = userStore()

    //VALIDACIÓN DE USUARIO (Usa validación de token)
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
        }catch(err){
            console.log(err)
            return logout()
        }
    }
    
    //VALIDACIÓN DE TOKEN
    const validateToken = async () => {
        try {
            const response = await requestApi.get('/user/validateToken')
            if (response.status === 200 ) return response.data
        } catch (err) {
            if (err.request.status === 401) return { ok: false }         
        }
    }

    //LOGIN & REGISTER (También se utiliza al cambiar nombre de usuario o imagen de perfil)
    const startLogin = (userData, token) => {
        onChecking()
        saveUser(userData)
        localStorage.setItem('token', token)
    }

    //LOGOUT
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