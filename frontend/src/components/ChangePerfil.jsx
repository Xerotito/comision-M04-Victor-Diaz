/**
 * Modal que aparare cuando se clickea en el circulo del avatar, permite cambiar
 * nombre de usuario e imagen de perfil
 */

import { useChangePerfil } from '../hooks'

export default function ChangePerfil() {

    const { user, sendEditComment } =  useChangePerfil()

    return (
        <div className='
        card w-64 sm:w-96 bg-base-100 shadow-xl 
        absolute z-10 left-10 sm:left-[4.5rem] top-[-4rem]
        '>
            <form className='card-body p-5' onSubmit={sendEditComment}>

            <label>Username: <span className='ml-1'>{user?.username}</span></label>
                <input
                    name        = 'username'
                    type        = 'text'
                    placeholder = 'Cambiar nombre de usuario'
                    className   = 'input input-sm input-bordered input-info w-full'
                />

                <label>Avatar</label>
                <input
                    name        = 'imageURL'
                    type        = 'text'
                    placeholder = 'Ingrese una URL de imagen'
                    className   = 'input input-sm input-bordered input-success w-full'
                />
                <div className='flex justify-center mt-2'>
                    <button className="btn btn-sm sm:btn-md btn-success">Guardar</button>
                </div>

            </form>
        </div>
    )
}