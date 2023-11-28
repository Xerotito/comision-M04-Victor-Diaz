import { Route,Routes } from 'react-router-dom'
import { AuthForms, Posteos,  } from '../views'


export default function AppRouter() {
    return (
        <Routes>
            <Route path='/*' element={<Posteos />} />
            <Route path='/login' element={<AuthForms />} />
            <Route path='/register' element={<AuthForms />}  />
        </Routes>
    )
}
