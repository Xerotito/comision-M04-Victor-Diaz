import { useChangePerfil } from '../../hooks'
import ChangePerfil from '../ChangePerfil'

export default function Avatar({ avatar}) {

    //CustomHook controla todo lo relacionado a cambio de perfil (usuario e imagen)
    const { togglePerfilModal } = useChangePerfil()

    return (
        <>
            <button className='avatar absolute left-[-1rem]' onClick={ togglePerfilModal }>
                <div className='w-12 sm:w-20 rounded-full border-2'>
                    <img src={avatar}  />
                </div>
            </button>
        </>
    )
}
