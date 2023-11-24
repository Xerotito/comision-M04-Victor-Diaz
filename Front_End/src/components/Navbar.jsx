/* Barra de navegación la usamos se comparte en todas las vistas */
import { Icon } from '@iconify/react' 

export default function Navbar() {


    return (
        <nav className='navbar bg-base-100 md:flex md:justify-center'>
            <div className='
            container-logo 
            grid 
            border border-white sm:border-none 
            '>
                <img src="./logo_white.png" alt="logo de la app" className='w-[120px] md:w-[200px] md:justify-self-center' />
                <span className='font-mono italic text-content ml-1 hidden sm:block sm:text-xs md:text-sm '>Compartiendo viajes con amigos</span>
            </div>
            <div className='
            container-profile_buttons 
            absolute right-0 mr-10
            grid        
            '>
        

            </div>
        </nav>
    )
}
