/**
 * Zustand es un gestor de estado global, comparte sintaxis con Redux como son las acciones, pero a diferencia de este y useContext 
 * de React no se necesita envolver la app en un provider =)
 */

import { create } from 'zustand'

//Accedemos al tema que a seleccionado el usuario y lo guardamos en el store
const theme = document.querySelector('html').getAttribute('data-theme')

const useStore = create(set=>({

}))

export default useStore