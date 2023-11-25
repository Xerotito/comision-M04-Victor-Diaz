/* Barra de navegación se comparte en todas las vistas */

import ChangeTheme from './ChangeTheme'
import useChangeTheme from '../hooks/useChangeTheme'

export default function Navbar() {

    //CustomHook que se encarga de alternar entre tema dark/light    
    const { theme, toggleTheme } = useChangeTheme()

    return (
        <nav className={`
        navbar md:flex md:justify-center h-[100px]
        ${theme === 'light' ? 'nav_light'  : 'nav_dark'}
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
                <span className='font-mono font-extrabold italic text-base-content ml-1 mt-2 hidden sm:block sm:text-xs md:text-sm 
                bg-cyan-200/40 p-[2px]'>Compartiendo viajes con amigos</span>
            </div>
            <div className='
            container-profile_buttons 
            absolute right-0 mr-10
            '>   
            <button className='btn text-xl font-mono mr-6'>Login</button>
            <button 
            className='btn rounded-full w-12'
            onClick={toggleTheme}>
                <ChangeTheme theme={theme}/>
            </button>
            </div>
        </nav>
    )
}


// container-logo 
// grid 
// border border-white sm:border-none 