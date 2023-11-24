import AppRouter from '../router/AppRouter'
import DefaultLayout from './layouts/DefaultLayout' //Componente superior un navbar que sera visto en todas las rutas

export default function TravelBlog() {

    const theme = document.getElementById("html").getAttribute('data-theme')
    console.log(theme)

    return (
        <DefaultLayout>
            <AppRouter/>
        </DefaultLayout>
    )
}