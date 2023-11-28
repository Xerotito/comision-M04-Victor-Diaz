export default function LoginForm() {
    return (
        <form
            className='
            form-control
            w-full
            p-6 bg-content rounded-md shadow-md 
            flex flex-col
            '
            >
            <div className='bg-neutral text-white rounded-md text-center text-2xl font-semibold'>
                Login
            </div>
            <p className='italic text-center my-2 font-thin'>Inicie sesión para crear contenido y poder comentar</p>
            <div className='form-control w-full'>
                <label className='label'>
                    <span className='label-text font-semibold'>Email:</span>
                </label>
                <input
                    type='text'
                    className='w-full input input-sm input-bordered '
                />
                <label className='label'>
                    <span className='label-text font-semibold'>Password:</span>
                </label>
                <input
                    type='text'
                    className='w-full input input-sm input-bordered '
                />
            </div>
        </form>

    )
}
