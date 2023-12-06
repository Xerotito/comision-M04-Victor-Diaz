/**
 * Componente que tiene las interacciones, si el usuario es el autor del post podrá ver botones para editar o eliminar el post,
 * también tiene un botón de comentarios que muestra la cantidad que hay en el post, este botón es visible por todos pero solo accesible a los usuarios logueados
 */

import { Icon } from '@iconify/react';
import { userStore } from '../../store';
import { ControlButtons } from '../buttons';



export default function ActionsPost({autorID, idPost}) {

    const { user } = userStore()

    return (
        <div className='border-t p-3 border-[1px_solid_#ccc] flex items-center justify-between'>
            {user.uid === autorID && <ControlButtons idPost={idPost}/>}  
            <div className='comments-container flex items-center ml-auto'>
                <span className='font-[bebas] mr-4'>0 comentarios</span>
                <button className=''><Icon icon='mdi:comments-outline' width={32} /></button>
            </div>
        </div>
    )
}

