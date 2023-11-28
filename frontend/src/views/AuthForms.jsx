import {  useLocation  } from 'react-router-dom'
import { LoginForm, RegisterForm } from '../components/forms'
import { useChangeTheme } from '../hooks'



export default function AuthForms() {
    
    //CustomHook que se encarga de alternar entre tema dark/light    
    const { theme } = useChangeTheme()
    const route = useLocation().pathname

    return (
        <div className='view w-full h-full flex justify-center'>
            <div className={`
            container w-[90%] max-w-[50rem] mt-[8%] rounded-md ring-2
            ${theme === 'light'? 'ring-gray-700/50': 'ring-gray-200/10 shadow-xl'}
            relative
            `}
            >
                {route === '/login' ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    ) 

}
        