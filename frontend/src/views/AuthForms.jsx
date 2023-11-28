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
            container w-[90%] max-w-[50rem] rounded-md ring-2
            ${theme === 'light' ? ' ring-gray-800/75': ' ring-gray-100/10 shadow-xl'}
            `}>
                <LoginForm />
            </div>
        </div>
    ) 

}
        