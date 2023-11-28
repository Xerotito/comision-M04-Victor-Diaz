/**
 * Hook personalizado que maneja los formularios de autentificación (register y login),
 * realiza una petición al endpoint (register o login), retorna errores y si todo esta ok, 
 * llama a la función startLogin() que a su vez setea los datos en el storeGlobal
 * sirve para ambos ya que si un registro de usuario es exitoso, realizaremos un auto login.
 */

import { useState } from 'react';
import requestApi from '../api/requestApi' //Custom config de axios para realizar dataFetching
import getInputsValues from '../libs/getInputsValues';

export default function useAuthForm (form = {}, url = '') {
    //Estado que sirve para visualizar el password de un input type password
    const [passwordVisible, setPasswordVisible] = useState(false)
    const togglePasswordVisibility = () =>
        setPasswordVisible((change) => !change)

    //Estado para mostrar alerts en el form
    const [error, setError] = useState({})

    //Fn que realiza la request al endPoint
    const registerUser = async (e) => {
        e.preventDefault()
        //Fn que extrae los valors de los inputs
        const values = getInputsValues(form)
        try {
            const response = await requestApi.post(url, values)
            const { data } = response
            if(response.status === 201) {
                console.log('usuario registrado')
                }
        }catch(err){
            if(err.response) { console.log(err.response)}
            else {console.log(err)}
        }
    }

    return {
        registerUser,
        passwordVisible,
        togglePasswordVisibility,
    }
}