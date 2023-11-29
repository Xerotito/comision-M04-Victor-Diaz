import { Link } from 'react-router-dom';

export default function LoginForm() {
    return (
        <form className='
        form-control
        w-full
        p-6 bg-content shadow-md 
        flex flex-col
        '>
            <div className='
            bg-neutral text-white rounded-md 
            text-center text-lg font-semibold
            w-[80%] p-1
            absolute top-[-18px] left-[11%]            
            '>
                Login
            </div>
            <p className='text-xs sm:text-base italic text-center my-2 font-thin'>Inicie sesión para crear contenido y poder comentar</p>
            <div className='inputs-container w-full'>
                <label className='label'>
                    <span className='label-text font-semibold'>Email:</span>
                </label>
                <input type='text' className='w-full input input-sm input-bordered '
                />

                <label className='label'>
                    <span className='label-text font-semibold'>Password:</span>
                </label>
                <input type='password' className='w-full input input-sm input-bordered'/>   
            </div>
            <button className='btn btn-sm sm:btn-md btn-info w-24 mt-4'>Enviar</button>
            <p className='mt-2'>¿No tenes cuenta?
                <Link to={'/register'} className='text-lg hover:text-blue-800 ml-2'>
                    Regístrate
                </Link>
            </p>
        </form>
    )
}
