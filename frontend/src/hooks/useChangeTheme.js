/**
 * CustomHook que se encarga de alternar entre tema  dark/light y almacenarlo en el localStorage
 */

import { useEffect, useState } from 'react'

export default function useChangeTheme() {

    //Si en localStorage se encuentra theme almacenado lo setea en el estado, si no existe lo setea en light.
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    //Setea el theme en localStorage y cambiar la etiqueta que cambia el tema en general (elemento html)
    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.querySelector('html').setAttribute('data-theme', theme)
    }, [theme])
    

    //Alterna entre el estado (theme) al hacer click en el botón
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return { theme, toggleTheme }

}

