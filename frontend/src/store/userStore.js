/**
 * Zustand es un gestor de estado global, comparte sintaxis con Redux como son las acciones, pero a diferencia de este y useContext 
 * de React no se necesita envolver la app en un provider =)
 */

/* Almacena los datos del usuario y token, y como es un estado al cambiar podemos realizar acciones */

import { create } from 'zustand'

const userStore = create((set) => ({
    user           : {},
    userStatus     : 'not-authenticated',   // 'authenticated', 'not-authenticated', 'checking'
    showPerfilModal: false,

    saveUser         : (userData) => set(state => ({ user: userData, userStatus: 'authenticated' })),
    onChecking       : () => set( state => ({ ...state.user, userStatus: 'checking' })),
    onLogout         : () => set(state => ({ user: {},userStatus: 'not-authenticated' })),
    togglePerfilModal: () => set(state => ({ showPerfilModal: !state.showPerfilModal })),
    
}))

export default userStore