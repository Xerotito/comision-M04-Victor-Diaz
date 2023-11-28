import { useNavigate } from 'react-router-dom'

export default function Log_in_out() {

    const navigate = useNavigate()

    return (
        <button 
        className='btn btn-sm font-mono md:btn-md text-md md:text-lg mr-2 md:mr-6'
        onClick={()=> navigate('/login') }>
            Login
        </button>
    )
}
