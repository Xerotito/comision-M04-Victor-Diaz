/**
 * Componente que contiene los botones de interacciones [me gusta, like y cantidad de comentarios ]
 */

import { Icon } from '@iconify/react';

export default function ActionsPost() {
    return (
        <div className='border-t p-3 border-[1px_solid_#ccc] flex items-center justify-end'>
            <span className='font-[bebas] mr-4'>0 comentarios</span>
            <button className=''><Icon icon='mdi:comments-outline' width={32} /></button>

        </div>
    )
}