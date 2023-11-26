import { Link } from 'react-router-dom'

export default function Log_in_out() {
    return (
        <button className='btn btn-sm font-mono md:btn-md text-md md:text-lg mr-2 md:mr-6'>
            <Link to='/login'>Login</Link>
        </button>
    )
}
