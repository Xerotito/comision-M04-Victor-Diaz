/**
 * CustomHook que maneja los formularios de autentificación (register y login), gestiona la creación y login de usuarios
 * luego interactúa con el estado global para guardar los datos.
 */

import { useState } from 'react';
import requestApi from '../../api/requestApi'              //Custom config de axios para realizar dataFetching
import getInputsValues from '../../libs/getInputsValues';  //fn que extra los valores de los inputs
import { useAuthStore } from '..'                 //Store con funciones de autentificación y guardado de estadoGlobal
import { alertStore } from '../../store';

export default function useAuthForm (form = {}, url = '') {    

    const { startLogin } = useAuthStore()

    //Manejo de errores con el componente global <Alert />
    const { setAlert } = alertStore()

    //Estado que sirve para visualizar el password de un input type password
    const [passwordVisible, setPasswordVisible] = useState(false)
    const togglePasswordVisibility = () => setPasswordVisible((change) => !change)

    //Estado para mostrar alerts en el form
    const [error, setError] = useState({})

    //Fn que realiza la request al endPoint
    const actionForm = async (e) => {
        e.preventDefault()
        //Fn que extrae los valors de los inputs
        const values = getInputsValues(form)    
        try {
            //Realizamos request al endpoint de loguear usuarios
            const response = await requestApi.post(url, values)
            const { data } = response
            //Si el usuario fue registrado en la bd, realizamos un auto logeo
            if (response.status === 201 ) {
                startLogin(data.user,data.token)
            }
        }catch(err){
            if (err?.response) setAlert({
                alert  : true,
                message: err.response.data,
                type   : 'error',
            })
        }
    }

    return {
        actionForm,
        passwordVisible,
        togglePasswordVisibility,
    }
}