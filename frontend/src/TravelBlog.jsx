
import DefaultLayout from './layouts/DefaultLayout' //Componente superior un navbar que sera visto en todas las rutas
import { AppRouter } from './router'                //La entrada de la aplicación define las rutas y protección en base a si hay un usuario logueado

export default function TravelBlog() {
    return (
        <DefaultLayout>
            <AppRouter/>
        </DefaultLayout>
    )
}