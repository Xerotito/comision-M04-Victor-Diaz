
import DefaultLayout from './layouts/DefaultLayout'
 //Componente superior un navbar que sera visto en todas las rutas
import { AppRouter } from './router'

export default function TravelBlog() {
    return (
        <DefaultLayout>
            <AppRouter/>
        </DefaultLayout>
    )
}