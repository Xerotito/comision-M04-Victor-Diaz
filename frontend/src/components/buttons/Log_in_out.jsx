/**
 * Botón de login o logout dependiendo de si el usuario esta en sesión
 */

import { useNavigate } from 'react-router-dom'
import { userStore } from '../../store'
import { useAuthStore } from '../../hooks'

export default function Log_in_out() {

    const navigate      = useNavigate()
    const { logout }    = useAuthStore()
    const { userStatus} = userStore()
    return (
        <>
            {userStatus === 'not-authenticated' ? (
                <button
                    className='btn btn-sm font-mono md:btn-md text-md md:text-lg mr-2 md:mr-6'
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            ) : (
                <button
                    className='btn bg-red-600 btn-sm font-mono md:btn-md text-md md:text-lg mr-2 md:mr-6'
                    onClick={logout}
                >
                    Logout
                </button>
            )}
        </>
    )
}
