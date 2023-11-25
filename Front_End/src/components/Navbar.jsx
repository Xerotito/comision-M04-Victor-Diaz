/* Barra de navegación la usamos se comparte en todas las vistas */

import { userStore } from '../store'
import ChangeTheme from './ChangeTheme'

export default function Navbar() {

    /**
     * Traemos el theme fijado por el usuario del globalStore, en base a esto cambiaremos los estilos
     * del logo en el navbar ya que es una imagen
     */
    const { theme } = userStore()


    return (
        <nav className={`
        navbar md:flex md:justify-center
        ${theme === 'light' ? 'nav_light' : 'nav_dark'}
        `}>
            <div className={`
            container-logo 
            grid p-1 sm:border-none
            ${ theme === 'light' ? 'border-2 border-black' : 'border-2 border-white' }
            `}>
                <img 
                className='w-[120px] md:w-[200px] md:justify-self-center' 
                src={theme === 'light' ? '/logo_black.png' : '/logo_white.png'} 
                alt="logo de la app" />
                <span className='font-mono font-extrabold italic text-base-content  ml-1 mt-2 hidden sm:block sm:text-xs md:text-sm 
                bg-cyan-200/40 p-[2px]'>Compartiendo viajes con amigos</span>
            </div>
            <div className='
            container-profile_buttons 
            absolute right-0 mr-10
            '>   
            <button className='btn text-xl font-mono mr-6'>Login</button>
            <button className='btn rounded-full w-12'><ChangeTheme/></button>

            </div>
        </nav>
    )
}


// container-logo 
// grid 
// border border-white sm:border-none 