/**
 * Un layout es un componente de orden superior se encontrara disponible en todas las vistas
 * recibe como prop children que son las vistas y sus componentes
 * debe utilizarse como un provider envolviendo los componentes que queremos que lo utilicen.
 */

import { Header } from '../components'

export default function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}
