/**
 * Un layout es un componente de orden superior se encontrara disponible en todas las vistas
 * recibe como prop children que son las vistas y sus componentes
 * debe utilizarse como un provider envolviendo los componentes que queremos que lo utilicen.
 */

import Navbar from '../components/Navbar';

export default function DefaultLayout({ children }) {
    return (
        <main>
            <Navbar/>
            {children}
        </main>
    )
}
