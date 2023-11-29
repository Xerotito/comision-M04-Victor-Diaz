/**
 * Zustand es un gestor de estado global, comparte sintaxis con Redux como son las acciones, pero a diferencia de este y useContext 
 * de React no se necesita envolver la app en un provider =)
 */

/* Almacena los datos del usuario y token, y como es un estado al cambiar podemos realizar acciones */

import { create } from 'zustand'

const useStore = create((set) => ({
    user : {},
    userStatus:'checking',  // 'authenticated', 'not-authenticated', 'checking'

    onLogin: (userData) => set(state => ({user: userData, userStatus: 'authenticated' })),
    onChecking: () => set( state => ({userStatus: 'checking'}))
}))

export default useStore