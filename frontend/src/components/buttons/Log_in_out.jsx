/**
 * Botón de login o logout dependiendo de si el usuario esta en sesión
 */

import { useNavigate } from 'react-router-dom'
import { userStore } from '../../store'

export default function Log_in_out() {

    const navigate = useNavigate()
    const { userStatus, onLogout } = userStore()

    return (
        <button 
        className='btn btn-sm font-mono md:btn-md text-md md:text-lg mr-2 md:mr-6'
        onClick={()=> navigate('/login') }>
            Login
        </button>
    )
}
