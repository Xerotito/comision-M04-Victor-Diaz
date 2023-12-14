import { useChangePerfil } from '../../hooks'
import ChangePerfil from '../ChangePerfil'

export default function Avatar({ avatar}) {

    //CustomHook controla todo lo relacionado a cambio de perfil (usuario e imagen)
    const { togglePerfilModal,setChangePerfil } = useChangePerfil()

    const handleClick = () => {
        togglePerfilModal()
    }
    return (
        <>
            <button className='avatar absolute left-[-1rem]' onClick={ handleClick }>
                <div className='w-12 sm:w-20 rounded-full border-2'>
                    <img src={avatar}  />
                </div>
            </button>
        </>
    )
}
