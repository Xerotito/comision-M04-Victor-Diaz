import { Route,Routes } from 'react-router-dom'
import { AuthForms, Posteos,  } from '../views'
import { userStore } from '../store'


export default function AppRouter() {

    const {user} = userStore()
    console.log(user)

    return (
        <Routes>
            <Route path='/*' element={<Posteos />} />
            <Route path='/login' element={<AuthForms />} />
            <Route path='/register' element={<AuthForms />}  />
        </Routes>
    )
}
