export default function ChangePerfil() {
    return (
        <div className='card w-64 sm:w-96 bg-base-100 shadow-xl absolute z-10 left-10 sm:left-[4.5rem]'>
            <form className='card-body p-4'>

            <label>Usuario</label>
                <input
                    type='text'
                    placeholder='Cambiar nombre de usuario'
                    className='input input-sm input-bordered input-info w-full max-w-xs'
                />

                <label>Avatar</label>
                <input
                    type='text'
                    placeholder='Ingrese una URL de imagen'
                    className='input input-sm input-bordered input-success w-full max-w-xs'
                />

            </form>
        </div>
    )
}