/* Barra de navegación se comparte en todas las vistas */

import { Link } from 'react-router-dom'
import ChangeTheme from './ChangeTheme'
import useChangeTheme from '../hooks/useChangeTheme'

export default function Navbar() {

    //CustomHook que se encarga de alternar entre tema dark/light    
    const { theme, toggleTheme } = useChangeTheme()

    const user = false

    return (
        <nav className={`
        navbar h-[100px]
        md:flex md:justify-center
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
                <span className={`
                font-mono font-extrabold italic text-base-content ml-1 mt-2 hidden sm:block sm:text-xs md:text-sm p-[2px]
                ${theme === 'light' ? 'bg-slate-400/60' : 'bg-gray-800/60'}
                `}
                >Compartiendo viajes con amigos
                </span>
            </div>
            <div className='
            container_buttons 
            absolute right-0 mr-10
            '>   
            <button className='btn text-xl font-mono mr-6'><Link to='/login'>Login</Link></button>
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