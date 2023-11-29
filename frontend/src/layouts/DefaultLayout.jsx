/**
 * Un layout es un componente de orden superior se encontrara disponible en todas las vistas
 * recibe como prop children que son las vistas y sus componentes
 * debe utilizarse como un provider envolviendo los componentes que queremos que lo utilicen.
 */

import { Header, NavBar } from '../components'
import { userStore } from '../store'


export default function DefaultLayout({ children }) {   

    //Estado global datos del usuario en sesión
    const { user, userStatus } = userStore() 

    return (
        <>
            <Header />
            {/* Navbar solo disponible si hay usuario en sesión */}
            {userStatus === 'authenticated' && <NavBar user={user} />}             
            <main>{children}</main>
        </>
    )
}
