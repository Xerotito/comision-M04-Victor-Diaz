
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useAuthForm } from '../../hooks'
import { Alert } from '../alerts'
import { alertStore } from '../../store'


export default function RegisterForm() {
    //Manejo de errores
    const { alert, message } = alertStore()

    //Usaremos useRef para manejar los valores de los inputs 
    const formRegister = useRef(null)

    /**
     * Custom hook que se encarga de los formularios de autentificación, realiza validaciones de campos
     * y si todo esta ok almacena el token de sesión en el storage.
     * Recibe por parámetro la referencia del formulario y la url de la petición
     */
    const { passwordVisible, togglePasswordVisibility, actionForm } = useAuthForm(
        formRegister,
        '/user/register',
    )
    
    return (
        <form 
        onSubmit={actionForm}
        ref    = {formRegister}
        className='
        form-control
        w-full
        p-6 bg-content shadow-md 
        flex flex-col
        '
        >
            <div className='
            bg-neutral text-white rounded-md 
            text-center text-lg font-semibold
            w-[80%] p-1
            absolute top-[-18px] left-[11%]            
            '
            >
                Registro
            </div>
            <div className='inputs-container w-full'>
                <label className='label'>
                    <span className='label-text font-semibold'>Nombre de usuario:</span>
                </label>
                <input type='text' name='username' className='w-full input input-sm input-bordered' minLength={3} maxLength={20} required/>
                <label className='label'>
                    <span className='label-text font-semibold'>Email:</span>
                </label>
                <input type='email' name='email' className='w-full input input-sm input-bordered' required/>
                <label className='label'>
                    <span className='label-text font-semibold'>Password:</span>
                </label>
                <div className='password-container relative'>
                    <button
                        type='button'
                        className='absolute right-0'
                        onClick={togglePasswordVisibility}
                    >
                        <Icon
                            icon='zondicons:view-show'
                            color='gray'
                            width={30}
                            className='bg-neutral-content rounded-sm'
                        />
                    </button>
                    <input type={passwordVisible ? 'text' : 'password'} name='password' className='w-full input input-sm input-bordered'
                    minLength={6} required/>
                </div>
            </div>
            <button type='submit' className='btn btn-sm sm:btn-md btn-info w-24 mt-4'> Enviar </button>
            <p className='sm:mt-2'> ¿Ya tienes cuenta?
                <Link to={'/login'} className='text-lg hover:text-blue-800 ml-2'>Inicia Sesión </Link>
            </p>
            <div className='alert-container w-full justify-self-center z-10'>
                {alert && <Alert message={message}/>}
            </div>         
        </form>
        
    )
}

