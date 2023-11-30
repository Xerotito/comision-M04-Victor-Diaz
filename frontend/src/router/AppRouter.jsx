/**
 * Gestiona las rutas de la SPA en base a si hay usuario autenticado o no (protección de rutas)
 */

import { useEffect } from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import { userStore } from '../store'
import { useAuthStore } from '../hooks'
import { AuthForms, Posteos } from '../views'
import { Loader } from '../components/'
import CreatePost from '../views/CreatePost'


export default function AppRouter() {

    const { validateUser }      = useAuthStore()  //Store con acciones de autentificación
    const {  user, userStatus } = userStore()     //Store con el estado global
    useEffect( () => { validateUser() }, [] )   //Fn que carga el usuario en sesión si el token no expiro o se modifico.
    // console.log(userStatus)

    if (userStatus === 'checking') return <Loader/>

    return (
        <Routes>
            {userStatus === 'not-authenticated' ? (
                <>
                    <Route path='/*'        element={<Posteos />} />
                    <Route path='/login'    element={<AuthForms />} />
                    <Route path='/register' element={<AuthForms />} />
                </>
            ) : (
                <>
                    <Route path='/*'          element={<Posteos />} />
                    <Route path='/login'      element={<Navigate to='/' replace={true} />} />
                    <Route path='/register'   element={<Navigate to='/' replace={true} />} />
                    <Route path='/createPost' element={<CreatePost/>}/>
                </>
            )}
        </Routes>
    )
}           