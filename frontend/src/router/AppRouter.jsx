import { Route,Routes } from 'react-router-dom'
import { Posteos, Login} from '../views'


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/*" element={<Posteos />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}
