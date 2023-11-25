/**
 * Custom hook que se encarga de cambiar de tema dark a light y almacenarlo en el localStorage
 */

import { useEffect, useState } from 'react'

export default function useChangeTheme() {

    //si en localStorage se encuentra theme almacenado lo toma y lo setea en el estado, si no existe lo setea en light.
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    //Carga el tema al entrar a la pagina desde el localStorage y también cuando cambia el estado
    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.querySelector('html').setAttribute('data-theme', theme)
    }, [theme])
    

    //Alterna entre el estado (theme) al hacer click en el botón
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return { theme, toggleTheme }

}

