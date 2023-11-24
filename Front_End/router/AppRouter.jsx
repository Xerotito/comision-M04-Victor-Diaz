import { Route,Routes } from 'react-router-dom'
import { Posteos, Login } from '../src/views'


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/*" element={<Posteos />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}
