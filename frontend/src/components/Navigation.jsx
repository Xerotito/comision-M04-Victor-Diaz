/* Componente dentro de la barra de navegación, cuenta con el nombre de usuario y los links de navegación */
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Navigation({ username }) {

    const navigate = useNavigate()
    
    return (
        <div className='flex items-center w-full'>
            <h2 className='hidden sm:btn sm:btn-ghost text-base sm:text-xl ml-14 pointer-events-none '>{username}</h2>
            <div>
                <button className='flex items-center btn btn-sm btn-success ml-4 sm:ml-1' onClick={()=> navigate('/createPost')} >
                    <Icon icon="mdi:add-bold" color="green" className='text-2xl' />
                    <span>Crear post</span>
                </button>
            </div>
        </div>
    )
}